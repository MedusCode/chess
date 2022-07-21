import Colors from './colors';
import Piece from "./pieces/piece";
import Board from "./board";

export default class Cell {
  id: number;
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  board: Board;
  piece: Piece | null;
  isAvailable: boolean;

  constructor(board: Board, x: number, y: number, color: Colors, piece: Piece | null) {
    this.board = board;
    this.x = x;
    this.y = y;
    this.color = color;
    this.piece = piece;
    this.isAvailable = false;
    this.id = Math.random();
  }
}