import styled from "styled-components";
import Topo from "../components/Topo";
import Menu from "../components/Menu";

export default function Habitos() {
    return (
        <>
          <Topo />
    
          <DivContainer>
            <h2>Habitos</h2>
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
    `;