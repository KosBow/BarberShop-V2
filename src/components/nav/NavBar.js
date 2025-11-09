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
      role="navigation"
      aria-label="Huvudmeny"
      className={`sticky top-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${
        theme === "light"
          ? "bg-white border-[#d4a017]"
          : "bg-black/80 border-[#d4af37]"
      }`}
    >
      {/* Skip link för tangentbordsanvändare */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-4 top-2 z-[9999] rounded bg-[#d4a017] px-3 py-1 text-black font-semibold"
      >
        Hoppa till innehåll
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* -------- LOGO + TEXT -------- */}
          <Link
            to="/"
            tabIndex={0}
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d4a017]"
            aria-label="Gå till startsidan Eden Studio Barbershop"
          >
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white dark:bg-[#111] hover:bg-[#fef9e7] transition-colors duration-500">
              <img
                src={
                  theme === "light"
                    ? "/images/nav/EdenStudioLight.png"
                    : "/images/nav/EdenStudioDark.png"
                }
                alt="Eden Studio Barbershop logotyp"
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

          {/* -------- DESKTOP NAV -------- */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              {[
                { to: "/", label: "Startsida" },
                { to: "/services", label: "Tjänster" },
                { to: "/kontakt", label: "Kontakt" },
                { to: "/om-oss", label: "Om Oss" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={
                    location.pathname === item.to ? "page" : undefined
                  }
                  className={`relative font-bold font-mono text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d4a017]
                  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:origin-center after:transition-all after:duration-300 hover:after:w-full
                  ${
                    theme === "light"
                      ? "text-[#3b3b3b] after:bg-[#d4a017]"
                      : "text-white hover:text-[#d4af37] after:bg-[#e6b800]"
                  }
                  ${
                    location.pathname === item.to
                      ? "after:w-full after:bg-[#d4a017]"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* -------- DESKTOP BUTTONS -------- */}
          <div className="hidden md:flex items-center gap-4">
            {/* Tema-växling */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={
                theme === "light"
                  ? "Aktivera mörkt tema"
                  : "Aktivera ljust tema"
              }
              title={
                theme === "light"
                  ? "Aktivera mörkt tema"
                  : "Aktivera ljust tema"
              }
              className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d4a017] ${
                theme === "light"
                  ? "text-gray-600 hover:bg-gray-100"
                  : "text-white hover:bg-[#1a1a1a]"
              }`}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Sun className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>

            {/* Boka tid-knapp */}
            <Link to="/kontakt">
              <Button
                className={`font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d4a017] transition-colors ${
                  theme === "light"
                    ? "bg-[#d4a017] hover:bg-[#c59c00] text-black"
                    : "bg-[#d4af37] hover:bg-yellow-500 text-black"
                }`}
              >
                BOKA TID
              </Button>
            </Link>
          </div>

          {/* -------- MOBILE MENU TOGGLE -------- */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
              title={isOpen ? "Stäng meny" : "Öppna meny"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
              className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d4a017] ${
                theme === "light"
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-[#1a1a1a]"
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* -------- MOBILE MENU -------- */}
      {isOpen && (
        <div
          id="mobile-menu"
          role="menu"
          aria-label="Mobil meny"
          className={`md:hidden border-t backdrop-blur-sm ${
            theme === "light"
              ? "border-gray-200 bg-white/95"
              : "border-[#d4af37] bg-black/95"
          }`}
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            {/* Tema-knapp mobil */}
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "light"
                  ? "Växla till mörkt tema"
                  : "Växla till ljust tema"
              }
              title={
                theme === "light"
                  ? "Växla till mörkt tema"
                  : "Växla till ljust tema"
              }
              className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-base transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d4a017] ${
                theme === "light"
                  ? "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  : "text-gray-300 hover:bg-[#1a1a1a]"
              }`}
            >
              {theme === "light" ? (
                <>
                  <Moon className="h-5 w-5" aria-hidden="true" />
                  Dark Mode
                </>
              ) : (
                <>
                  <Sun className="h-5 w-5" aria-hidden="true" />
                  Light Mode
                </>
              )}
            </button>

            {/* Mobil-länkar */}
            {[
              { to: "/", label: "Startsida" },
              { to: "/services", label: "Tjänster" },
              { to: "/kontakt", label: "Kontakt" },
              { to: "/om-oss", label: "Om Oss" },
            ].map((i) => (
              <Link
                key={i.to}
                to={i.to}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-base transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d4a017] ${
                  theme === "light"
                    ? "text-gray-700 hover:text-[#d4a017]"
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

            {/* Mobil boka knapp */}
            <Link to="/kontakt" onClick={() => setIsOpen(false)}>
              <Button
                className={`w-full font-semibold mb-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d4a017] ${
                  theme === "light"
                    ? "bg-[#d4a017] hover:bg-yellow-500 text-black"
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
