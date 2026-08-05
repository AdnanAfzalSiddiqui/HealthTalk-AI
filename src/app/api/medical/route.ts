import { NextResponse } from "next/server";
import { getMedicalInformation } from "@/services/medicalAPI";

export async function POST(request: Request) {
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json(
        { error: "Medical query is required." },
        { status: 400 }
      );
    }

    const medicalResponse = await getMedicalInformation(query);

    return NextResponse.json(medicalResponse);
  } catch (error) {
    console.error("Medical API Route Error:", error);

    return NextResponse.json(
      {
        error: "Unable to retrieve medical information.",
      },
      {
        status: 500,
      }
    );
  }
}
