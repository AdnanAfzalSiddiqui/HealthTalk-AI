"use client";

import { useState } from "react";

type Message = {
  sender: "user" | "assistant";
  text: string;
};

export default function ChatWindow() {
  const [messages] = useState<Message[]>([
    {
      sender: "assistant",
      text: "Hello! I am HealthTalk AI. How can I help you today?",
    },
  ]);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        marginTop: "20px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Consultation Chat</h2>

      {messages.map((message, index) => (
        <div
          key={index}
          style={{
            marginBottom: "15px",
            padding: "12px",
            borderRadius: "10px",
            backgroundColor:
              message.sender === "assistant"
                ? "#e0f2fe"
                : "#dcfce7",
          }}
        >
          <strong>
            {message.sender === "assistant"
              ? "HealthTalk AI"
              : "You"}
          </strong>

          <p style={{ marginTop: "6px" }}>{message.text}</p>
        </div>
      ))}
    </div>
  );
}
