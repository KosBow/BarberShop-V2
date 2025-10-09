export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-neutral-900 to-black text-white text-center px-4">
  <h1 className="text-5xl font-bold mb-4">Välkommen till Elias Barbershop</h1>
  <p className="text-gray-400 mb-8">Din moderna salong för stil, skägg och självförtroende.</p>
  <a href="/kontakt" className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all">
    Boka tid
  </a>
</section>

  );
}
