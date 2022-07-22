import Piece, { PieceNames } from "./piece";
import Colors from "../colors";
import Cell from "../cell";
import blackImg from "../../assets/images/black-king.svg";
import whiteImg from "../../assets/images/white-king.svg";

export default class King extends Piece {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = PieceNames.KING;
    this.img = color === 'black' ? blackImg : whiteImg;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    // todo: king moves

    return false;
  }
}