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
            theme === "dark" ? "text-amber-300" : "text-amber-500"
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
            theme === "dark" ? "text-amber-300" : "text-amber-500"
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
            theme === "dark" ? "text-amber-300" : "text-amber-500"
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
            theme === "dark" ? "text-amber-300" : "text-amber-500"
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
      className={`overflow-hidden transition-colors duration-500 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* 🔹 Header */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp(0)}
        className="relative container mx-auto max-w-6xl px-4 pt-16 pb-10 text-center"
      >
        <h1 className="relative text-4xl font-bold">Våra Tjänster</h1>
        <p
          className={`mt-2 max-w-2xl mx-auto ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Vi erbjuder professionella barberartjänster med fokus på stil,
          kvalitet och personlig service.
        </p>
        <div className="h-1 w-12 bg-amber-400 rounded-full mx-auto mt-4 opacity-80" />
      </motion.section>

      {/* 💈 Tjänstekort */}
      <section className="container mx-auto max-w-6xl px-4 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeUp(index * 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              y: -3,
              boxShadow:
                theme === "dark"
                  ? "0px 8px 20px rgba(255, 200, 0, 0.08)"
                  : "0px 8px 20px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className={`rounded-xl p-8 border text-center flex flex-col items-center transition-all duration-500 ease-out ${
  theme === "dark"
    ? "bg-neutral-900/60 border-neutral-800"
    : " border-amber-200"
            }`}
          >
            {service.icon}
            <h3
              className={`text-lg font-semibold mt-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
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

    {/* 🌐 Social sektion – ny layout */}
<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={fadeUp(0.2)}
  className={`container mx-auto max-w-6xl px-4 pb-28 text-center relative overflow-hidden ${
    theme === "dark"
      ? "bg-gradient-to-t from-neutral-950 via-black to-neutral-900 rounded-xl py-14 shadow-[0_0_35px_rgba(255,200,0,0.04)]"
      : "bg-gradient-to-t from-gray-50 via-white to-gray-100 rounded-xl py-14 shadow-[0_0_25px_rgba(255,200,0,0.06)]"
  }`}
>
  {/* 💡 Subtil amber highlight upptill */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

  {/* Rubrik */}
  <h2
    className={`text-3xl font-semibold mb-4 ${
      theme === "dark" ? "text-amber-400" : "text-gray-900"
    }`}
  >
    Se vårt arbete
  </h2>

  <p
    className={`text-sm max-w-xl mx-auto mb-10 ${
      theme === "dark" ? "text-gray-400" : "text-gray-600"
    }`}
  >
    Följ oss för inspiration, uppdateringar och exklusiva erbjudanden.
  </p>

  {/* Knappar */}
  <div className="flex justify-center gap-6 mb-10">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setInstagramOpen(true)}
      className={`flex items-center gap-3 px-6 md:px-8 py-3 rounded-lg font-semibold text-black shadow-lg transition 
        ${
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
      className={`flex items-center gap-3 px-6 md:px-8 py-3 rounded-lg font-semibold text-black shadow-lg transition 
        ${
          theme === "dark"
            ? "bg-amber-400 hover:bg-amber-300"
            : "bg-amber-400 hover:bg-amber-500"
        }`}
    >
      <FacebookIcon className="w-5 h-5" />
      <span className="hidden md:inline">Facebook</span>
    </motion.button>
  </div>

  {/* Ny footer-rubrik */}
  <h3
    className={`text-lg tracking-wide font-medium ${
      theme === "dark" ? "text-amber-300/80" : "text-yellow-500"
    }`}
  >
    Följ oss på sociala medier
  </h3>
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
