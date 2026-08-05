type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        width: "320px",
        margin: "16px",
      }}
    >
      <h2
        style={{
          marginBottom: "12px",
          color: "#0f172a",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "#555",
          lineHeight: "1.6",
        }}
      >
        {description}
      </p>
    </div>
  );
}
