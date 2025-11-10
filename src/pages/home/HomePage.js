import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const bgImage = "/images/nav/background.jpg";
  const logo = "/images/EdenStudioBarbershopremovebg.png";

  return (
    <main
      id="main-content"
      role="main"
      lang="sv"
      aria-label="Startsida för Eden Studio Barbershop"
      className={`relative min-h-[calc(100dvh-1.5rem)] flex flex-col justify-center items-center overflow-hidden transition-colors duration-700 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.85)_80%)]"
              : "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.6)_90%)]"
          }`}
        />
      </motion.div>

      <section
        aria-labelledby="hero-title"
        className="relative z-10 flex flex-col items-center text-center px-6 pb-32 sm:pb-16" // ⬅️ mer spacing under
      >
        <motion.img
          src={logo}
          alt="Eden Studio Barbershop logotyp"
          className="max-w-[min(90%,450px)] h-auto mb-10 object-contain select-none drop-shadow-[0_0_25px_rgba(255,191,0,0.25)]"
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.h1
          id="hero-title"
          className="text-5xl sm:text-6xl font-extrabold leading-tight mb-5 tracking-tight"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <span
            className={`${
              theme === "dark"
                ? "text-amber-400"
                : "text-[#d4a017]"
            } drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]`}
          >
            Eden Studio
          </span>{" "}
          <span
            className={`relative inline-block bg-clip-text text-transparent ${
              theme === "dark"
                ? "bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400 drop-shadow-[0_2px_6px_rgba(255,200,50,0.4)]"
                : "bg-gradient-to-r from-[#cfd2d6] via-[#f0f0f0] to-[#b5b7ba] drop-shadow-[0_4px_10px_rgba(160,160,160,0.8)]"
            } animate-textshine`}
          >
            Barbershop
          </span>
        </motion.h1>

        <motion.p
          className={`text-lg sm:text-xl max-w-2xl leading-relaxed px-6 py-3 rounded-lg font-medium ${
            theme === "dark"
              ? "text-gray-200 bg-black/30"
              : "text-gray-50 bg-black/45" // ⬅️ starkare kontrast
          } drop-shadow-[0_4px_10px_rgba(0,0,0,1)]`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          En modern salong för stil, skägg och självförtroende. Vi erbjuder
          premium klippningar, skäggtrimningar och stylingtjänster för den
          moderna gentlemannen.
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px rgba(255,191,0,0)",
                "0 0 25px rgba(255,191,0,0.5)",
                "0 0 0px rgba(255,191,0,0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="rounded-md"
          >
            <Link
              to="/kontakt"
              aria-label="Öppna kontaktsektionen och boka tid hos Eden Studio Barbershop"
              className={`relative px-12 py-4 text-lg font-semibold rounded-md overflow-hidden group transition-all duration-300 focus:outline-none focus:ring-4 ${
                theme === "dark"
                  ? "bg-amber-400 text-black hover:bg-amber-300 focus:ring-white/70 shadow-lg hover:shadow-amber-400/40"
                  : "bg-gradient-to-r from-[#d4a017] via-[#c89600] to-[#b58900] text-black hover:brightness-110 focus:ring-[#d4a017] shadow-[0_4px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.5)]"
              }`}
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 blur-xl transition-all duration-300" />
              <span className="relative z-10">Boka tid</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
