import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import VoiceRecorder from "@/components/VoiceRecorder";
import ChatWindow from "@/components/ChatWindow";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  return (
    <>
      <Header />

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        <section
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              marginBottom: "20px",
            }}
          >
            HealthTalk AI
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "18px",
              lineHeight: "1.7",
            }}
          >
            An AI-powered healthcare consultation platform that enables users
            to communicate through voice. The application converts speech into
            text, retrieves relevant medical information, and generates voice
            responses using cloud-based AI services.
          </p>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "50px",
          }}
        >
          <FeatureCard
            title="Speech-to-Text"
            description="Convert spoken language into text using AssemblyAI."
          />

          <FeatureCard
            title="Medical Information"
            description="Retrieve healthcare information through API Ninjas."
          />

          <FeatureCard
            title="Text-to-Speech"
            description="Generate voice responses using Google Text-to-Speech."
          />
        </section>

        <VoiceRecorder />

        <ChatWindow />

        <AudioPlayer />
      </main>

      <Footer />
    </>
  );
}
