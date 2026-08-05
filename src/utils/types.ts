/**
 * Represents a chat message exchanged between the user
 * and HealthTalk AI.
 */
export interface ChatMessage {
  id: number;
  sender: "user" | "assistant";
  message: string;
  timestamp: string;
}

/**
 * Represents the state of a voice recording session.
 */
export interface RecordingState {
  isRecording: boolean;
  audioUrl: string | null;
}

/**
 * Represents the response returned by AssemblyAI.
 */
export interface TranscriptResponse {
  id: string;
  status: string;
  text: string;
}

/**
 * Represents a generic medical information response.
 */
export interface MedicalResponse {
  title: string;
  description: string;
}

/**
 * Represents a text-to-speech response.
 */
export interface SpeechResponse {
  audioContent: string;
}
