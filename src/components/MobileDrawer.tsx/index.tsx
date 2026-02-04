"use client";

import Link from "next/link";
import {
  Home,
  User,
  Wrench,
  BookOpen,
  Code2,
  Phone,
  Languages,
} from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

type MobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-72
        bg-slate-50 dark:bg-slate-950
        border-r border-slate-200 dark:border-slate-800
        z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="p-6">
          <h2
            className="text-center text-xl font-bold tracking-widest mb-10
            text-slate-900 dark:text-white"
          >
            MENU
          </h2>

          {/* Nav */}
          <nav className="flex flex-col gap-2">
            <MenuItem
              href="#init"
              icon={<Home size={20} />}
              label="Início"
              onClose={onClose}
              active
            />

            <MenuItem
              href="#about"
              icon={<User size={20} />}
              label="Sobre Mim"
              onClose={onClose}
            />

            <MenuItem
              href="#habilit"
              icon={<Wrench size={20} />}
              label="Habilidades"
              onClose={onClose}
            />

            <MenuItem
              href="#knowledge"
              icon={<BookOpen size={20} />}
              label="Conhecimento"
              onClose={onClose}
            />

            <MenuItem
              href="#project"
              icon={<Code2 size={20} />}
              label="Meus Projetos"
              onClose={onClose}
            />

            <MenuItem
              href="#contact"
              icon={<Phone size={20} />}
              label="Contatos"
              onClose={onClose}
            />

            <ThemeToggle />
          </nav>
        </div>
      </aside>
    </>
  );
}

type ItemProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClose: () => void;
  active?: boolean;
};

function MenuItem({ href, icon, label, onClose, active }: ItemProps) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all text-sm font-medium
      ${
        active
          ? "bg-blue-600/20 text-blue-400"
          : "text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
