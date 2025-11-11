import { GoogleGenAI } from '@google/genai';
import {GEMINI_API_KEY} from "$env/static/private";


export async function POST({ request }) {
	const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

	const prompt = await request.text();
	console.log('Received prompt:', prompt);

	const response = await ai.models.generateContent({
		model: 'gemini-2.5-flash',
		contents: prompt
	});

	console.log('AI response:', response);

	return new Response(JSON.stringify({ reply: response.text }), {
		headers: { 'Content-Type': 'application/json' }
	});
}
