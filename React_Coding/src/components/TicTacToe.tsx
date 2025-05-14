import React, { useCallback, useState } from "react";
import "./tictactoe.css";

const CELLS_IN_A_LINE = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXplaying] = useState(true);

  const Cell = ({ mark, disabled, onclick }: any) => {
    return (
      <button className="cell" disabled={disabled} onClick={onclick}>
        {mark}
      </button>
    );
  };

  const handleReset = useCallback(() => {
    setBoard(Array(9).fill(null));
    setXplaying(true);
  }, [setBoard, setXplaying]);

  const handleCellClick = useCallback(
    (cellIndex: any, mark: any) => {
      const newBoard = board.slice();
      newBoard[cellIndex] = mark;
      setBoard(newBoard);
      setXplaying(!xPlaying);
    },
    [board, xPlaying, setBoard, setXplaying]
  );

  const getWinner = () => {
    for (let i = 0; i < CELLS_IN_A_LINE.length; i++) {
      const [x, y, z] = CELLS_IN_A_LINE[i];
      if (board[x] !== null && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
  };
  const winner = getWinner();

  return (
    <div className="container">
      <div>{xPlaying ? "X" : "O"} is xPlaying</div>
      {winner && <div>Winner is {winner}</div>}
      <div className="board">
        {Array(9)
          .fill(null)
          .map((_, index) => index)
          .map((cellIndex) => {
            const turn = xPlaying ? "X" : "O";
            return (
              <Cell
                key={cellIndex}
                mark={board[cellIndex]}
                disabled={board[cellIndex] !== null}
                onclick={() => handleCellClick(cellIndex, turn)}
              />
            );
          })}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TicTacToe;
