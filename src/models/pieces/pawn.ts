import Piece, { PieceNames } from "./piece";
import Colors from "../colors";
import Cell from "../cell";
import blackImg from "../../assets/images/black-pawn.svg";
import whiteImg from "../../assets/images/white-pawn.svg";

export default class Pawn extends Piece {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = PieceNames.PAWN;
    this.img = color === 'black' ? blackImg : whiteImg;
  }
}