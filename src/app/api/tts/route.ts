import { NextResponse } from "next/server";
import { generateSpeech } from "@/services/textToSpeech";

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json(
        {
          error: "Text is required.",
        },
        {
          status: 400,
        }
      );
    }

    const speechResponse = await generateSpeech(text);

    return NextResponse.json(speechResponse);
  } catch (error) {
    console.error("Text-to-Speech API Route Error:", error);

    return NextResponse.json(
      {
        error: "Unable to generate speech.",
      },
      {
        status: 500,
      }
    );
  }
}
