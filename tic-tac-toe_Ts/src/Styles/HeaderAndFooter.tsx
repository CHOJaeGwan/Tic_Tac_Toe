// styles.ts
import styled from "styled-components";

interface StyledHeaderFooterProps {
  backgroundColor: string;
  isHeader?: boolean;
}

export const StyledHeaderFooter = styled.div<StyledHeaderFooterProps>`
  display: flex;
  background-color: ${(props) => props.backgroundColor};
  border: 3px solid #eec3a0;
  color: rgb(230, 120, 9);
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 3em;
  margin-right: 10rem;
  margin-left: 10rem;

  p {
    font-size: ${(props) => (props.isHeader ? "30px" : "24px")};
    margin: 0;
    text-shadow: ${(props) =>
      props.isHeader ? "2px 2px 2px rgb(248, 161, 135)" : "none"};
  }
`;

export const Entire = styled.div`
  background-color: #ffedcc;
  margin: 0;
  font-family: Arial, sans-serif;
  height: 100vh;
`;
