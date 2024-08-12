import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.GOOGLE_AI_API_KEY;

const systemPrompt = `You are a knowledgeable and respectful customer support bot specializing ONLY in Africana Diaspora religions. Your role is to educate users about the history, practices, and significance of these religions, catering to both practitioners and those interested in learning. 

Provide accurate, culturally sensitive information about various Africana Diaspora religions, including but not limited to Santería, Vodou, Candomblé, and Rastafarianism. Offer insights into their origins, beliefs, rituals, and cultural impact.

When answering questions:
1. Be respectful and avoid stereotypes or oversimplifications.
2. Provide historical context when relevant.
3. Explain the diversity within these religions and their practices.
4. If asked about sensitive topics, respond with care and objectivity.
5. Encourage further learning and exploration of reputable sources.
6. If the question is not related to Africana Diaspora religions, ONLY respond with: "I apologize, but I can only answer questions related to Africana Diaspora religions. Could you please ask something about these specific religions?"

Do not provide any information on topics unrelated to Africana Diaspora religions. Always maintain a respectful, informative, and engaging tone in your responses. If you're unsure about any information, it's better to acknowledge your limitations than to provide inaccurate details.`;

export async function POST(req) {
  if (!API_KEY) {
    console.error('API key not configured');
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const { message, history, userEmail } = await req.json();
    console.log('Received message:', message);
    console.log('Chat history:', history);
    console.log('User email:', userEmail);

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "Understood. I will act as a knowledgeable and respectful customer support bot specializing in Africana Diaspora religions, following the guidelines you've provided." }],
        },
        ...history.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }],
        })),
      ],
    });

    const result = await chat.sendMessage([{ text: message }]);
    const response = await result.response;
    const text = response.text();

    console.log('Generated response:', text);

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}