"use client"

import { motion } from "framer-motion"
import { Scissors, Sparkles, Clock, Users, InstagramIcon, FacebookIcon } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"
import { useState } from "react"

import InstagramModal from "../../components/social/Instagram"
import FacebookModal from "../../components/social/Facebook"

export default function Services() {
    const { theme } = useTheme()
    const [isInstagramOpen, setInstagramOpen] = useState(false)
    const [isFacebookOpen, setFacebookOpen] = useState(false)

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.2, delay, ease: "easeIn" },
        viewport: { once: true },
    })

    const services = [
        {
            icon: <Scissors className="w-10 h-10 text-amber-400" />,
            title: "Klassisk Klippning",
            description:
                "En noggrann klippning som framhäver din stil. Vi tar oss tid att skapa den look som passar dig bäst.",
        },
        {
            icon: <Sparkles className="w-10 h-10 text-amber-400" />,
            title: "Skäggtrim & Formning",
            description:
                "Perfekt formade linjer och välvårdat skägg. Vi använder traditionella tekniker och moderna verktyg.",
        },
        {
            icon: <Clock className="w-10 h-10 text-amber-400" />,
            title: "Expressklippning",
            description: "För dig som är på språng men ändå vill ha en snygg och fräsch frisyr på kort tid.",
        },
        {
            icon: <Users className="w-10 h-10 text-amber-400" />,
            title: "Barnklippning",
            description:
                "Trygg och rolig upplevelse för barnen. Vi ser till att det blir en trevlig stund med ett fint resultat.",
        },
    ]

    return (
        <main
            className={`min-h-screen overflow-hidden transition-colors duration-300 ${
                theme === "dark" ? "bg-[#1a1a1a] text-white" : "bg-white text-black"
            }`}
        >
            <motion.section {...fadeUp(0)} className="container mx-auto max-w-6xl px-4 pt-16 pb-8 text-center">
                <h1 className="text-4xl font-bold">Våra Tjänster</h1>
                <p className={`mt-2 max-w-2xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    Vi erbjuder professionella barberartjänster med fokus på stil, kvalitet och personlig service.
                </p>
                <div className="h-1 w-14 bg-amber-400 rounded-full mx-auto mt-4" />
            </motion.section>

            <section className="container mx-auto max-w-6xl px-4 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        {...fadeUp(index * 0.15)}
                        className={`rounded-2xl border shadow-md p-8 flex flex-col items-center text-center transition-colors duration-300 ${
                            theme === "dark" ? "bg-neutral-900/60 border-neutral-800" : "bg-gray-50 border-gray-200"
                        }`}
                        whileHover={{ scale: 1.05 }}
                    >
                        {service.icon}
                        <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                        <p className={`mt-2 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </section>

            <section className="container mx-auto max-w-6xl px-4 pb-20 text-center">
                <div className="text-2xl font-semibold mb-8">Följ oss på sociala medier</div>

                <div
                    className={`relative rounded-3xl p-16 ${
                        theme === "dark"
                            ? "bg-gradient-to-br from-[#1a1a1a] via-[#2a2520] to-[#1a1a1a]"
                            : "bg-gradient-to-br from-gray-100 via-white to-gray-100"
                    } border-2 ${theme === "dark" ? "border-amber-900/30" : "border-gray-300"} shadow-2xl overflow-hidden`}
                >
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/5 via-yellow-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse" />

                    <div
                        className={`absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 rounded-tl-2xl ${theme === "dark" ? "border-amber-400/30" : "border-amber-500/40"}`}
                    />
                    <div
                        className={`absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 rounded-br-2xl ${theme === "dark" ? "border-amber-400/30" : "border-amber-500/40"}`}
                    />

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                                Se vårt arbete
                            </h3>
                            <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                Följ oss för inspiration, uppdateringar och exklusiva erbjudanden
                            </p>
                        </motion.div>

                        <div className="flex justify-center gap-8">
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                                whileTap={{ scale: 0.95 }}
                                animate={{
                                    boxShadow: [
                                        "0 0 20px rgba(251, 191, 36, 0.3)",
                                        "0 0 40px rgba(251, 191, 36, 0.5)",
                                        "0 0 20px rgba(251, 191, 36, 0.3)",
                                    ],
                                }}
                                transition={{
                                    boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                                }}
                                onClick={() => setInstagramOpen(true)}
                                className="relative flex items-center gap-3 px-6 md:px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full shadow-lg font-semibold text-lg overflow-hidden group"
                            >
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                >
                                    <InstagramIcon className="w-6 h-6" />
                                </motion.div>
                                <span className="relative z-10 hidden md:inline">Instagram</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                                whileTap={{ scale: 0.95 }}
                                animate={{
                                    boxShadow: [
                                        "0 0 20px rgba(251, 191, 36, 0.3)",
                                        "0 0 40px rgba(251, 191, 36, 0.5)",
                                        "0 0 20px rgba(251, 191, 36, 0.3)",
                                    ],
                                }}
                                transition={{
                                    boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                                }}
                                onClick={() => setFacebookOpen(true)}
                                className="relative flex items-center gap-3 px-6 md:px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full shadow-lg font-semibold text-lg overflow-hidden group"
                            >
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                >
                                    <FacebookIcon className="w-6 h-6" />
                                </motion.div>
                                <span className="relative z-10 hidden md:inline">Facebook</span>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>

            {isInstagramOpen && <InstagramModal onClose={() => setInstagramOpen(false)} />}

            {isFacebookOpen && <FacebookModal onClose={() => setFacebookOpen(false)} />}
        </main>
    )
}
