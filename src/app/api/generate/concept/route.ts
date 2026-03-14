import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/openai';
import { compilePrompt } from '@/lib/promptCompiler';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const compiledPrompt = compilePrompt(body);

        if (!process.env.OPENAI_API_KEY) {
            console.error("Missing OpenAI API Key");
            return NextResponse.json(
                { error: "OpenAI API Key is not configured." },
                { status: 500 }
            );
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini", // Using gpt-4o-mini instead of gpt-4.1 which doesn't exist
            messages: [
                {
                    role: "system",
                    content: "You are a senior product designer. Return your response in JSON format. The JSON must contain three keys: 'layoutStructure' (an array of strings representing the main sections), 'components' (an array of strings representing the React components needed), and 'designNotes' (a string with professional design insights)."
                },
                {
                    role: "user",
                    content: `Generate a structured UI concept based on the compiled prompt:\n\n${compiledPrompt}`
                }
            ],
            response_format: { type: "json_object" },
        });

        const resultText = completion.choices[0]?.message?.content;

        if (!resultText) {
            throw new Error("No response content from OpenAI");
        }

        const conceptData = JSON.parse(resultText);

        return NextResponse.json({
            compiledPrompt,
            layoutStructure: conceptData.layoutStructure || [],
            components: conceptData.components || [],
            designNotes: conceptData.designNotes || "",
        });

    } catch (error) {
        console.error('Error generating concept:', error);
        return NextResponse.json(
            { message: "Concept generation failed" },
            { status: 500 }
        );
    }
}
