import styled from "styled-components";
import Topo from "../components/Topo";
import Menu from "../components/Menu";
import ItemHabitos from "../components/ItemHabitos";

export default function Habitos() {
  return (
    <>
      <Topo />

      <DivContainer>

        <DivAdcHabito>
          <h2>Meus Hábitos</h2>
          <button>+</button>
        </DivAdcHabito>

        <div>
          <ItemHabitos />
          <ItemHabitos />
          <ItemHabitos /> 
        </div>

        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
        
      </DivContainer>

      <Menu />
    </>
  );
}

const DivContainer = styled.div`
  margin-top: 80px; /* Altura da navbar + espaço de margem */
  margin-left: 10px;
  margin-right: 10px;

  p {
    color: #666666;
    font-weight: 400;
    font-size: 18px;
  }
`;

const DivAdcHabito = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  button {
    width: 40px;
    height: 35px;
    font-size: 26px;
    text-align: center;
  }

  h2 {
    color: #126ba5;
    font-weight: 400;
    font-size: 23px;
  }
`;
