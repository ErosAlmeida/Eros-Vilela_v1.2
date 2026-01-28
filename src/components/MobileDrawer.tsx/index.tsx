import Link from "next/link";
import {
  Home,
  User,
  Wrench,
  BookOpen,
  Code2,
  Phone,
  Languages,
  Moon,
} from "lucide-react";

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
        className={`fixed top-0 left-0 h-full w-72 bg-slate-950 border-r border-slate-800 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <h2 className="text-center text-xl font-bold text-white tracking-widest mb-10">
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

            <MenuItem
              href="#language"
              icon={<Languages size={20} />}
              label="English"
              onClose={onClose}
            />

            <MenuItem
              href="#theme"
              icon={<Moon size={20} />}
              label="Tema"
              onClose={onClose}
            />
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
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
