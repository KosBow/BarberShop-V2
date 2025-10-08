"use client"

import { useState } from "react"
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="border-b border-border bg-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <span className="text-xl font-semibold text-white">Barbershop</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center gap-8">
                            <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                                Startsida
                            </Link>
                            <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                                Tjänster
                            </Link>
                            <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                                Kontakt
                            </Link>
                            <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                                Om Oss
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden border-t border-border bg-black">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        <Link
                            to="#"
                            className="block rounded-md px-3 py-2 text-base text-gray-300 hover:bg-white/10 hover:text-white"
                        >
                            Startsida
                        </Link>
                        <Link
                            to="#"
                            className="block rounded-md px-3 py-2 text-base text-gray-300 hover:bg-white/10 hover:text-white"
                        >
                            Tjänster
                        </Link>
                        <Link
                            to="#"
                            className="block rounded-md px-3 py-2 text-base text-gray-300 hover:bg-white/10 hover:text-white"
                        >
                            Kontakt
                        </Link>
                        <Link
                            to="#"
                            className="block rounded-md px-3 py-2 text-base text-gray-300 hover:bg-white/10 hover:text-white"
                        >
                            Om Oss
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar;
