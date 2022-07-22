import { FC, useEffect, useState } from 'react';
import styles from './app.module.css';
import Board from "../../models/board";
import BoardComponent from "../board-component/board-component";
import Player from "../../models/player";
import Colors from "../../models/colors";

const App: FC = () => {
  const [ board, setBoard ] = useState<Board>(new Board());
  const [ blackPlayer, setBlackPlayer ] = useState<Player>(new Player(Colors.BLACK));
  const [ whitePlayer, setWhitePlayer ] = useState<Player>(new Player(Colors.WHITE));
  const [ currentPlayer, setCurrentPlayer ] = useState<Player | null>(null);

  const start = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addPieces();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  }

  const swapTurn = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.BLACK ? whitePlayer : blackPlayer);
  }

  useEffect(() => {
    start();
  }, [])

  return (
    <div className={styles.app}>
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapTurn={swapTurn}
      />
    </div>
  );
}

export default App;