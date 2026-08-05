import axios from "axios";

const API_NINJAS_API_KEY = process.env.API_NINJAS_API_KEY;

const medicalAPI = axios.create({
  baseURL: "https://api.api-ninjas.com/v1",
  headers: {
    "X-Api-Key": API_NINJAS_API_KEY || "",
    "Content-Type": "application/json",
  },
});

/**
 * Fetch medical information based on a user's query.
 * This service demonstrates how the application would
 * communicate with an external medical information API.
 */
export async function getMedicalInformation(query: string) {
  try {
    const response = await medicalAPI.get("/medical", {
      params: {
        query,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Medical API Error:", error);
    throw error;
  }
}
