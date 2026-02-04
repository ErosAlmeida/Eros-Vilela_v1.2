type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <main
      className="
        min-h-screen pt-16
        bg-slate-50 text-slate-800
        dark:bg-slate-950 dark:text-slate-100
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-10">{children}</div>
    </main>
  );
}
