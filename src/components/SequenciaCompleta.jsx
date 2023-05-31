import { useState } from "react";
import styled from "styled-components";

export default function SequenciaCompleta(props) {

console.log('props em SWEURFIHREGREG', props)
const {id, sigla, escolhiDia} = props

  return (
    <DivIndividualSemana isSelected={escolhiDia.includes(id)}>
      {sigla}
    </DivIndividualSemana>
  );
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
  color: ${(props) => (props.isSelected === true ? "#FFFFFF" : "#DBDBDB")};
  font-weight: 600;
  background-color: ${(props) =>
    props.isSelected === true ? "#CFCFCF" : "#FFFFFF"};
`;
