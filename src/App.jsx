import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habitos";
import Hoje from "./pages/Hoje";
import Historico from "./pages/Historico";
import { Context } from "./context/Context";
import { useState } from "react";

export default function App() {

  const [token, setToken] = useState('')
  const [image, setImage] = useState('')
  const [enabled, setEnabled] = useState(false)
  const [name, setName] = useState('')
  const [add, setAdd] = useState(false)
  const [habitsList, setHabitsList] = useState([])
  const [days, setDays] = useState([])
  const [todaysHabitsList, setTodaysHabitsList] = useState([])

  
  return (
    <Context.Provider value={{
      token,
      setToken,
      image,
      setImage,
      enabled,
      setEnabled,
      name,
      setName,
      add,
      setAdd,
      habitsList,
      setHabitsList,
      days,
      setDays,
      todaysHabitsList, 
      setTodaysHabitsList,
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
