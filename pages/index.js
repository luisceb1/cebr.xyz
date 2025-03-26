import Link from "next/link";
import { useState } from "react";
import "../styles/globals.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <header className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold">Cebr.xyz</h1>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:underline">Privacidad</Link>
          <Link href="/terms" className="hover:underline">Términos</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded-md"
          >
            {darkMode ? "Modo Claro" : "Modo Oscuro"}
          </button>
        </div>
      </header>

      <main className="p-10 text-center">
        <h2 className="text-4xl font-bold mb-6">Bienvenido a Cebr.xyz</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Soy un desarrollador independiente.
        </p>
        <div className="mt-6">
          <Link href="mailto:hola@cebr.xyz" className="text-blue-600 hover:underline">
            Contáctame
          </Link>
        </div>
      </main>

      <footer className="p-6 text-center border-t text-sm">
        © {new Date().getFullYear()} Cebr.xyz — Todos los derechos reservados.
      </footer>
    </div>
  );
}
