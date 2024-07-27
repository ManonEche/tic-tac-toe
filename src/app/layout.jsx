import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://tictactoe.manon-eche.com"),
  title: "Tic Tac Toe",
  description: "Le jeu du morpion, revisité !",
  keywords: ["Tic-tac-toe", "Morpion", "Oxo", "Trois en ligne", "Jeu", "Grille 3x3", "Victoire", "Jouer au tic-tac-toe", "Règles du tic-tac-toe", "Tic-tac-toe en ligne", "Appli tic-tac-toe", "Tic-tac-toe gratuit", "Histoire du tic-tac-toe", "Variantes du tic-tac-toe", "Tournoi de tic-tac-toe"],

  icons: {
    icon: "/favicon.ico"
  },

  openGraph: {
    type: "website",
    url: "https://tictactoe.manon-eche.com",
    title: "Le jeu du morpion, revisité",
    siteName: "Tic Tac Toe",
    description:
      "Chaque case est une opportunité, saisis-la pour remporter la victoire !",
    images: [
      {
        url: "/socialcard.webp",
        width: 1200,
        height: 630,
        alt: "Tic Tac Toe image",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="bg-tictactoe">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
