import styled from "styled-components";
import Topo from "../components/Topo";
import Menu from "../components/Menu";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function Hoje() {
  
  const diaDaSemanaCompleto = dayjs().locale("pt-br").format("dddd");
  const diaMes = dayjs().locale("pt-br").format("DD/MM");

  const removerFeira = diaDaSemanaCompleto.split("-");
  const arraySemana = [...removerFeira[0]];
  const stringSemanaMinuscula = arraySemana.join("");
  const diaDaSemana =
    stringSemanaMinuscula[0].toUpperCase() + stringSemanaMinuscula.substring(1);

  return (
    <>
      <Topo />

      <DivContainer>
        <h2>Hoje</h2>
        {diaDaSemana}, {diaMes}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          placerat semper sapien, at maximus tellus viverra sit amet. Sed
          sagittis sapien et turpis feugiat rhoncus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          placerat semper sapien, at maximus tellus viverra sit amet. Sed
          sagittis sapien et turpis feugiat rhoncus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          placerat semper sapien, at maximus tellus viverra sit amet. Sed
          sagittis sapien et turpis feugiat rhoncus.
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
`;
