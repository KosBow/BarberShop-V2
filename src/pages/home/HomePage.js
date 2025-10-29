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
  const logoLight = "/images/nav/hairdresser-scissors-logo-light.jpg";
  const logoDark = "/images/nav/hairdresser-scissors-logo-dark.jpg";

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
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

      <div className="relative z-10 max-w-3xl px-4 flex flex-col items-center gap-6">
        <motion.img
          key={theme}
          src={theme === "light" ? logoLight : logoDark}
          alt="Eden Studio Logo"
          className="h-20 w-20 rounded-full mb-2 border border-yellow-400 shadow-lg"
          initial={{ rotate: -180, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, type: "spring" }}
        />

        <motion.h1
          className={`text-4xl sm:text-5xl font-bold leading-tight ${
            theme === "light" ? "text-white" : "text-white"
          }`}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Professionella Hårklippningar
          <br />
          <span className="text-yellow-400">& Styling</span>
        </motion.h1>

        <motion.p
          className={`text-lg sm:text-xl max-w-xl ${
            theme === "light" ? "text-white/90" : "text-white/90"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Din moderna salong för stil, skägg och självförtroende. Vi erbjuder
          premium klippningar, skäggtrimningar och stylingtjänster för den
          moderna gentlemannen.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link
            to="/kontakt"
            className="relative bg-yellow-400 text-black px-8 py-3 font-semibold rounded-md overflow-hidden group"
          >
            <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300" />
            <span className="relative z-10">Boka tid</span>
          </Link>
        </motion.div>
      </div>

<motion.div
  className="absolute top-0 left-[-50%] w-[200%] h-full 
             bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
  animate={{ x: ["-50%", "50%"] }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  style={{ opacity: 0.08 }}  
/>
    </section>
  );
}
