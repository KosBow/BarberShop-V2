export default function About() {
  return (
   <section className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-10">
  <img
    src="/images/barber-about.jpg"
    alt="Barbershop interiör"
    className="rounded-2xl shadow-lg w-full md:w-1/2 object-cover max-h-[400px]"
  />
  <div className="md:w-1/2 text-center md:text-left">
    <h1 className="text-4xl font-bold mb-4">Om Elias Barbershop</h1>
    <p className="text-gray-400 leading-relaxed">
      Elias Barbershop är en modern salong i Linköping med fokus på kvalitet, stil och personlig service. 
      Vår passion är att varje kund ska känna sig självsäker och fräsch – oavsett om det gäller en klassisk klippning eller en trendig fade.
    </p>
  </div>
</section>

  );
}
