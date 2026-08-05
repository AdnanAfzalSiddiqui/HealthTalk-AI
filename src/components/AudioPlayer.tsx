"use client";

type AudioPlayerProps = {
  audioUrl?: string;
};

export default function AudioPlayer({
  audioUrl,
}: AudioPlayerProps) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        marginTop: "20px",
      }}
    >
      <h2>Voice Response</h2>

      {audioUrl ? (
        <audio controls style={{ width: "100%", marginTop: "12px" }}>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>No voice response available.</p>
      )}
    </div>
  );
}
