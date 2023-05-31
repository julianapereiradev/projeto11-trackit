import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habitos";
import Hoje from "./pages/Hoje";
import Historico from "./pages/Historico";
import { useState } from "react";
import dias from './diasdasemana'
import { Provider } from "./context/Context";

export default function App() {

  const [token, setToken] = useState('');
  
  return (
    <Provider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Habitos token={token} />} />
        <Route path="/hoje" element={<Hoje token={token} />} />
        <Route path="/historico" element={<Historico token={token} />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}
