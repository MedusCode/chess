import { FC } from 'react';
import styles from './cell-component.module.css';
import Cell from "../../models/cell";

interface CellComponentProps {
  cell: Cell;
}

const CellComponent: FC<CellComponentProps> = ({ cell }) => {

  return (
    <div className={`${styles[cell.color]} ${styles.cell}`}>
      {cell.piece?.img && <img className={styles.piece} src={cell.piece.img} alt={cell.piece.name} />}
    </div>
  );
}

export default CellComponent;