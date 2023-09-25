import React from "react";
import Board from "./Board";
import {
  BoardContainer,
  GameInfo,
  Main,
  Player,
  Section,
} from "../Styles/MainStyle";

interface GameProps {}
interface GameState {
  history: Array<{ squares: Array<"O" | "X"> }>;
  stepNumber: number;
  xIsNext: boolean;
}

export default class Game extends React.Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }
  public render(): JSX.Element {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner =
      calculateWinner(current.squares) || checkDraw(current.squares);

    let status;
    if (winner === "O" || winner === "X") {
      status = "Winner: " + winner;
    } else if (winner === "DRAW") {
      status = winner;
    } else {
      status = "Current player: " + (this.state.xIsNext ? "X" : "O");
    }

    const moves = history.map((step, move) => {
      const desc = "Move to #" + move;
      return (
        <li key={move}>
          <a href="#" onClick={() => this._jumpTo(move)}>
            {desc}
          </a>
        </li>
      );
    });

    return (
      <Section>
        <Main>
          <BoardContainer>
            <Board
              squares={current.squares}
              onClick={(i) => this._handleClick(i)}
            />
          </BoardContainer>
        </Main>
        <GameInfo>
          <p>Info</p>
          <Player>{status}</Player>
          <p>you can go back to any step</p>
          <ol>{moves}</ol>
        </GameInfo>
      </Section>
    );
  }
  private _handleClick(i: number): void {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  private _jumpTo(step: number): void {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 ? false : true,
    });
  }
}

// ========================================

function calculateWinner(squares: Array<"O" | "X">): "O" | "X" | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function checkDraw(squares: Array<"O" | "X">): string | null {
  for (var i = 0; i < 8; i++) {
    if (!squares[i]) {
      return null;
    }
  }
  if (!calculateWinner(squares)) {
    return "DRAW";
  }
  return null;
}

{
  /* <div className="game">
  <div className="main">
    <div className="game-board">
      <Board squares={current.squares} onClick={(i) => this._handleClick(i)} />
    </div>
  </div>
  <div className="game-info">
    <div>
      <p>Info</p>
    </div>
    <div className="player">{status}</div>
    <p>you can go back to any step</p>
    <ol>{moves}</ol>
  </div>
</div>; */
}
