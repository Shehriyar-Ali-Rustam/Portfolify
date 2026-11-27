export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />
    </div>
  );
}
