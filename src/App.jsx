import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habitos";
import Hoje from "./pages/Hoje";
import Historico from "./pages/Historico";
import { Context } from "./context/Context";
import { useState } from "react";

export default function App() {

  const [image, setImage] = useState('')
  const [token, setToken] = useState('') 
  const [disable, setDisable] = useState(false) 
  const [renderAdd, setRenderAdd] = useState(false) 
  const [habitsList, setHabitsList] = useState([])
  const [todayList, setTodayList] = useState([]) 
  const [arrayDoneTrue, setArrayDoneTrue] = useState(0) 
  const [name, setName] = useState(""); //para pegar no cancelar 
  const [days, setDays] = useState([]); //para pegar no cancelar
  
  return (
    <Context.Provider value={{
      token,
      setToken,
      image,
      setImage,
      disable,
      setDisable,
      renderAdd,
      setRenderAdd,
      habitsList,
      setHabitsList,
      todayList, 
      setTodayList,
      arrayDoneTrue, 
      setArrayDoneTrue,
      name, 
      setName,
      days, 
      setDays
    }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Habitos />} />
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/historico" element={<Historico/>} />
      </Routes>
    </BrowserRouter>
    </Context.Provider>
  );
}
