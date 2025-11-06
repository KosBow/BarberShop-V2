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
    <section
      className={`relative min-h-screen flex flex-col justify-center items-center overflow-hidden transition-colors duration-700 ${
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
              : "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.7)_90%)]"
          }`}
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.img
          src={logo}
          alt="Eden Studio Barbershop"
          className="max-w-[min(90%,450px)] h-auto mb-10 object-contain drop-shadow-[0_0_25px_rgba(255,191,0,0.2)] select-none"
          style={{ imageRendering: "auto" }}
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold leading-tight mb-5 tracking-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <span
            className={`${
              theme === "dark" ? "text-amber-400" : "text-amber-500"
            }`}
          >
            Eden Studio
          </span>{" "}
          Barbershop
        </motion.h1>

        <motion.p
          className={`text-lg sm:text-xl max-w-2xl leading-relaxed px-6 py-3 rounded-lg backdrop-blur-md font-medium ${
            theme === "dark"
              ? "text-gray-200 bg-black/35"
              : "text-gray-200 bg-black/40"
          } drop-shadow-[0_4px_10px_rgba(0,0,0,1)]`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          En modern salong för stil, skägg och självförtroende.  
          Vi erbjuder premium klippningar, skäggtrimningar och stylingtjänster  
          för den moderna gentlemannen.
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
              className={`relative px-12 py-4 text-lg font-semibold rounded-md overflow-hidden group transition-all duration-300 ${
                theme === "dark"
                  ? "bg-amber-400 text-black hover:bg-amber-300"
                  : "bg-amber-500 text-black hover:bg-amber-400"
              } shadow-lg hover:shadow-amber-400/40`}
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 blur-xl transition-all duration-300" />
              <span className="relative z-10">Boka tid</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
        animate={{ x: ["-50%", "50%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity: 0.05 }}
      />
    </section>
  );
}
