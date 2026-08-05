import axios from "axios";

const GOOGLE_TTS_API_KEY = process.env.GOOGLE_TTS_API_KEY;

const textToSpeechAPI = axios.create({
  baseURL: "https://texttospeech.googleapis.com/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Convert text into speech using Google Text-to-Speech.
 * Returns the API response containing the generated audio.
 */
export async function generateSpeech(text: string) {
  try {
    const response = await textToSpeechAPI.post(
      `/text:synthesize?key=${GOOGLE_TTS_API_KEY}`,
      {
        input: {
          text,
        },
        voice: {
          languageCode: "en-US",
          ssmlGender: "NEUTRAL",
        },
        audioConfig: {
          audioEncoding: "MP3",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Google Text-to-Speech Error:", error);
    throw error;
  }
}
