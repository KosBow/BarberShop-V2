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

    const handleVerticalDragEnd = (event, info) => {
        const closeThreshold = 150
        if (info.offset.y > closeThreshold) {
            onClose()
        }
    }

    return (
        <>
            <div
                onClick={onClose}
                className={`fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm transition-colors duration-300
                ${isLight ? "bg-white/90" : "bg-black/90"}`}
            >
                <motion.div
                    onClick={(e) => e.stopPropagation()} // hindrar stängning vid klick inuti
                    className={`rounded-2xl shadow-2xl p-8 max-w-5xl w-full max-h-[90vh] relative overflow-y-auto no-scrollbar transition-all border
                    ${isLight ? "bg-white border-amber-200" : "bg-neutral-900 border-amber-500/20"}`}
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full transition-all duration-300 z-10
                                   hover:rotate-90 hover:scale-110
                                   bg-white/70 dark:bg-neutral-800/70
                                   hover:bg-amber-400/20 border border-amber-300/40 shadow-md"
                        aria-label="Stäng"
                    >
                        <X className={`w-6 h-6 ${isLight ? "text-amber-500" : "text-amber-400"}`} />
                    </button>

                    <div className="text-center mb-8 mt-6">
                        <div className="inline-block p-1 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 rounded-2xl mb-4">
                            <div className={`px-6 py-3 rounded-xl ${isLight ? "bg-white" : "bg-black"}`}>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Vårt Arbete</h2>
                            </div>
                        </div>
                        <p className={`mt-2 text-lg ${isLight ? "text-gray-700" : "text-gray-300"}`}>
                            Se våra senaste klippningar och transformationer
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-4">
                            <div className="h-1 w-12 bg-amber-400 rounded-full" />
                            <div className="h-1 w-12 bg-amber-300 rounded-full" />
                        </div>
                    </div>

                    {/* 📸 Bilder */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pb-6">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className={`relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-lg group
                                    ${isLight ? "border border-amber-200" : "border border-amber-500/20"}`}
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => openImage(index)}
                            >
                                <img
                                    src={image}
                                    alt={`Arbete ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-gray-100 font-semibold text-sm">{imageCaptions[index]}</p>
                                </div>
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-300/20 to-transparent rounded-xl" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* 🌙 Fullscreen-visning */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <div className="fixed inset-0 bg-black flex justify-center items-center z-[60]" onClick={closeImage}>
                        <motion.div
                            className="relative w-full h-full flex flex-col"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // förhindrar stängning när man klickar på bilden
                        >
                            <div className="absolute top-4 right-4 z-10">
                                <button
                                    onClick={closeImage}
                                    className="p-2 rounded-full transition-all duration-300
                                               hover:rotate-90 hover:scale-110
                                               bg-white/70 dark:bg-neutral-800/70
                                               hover:bg-amber-400/20 border border-amber-300/40 shadow-md"
                                    aria-label="Stäng"
                                >
                                    <X className={`w-7 h-7 ${isLight ? "text-amber-500" : "text-amber-400"}`} />
                                </button>
                            </div>

                            <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
                                <button
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                    className="absolute left-4 p-3 bg-amber-400/30 hover:bg-amber-400/50
                                               dark:bg-amber-400/20 dark:hover:bg-amber-400/40
                                               rounded-full transition-all hover:scale-110 border border-amber-300/50 z-10"
                                    aria-label="Föregående bild"
                                >
                                    <ChevronLeft className={`w-8 h-8 ${isLight ? "text-amber-500" : "text-amber-300"}`} />
                                </button>

                                <motion.img
                                    key={selectedImage}
                                    src={galleryImages[selectedImage]}
                                    alt={`Arbete ${selectedImage + 1}`}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-amber-400/40 cursor-grab active:cursor-grabbing"
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
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                    className="absolute right-4 p-3 bg-amber-400/30 hover:bg-amber-400/50
                                               dark:bg-amber-400/20 dark:hover:bg-amber-400/40
                                               rounded-full transition-all hover:scale-110 border border-amber-300/50 z-10"
                                    aria-label="Nästa bild"
                                >
                                    <ChevronRight className={`w-8 h-8 ${isLight ? "text-amber-500" : "text-amber-300"}`} />
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
                                                        ? "w-8 bg-amber-400"
                                                        : "w-1.5 bg-amber-300/50"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <div className={`text-center ${isLight ? "text-amber-600" : "text-amber-300"}`}>
                                        <p className="font-semibold text-lg">{imageCaptions[selectedImage]}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Döljer scrollbar */}
            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </>
    )
}
