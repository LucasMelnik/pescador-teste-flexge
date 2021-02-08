import './App.css';
import {useState} from 'react'
import Cadastro from './components/Modal/Modal'
import Teste from './components/Teste'
import Finalizar from './components/Teste/Finalizar'
import Title from './components/Teste/Title'
import Header from './components/Header/Header'
import {axios} from 'axios'



function App() {
  
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [hora1, setHora1] = useState(null)
  const [hora2, setHora2] = useState(null)
  
  const handleChangeNome = (e) => {
    setNome(e.target.value)
    console.log(nome)
  }
  
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }
  
  const handleChangePhone = (e) => {
    setPhone(e.target.value)
    console.log(phone)
  }

  const handleSubmit = (e) => {
    setHora2(e.target.value)
    console.log(hora2)
  }

  return (
    
    <div>
      <Cadastro inicio={hora1} setInicio={setHora1} fctNome={handleChangeNome} fctEmail={handleChangeEmail} fctPhone={handleChangePhone}/>
      <Header/>
      <div className="head">
        <div className="title-sec">
          <Title/>
        </div>
        <div className="btn-sec">
          <Finalizar fct={handleSubmit}/>
        </div>
      </div>
      <Teste/>
    </div>
  );
}

export default App;
