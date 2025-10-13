import {NavBar} from "../../components/nav/NavBar";

export default function HomePage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4">
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-12 max-w-3xl">
                <h1 className="text-5xl font-bold mb-4">Välkommen till Elias Barbershop</h1>
                <p className="text-gray-200 mb-8 text-lg">Din moderna salong för stil, skägg och självförtroende.</p>
                <a
                    href="/kontakt"
                    className="inline-block bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-all font-semibold"
                >
                    Boka tid
                </a>
            </div>
        </section>
    )
}
