export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        marginTop: "60px",
        padding: "30px 20px",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>
        HealthTalk AI
      </h3>

      <p
        style={{
          color: "#cbd5e1",
          maxWidth: "700px",
          margin: "0 auto 15px",
          lineHeight: "1.6",
        }}
      >
        An AI-powered healthcare consultation platform that combines
        speech recognition, medical information retrieval, and
        text-to-speech technologies to provide an interactive healthcare
        experience.
      </p>

      <small style={{ color: "#94a3b8" }}>
        © {new Date().getFullYear()} HealthTalk AI. Built with Next.js,
        React and TypeScript.
      </small>
    </footer>
  );
}
