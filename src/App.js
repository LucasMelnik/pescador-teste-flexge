import './App.css';
import { useEffect, useState } from 'react';
import Cadastro from './components/Modal/Modal'
import Teste from './components/Teste'
import Finalizar from './components/Teste/Finalizar'
import Title from './components/Teste/Title'
import Header from './components/Header/Header'
import axios from 'axios'
import LogRocket from 'logrocket';

LogRocket.init('qu0hzp/flexge-website');


function App() {

  useEffect(() => { LogRocket.startNewSession() } ,[])

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [horaInicio, setHoraInicio] = useState()

  const handleChangeNome = (e) => {
    setNome(e.target.value)
  }
  
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  
  const handleChangePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleClose = () => {
    LogRocket.identify(email, {
      name: nome,
      email,
    });
  }

  const handleFinish = async () => {
    await axios.post("https://api.flexge.com/public/teste-pescador-finalizado", {
      nome,
      email,
      phone,
      tempo: (Date.now() - horaInicio.valueOf()) / 60000,
      logRocketUrl: LogRocket.sessionURL
    });
  }

  return (
    
    <div>
      <Cadastro inicio={horaInicio} setInicio={setHoraInicio} onClose={handleClose} fctNome={handleChangeNome} fctEmail={handleChangeEmail} fctPhone={handleChangePhone}/>
      <Header/>
      <div className="head">
        <div className="title-sec">
          <Title/>
        </div>
        <div className="btn-sec">
          <Finalizar fct={handleFinish}/>
        </div>
      </div>
      <Teste/>
    </div>
  );
}

export default App;
