import { FC } from 'react';
import styles from './cell-component.module.css';
import Cell from "../../models/cell";

interface CellComponentProps {
  cell: Cell;
  isSelected: boolean;
  handleClick: (cell: Cell) => void;
}

const CellComponent: FC<CellComponentProps> = ({ cell, isSelected, handleClick }) => {

  return (
    <div
      className={`${styles[cell.color]} ${styles.cell} ${isSelected ? styles.selected : ''}`}
      onClick={() => handleClick(cell)}
      style={{background: cell.isAvailable && cell.piece ? 'darkseagreen' : ''}} // todo: get out of inline style
    >
      {cell.piece?.img && <img className={styles.piece} src={cell.piece.img} alt={cell.piece.name} />}
      {!cell.piece && cell.isAvailable && <div className={styles.available}></div>}
    </div>
  );
}

export default CellComponent;