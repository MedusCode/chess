import Piece, { PieceNames } from "./piece";
import Colors from "../colors";
import Cell from "../cell";
import blackImg from "../../assets/images/black-pawn.svg";
import whiteImg from "../../assets/images/white-pawn.svg";

export default class Pawn extends Piece {

  isFirstStep: boolean = true;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = PieceNames.PAWN;
    this.img = color === 'black' ? blackImg : whiteImg;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    const direction = this.cell.piece?.color === Colors.BLACK ? 1 : -1;
    const firstStepDirection = this.cell.piece?.color === Colors.BLACK ? 2 : -2;

    if ((target.y === this.cell.y + direction || (this.isFirstStep && target.y === this.cell.y + firstStepDirection))
      && target.x === this.cell.x && this.cell.board.getCell(target.x, target.y).isEmpty()) return true;

    if (target.y === this.cell.y + direction && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
    && this.cell.isEnemy(target)) return true;

    return false;
  }

  movePiece(target: Cell) {
    super.movePiece(target);
    this.isFirstStep = false;
  }
}