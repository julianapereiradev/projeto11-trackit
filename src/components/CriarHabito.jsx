import { useState } from "react";
import styled from "styled-components";
import dias from '../diasdasemana'
import SequenciaDiasDaSemana from "./SequenciaDiasDaSemana";

export default function CriarHabito(props) {

  const {setMostrando, nameHabit, setNameHabit, escolhiDia, setEscolhiDia } = props

  // const [nameHabit, setNameHabit] = useState("");
  // const [escolhiDia, setEscolhiDia] = useState([]);

function SaveHabit(e) {
  e.preventDefault();
//aqui você fará o post no formato:
// {
// 	name: "Nome do hábito",
// 	days: [1, 3, 5] // segunda, quarta e sexta
// }
setMostrando("displayTela3")
}

function CancelAdc() {
  setMostrando("displayTela1")
  //falta fazer a lógica de pegar o que foi 
  //escrito para quando clicar no + de novo, 
  //ele voltar com os dados
}

// console.log('pegando array dias da semana em escolhiDia', escolhiDia)
// console.log('pegando string nome do habito em nameHabit', nameHabit)

  return (
    <>
      <DivItemHabito onSubmit={SaveHabit}>
        <DivItemUp>
          <input 
          type="text" 
          placeholder="nome do hábito"
          required
          value={nameHabit}
          onChange={ (e) => setNameHabit(e.target.value)} 
          />
        </DivItemUp>

        <DivItemDown>
          {dias.map((calendario) => (
            <SequenciaDiasDaSemana 
            key={calendario.id}
            id={calendario.id}
            diaSemana={calendario.diaSemana}
            sigla={calendario.sigla}
            escolhiDia={escolhiDia}
            setEscolhiDia={setEscolhiDia}
            />
          ))}
        </DivItemDown>

        <DivButtons>
          <ButtonSemCor onClick={CancelAdc}>Cancelar</ButtonSemCor>
          <button type="submit">Salvar</button>
        </DivButtons>
      </DivItemHabito>

      <p style={{marginTop: '20px'}}>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </p>
    </>
  );
}

const DivItemHabito = styled.form`
  background-color: #ffffff;
  height: 180px;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 7px;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const DivItemUp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;

  input {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    width: 100%;
  }
`;

const DivItemDown = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
`;

// const DivIndividualSemana = styled.div`
//   margin-left: 5px;
//   width: 30px;
//   height: 30px;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   border-radius: 5px;
//   border: 1px solid #cfcfcf;
//   color: #cfcfcf;
//   font-weight: 600;
// `;

const DivButtons = styled.div`
  align-self: flex-end;
  margin-top: 20px;
  margin-right: 20px;

  button {
    width: 84px;
    height: 35px;
    cursor: pointer;
  }
`;

const ButtonSemCor = styled.button`
  width: 84px;
  height: 35px;
  background-color: #FFFFFF;
  color: #52b6ff;
  margin-right: 10px;
  cursor: pointer;
`;
