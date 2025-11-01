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
  const logoOverlay = "/images/EdenStudioBarbershopremovebg.png"; // din logga

  return (
    <section
      className={`relative min-h-screen w-full flex justify-center items-center overflow-hidden transition-colors duration-500 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* 🔹 Bakgrundsbild */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <div
          className={`absolute inset-0 ${
            theme === "light"
              ? "bg-white/10 backdrop-blur-md"
              : "bg-black/60 backdrop-blur-md"
          }`}
        />
      </motion.div>

      {/* 🔶 Container med logga som bakgrund */}
      <motion.div
        className={`relative z-10 flex flex-col items-center text-center px-6 py-14 rounded-xl border shadow-lg transition-all duration-500 max-w-4xl
          ${theme === "dark" ? "border-amber-500/20" : "border-amber-200"}`}
        style={{
          backgroundImage: `url('${logoOverlay}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* 🔸 Mjuk overlay för textkontrast */}
        <div
          className={`absolute inset-0 rounded-xl backdrop-blur-[0px] ${
            theme === "dark" ? "bg-black/50" : "bg-white/40"
          }`}
        />

        {/* 🔸 Textinnehåll */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold leading-tight z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.4)]"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Professionella Hårklippningar
          <br />
          <span className="text-amber-400">& Styling</span>
        </motion.h1>

        <motion.p
          className={`text-lg sm:text-xl max-w-xl mt-4 z-10 ${
            theme === "dark" ? "text-gray-300" : "text-gray-800"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Din moderna salong för stil, skägg och självförtroende. Vi erbjuder
          premium klippningar, skäggtrimningar och stylingtjänster för den
          moderna gentlemannen.
        </motion.p>

        {/* 🔸 Knapp */}
        <motion.div
          className="mt-8 z-10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link
            to="/kontakt"
            className="relative bg-amber-400 text-black px-8 py-3 font-semibold rounded-md overflow-hidden group shadow-md hover:shadow-lg"
          >
            <span className="absolute inset-0 bg-amber-300 opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300" />
            <span className="relative z-10">Boka tid</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* 🔸 Ljusreflektionseffekt */}
      <motion.div
        className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
        animate={{ x: ["-50%", "50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity: 0.08 }}
      />
    </section>
  );
}
