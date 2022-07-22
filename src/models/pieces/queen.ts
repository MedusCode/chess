import Piece, { PieceNames } from "./piece";
import Colors from "../colors";
import Cell from "../cell";
import blackImg from "../../assets/images/black-queen.svg";
import whiteImg from "../../assets/images/white-queen.svg";

export default class Queen extends Piece {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = PieceNames.QUEEN;
    this.img = color === 'black' ? blackImg : whiteImg;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isVerticalEmpty(target)) return true;
    if (this.cell.isHorizontalEmpty(target)) return true;
    if (this.cell.isDiagonalEmpty(target)) return true;
    return false;
  }
}