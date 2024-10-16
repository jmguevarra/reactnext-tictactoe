"use client";

import { Button, message } from "antd";
import { useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    message.success("Game Reset!");
  };

  const renderSquare = (index: number) => (
    <button
      className="w-20 h-20 border border-gray-500 text-2xl flex justify-center items-center"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  );

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-4">Tic-Tac-Toe</h1>
      <div className="grid grid-cols-3 gap-1 mb-4">
        {board.map((_, i) => renderSquare(i))}
      </div>
      {winner ? (
        <p className="text-xl text-green-500">Winner: {winner}</p>
      ) : (
        <p className="text-xl">Next Player: {isXNext ? "X" : "O"}</p>
      )}
      <Button type="primary" onClick={resetGame} className="mt-4">
        Reset Game
      </Button>
    </div>
  );
}

function calculateWinner(squares: string[]): string | null {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
