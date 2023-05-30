import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo-trackit.png";

export default function Cadastro() {
    
    return (
        <DivLoginContainer>
          <img src={logo} />
          <p>TrackIt</p>
          <input 
          type="email" 
          placeholder="email" 
          required
          />
          <input 
          type="password" 
          placeholder="senha" 
          required
          />
          <input 
          type="text" 
          placeholder="nome" 
          required
          />
          <input 
          type="text" 
          placeholder="foto" 
          required
          />
          <button 
          type="submit">Cadastrar</button>
          <Link to={`/`} style={{ color: "#52b6ff", fontSize: "14px" }}>
          Já tem uma conta? Faça login!
          </Link>
        </DivLoginContainer>
      );
    }
    
    const DivLoginContainer = styled.form`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 70px;
    
      img {
        width: 180px;
      }
    
      p {
        font-family: "Playball", cursive;
        font-size: 69px;
        color: #126ba5;
        margin-bottom: 40px;
      }
    
      button {
            height: 45px;
            width: 303px;
        font-size: 21px;
        margin-bottom: 30px;
      }
    `;
    