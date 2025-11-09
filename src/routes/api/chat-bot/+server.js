import { GoogleGenAI } from '@google/genai';


export async function POST({ request }) {
	const ai = new GoogleGenAI({ apiKey: 'AIzaSyCYa8Vf9ciPZ5am0ffMmDKY2hPdovFPwug' });

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
