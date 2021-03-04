import './App.css';
import { useEffect, useState } from 'react';
import Cadastro from './components/Modal/Modal'
import Teste from './components/Teste'
import Finalizar from './components/Teste/Finalizar'
import Title from './components/Teste/Title'
import Header from './components/Header/Header'
import axios from 'axios'
import LogRocket from 'logrocket';

// LogRocket.init('qu0hzp/flexge-website');


function App() {

  useEffect(() => { LogRocket.startNewSession() } ,[])

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [horaInicio, setHoraInicio] = useState()

  const [barco1, setBarco1] = useState({})
  const [barco2, setBarco2] = useState({})
  const [barco3, setBarco3] = useState({})
  const [barco4, setBarco4] = useState({})
  const [barco5, setBarco5] = useState({})

  const [result, setResult] = useState("correct")

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
    // LogRocket.identify(email, {
    //   name: nome,
    //   email,
    // });
    console.log(email, {
      name: nome,
      email,
    });
  }

  const handleFinish = async () => {
    verifyResult(barco1)
    verifyResult(barco2)
    verifyResult(barco3)
    verifyResult(barco4)
    verifyResult(barco5)
console.log({nome,
  email,
  phone,
  tempo: (Date.now() - horaInicio.valueOf()) / 60000,
  result,
  logRocketUrl: LogRocket.sessionURL})
    return;
    await axios.post("https://api.flexge.com/public/teste-pescador-finalizado", {
      nome,
      email,
      phone,
      tempo: (Date.now() - horaInicio.valueOf()) / 60000,
      result,
      logRocketUrl: LogRocket.sessionURL
    });
  }

  function verifyResult (state) {
    let color = state.color
    let boat = state.boat
    let fisherman = state.fisherman
    let sanduich = state.sanduich
    let fish = state.fish
    let profession = state.profession

    if (color == "correct") { } else {
      setResult("wrong")
      console.log('seto')
    }

    if (boat == "correct") { } else {
      setResult("wrong")
    }

    if (fisherman == "correct") { } else {
      setResult("wrong")
    }

    if (sanduich == "correct") { } else {
      setResult("wrong")
    }

    if (fish == "correct") { } else {
      setResult("wrong")
    }

    if (profession == "correct") { } else {
      setResult("wrong")
    }
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
          <Finalizar 
            fct={handleFinish}
          />
        </div>
      </div>
      <Teste
        setBarco1={setBarco1}
        setBarco2={setBarco2}
        setBarco3={setBarco3}
        setBarco4={setBarco4}
        setBarco5={setBarco5}
      />
    </div>
  );
}

export default App;
