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
}