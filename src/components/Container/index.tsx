type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-10">{children}</div>
    </div>
  );
}
