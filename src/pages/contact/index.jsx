export default function Contact() {
  return (
<section className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4 py-16">
  <h1 className="text-4xl font-bold mb-4">Kontakta Oss</h1>
  <p className="text-gray-400 mb-8">Har du frågor eller vill boka tid? Hör av dig!</p>
  <form className="flex flex-col gap-4 w-full max-w-md">
    <input className="bg-neutral-900 p-3 rounded-lg border border-gray-700 focus:border-white outline-none" placeholder="Namn" />
    <input className="bg-neutral-900 p-3 rounded-lg border border-gray-700 focus:border-white outline-none" placeholder="E-post" />
    <textarea className="bg-neutral-900 p-3 rounded-lg border border-gray-700 focus:border-white outline-none" placeholder="Meddelande" rows="4"></textarea>
    <button className="bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition-all">Skicka Meddelande</button>
  </form>
</section>

  );
}
