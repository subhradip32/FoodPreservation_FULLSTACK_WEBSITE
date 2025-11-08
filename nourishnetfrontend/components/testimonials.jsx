export default function Testimonials() {
  const items = [
    { name: "Asha Patel", text: "Nourish kept our produce fresh and reduced spoilage — a game changer." },
    { name: "GreenFarms", text: "Reliable cold-chain and great support. Our shipments arrive in excellent condition." },
    { name: "Rohan", text: "The platform is intuitive and helped us plan routes efficiently." },
  ];

  return (
    <section className="py-16 bg-linear-to-b from-green-50 to-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-primary mb-4">What our partners say</h3>
        <p className="text-subtext mb-8">Real feedback from growers and retailers using our services.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-subtext mb-4">“{t.text}”</p>
              <div className="text-sm font-semibold text-accent">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
