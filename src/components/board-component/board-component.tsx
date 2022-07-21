import { FC, Fragment } from 'react';
import styles from './board-component.module.css';
import Board from "../../models/board";
import CellComponent from "../cell/cell-component";

interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardComponentProps> = ({ board, setBoard }) => {


  return (
    <div className={styles.board}>
      {board.cells.map((row, index) => (
        <Fragment key={index}>
          {row.map(cell => (
            <CellComponent  cell={cell} key={cell.id}/>
          ))}
        </Fragment>
      ))}

    </div>
  );
}

export default BoardComponent;