"use client"

import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { useTheme } from "../../context/ThemeContext"

const galleryImages = [
    "images/gallery/fade.jpg",
    "images/gallery/fade6.jpg",
    "images/gallery/fade2.jpg",
    "images/gallery/fade3.jpg",
    "images/gallery/fade4.jpg",
    "images/gallery/fade5.jpg",
    "images/gallery/fade1.jpg",
    "images/gallery/fade7.jpg",
]

const imageCaptions = []

export default function InstagramModal({ onClose }) {
    const { theme } = useTheme()
    const isLight = theme === "light"

    const [selectedImage, setSelectedImage] = useState(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5])

    const openImage = (index) => setSelectedImage(index)
    const closeImage = () => setSelectedImage(null)
    const nextImage = () => selectedImage !== null && setSelectedImage((selectedImage + 1) % galleryImages.length)
    const prevImage = () => selectedImage !== null && setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)

    const handleDragEnd = (event, info) => {
        const threshold = 100
        if (info.offset.x > threshold) prevImage()
        else if (info.offset.x < -threshold) nextImage()
    }

    return (
        <>
            <div
                className={`fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm transition-colors duration-300
                ${isLight
                    ? "bg-gradient-to-br from-white/90 via-blue-100/10 to-white/90"
                    : "bg-gradient-to-br from-black/90 via-blue-950/20 to-black/90"}`}
            >
                <motion.div
                    className={`rounded-2xl shadow-2xl p-8 max-w-5xl w-full max-h-[90vh] relative overflow-hidden transition-all border
                    ${isLight
                        ? "bg-gradient-to-br from-white via-blue-50/20 to-white border-blue-300/40"
                        : "bg-gradient-to-br from-[#1a1a1a] via-[#1a2530] to-[#1a1a1a] border-blue-900/30"}`}
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-600/10 to-blue-500/10 rounded-full blur-3xl -z-10" />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 hover:bg-blue-900/20 rounded-full transition-all hover:rotate-90 duration-300 z-10"
                        aria-label="Stäng"
                    >
                        <X className="w-6 h-6 text-blue-400" />
                    </button>

                    <div className="text-center mb-8">
                        <div className="inline-block p-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-2xl mb-4">
                            <div
                                className={`px-6 py-3 rounded-xl ${
                                    isLight ? "bg-white" : "bg-[#1a1a1a]"
                                }`}
                            >
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                                    Vårt Arbete
                                </h2>
                            </div>
                        </div>
                        <p
                            className={`mt-2 text-lg ${
                                isLight ? "text-gray-700" : "text-gray-400"
                            }`}
                        >
                            Se våra senaste klippningar och transformationer
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-4">
                            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
                            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full" />
                        </div>
                    </div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 gap-6 select-none cursor-grab active:cursor-grabbing pb-6"
                        drag="y"
                        dragConstraints={{
                            top: -((Math.ceil(galleryImages.length / 3) - 2) * 250),
                            bottom: 0,
                        }}
                        dragElastic={0.2}
                        style={{ y }}
                    >
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className={`relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-lg group
                                    ${isLight ? "border border-blue-200/40" : "border border-blue-900/20"}`}
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => openImage(index)}
                            >
                                <img
                                    src={image || "/placeholder.svg"}
                                    alt={`Arbete ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-blue-400 font-semibold text-sm">{imageCaptions[index]}</p>
                                </div>
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-xl" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedImage !== null && (
                    <div className="fixed inset-0 bg-black flex justify-center items-center z-[60]">
                        <motion.div
                            className="relative w-full h-full flex flex-col"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="absolute top-4 right-4 z-10">
                                <button
                                    onClick={closeImage}
                                    className="p-2 hover:bg-blue-900/30 rounded-full transition-all hover:rotate-90 duration-300"
                                    aria-label="Stäng"
                                >
                                    <X className="w-7 h-7 text-blue-400" />
                                </button>
                            </div>

                            <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 p-3 bg-black/50 hover:bg-blue-900/50 rounded-full transition-all hover:scale-110 border border-blue-900/30 z-10"
                                    aria-label="Föregående bild"
                                >
                                    <ChevronLeft className="w-8 h-8 text-blue-400" />
                                </button>

                                <motion.img
                                    key={selectedImage}
                                    src={galleryImages[selectedImage]}
                                    alt={`Arbete ${selectedImage + 1}`}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-blue-900/30 cursor-grab active:cursor-grabbing"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.2}
                                    onDragEnd={handleDragEnd}
                                    style={{ x, opacity }}
                                />

                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 p-3 bg-black/50 hover:bg-blue-900/50 rounded-full transition-all hover:scale-110 border border-blue-900/30 z-10"
                                    aria-label="Nästa bild"
                                >
                                    <ChevronRight className="w-8 h-8 text-blue-400" />
                                </button>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 z-10">
                                <div className="max-w-7xl mx-auto">
                                    <div className="flex items-center justify-center gap-1.5 mb-3">
                                        {galleryImages.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`h-1.5 rounded-full transition-all ${
                                                    index === selectedImage
                                                        ? "w-8 bg-blue-400"
                                                        : "w-1.5 bg-blue-400/50"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <div className="text-blue-400 text-center">
                                        <p className="font-semibold text-lg">{imageCaptions[selectedImage]}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
