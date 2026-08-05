export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>HealthTalk AI</h2>
        <small style={{ color: "#cbd5e1" }}>
          AI-Powered Healthcare Consultation
        </small>
      </div>

      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "24px",
            margin: 0,
            padding: 0,
            fontWeight: 500,
          }}
        >
          <li>Home</li>
          <li>Features</li>
          <li>Documentation</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}
