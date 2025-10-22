import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { theme } = useTheme();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
console.log("Service:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log("Template:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
console.log("Public key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    if (!form.name || !form.email || !form.message) {
      setStatus({
        type: "error",
        msg: "Fyll i minst Namn, E-post och Meddelande.",
      });
      return;
    }

    setLoading(true);
    setStatus(null);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(serviceId, templateId, form, publicKey);
      setStatus({
        type: "ok",
        msg: "✅ Tack! Ditt meddelande har skickats.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        msg: "❌ Något gick fel, försök igen senare.",
      });
    } finally {
      setLoading(false);
    }
  }

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1.3, delay, ease: "easeOut" },
    viewport: { once: true },
  });

  return (
    <main
      className={`overflow-hidden transition-colors duration-500 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Header */}
      <motion.section
        {...fadeUp(0)}
        className="container mx-auto max-w-6xl px-4 pt-16 pb-6 text-center"
      >
        <h1 className="text-4xl font-bold">Kontakta Oss</h1>
        <p
          className={`mt-2 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Har du frågor eller vill boka tid? Hör av dig!
        </p>
        <div className="h-1 w-14 bg-amber-400 rounded-full mx-auto mt-4" />
      </motion.section>

      {/* Contact form */}
      <section className="container mx-auto max-w-6xl px-4 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          {...fadeUp(0.1)}
          className={`rounded-xl p-8 border transition-colors duration-500 ${
            theme === "dark"
              ? "bg-neutral-900/60 border-neutral-800"
              : "bg-gray-100 border-gray-200"
          }`}
        >
          <h2 className="text-xl font-semibold">Skicka ett meddelande</h2>
          <p
            className={`text-sm mt-1 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Fyll i formuläret så återkommer vi så snart som möjligt.
          </p>

          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Namn"
              className={`w-full border outline-none rounded-lg p-3 transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-neutral-950/70 border-neutral-800 focus:border-white"
                  : "bg-white border-gray-300 focus:border-black"
              }`}
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="E-post"
              className={`w-full border outline-none rounded-lg p-3 transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-neutral-950/70 border-neutral-800 focus:border-white"
                  : "bg-white border-gray-300 focus:border-black"
              }`}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Meddelande"
              rows="5"
              className={`w-full border outline-none rounded-lg p-3 transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-neutral-950/70 border-neutral-800 focus:border-white"
                  : "bg-white border-gray-300 focus:border-black"
              }`}
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-amber-400 text-black font-semibold px-5 py-3 rounded-lg transition ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:brightness-95"
              }`}
            >
              {loading ? "Skickar..." : "Skicka Meddelande"}
            </button>

            {status && (
              <p
                className={`text-sm mt-2 ${
                  status.type === "ok" ? "text-green-500" : "text-red-500"
                }`}
              >
                {status.msg}
              </p>
            )}
          </form>
        </motion.div>

        {/* Kontaktinformation */}
        <motion.div
          {...fadeUp(0.3)}
          className={`rounded-xl p-8 border transition-colors duration-500 ${
            theme === "dark"
              ? "bg-neutral-900/60 border-neutral-800"
              : "bg-gray-100 border-gray-200"
          }`}
        >
          <h2 className="text-xl font-semibold">Kontaktinformation</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex gap-3 items-start">
              <MapPin size={18} />
              <div>
                <strong className="block">Adress</strong>
                <span>Sturegatan 5, 582 23 Linköping</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Phone size={18} />
              <div>
                <strong className="block">Telefon</strong>
                <span>070-000 00 00</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Mail size={18} />
              <div>
                <strong className="block">E-post</strong>
                <span>info@aeabarbershop.se</span>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Clock size={18} />
              <div>
                <strong className="block">Öppettider</strong>
                <p>Mån - Fre: 09 - 19</p>
                <p>Lör: 09 - 17</p>
                <p>Sönd: stängt</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Karta */}
      <motion.section
        {...fadeUp(0.5)}
        className="container mx-auto max-w-6xl px-4 pb-28"
      >
        <h3 className="text-lg font-semibold mb-3">Hitta hit</h3>
        <div
          className={`h-[380px] rounded-xl overflow-hidden border transition-colors duration-500 ${
            theme === "dark" ? "border-neutral-800" : "border-gray-300"
          }`}
        >
          <iframe
            title="AeA Barbershop - Karta"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Sturegatan%205,%20Link%C3%B6ping&output=embed"
            className="w-full h-full"
          />
        </div>
      </motion.section>
    </main>
  );
}
