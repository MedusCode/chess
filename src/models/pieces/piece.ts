import img from '../../assets/images/black-king.svg';
import Colors from "../colors";
import Cell from "../cell";

enum PieceNames {
  KING = 'Король',
  QUEEN = 'Ферзь',
  BISHOP = 'Слон',
  ROOK = 'Ладья',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  PIECE = 'Фигура',
}

export default class Piece {
  id: number;
  color: Colors;
  img: typeof img | null;
  cell: Cell;
  name: PieceNames;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.piece = this;
    this.img = null;
    this.name = PieceNames.PIECE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    return true;
  }

  movePiece(target: Cell) {

  }
}

export { PieceNames }