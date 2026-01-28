"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuButton } from "../MenuButton";
import { MobileDrawer } from "../MobileDrawer.tsx";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full bg-white border-b">
      <div className="absolute top-4 left-6">
        <MenuButton onClick={() => setOpen(true)} />
      </div>

      {/* Drawer */}
      <MobileDrawer isOpen={open} onClose={() => setOpen(false)} />

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">
            Portfólio
          </h1>
          <p className="text-xs text-slate-500">Projetos e experiências</p>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8">
          <Link
            href="#projects"
            className="text-slate-600 hover:text-blue-600 transition"
          >
            Projetos
          </Link>

          <Link
            href="#about"
            className="text-slate-600 hover:text-blue-600 transition"
          >
            Sobre
          </Link>

          <Link
            href="#contact"
            className="text-slate-600 hover:text-blue-600 transition"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
