"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "../ui/Button"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <nav
      className={`border-b sticky top-0 z-50 ${
        theme === "light"
          ? "border-gray-200 bg-white/90"
          : "border-gray-700 bg-gray-900/90"
      } backdrop-blur-sm`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center">
                <img
                  src={
                    theme === "light"
                      ? "/images/nav/hairdresser-scissors-logo-light.jpg"
                      : "/images/nav/hairdresser-scissors-logo-dark.jpg"
                  }
                  alt="Barbershop Logo"
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <span
                className={`text-xl font-semibold ${
                  theme === "light" ? "text-gray-900" : "text-white"
                }`}
              >
                AeA Barbershop
              </span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className={`text-sm transition-colors ${
                  theme === "light"
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Startsida
              </Link>
              <Link
                to="/services"
                className={`text-sm transition-colors ${
                  theme === "light"
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Tjänster
              </Link>
              <Link
                to="/kontakt"
                className={`text-sm transition-colors ${
                  theme === "light"
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Kontakt
              </Link>
              <Link
                to="/om-oss"
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

          {/* THEME + BOOK */}
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
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Link to="/kontakt">
              <Button className="bg-rose-500 hover:bg-rose-600 text-white">
                BOKA TID
              </Button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
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

      {/* MOBILE MENU */}
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

            {[
              { to: "/", label: "Startsida" },
              { to: "/services", label: "Tjänster" },
              { to: "/kontakt", label: "Kontakt" },
              { to: "/om-oss", label: "Om Oss" },
            ].map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-base ${
                  theme === "light"
                    ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {i.label}
              </Link>
            ))}

            <Link to="/kontakt" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white mb-2">
                Boka tid
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
