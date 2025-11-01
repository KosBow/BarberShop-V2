"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "../ui/Button";
import { useTheme } from "../../context/ThemeContext";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${
        theme === "light"
          ? "bg-white/100 border-[#ffc400]"
          : "bg-black/80 border-[#d4af37]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + namn */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white dark:bg-[#111] hover:bg-[#fef9e7] transition-colors duration-500">
                <img
                  src={
                    theme === "light"
                      ? "/images/nav/EdenStudioLight.png"
                      : "/images/nav/EdenStudio.png"
                  }
                  alt="Eden Studio Logo"
                  className="h-12 w-12 rounded-full transition-transform duration-300 hover:scale-110"
                />
              </div>
              <span
                className={`text-xl font-semibold transition-colors ${
                  theme === "light" ? "text-gray-900" : "text-[#d4af37]"
                }`}
              >
                Eden Studio Barbershop
              </span>
            </Link>
          </div>

          {/* Desktop-länkar */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              {/* Startsida */}
              <Link
                to="/"
                className={`relative font-bold font-mono text-sm transition-colors
after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:origin-center after:transition-all after:duration-300 hover:after:w-full
${
  theme === "light"
    ? "text-[#3b3b3b] after:bg-[#ffee00]"
    : "text-white hover:text-[#d4af37] after:bg-[#e6b800]"
} ${
  location.pathname === "/"
    ? "after:w-full after:bg-[#ffee00] after:left-1/2 after:-translate-x-1/2"
    : ""
}`}

              >
                Startsida
              </Link>

              {/* Tjänster */}
              <Link
                to="/services"
                className={`relative font-bold font-mono text-sm transition-colors
after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:origin-center after:transition-all after:duration-300 hover:after:w-full
${
  theme === "light"
    ? "text-[#3b3b3b] after:bg-[#ffee00]"
    : "text-white hover:text-[#d4af37] after:bg-[#e6b800]"
} ${
  location.pathname === "/services"
    ? "after:w-full after:bg-[#ffee00] after:left-1/2 after:-translate-x-1/2"
    : ""
}`}

              >
                Tjänster
              </Link>

              {/* Kontakt */}
              <Link
                to="/kontakt"
                className={`relative font-bold font-mono text-sm transition-colors
after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:origin-center after:transition-all after:duration-300 hover:after:w-full
${
  theme === "light"
    ? "text-[#3b3b3b] after:bg-[#ffee00]"
    : "text-white hover:text-[#d4af37] after:bg-[#e6b800]"
} ${
  location.pathname === "/kontakt"
    ? "after:w-full after:bg-[#ffee00] after:left-1/2 after:-translate-x-1/2"
    : ""
}`}

              >
                Kontakt
              </Link>

              {/* Om oss */}
              <Link
                to="/om-oss"
                className={`relative font-bold font-mono text-sm transition-colors
after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:origin-center after:transition-all after:duration-300 hover:after:w-full
${
  theme === "light"
    ? "text-[#3b3b3b] after:bg-[#ffee00]"
    : "text-white hover:text-[#d4af37] after:bg-[#e6b800]"
} ${
  location.pathname === "/om-oss"
    ? "after:w-full after:bg-[#ffee00] after:left-1/2 after:-translate-x-1/2"
    : ""
}`}

              >
                Om Oss
              </Link>
            </div>
          </div>

          {/* Theme & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={
                theme === "light"
                  ? "text-gray-600 hover:bg-blue-500"
                  : "text-white hover:bg-[#1a1a1a]"
              }
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            <Link to="/kontakt">
              <Button
                className={`font-semibold transition-colors ${
                  theme === "light"
                    ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                    : "bg-[#d4af37] hover:bg-yellow-500 text-black"
                }`}
              >
                BOKA TID
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={
                theme === "light"
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-[#1a1a1a]"
              }
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className={`md:hidden border-t backdrop-blur-sm ${
            theme === "light"
              ? "border-gray-200 bg-white/95"
              : "border-[#d4af37] bg-black/95"
          }`}
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            <button
              onClick={toggleTheme}
              className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-base transition ${
                theme === "light"
                  ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  : "text-gray-300 hover:bg-[#1a1a1a]"
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
                className={`block rounded-md px-3 py-2 text-base transition ${
                  theme === "light"
                    ? "text-gray-700 hover:text-[#d4af37]"
                    : "text-white hover:text-[#d4af37]"
                } ${
                  location.pathname === i.to
                    ? "font-semibold underline underline-offset-4"
                    : ""
                }`}
              >
                {i.label}
              </Link>
            ))}

            <Link to="/kontakt" onClick={() => setIsOpen(false)}>
              <Button
                className={`w-full font-semibold mb-2 transition-colors ${
                  theme === "light"
                    ? "bg-[#d4af37] hover:bg-yellow-500 text-black"
                    : "bg-[#d4af37] hover:bg-yellow-500 text-black"
                }`}
              >
                Boka tid
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
