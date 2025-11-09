import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({
        type: "error",
        msg: "Fyll i minst Namn, E-post och Meddelande.",
      });
      return;
    }
    setStatus({ type: "ok", msg: "Tack! Vi återkommer så snart vi kan." });
    setForm({ name: "", email: "", subject: "", message: "" });
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
      {/* 🔆 HALO bakom rubrik */}
      <motion.section
        {...fadeUp(0)}
        className="relative container mx-auto max-w-6xl px-4 pt-16 pb-6 text-center"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-12 w-72 h-72 bg-amber-400/10 blur-3xl rounded-full pointer-events-none" />
        <h1 className="relative text-4xl font-bold">Kontakta Oss</h1>
        <p
          className={`mt-2 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Har du frågor eller vill boka tid? Hör av dig!
        </p>
        <div className="h-1 w-14 bg-amber-400 rounded-full mx-auto mt-4" />
      </motion.section>

      <section className="container mx-auto max-w-6xl px-4 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          {...fadeUp(0.1)}
          className={`rounded-xl p-8 border transition-colors duration-500 ${
            theme === "dark"
              ? "bg-neutral-900/60 border-amber-500/20"
              : "bg-gray-100 border-amber-400/30"
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
                  ? "bg-neutral-950/70 border-neutral-800 focus:border-amber-400"
                  : "bg-white border-gray-300 focus:border-amber-500"
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
                  ? "bg-neutral-950/70 border-neutral-800 focus:border-amber-400"
                  : "bg-white border-gray-300 focus:border-amber-500"
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
                  ? "bg-neutral-950/70 border-neutral-800 focus:border-amber-400"
                  : "bg-white border-gray-300 focus:border-amber-500"
              }`}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, y: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-amber-400 text-black font-semibold px-5 py-3 rounded-lg flex items-center gap-2 justify-center hover:bg-amber-500 transition shadow-md hover:shadow-amber-400/40"
            >
              <Send size={18} className="mt-[1px]" />
              Skicka Meddelande
            </motion.button>
          </form>

          {status && (
            <p
              className={`mt-3 text-sm ${
                status.type === "ok"
                  ? "text-amber-500"
                  : "text-red-500 font-medium"
              }`}
            >
              {status.msg}
            </p>
          )}
        </motion.div>

        <motion.div
          {...fadeUp(0.3)}
          className={`rounded-xl p-8 border transition-colors duration-500 ${
            theme === "dark"
              ? "bg-neutral-900/60 border-amber-500/20"
              : "bg-gray-100 border-amber-400/30"
          }`}
        >
          <h2 className="text-xl font-semibold">Kontaktinformation</h2>
          <div className="h-[2px] w-10 bg-amber-400 rounded-full mt-1" />

          <ul className="mt-5 space-y-4">
            {[
              {
                icon: <MapPin size={18} className="text-amber-400" />,
                title: "Adress",
                value: "Sturegatan 5, 582 23 Linköping",
              },
              {
                icon: <Phone size={18} className="text-amber-400" />,
                title: "Telefon",
                value: "070-000 00 00",
              },
              {
                icon: <Mail size={18} className="text-amber-400" />,
                title: "E-post",
                value: "info@edenstudiobarbershop.se",
              },
              {
                icon: <Clock size={18} className="text-amber-400" />,
                title: "Öppettider",
                value: (
                  <>
                    <p>Mån - Fre: 09 - 19</p>
                    <p>Lör: 09 - 17</p>
                    <p>Sönd: stängt</p>
                    <p
                      className={`mt-3 text-sm italic ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Avbokning sker endast via telefon eller genom din
                      online-bokning.
                    </p>
                  </>
                ),
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div
                  className={`rounded-lg p-2 border ${
                    theme === "dark"
                      ? "bg-neutral-950/70 border-neutral-800"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <strong className="block">{item.title}</strong>
                  <span>{item.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* KARTA */}
      <motion.section
        {...fadeUp(0.5)}
        className="container mx-auto max-w-6xl px-4 pb-28"
      >
        <h3 className="text-lg font-semibold mb-3">Hitta hit</h3>
        <div
          className={`h-[380px] rounded-xl overflow-hidden border transition-colors duration-500 ${
            theme === "dark" ? "border-amber-500/20" : "border-amber-400/30"
          }`}
        >
          <iframe
            title="Eden Studio Barbershop - Karta"
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
