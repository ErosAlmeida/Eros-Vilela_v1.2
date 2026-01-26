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
      <body className="qualquer">
        <header className="flex  justify-center items-center leading-[50px]">
          <h1 className="italic text-blue-800">PORTIFOLIO</h1>
        </header>

        <div className="text-red-800">{children}</div>

        <footer>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
