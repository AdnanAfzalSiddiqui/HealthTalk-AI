"use client";

import { useState } from "react";
import MessageBubble from "./MessageBubble";
import type { ChatMessage } from "@/utils/types";

export default function ChatWindow() {
  const [messages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "assistant",
      message:
        "Hello! I am HealthTalk AI. Please describe your symptoms or healthcare question.",
      timestamp: new Date().toLocaleString(),
    },
  ]);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        marginTop: "24px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        Consultation Chat
      </h2>

      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          sender={msg.sender}
          message={msg.message}
        />
      ))}
    </div>
  );
}
