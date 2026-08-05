import { NextResponse } from "next/server";
import { uploadAudio } from "@/services/assemblyAI";

export async function POST(request: Request) {
  try {
    const { audioUrl } = await request.json();

    if (!audioUrl) {
      return NextResponse.json(
        { error: "Audio URL is required." },
        { status: 400 }
      );
    }

    const transcript = await uploadAudio(audioUrl);

    return NextResponse.json(transcript);
  } catch (error) {
    console.error("Speech API Error:", error);

    return NextResponse.json(
      {
        error: "Unable to process speech request.",
      },
      {
        status: 500,
      }
    );
  }
}
