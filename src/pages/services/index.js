export default function Services() {
  return (
    <section className="text-center text-white min-h-screen bg-black px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Våra Tjänster</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <div className="border border-gray-700 p-6 rounded-xl hover:bg-white/5 transition">
          <h2 className="text-xl font-semibold mb-2">Klassisk Klippning</h2>
          <p className="text-gray-400">Pris: 350 kr</p>
        </div>
        <div className="border border-gray-700 p-6 rounded-xl hover:bg-white/5 transition">
          <h2 className="text-xl font-semibold mb-2">Skäggtrim & Form</h2>
          <p className="text-gray-400">Pris: 250 kr</p>
        </div>
        <div className="border border-gray-700 p-6 rounded-xl hover:bg-white/5 transition">
          <h2 className="text-xl font-semibold mb-2">Lyxpaket</h2>
          <p className="text-gray-400">Klippning + Skäggtrim – 500 kr</p>
        </div>
      </div>
    </section>
  );
}
