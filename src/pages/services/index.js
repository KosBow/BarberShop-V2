"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Clock,
  Users,
  InstagramIcon,
  FacebookIcon,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

import InstagramModal from "../../components/social/Instagram";
import FacebookModal from "../../components/social/Facebook";

export default function Services() {
  const { theme } = useTheme();
  const [isInstagramOpen, setInstagramOpen] = useState(false);
  const [isFacebookOpen, setFacebookOpen] = useState(false);

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay, ease: "easeOut" },
    },
  });

  const services = [
    {
      icon: (
        <Scissors
          className={`w-10 h-10 ${
            theme === "dark" ? "text-amber-400" : "text-amber-500"
          }`}
        />
      ),
      title: "Klassisk Klippning",
      description:
        "En noggrann klippning som framhäver din stil. Vi tar oss tid att skapa den look som passar dig bäst.",
    },
    {
      icon: (
        <Sparkles
          className={`w-10 h-10 ${
            theme === "dark" ? "text-amber-400" : "text-amber-500"
          }`}
        />
      ),
      title: "Skäggtrim & Formning",
      description:
        "Perfekt formade linjer och välvårdat skägg. Vi använder traditionella tekniker och moderna verktyg.",
    },
    {
      icon: (
        <Clock
          className={`w-10 h-10 ${
            theme === "dark" ? "text-amber-400" : "text-amber-500"
          }`}
        />
      ),
      title: "Expressklippning",
      description:
        "För dig som är på språng men ändå vill ha en snygg och fräsch frisyr på kort tid.",
    },
    {
      icon: (
        <Users
          className={`w-10 h-10 ${
            theme === "dark" ? "text-amber-400" : "text-amber-500"
          }`}
        />
      ),
      title: "Barnklippning",
      description:
        "Trygg och rolig upplevelse för barnen. Vi ser till att det blir en trevlig stund med ett fint resultat.",
    },
  ];

  return (
    <main
      className={`min-h-screen flex flex-col justify-start overflow-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-neutral-950 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp(0)}
        className="container mx-auto max-w-6xl px-4 pt-16 pb-6 text-center"
      >
        <h1 className="text-4xl font-bold">Våra Tjänster</h1>
        <p
          className={`mt-2 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Vi erbjuder professionella barberartjänster med fokus på stil,
          kvalitet och personlig service.
        </p>
        <div className="h-1 w-14 bg-amber-400 rounded-full mx-auto mt-4" />
      </motion.section>

      <section className="container mx-auto max-w-6xl px-4 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeUp(index * 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow:
                theme === "dark"
                  ? "0px 10px 25px rgba(255, 200, 0, 0.08)"
                  : "0px 10px 25px rgba(255, 196, 0, 0.15)",
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            className={`rounded-xl p-8 border ${
              theme === "dark"
                ? "bg-neutral-900/60 border-amber-500/20"
                : "bg-gray-50 border-amber-200"
            } flex flex-col items-center text-center transition-all duration-500 ease-out`}
          >
            {service.icon}
            <h3
              className={`text-xl font-semibold mt-4 ${
                theme === "dark" ? "text-amber-300" : "text-gray-900"
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`mt-2 text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp(0.2)}
        className="container mx-auto max-w-6xl px-4 pb-28 text-center"
      >
        <h2
          className={`text-2xl font-semibold mb-8 ${
            theme === "dark" ? "text-amber-400" : "text-gray-900"
          }`}
        >
          Följ oss på sociala medier
        </h2>

        <div
          className={`rounded-xl p-12 border transition-colors duration-500 ${
            theme === "dark"
              ? "bg-neutral-900/60 border-amber-500/20"
              : "bg-gray-50 border-amber-200"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mb-8"
          >
            <h3
              className={`text-2xl font-semibold mb-2 ${
                theme === "dark" ? "text-amber-300" : "text-gray-900"
              }`}
            >
              Se vårt arbete
            </h3>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Följ oss för inspiration, uppdateringar och exklusiva erbjudanden.
            </p>
          </motion.div>

          <div className="flex justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setInstagramOpen(true)}
              className={`flex items-center gap-3 px-6 md:px-8 py-3 rounded-lg font-semibold text-black shadow-lg transition ${
                theme === "dark"
                  ? "bg-amber-400 hover:bg-amber-300"
                  : "bg-amber-400 hover:bg-amber-500"
              }`}
            >
              <InstagramIcon className="w-5 h-5" />
              <span className="hidden md:inline">Instagram</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFacebookOpen(true)}
              className={`flex items-center gap-3 px-6 md:px-8 py-3 rounded-lg font-semibold text-black shadow-lg transition ${
                theme === "dark"
                  ? "bg-amber-400 hover:bg-amber-300"
                  : "bg-amber-400 hover:bg-amber-500"
              }`}
            >
              <FacebookIcon className="w-5 h-5" />
              <span className="hidden md:inline">Facebook</span>
            </motion.button>
          </div>
        </div>
      </motion.section>

      {isInstagramOpen && (
        <InstagramModal onClose={() => setInstagramOpen(false)} />
      )}
      {isFacebookOpen && (
        <FacebookModal onClose={() => setFacebookOpen(false)} />
      )}
    </main>
  );
}
