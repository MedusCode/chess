import Piece, { PieceNames } from "./piece";
import Colors from "../colors";
import Cell from "../cell";
import blackImg from "../../assets/images/black-rook.svg";
import whiteImg from "../../assets/images/white-rook.svg";

export default class Rook extends Piece {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = PieceNames.ROOK;
    this.img = color === 'black' ? blackImg : whiteImg;
  }
}