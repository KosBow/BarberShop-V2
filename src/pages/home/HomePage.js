import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function HomePage() {
    const { theme } = useTheme();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const bgImage = "/images/nav/background.jpg";
    const logoLight = "/images/nav/hairdresser-scissors-logo-light.jpg";
    const logoDark = "/images/nav/hairdresser-scissors-logo-dark.jpg";

    return (
        <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
            <div
                className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all`}
                style={{
                    backgroundImage: `url('${bgImage}')`,
                }}
            >
                <div
                    className={`absolute inset-0
                        ${theme === "light"
                        ? "bg-white/10 backdrop-blur-sm"
                        : "bg-black/50 backdrop-blur-md"}`}
                />
            </div>

            <div className="relative z-10 max-w-3xl px-4 flex flex-col items-center gap-6">
                <img
                    key={theme}
                    src={theme === "light" ? logoLight : logoDark}
                    alt="AeA Logo"
                    className="h-16 w-16 rounded-full mb-2 border-b-indigo-950 animate-rotate-once"
                />

                <h1 className={`text-4xl sm:text-5xl font-bold leading-tight ${theme === "light" ? "text-white" : "text-white"}`}>
                    Professionella Hårklippningar<br />
                    <span className="text-yellow-400">& Styling</span>
                </h1>

                <p className={`text-lg sm:text-xl max-w-xl ${theme === "light" ? "text-white" : "text-white"}`}>
                    Din moderna salong för stil, skägg och självförtroende. Vi erbjuder premium
                    klippningar, skäggtrimningar och stylingtjänster för den moderna gentlemannen.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <a
                        href="/kontakt"
                        className="bg-yellow-400 text-black px-6 py-3 font-semibold hover:bg-yellow-500 transition animate-pulse"
                    >
                        Boka tid
                    </a>
                </div>
            </div>
        </section>
    );
}
