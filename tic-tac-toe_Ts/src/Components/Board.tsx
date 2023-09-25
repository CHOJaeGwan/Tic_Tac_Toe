import React from "react";
import { BoardRow, GameBoard } from "../Styles/StyledBoard";
import Square from "./Square";

interface BoardProps {
  squares: Array<"O" | "X">;
  onClick(i: number): void;
}
interface BoardState {
  Square: any;
}

export default class Board extends React.Component<BoardProps, BoardState> {
  public render(): JSX.Element {
    return (
      <GameBoard>
        <BoardRow>
          {this._renderSquare(0)}
          {this._renderSquare(1)}
          {this._renderSquare(2)}
        </BoardRow>
        <BoardRow>
          {this._renderSquare(3)}
          {this._renderSquare(4)}
          {this._renderSquare(5)}
        </BoardRow>
        <BoardRow>
          {this._renderSquare(6)}
          {this._renderSquare(7)}
          {this._renderSquare(8)}
        </BoardRow>
      </GameBoard>
    );
  }
  private _renderSquare(i: number): JSX.Element {
    const squares = this.props.squares;
    return <Square value={squares[i]} onClick={() => this.props.onClick(i)} />;
  }
}
