import { FC, Fragment, useEffect, useState } from 'react';
import styles from './board-component.module.css';
import Board from "../../models/board";
import CellComponent from "../cell/cell-component";
import Cell from "../../models/cell";
import Player from "../../models/player";
import Colors from "../../models/colors";

interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapTurn: () => void;
}

const BoardComponent: FC<BoardComponentProps> = ({ board, setBoard, currentPlayer, swapTurn }) => {
  const [ selectedCell, setSelectedCell ] = useState<Cell | null>(null);

  const handleCellClick = (cell: Cell) => {
    if (selectedCell && selectedCell !== cell && selectedCell.piece?.canMove(cell)) {
      selectedCell.movePiece(cell);
      setSelectedCell(null);
      swapTurn();
    } else {
      if (cell.piece?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  const showAvailableCells = () => {
    board.showAvailableCells(selectedCell);
    updateBoard();
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  useEffect(() => {
    showAvailableCells();
  }, [selectedCell])

  return (
    <div>
      <h3>Текущий ход: {currentPlayer?.color === Colors.BLACK ? 'Черные' : 'Белые'}</h3>
      <div className={styles.board}>
        {board.cells.map((row, index) => (
          <Fragment key={index}>
            {row.map(cell => (
              <CellComponent
                cell={cell}
                key={cell.id}
                isSelected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                handleClick={handleCellClick}
              />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default BoardComponent;