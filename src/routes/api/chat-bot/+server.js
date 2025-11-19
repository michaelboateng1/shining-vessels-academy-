import { GoogleGenAI } from '@google/genai';
import { GEMINI_API_KEY } from '$env/static/private';
import { MCP_Sever_URL } from '$env/static/private';

import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';


export async function POST({request}){
	const body = await request.json();

	const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

	const mcpClient = new Client({
		name: 'shining-vessels-academy',
		version: '1.0.0'
	});

	const transport = new StreamableHTTPClientTransport(MCP_Sever_URL);

	const connect = await mcpClient.connect(transport);

	let {tools} = await mcpClient.listTools();
	let {resources} = await mcpClient.listResources();

	tools = tools.map(tool => {
		return {
			name: tool.name,
			description: tool.description,
			parameters: tool.inputSchema
		}
	});

	const readResource = await mcpClient.readResource({uri: resources[0].uri});


	let prompt = [{ role: 'user', parts: [{ text: `You have access to the following knowledge base:\n\n${readResource.contents[0].text}\n\nUser message:${body}` }] }]; 
	let response = null;

	while(true){
		response = await ai.models.generateContent({
		model: 'gemini-2.5-flash',
		contents: prompt,
		tools: [{ functionDeclarations: tools }]
		});

		const candidate = response.candidates?.[0];
    	const functionCalls = candidate?.content?.parts?.filter(p => p.functionCall);

		if (candidate?.content?.parts?.[0]?.text) {
			return new Response(JSON.stringify({ reply: candidate?.content?.parts?.[0]?.text }), { 
				headers: { 'Content-Type': 'application/json' }
			});
		}


		if (functionCalls && functionCalls.length > 0) {
	
			prompt.push(candidate.content); 
	
			for (const call of functionCalls) {
				const toolName = call.functionCall.name;
				const toolArgs = call.functionCall.args;
				
				const mcpExecutor = tools.find(tool => tool.name === toolName);
				const result = await mcpClient.callTool({ name: toolName, args: toolArgs });
				
				prompt.push({
					role: 'function',
					parts: [{ 
						functionResponse: { 
							name: toolName, 
							response: result 
						} 
					}]
				});
			}
			continue;
		}

		break;
	}


	return new Response(JSON.stringify({ reply: response?.candidates?.[0]?.content?.parts?.[0]?.text }), {
		headers: { 'Content-Type': 'application/json' }
	});
}
