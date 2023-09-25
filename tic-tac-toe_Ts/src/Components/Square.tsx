import styled from "styled-components";

const Button = styled.button`
  width: 33.33333333%;
  height: 100%;
  font-size: 60px;
  background-color: #ffebb3;
  border: 1px solid #ffbb7b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #ffddb3;
  }
`;

interface SquareProps {
  value: "O" | "X";
  onClick(): void;
}

export default function Square(props: SquareProps): JSX.Element {
  return <Button onClick={() => props.onClick()}>{props.value}</Button>;
}
