type MenuButtonProps = {
  onClick: () => void;
};

export function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Abrir menu"
      className="flex flex-col gap-1.5 p-2 rounded-md hover:bg-slate-100 transition"
    >
      <span className="w-6 h-0.5 bg-slate-800"></span>
      <span className="w-6 h-0.5 bg-slate-800"></span>
      <span className="w-6 h-0.5 bg-slate-800"></span>
    </button>
  );
}
