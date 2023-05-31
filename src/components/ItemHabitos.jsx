import styled from "styled-components";
import SequenciaDiasDaSemana from "./SequenciaDiasDaSemana";
import dias from "../diasdasemana";
import SequenciaCompleta from "./SequenciaCompleta";

export default function ItemHabitos(props) {
  const {
    nameHabit,
    escolhiDia,
  } = props;

  console.log("escolhi dia em ITEMMMM", escolhiDia);

  return (
    <DivItemHabito>
      <DivItemUp>
        <h4>{nameHabit}</h4>
        <ion-icon name="trash-outline"></ion-icon>
      </DivItemUp>

      <DivItemDown>
        {/* {dias.map((calendarioCompleto) => (
          <div 
          key={calendarioCompleto.id}
          style={{ background: escolhiDia.includes(calendarioCompleto.id) ? "red" : "green" }}
          >{calendarioCompleto.sigla}</div>
        ))} */}
        {dias.map((calendarioCompleto) => (
          <SequenciaCompleta
            key={calendarioCompleto.id}
            id={calendarioCompleto.id}
            escolhiDia={escolhiDia}
            sigla={calendarioCompleto.sigla}
          />
        ))}
      </DivItemDown>
    </DivItemHabito>
  );
}

const DivItemHabito = styled.div`
  background-color: #ffffff;
  height: 94px;
  width: 100%;
  margin-bottom: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DivItemUp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;

  h4 {
    color: #666666;
    font-size: 20px;
    margin-left: 10px;
  }

  ion-icon {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
`;

const DivItemDown = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
`;

const DivIndividualSemana = styled.div`
  margin-left: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  color: #cfcfcf;
  font-weight: 600;
`;
