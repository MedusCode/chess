import Piece, { PieceNames } from "./piece";
import Colors from "../colors";
import Cell from "../cell";
import blackImg from "../../assets/images/black-bishop.svg";
import whiteImg from "../../assets/images/white-bishop.svg"

export default class Bishop extends Piece {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = PieceNames.BISHOP;
    this.img = color === 'black' ? blackImg : whiteImg;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    return this.cell.isDiagonalEmpty(target);

  }
}