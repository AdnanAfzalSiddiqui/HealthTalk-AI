export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        textAlign: "center",
        padding: "18px",
        marginTop: "40px",
      }}
    >
      <p>
        © {new Date().getFullYear()} HealthTalk AI. All rights reserved.
      </p>
    </footer>
  );
}
