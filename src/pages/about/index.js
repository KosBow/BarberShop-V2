import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function About() {
    const { theme } = useTheme();

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1.1, delay, ease: "easeOut" },
        viewport: { once: true },
    });

    const imageAbout = "/images/barber-about.jpg";

    return (
        <main
            className={`overflow-hidden transition-colors duration-500 ${
                theme === "dark"
                    ? "bg-black text-white"
                    : "bg-white text-gray-900"
            }`}
        >
            <motion.section
                {...fadeUp(0)}
                className="container mx-auto max-w-6xl px-4 pt-16 pb-8 text-center"
            >
                <h1 className="text-4xl font-bold">Om AeA Barbershop</h1>
                <p
                    className={`mt-2 max-w-2xl mx-auto ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                    En modern barbershop i Linköping med fokus på stil, kvalitet och upplevelse.
                </p>
                <div className="h-1 w-14 bg-amber-400 rounded-full mx-auto mt-4" />
            </motion.section>

            <section className="container mx-auto max-w-6xl px-4 pb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div {...fadeUp(0.2)}>
                    <img
                        src={imageAbout}
                        alt="Barberare klipper kund"
                        className="rounded-xl shadow-lg border border-neutral-800 object-cover w-full h-full"
                    />
                </motion.div>

                <motion.div {...fadeUp(0.4)} className="space-y-5">
                    <h2 className="text-2xl font-semibold text-amber-400">
                        Stil, kvalitet och personlig service
                    </h2>
                    <p
                        className={`leading-relaxed ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                        AeA Barbershop är mer än bara en plats för klippning – det är en upplevelse.
                        Vi tror att en bra frisyr handlar lika mycket om känslan som resultatet.
                        Hos oss möter du barberare med passion för hantverket och öga för detaljer.
                    </p>
                    <p
                        className={`leading-relaxed ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                        Oavsett om du vill ha en klassisk fade, trimma skägget eller prova en helt
                        ny stil, ser vi till att du lämnar salongen med förnyat självförtroende.
                        Vår filosofi är enkel: varje kund ska känna sig välkommen, avslappnad och
                        se sitt bästa jag i spegeln.
                    </p>

                    <div
                        className={`rounded-xl p-5 mt-6 border ${
                            theme === "dark"
                                ? "bg-neutral-900/60 border-neutral-800"
                                : "bg-gray-100 border-gray-200"
                        }`}
                    >
                        <h3 className="text-lg font-semibold mb-2">Vårt löfte till dig</h3>
                        <ul
                            className={`list-disc ml-5 space-y-1 ${
                                theme === "dark" ? "text-gray-400" : "text-gray-600"
                            }`}
                        >
                            <li>Alltid personlig service och noggrannhet</li>
                            <li>Moderna tekniker och klassiska traditioner</li>
                            <li>Produkter av hög kvalitet</li>
                            <li>Avkopplande miljö i hjärtat av Linköping</li>
                        </ul>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
