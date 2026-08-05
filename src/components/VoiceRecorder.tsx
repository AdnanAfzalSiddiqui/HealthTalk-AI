"use client";

import useRecorder from "@/hooks/useRecorder";

export default function VoiceRecorder() {
  const {
    isRecording,
    startRecording,
    stopRecording,
    resetRecording,
    audioUrl,
  } = useRecorder();

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        marginTop: "30px",
      }}
    >
      <h2>Voice Consultation</h2>

      <p style={{ margin: "15px 0" }}>
        {isRecording
          ? "Listening..."
          : "Press Start Recording to begin your consultation."}
      </p>

      {!isRecording ? (
        <button
          onClick={startRecording}
          style={{
            padding: "10px 18px",
            backgroundColor: "#2563eb",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          Start Recording
        </button>
      ) : (
        <button
          onClick={stopRecording}
          style={{
            padding: "10px 18px",
            backgroundColor: "#dc2626",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          Stop Recording
        </button>
      )}

      {audioUrl && (
        <div style={{ marginTop: "20px" }}>
          <p>Recording completed successfully.</p>

          <button
            onClick={resetRecording}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              borderRadius: "8px",
              backgroundColor: "#475569",
              color: "#fff",
            }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
