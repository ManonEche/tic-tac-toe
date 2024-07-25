import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Tic Tac Toe",
  description: "Le jeu du morpion, revisité !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="bg-tictactoe">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
