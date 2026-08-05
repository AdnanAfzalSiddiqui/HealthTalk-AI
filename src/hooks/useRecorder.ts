"use client";

import { useState } from "react";

export default function useRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const startRecording = () => {
    console.log("Recording started...");
    setIsRecording(true);
  };

  const stopRecording = () => {
    console.log("Recording stopped.");
    setIsRecording(false);

    // Placeholder for recorded audio URL
    setAudioUrl("/sample-audio.mp3");
  };

  const resetRecording = () => {
    setAudioUrl(null);
    setIsRecording(false);
  };

  return {
    isRecording,
    audioUrl,
    startRecording,
    stopRecording,
    resetRecording,
  };
}
