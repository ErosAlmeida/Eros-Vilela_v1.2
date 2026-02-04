import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portifolio",
  description: "Essa seria a descrição dessa página.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors">
        {children}

        <footer>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
