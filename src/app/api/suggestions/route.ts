import { NextResponse } from 'next/server';
import { openai } from '@/lib/openai';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                { error: "OpenAI API Key is not configured." },
                { status: 500 }
            );
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `You are an AI design assistant generating quick-start prompt suggestions for a UI design workflow tool.
          Return a JSON object containing an array called "suggestions".
          Provide exactly 3 distinct, highly creative, and specific UI design prompt suggestions.
          For each suggestion, include:
          - title: A short, catchy title (e.g., "NFT Marketplace Mobile App", "Zen Meditation Dashboard")
          - description: A brief 1-2 sentence description of the UI, style, and goal.
          - category: One of ["web", "mobile", "dashboard", "poster", "social", "banner"]
          - industry: For example "Crypto", "Health & Wellness", "Fintech", "E-commerce"
          - style: A comma-separated string of distinct style keywords (e.g., "Dark mode, Neon accents, Glassmorphism")`
                }
            ],
            response_format: { type: "json_object" },
            temperature: 0.8, // Add some randomness for diverse suggestions
        });

        const resultText = completion.choices[0]?.message?.content;

        if (!resultText) {
            throw new Error("No response content from OpenAI");
        }

        const data = JSON.parse(resultText);

        return NextResponse.json({
            suggestions: data.suggestions || [],
        });

    } catch (error) {
        console.error('Error generating suggestions:', error);
        return NextResponse.json(
            { message: "Failed to generate suggestions" },
            { status: 500 }
        );
    }
}
