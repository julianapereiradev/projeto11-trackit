import { useState } from "react";
import styled from "styled-components";

export default function SequenciaDiasDaSemana(props) {

const {id, sigla, escolhiDia, setEscolhiDia } = props

const [isSelected, setIsSelected] = useState(false);


function CliqueiDiadaSemana() {
 
  setIsSelected(!isSelected);

  if (!isSelected === true && !escolhiDia.includes(id)) {
    setEscolhiDia([...escolhiDia, id]);
  }
  if (!isSelected === false && escolhiDia.includes(id)) {
    setEscolhiDia([...escolhiDia].filter((idsInEscolhiDia) => {
        if(idsInEscolhiDia !== id) {
            return true
        } else {
            return false
        }
    }));
  }
}

    return (
        <DivIndividualSemana 
        onClick={() => CliqueiDiadaSemana()}
        isSelected={isSelected}
        >
          {sigla}
        </DivIndividualSemana>
    )
}

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
  color: ${(props) =>
    props.isSelected === true ? "#FFFFFF" : "#DBDBDB"};;
  font-weight: 600;
  background-color: ${(props) =>
    props.isSelected === true ? "#CFCFCF" : "#FFFFFF"};
`;