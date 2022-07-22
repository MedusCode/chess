import Piece, { PieceNames } from "./piece";
import Colors from "../colors";
import Cell from "../cell";
import blackImg from "../../assets/images/black-knight.svg";
import whiteImg from "../../assets/images/white-knight.svg";

export default class Knight extends Piece {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = PieceNames.KNIGHT;
    this.img = color === 'black' ? blackImg : whiteImg;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    const deltaX = Math.abs(this.cell.x - target.x);
    const deltaY = Math.abs(this.cell.y - target.y);

    return (deltaX === 1 && deltaY === 2) || (deltaX === 2 && deltaY === 1);
  }
}