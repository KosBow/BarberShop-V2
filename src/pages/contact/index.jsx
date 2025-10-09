export default function Contact() {
  return (
    <section className="text-white min-h-screen bg-black flex flex-col justify-center items-center px-4 py-16">
      <h1 classNamer="text-4xl font-bold mb-6">Kontakta Oss</h1>
      <p className="text-gray-400 mb-8 text-center">
        Har du frågor eller vill boka tid? Hör av dig!
      </p>
      <form className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Namn"
          className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-white"
        />
        <input
          type="email"
          placeholder="e-post"
          className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-white h-32"
        />
        <textarea
          placeholder="Meddelande"
          className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
        />
        <button className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition">
            Skicka Meddelande
            </button>
      </form>
    </section>
  );
}
