import Link from "next/link";

type MobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <>
      {/* Overlay escuro */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-8">MENU</h2>

          <nav className="flex flex-col gap-6">
            <Link
              href="#init"
              onClick={onClose}
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Inicio
            </Link>

            <Link
              href="#about"
              onClick={onClose}
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Sobre Mim
            </Link>

            <Link
              href="#habilit"
              onClick={onClose}
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Habilidades
            </Link>

            <Link
              href="#knowledge"
              onClick={onClose}
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Conhecimentos
            </Link>

            <Link
              href="#project"
              onClick={onClose}
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Meus Projetos
            </Link>

            <Link
              href="#contact"
              onClick={onClose}
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Contato
            </Link>

            <Link
              href="#language"
              onClick={onClose}
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Idioma
            </Link>

            <Link
              href="#theme"
              onClick={onClose}
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Tema
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}
