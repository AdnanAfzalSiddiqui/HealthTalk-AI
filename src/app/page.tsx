import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <>
      <Header />

      <main className="container">
        <section className="hero">
          <h1>HealthTalk AI</h1>

          <p>
            An AI-powered healthcare consultation platform that enables users
            to communicate using voice, receive medical information, and hear
            responses through speech synthesis.
          </p>

          <button>Start Consultation</button>
        </section>

        <section className="features">
          <FeatureCard
            title="Speech-to-Text"
            description="Convert voice into text using AssemblyAI."
          />

          <FeatureCard
            title="Medical Information"
            description="Retrieve healthcare information using API Ninjas."
          />

          <FeatureCard
            title="Text-to-Speech"
            description="Listen to AI-generated healthcare responses."
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
