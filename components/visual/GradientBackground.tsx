export default function GradientBackground() {
  return (
    <div
      aria-hidden
      className="
        fixed inset-0 -z-50 overflow-hidden
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),rgba(240,240,240,0.25))]
      "
    >
      {/* BLOBS PASTELS VIFS */}
      <div
        className="blob mix-blend-screen animate-blob-1"
        style={{ backgroundColor: "#FF9ECF" }} // Rose pastel vif
      />
      <div
        className="blob mix-blend-screen animate-blob-2"
        style={{ backgroundColor: "#8ECFFF" }} // Bleu pastel vif
      />
      <div
        className="blob mix-blend-screen animate-blob-3"
        style={{ backgroundColor: "#C9A7FF" }} // Violet pastel vif
      />
    </div>
  );
}