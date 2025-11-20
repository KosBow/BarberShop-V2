import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function About() {
  const { theme } = useTheme();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40, filter: "blur(6px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1.2, delay, ease: "easeOut" },
    viewport: { once: true },
  });

  const imageAbout = "/images/barber-about.jpg";

  return (
    <main
      className={`min-h-screen flex flex-col justify-start overflow-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-neutral-950 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <motion.section
        {...fadeUp(0)}
        className="relative container mx-auto max-w-6xl px-4 pt-16 pb-8 text-center"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-10 w-80 h-80 bg-amber-400/10 blur-3xl rounded-full pointer-events-none" />

        <h1 className="relative text-4xl font-bold">
          Om Eden Studio Barbershop
        </h1>
        <p
          className={`mt-2 max-w-2xl mx-auto ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          En modern barbershop i Linköping med fokus på stil, kvalitet och en
          personlig upplevelse.
        </p>
        <div className="h-1 w-14 bg-amber-400 rounded-full mx-auto mt-4" />
      </motion.section>

      <section className="container mx-auto max-w-6xl px-4 pb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <motion.div {...fadeUp(0.2)} className="relative">
          <div className="absolute -inset-2 rounded-xl bg-amber-400/10 blur-xl pointer-events-none" />
          <img
            src={imageAbout}
            alt="Barberare klipper kund"
            className={`rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.12)] object-cover w-full h-full border transition-all duration-200
              ${
                theme === "dark"
                  ? "border-amber-500/20 shadow-[0_0_20px_rgba(212,175,55,0.08)]"
                  : "border-amber-400/30 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
              }`}
          />
        </motion.div>

        <motion.div {...fadeUp(0.4)} className="space-y-5 relative z-10">
          <h2 className="text-2xl font-semibold text-amber-400">
            Stil, kvalitet och personlig service
          </h2>

          <p
            className={`leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Eden Studio Barbershop är mer än bara en plats för klippning – det
            är en upplevelse. Vi tror att en bra frisyr handlar lika mycket om
            känslan som resultatet. Hos oss möter du barberare med passion för
            hantverket och öga för detaljer.
          </p>

          <p
            className={`leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Oavsett om du vill ha en klassisk fade, trimma skägget eller prova
            en ny stil, ser vi till att du lämnar salongen med förnyat
            självförtroende. Vår filosofi är enkel: varje kund ska känna sig
            välkommen, avslappnad och se sitt bästa jag i spegeln.
          </p>

          <div
            className={`rounded-xl p-5 mt-6 border transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.12)]
              ${
                theme === "dark"
                  ? "bg-neutral-900/60 border-amber-500/20 shadow-[0_0_20px_rgba(212,175,55,0.08)]"
                  : "bg-gray-100 border-amber-400/30 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
              }`}
          >
            <h3 className="text-lg font-semibold mb-2 text-amber-400">
              Vårt löfte till dig
            </h3>

            <ul
              className={`list-disc ml-5 space-y-1 marker:text-amber-400 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>Alltid personlig service och noggrannhet</li>
              <li>Moderna tekniker och klassiska traditioner</li>
              <li>Produkter av högsta kvalitet</li>
              <li>Avkopplande miljö i hjärtat av Linköping</li>
            </ul>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
