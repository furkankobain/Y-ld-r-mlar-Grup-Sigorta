export default function Logos() {
  const logos = [
    "AXA", "Allianz", "Anadolu", "HDI", "Sompo", "Mapfre"
  ];
  return (
    <div className="mt-10 border-y py-6 bg-white/70">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-zinc-500">
        {logos.map((l) => (
          <div key={l} className="flex items-center justify-center text-sm opacity-80">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
