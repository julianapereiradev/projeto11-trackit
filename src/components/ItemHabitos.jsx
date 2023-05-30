import styled from "styled-components";

export default function ItemHabitos() {
  const dias = [
    { id: 7, diaSemana: "domingo", sigla: "D" },
    { id: 1, diaSemana: "segunda", sigla: "S" },
    { id: 2, diaSemana: "terça", sigla: "T" },
    { id: 3, diaSemana: "quarta", sigla: "Q" },
    { id: 4, diaSemana: "quinta", sigla: "Q" },
    { id: 5, diaSemana: "sexta", sigla: "S" },
    { id: 6, diaSemana: "sabado", sigla: "S" },
    
  ];

  return (
    <DivItemHabito>
      <DivItemUp>
        <h4>Ler 1 capítulo de livro</h4>
        <ion-icon name="trash-outline"></ion-icon>
      </DivItemUp>

      <DivItemDown>
        {dias.map((calendario) => (
          <DivIndividualSemana>{calendario.sigla}</DivIndividualSemana>
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
  border: 1px solid #CFCFCF;
  color: #CFCFCF;
  font-weight: 600;

`;
