// AppInner.tsx
import { Entire, StyledHeaderFooter } from "./Styles/HeaderAndFooter";
import Game from "./Components/Game";

export default function AppInner(): JSX.Element {
  return (
    <Entire>
      <StyledHeaderFooter backgroundColor="rgba(240, 180, 131, 0.5)" isHeader>
        <p>Enjoy Tic-Tac-Toe Game!</p>
      </StyledHeaderFooter>
      <div>
        <Game />
      </div>
      <StyledHeaderFooter
        backgroundColor="rgba(240, 180, 131, 0.5)"
        onClick={() => window.location.reload()}
      >
        <p>Restart</p>
      </StyledHeaderFooter>
    </Entire>
  );
}
