type MessageBubbleProps = {
  sender: "user" | "assistant";
  message: string;
};

export default function MessageBubble({
  sender,
  message,
}: MessageBubbleProps) {
  const isUser = sender === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          maxWidth: "70%",
          padding: "12px 16px",
          borderRadius: "12px",
          backgroundColor: isUser ? "#2563eb" : "#e2e8f0",
          color: isUser ? "#ffffff" : "#1e293b",
          lineHeight: "1.5",
        }}
      >
        <strong>{isUser ? "You" : "HealthTalk AI"}</strong>

        <p
          style={{
            marginTop: "6px",
            marginBottom: 0,
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
}
