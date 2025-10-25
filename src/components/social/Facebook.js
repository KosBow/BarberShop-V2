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

export default function FacebookModal({ onClose }) {
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
                className={`fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm transition-colors duration-300
                ${isLight
                    ? "bg-white/90"
                    : "bg-black/90"}`}
            >
                <motion.div
                    className={`rounded-2xl shadow-2xl p-8 max-w-5xl w-full max-h-[90vh] relative overflow-hidden transition-all border
                    ${isLight
                        ? "bg-white border-gray-300"
                        : "bg-neutral-900 border-gray-700"}`}
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 hover:bg-gray-700/20 dark:hover:bg-gray-200/20 rounded-full transition-all hover:rotate-90 duration-300 z-10"
                        aria-label="Stäng"
                    >
                        <X className={`w-6 h-6 ${isLight ? "text-black" : "text-white"}`} />
                    </button>

                    <motion.div
                        className="select-none cursor-grab active:cursor-grabbing overflow-hidden"
                        drag="y"
                        dragConstraints={{
                            top: -((Math.ceil(galleryImages.length / 3) - 2) * 250),
                            bottom: 0,
                        }}
                        dragElastic={0.2}
                        style={{ y }}
                        onDragEnd={handleVerticalDragEnd}
                    >
                        <div className="text-center mb-8">
                            <div className="inline-block p-1 bg-gradient-to-r from-gray-100/80 via-gray-200/60 to-gray-100/80 rounded-2xl mb-4">
                                <div className={`px-6 py-3 rounded-xl ${isLight ? "bg-white" : "bg-gray-800"}`}>
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                        Vårt Arbete
                                    </h2>
                                </div>
                            </div>
                            <p className={`mt-2 text-lg ${isLight ? "text-gray-700" : "text-gray-300"}`}>
                                Se våra senaste klippningar och transformationer
                            </p>
                            <div className="flex items-center justify-center gap-2 mt-4">
                                <div className="h-1 w-12 bg-gray-900 dark:bg-white rounded-full" />
                                <div className="h-1 w-12 bg-gray-700 dark:bg-gray-300 rounded-full" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pb-6">
                            {galleryImages.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-lg group
                                        ${isLight ? "border border-gray-300" : "border border-gray-700"}`}
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
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-500/20 to-transparent rounded-xl" />
                                </motion.div>
                            ))}
                        </div>
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
                                    className="p-2 hover:bg-gray-700/30 dark:hover:bg-gray-200/30 rounded-full transition-all hover:rotate-90 duration-300"
                                    aria-label="Stäng"
                                >
                                    <X className={`w-7 h-7 ${isLight ? "text-black" : "text-white"}`} />
                                </button>
                            </div>

                            <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 p-3 bg-gray-900/50 hover:bg-gray-700/50 dark:bg-white/30 dark:hover:bg-white/50 rounded-full transition-all hover:scale-110 border border-gray-700 dark:border-white/30 z-10"
                                    aria-label="Föregående bild"
                                >
                                    <ChevronLeft className={`w-8 h-8 ${isLight ? "text-white" : "text-black"}`} />
                                </button>

                                <motion.img
                                    key={selectedImage}
                                    src={galleryImages[selectedImage]}
                                    alt={`Arbete ${selectedImage + 1}`}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-gray-700 dark:border-white/30 cursor-grab active:cursor-grabbing"
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
                                    className="absolute right-4 p-3 bg-gray-900/50 hover:bg-gray-700/50 dark:bg-white/30 dark:hover:bg-white/50 rounded-full transition-all hover:scale-110 border border-gray-700 dark:border-white/30 z-10"
                                    aria-label="Nästa bild"
                                >
                                    <ChevronRight className={`w-8 h-8 ${isLight ? "text-white" : "text-black"}`} />
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
                                                        ? "w-8 bg-gray-100 dark:bg-white"
                                                        : "w-1.5 bg-gray-400 dark:bg-gray-500"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <div className={`text-center ${isLight ? "text-black" : "text-white"}`}>
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
