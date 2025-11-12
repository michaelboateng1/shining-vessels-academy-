import { GoogleGenAI } from '@google/genai';
import {GEMINI_API_KEY} from "$env/static/private";


export async function POST({ request }) {
	const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

	const prompt = await request.text();

	const response = await ai.models.generateContent({
		model: 'gemini-2.5-flash',
		contents: prompt
	});


	return new Response(JSON.stringify({ reply: response.text }), {
		headers: { 'Content-Type': 'application/json' }
	});
}
