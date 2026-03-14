import OpenAI from 'openai';

// Ensure the API key is available
if (!process.env.OPENAI_API_KEY) {
    console.warn("OPENAI_API_KEY is not set in the environment variables.");
}

export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
