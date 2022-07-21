import { FC, useEffect, useState } from 'react';
import styles from './app.module.css';
import Board from "../../models/board";
import BoardComponent from "../board-component/board-component";

const App: FC = () => {
  const [ board, setBoard ] = useState<Board>(new Board());

  const start = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addPieces();
    setBoard(newBoard);
  }

  useEffect(() => {
    start();
  }, [])

  return (
    <div className={styles.app}>
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;