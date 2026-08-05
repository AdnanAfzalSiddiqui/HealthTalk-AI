"use client";

import { useState } from "react";

export default function VoiceRecorder() {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
    console.log("Recording started...");
  };

  const stopRecording = () => {
    setIsRecording(false);
    console.log("Recording stopped.");
  };

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        textAlign: "center",
        margin: "20px 0",
      }}
    >
      <h2>Voice Consultation</h2>

      <p>
        {isRecording
          ? "Listening to your voice..."
          : "Click the button below to begin speaking."}
      </p>

      {isRecording ? (
        <button
          onClick={stopRecording}
          style={{
            marginTop: "15px",
            padding: "12px 24px",
            backgroundColor: "#dc2626",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          Stop Recording
        </button>
      ) : (
        <button
          onClick={startRecording}
          style={{
            marginTop: "15px",
            padding: "12px 24px",
            backgroundColor: "#2563eb",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          Start Recording
        </button>
      )}
    </div>
  );
}
