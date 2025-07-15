const items = [
  { title: 'Navigation',  desc: 'Turn-by-turn maps optimized for your dash.' },
  { title: 'Media',       desc: 'Seamless music, podcast, and streaming control.' },
  { title: 'Diagnostics', desc: 'Real-time vehicle health and alerts.' },
  { title: 'Voice AI',    desc: 'Hands-free commands powered by your car’s mic.' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-100 text-center px-4">
      <h2 className="text-4xl font-bold mb-12">Core Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {items.map(f => (
          <div key={f.title} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
