import axios from "axios";

const ASSEMBLYAI_API_KEY = process.env.ASSEMBLYAI_API_KEY;

const assemblyAI = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    Authorization: ASSEMBLYAI_API_KEY || "",
    "Content-Type": "application/json",
  },
});

/**
 * Upload audio to AssemblyAI.
 * This function is a placeholder demonstrating
 * where audio upload logic would be implemented.
 */
export async function uploadAudio(audioUrl: string) {
  try {
    const response = await assemblyAI.post("/transcript", {
      audio_url: audioUrl,
    });

    return response.data;
  } catch (error) {
    console.error("AssemblyAI Upload Error:", error);
    throw error;
  }
}

/**
 * Retrieve transcript status.
 */
export async function getTranscript(transcriptId: string) {
  try {
    const response = await assemblyAI.get(`/transcript/${transcriptId}`);

    return response.data;
  } catch (error) {
    console.error("AssemblyAI Transcript Error:", error);
    throw error;
  }
}
