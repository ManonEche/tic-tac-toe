"use client";

import Image from "next/image";
import { useState } from "react";
import Confetti from 'react-confetti'

export default function Content() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = (
      <p>
        <span className="text-secondary font-bold">{winner === "X" ? "Joueur 1" : "Joueur 2"}</span> a gagné la partie !
      </p>
    )
  } else {
    status = (
      <p>
        <span className="text-primary font-bold">{isXNext ? "Joueur 1" : "Joueur 2"}</span> est en train de jouer
      </p>
    )
  }

  const handleSquare = (index, position) => (
    <div key={index} className={`absolute ${position} w-1/3 h-1/3 flex justify-center items-center`}>
      <button
        className="w-full h-full flex justify-center items-center"
        onClick={() => handleClick(index)}>

        {board[index] && (
          <Image
            src={`/${board[index] === "X" ? "beachpawn1.webp" : "beachpawn2.webp"}`}
            width={160}
            height={160}
            alt="Pion"
          />
        )}
      </button>
    </div>
  )

  function calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  return (
    <main className="px-6 py-8 flex flex-col justify-center items-center">
      <div className="text-2xl">{status}</div>
      <div className="relative w-2/4 aspect-square">
        <Image src="/beach.webp" width={2000} height={2000} alt="Plateau" className="w-full h-auto" />
        {handleSquare(0, 'top-0 left-0')}
        {handleSquare(1, 'top-0 left-1/3')}
        {handleSquare(2, 'top-0 left-2/3')}
        {handleSquare(3, 'top-1/3 left-0')}
        {handleSquare(4, 'top-1/3 left-1/3')}
        {handleSquare(5, 'top-1/3 left-2/3')}
        {handleSquare(6, 'top-2/3 left-0')}
        {handleSquare(7, 'top-2/3 left-1/3')}
        {handleSquare(8, 'top-2/3 left-2/3')}
      </div>
      {winner && (
        <Confetti
          width={1200}
          height={1200}
          className="w-screen h-screen"
        />
      )}
    </main>
  )
}

