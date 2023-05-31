import styled from "styled-components";
import Topo from "../components/Topo";
import Menu from "../components/Menu";
import ItemHabitos from "../components/ItemHabitos";
import CriarHabito from "../components/CriarHabito";
import { useState } from "react";

export default function Habitos() {

  
  const [mostrando, setMostrando] = useState("displayTela1");

  const [nameHabit, setNameHabit] = useState("");
  const [escolhiDia, setEscolhiDia] = useState([]);
  const [itensHabitos, setItensHabitos] = useState([])
  const [isDisabled, setIsDisabled] = useState(false);

  function TheAdd() {
    //if resposta array da lista de habitos estiver[]
    setMostrando("displayTela2");
    //else, já estaria renderizando a tela3
  }

  console.log('pegando array dias da semana em escolhiDia', escolhiDia)
  console.log('pegando string nome do habito em nameHabit', nameHabit)

  return (
    <>
      <Topo />

      <DivContainer>
        <DivAdcHabito>
          <h2>Meus Hábitos</h2>
          <button onClick={TheAdd}>+</button>
        </DivAdcHabito>


        {mostrando === "displayTela1" && (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        )}

        {mostrando === "displayTela2" && (
          <CriarHabito 
          mostrando={mostrando} 
          setMostrando={setMostrando} 
          nameHabit={nameHabit}
          setNameHabit={setNameHabit}
          escolhiDia={escolhiDia}
          setEscolhiDia={setEscolhiDia}
          itensHabitos={itensHabitos}
          setItensHabitos={setItensHabitos}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
          />
        )}

        {mostrando === "displayTela3" && (
          <ItemHabitos 
          mostrando={mostrando} 
          setMostrando={setMostrando} 
          nameHabit={nameHabit}
          setNameHabit={setNameHabit}
          escolhiDia={escolhiDia}
          setEscolhiDia={setEscolhiDia}
          itensHabitos={itensHabitos}
          setItensHabitos={setItensHabitos}
          />
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
