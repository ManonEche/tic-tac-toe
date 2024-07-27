"use client";

import Image from "next/image";
import { useState } from "react";
import Confetti from 'react-confetti'

export default function Content() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [selectedBoard, setSelectedBoard] = useState(0);

  const boardImages = [
    "/basket.webp",
    "/beach.webp",
    "/biscuit.webp",
    "/galaxy.webp",
    "/nenuphar.webp",
    "/orange.webp",
    "/platter.webp",
    "/sakura.webp",
    "/sushimat.webp"
  ]

  const pawnsForBoards = {
    0: {
      X: "/basketpawn1.webp",
      O: "/basketpawn2.webp",
    },
    1: {
      X: "/beachpawn1.webp",
      O: "/beachpawn2.webp",
    },
    2: {
      X: "/biscuitpawn1.webp",
      O: "/biscuitpawn2.webp",
    },
    3: {
      X: "/galaxypawn1.webp",
      O: "/galaxypawn2.webp",
    },
    4: {
      X: "/nenupharpawn1.webp",
      O: "/nenupharpawn2.webp",
    },
    5: {
      X: "/orangepawn1.webp",
      O: "/orangepawn2.webp",
    },
    6: {
      X: "/platterpawn1.webp",
      O: "/platterpawn2.webp",
    },
    7: {
      X: "/sakurapawn1.webp",
      O: "/sakurapawn2.webp",
    },
    8: {
      X: "/sushimatpawn1.webp",
      O: "/sushimatpawn2.webp",
    }

  }

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
            src={pawnsForBoards[selectedBoard][board[index]]}
            width={160}
            height={160}
            alt="Pion"
          />
        )}
      </button>
    </div>
  )

  const changeBoard = () => {
    setSelectedBoard((prevIndex) => (prevIndex + 1) % boardImages.length);
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

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
    <main className="px-6 py-12 flex flex-col justify-center items-center">
      <div className="text-2xl">{status}</div>

      <div className="text-lg mt-8 mb-10">
        <button
          onClick={changeBoard}
          className="hover:opacity-85 text-lg py-3 px-6 rounded-full bg-gradient-to-r from-primary to-secondary"
        >
          Changer le plateau
        </button>
      </div>

      <div className="relative w-4/4 md:w-2/4 aspect-square">
        <Image src={boardImages[selectedBoard]} width={2000} height={2000} alt="Plateau" className="w-full h-auto" />
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

