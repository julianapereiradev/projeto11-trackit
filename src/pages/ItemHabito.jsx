import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import diasDaSemana from "../constants/diasdasemana";
import axios from "axios";

export default function ItemHabito(props) {
  const { token } = useContext(Context);

  const { id, name, days, reloadAfterAddOrDelete } = props;

  function deletarItemHabito(id) {

    if (window.confirm("Tem certeza que quer deletar este item?")) {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const promise = axios.delete(URL, config);

      promise.then((resp) => {
        reloadAfterAddOrDelete();
        console.log("resp em: DELETE no ItemHabito", resp);
      });


      promise.catch((erro) => {
        alert(erro.response.data.message);
        console.log("erro em: DELETE no ItemHabito", erro);
      });
    } else {
      console.log("Cancelou a ação de deletar");
    }
  }

  return (
    <DivContainerFinishHabits>
      
        <FirstLine>
          <h1>{name}</h1>
          <DeleteIcon onClick={() => deletarItemHabito(id)}><ion-icon name="trash-outline"></ion-icon></DeleteIcon>
        </FirstLine>

        <SecondLine>
          {diasDaSemana.map((buttonDia) => (
            <ButtonCalendar
              key={buttonDia.id}
              id={buttonDia.id}
              daysIncludes={days.includes(buttonDia.id)}
            >
              {buttonDia.day}
            </ButtonCalendar>
          ))}
        </SecondLine>
    
    </DivContainerFinishHabits>
  );
}

export const DivContainerFinishHabits = styled.div`
  width: 100%;
  height: 91px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-left: 10px;
    color: #666666;
    font-size: 20px;
  }
`;

export const SecondLine = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  margin-left: 10px;
`;

export const ButtonCalendar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  margin-right: 5px;
  font-family: "Lexend Deca";
  font-size: 20px;
  color: ${(props) =>
    props.daysIncludes === true ? "#FFFFFF" : "#DBDBDB"};
  background-color: ${(props) =>
    props.daysIncludes === true ? "#CFCFCF" : "#FFFFFF"};
`;

export const DeleteIcon = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border: none;
  background-color: #FFFFFF;
  cursor: pointer;

  ion-icon {
    font-size: 15px;
    color: #666666;
  }
`;
