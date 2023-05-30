import styled from "styled-components";
import Topo from "../components/Topo";
import Menu from "../components/Menu";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import ItemHoje from "../components/ItemHoje";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Hoje(props) {

  const {token} = props;
  console.log('props de token:', props)

  const [buscarHabitos, setBuscarHabitos] = useState([]);

  const diaDaSemanaCompleto = dayjs().locale("pt-br").format("dddd");
  const diaMes = dayjs().locale("pt-br").format("DD/MM");

  const removerFeira = diaDaSemanaCompleto.split("-");
  const arraySemana = [...removerFeira[0]];
  const stringSemanaMinuscula = arraySemana.join("");
  const diaDaSemana =
    stringSemanaMinuscula[0].toUpperCase() + stringSemanaMinuscula.substring(1);


    useEffect( () => {

      const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
  
      const config = {
        headers:{
          Authorization: `Bearer ${token}`
        }
      };
  
      const promise = axios.get(URL, config);
  
      promise.then( resposta => setBuscarHabitos(resposta.data));
  
      promise.catch( erro => console.log('ERRO NO GET DE BUSCAR HÁBITO:',erro.response));
  
    }, []);

    console.log('buscarHabitos::', buscarHabitos)

  return (
    <>
      <Topo />

      <DivContainer>
        <h2>
          {diaDaSemana}, {diaMes}
        </h2>
        <h3>67% dos hábitos concluídos</h3>

        <ItemHoje />
        <ItemHoje />
        <ItemHoje />
        
      </DivContainer>

      <Menu />
    </>
  );
}

const DivContainer = styled.div`
  margin-top: 80px; /* Altura da navbar + espaço de margem */
  margin-left: 10px;
  margin-right: 10px;

  h2 {
    color: #126ba5;
    font-weight: 400;
    font-size: 23px;
    margin-top: 100px;
    margin-bottom: 5px;
  }

  h3 {
    color: #8fc549;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;
