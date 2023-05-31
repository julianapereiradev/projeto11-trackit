import styled from "styled-components";
import Topo from "../components/Topo";
import Menu from "../components/Menu";
import ItemHabitos from "../components/ItemHabitos";
import CriarHabito from "../components/CriarHabito";
import { useState } from "react";

export default function Habitos() {
  const [mostrando, setMostrando] = useState("displayTela1");

  function TheAdd() {
    alert("Clicou no + ");
    setMostrando("displayTela2");
  }

  return (
    <>
      <Topo />

      <DivContainer>
        <DivAdcHabito>
          <h2>Meus Hábitos</h2>
          <button onClick={TheAdd}>+</button>
        </DivAdcHabito>

        {/* <div>
          <CriarHabito />
          <ItemHabitos />
          <ItemHabitos />
          <ItemHabitos /> 
        </div> */}

        {mostrando === "displayTela1" && (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        )}

        {mostrando === "displayTela2" && (
          <CriarHabito />
        )}
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
