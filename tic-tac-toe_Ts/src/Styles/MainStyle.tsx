import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  height: 80vh;
`;

export const Main = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1.8rem;
  padding-left: 20%;
`;

export const BoardContainer = styled(Main)`
  background-color: #fff8e6;
  border: 1px solid #ffbb7b;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 600px;
  width: 600px;
`;

export const GameInfo = styled.div`
  margin: 20px;
  padding: 0.2rem 2rem;
  border: 2px solid #ff5700;
  font-size: 18px;
  width: 35%;
  border-radius: 30px;

  p:first-child {
    font-size: 25px;
    color: #c68b5b;
  }

  ol {
    padding-left: 20px;
    margin-top: 2rem;
  }

  ol li {
    margin-bottom: 10px;
  }

  a {
    color: #ff7400;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #ff5700;
    }
  }
`;

export const Player = styled.div`
  height: 2rem;
  border: 2px solid black;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
