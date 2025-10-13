"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "../ui/Button"

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState("light")
    const [fade, setFade] = useState(false)

    const toggleTheme = () => {
        setFade(true)
        setTimeout(() => {
            setTheme(theme === "light" ? "dark" : "light")
            setFade(false)
        }, 400)
    }

    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <img
                    src={
                        theme === "light"
                            ? "/images/nav/background_light_mode.png"
                            : "/images/nav/background_dark_mode.png"
                    }
                    alt="Salon Background"
                    className={`h-full w-full object-cover transition-opacity duration-300 ease-in-out ${
                        fade ? "opacity-0" : "opacity-100"
                    }`}
                    key={theme}
                />
            </div>

            <nav
                className={`border-b ${
                    theme === "light"
                        ? "border-gray-200 bg-white/90"
                        : "border-gray-700 bg-gray-900/90"
                } backdrop-blur-sm`}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center gap-2">
                                <div className="flex h-10 w-10 items-center justify-center">
                                    {theme === "light" ? (
                                        <img
                                            src="/images/nav/hairdresser-scissors-logo-light.jpg"
                                            alt="BarberShop Logo"
                                            className="h-10 w-10 rounded-full"
                                        />
                                    ) : (
                                        <img
                                            src="/images/nav/hairdresser-scissors-logo-dark.jpg"
                                            alt="BarberShop Logo"
                                            className="h-10 w-10 rounded-full"
                                        />
                                    )}
                                </div>
                                <span
                                    className={`text-xl font-semibold ${
                                        theme === "light" ? "text-gray-900" : "text-white"
                                    }`}
                                >
                  BarberShop
                </span>
                            </Link>
                        </div>

                        <div className="hidden md:block">
                            <div className="flex items-center gap-8">
                                <Link
                                    to="/services"
                                    className={`text-sm transition-colors ${
                                        theme === "light"
                                            ? "text-gray-600 hover:text-gray-900"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                                >
                                    Startsida
                                </Link>
                                <Link
                                    to="/stylists"
                                    className={`text-sm transition-colors ${
                                        theme === "light"
                                            ? "text-gray-600 hover:text-gray-900"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                                >
                                    Tjänster
                                </Link>
                                <Link
                                    to="/gallery"
                                    className={`text-sm transition-colors ${
                                        theme === "light"
                                            ? "text-gray-600 hover:text-gray-900"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                                >
                                    Kontakt
                                </Link>
                                <Link
                                    to="/about"
                                    className={`text-sm transition-colors ${
                                        theme === "light"
                                            ? "text-gray-600 hover:text-gray-900"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                                >
                                    Om Oss
                                </Link>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                                className={
                                    theme === "light"
                                        ? "text-gray-600 hover:bg-gray-100"
                                        : "text-gray-300 hover:bg-gray-800"
                                }
                            >
                                {theme === "light" ? (
                                    <Moon className="h-5 w-5" />
                                ) : (
                                    <Sun className="h-5 w-5" />
                                )}
                            </Button>

                            <Button className="bg-rose-500 hover:bg-rose-600 text-white">
                                BOKA TID
                            </Button>
                        </div>

                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(!isOpen)}
                                className={
                                    theme === "light"
                                        ? "text-gray-900 hover:bg-gray-100"
                                        : "text-white hover:bg-gray-800"
                                }
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div
                        className={`md:hidden border-t ${
                            theme === "light"
                                ? "border-gray-200 bg-white/95"
                                : "border-gray-700 bg-gray-900/95"
                        } backdrop-blur-sm`}
                    >
                        <div className="space-y-1 px-4 pb-3 pt-2">
                            <button
                                onClick={toggleTheme}
                                className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-base ${
                                    theme === "light"
                                        ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                }`}
                            >
                                {theme === "light" ? (
                                    <>
                                        <Moon className="h-5 w-5" />
                                        Dark Mode
                                    </>
                                ) : (
                                    <>
                                        <Sun className="h-5 w-5" />
                                        Light Mode
                                    </>
                                )}
                            </button>

                            <Link
                                to="/services"
                                className={`block rounded-md px-3 py-2 text-base ${
                                    theme === "light"
                                        ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                }`}
                            >
                                Startsida
                            </Link>
                            <Link
                                to="/stylists"
                                className={`block rounded-md px-3 py-2 text-base ${
                                    theme === "light"
                                        ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                }`}
                            >
                                Tjänster
                            </Link>
                            <Link
                                to="/gallery"
                                className={`block rounded-md px-3 py-2 text-base ${
                                    theme === "light"
                                        ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                }`}
                            >
                                Kontakt
                            </Link>
                            <Link
                                to="/about"
                                className={`block rounded-md px-3 py-2 text-base ${
                                    theme === "light"
                                        ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                }`}
                            >
                                Om Oss
                            </Link>

                            <div className="pt-2">
                                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white mb-2">
                                    Boka tid
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}
