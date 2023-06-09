import styled from "styled-components";
import Topo from "../components/Topo";
import Menu from "../components/Menu";

export default function Historico() {
  return (
    <>
      <Topo />

      <DivContainer>
        <h2>Histórico</h2>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </DivContainer>

      <Menu />
    </>
  );
}

const DivContainer = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  padding-left: 10px;
  padding-right: 10px;
  
  h2 {
    color: #126ba5;
    font-weight: 400;
    font-size: 23px;
    margin-top: 100px;
    margin-bottom: 30px;
  }

  p {
    color: #666666;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
`;
