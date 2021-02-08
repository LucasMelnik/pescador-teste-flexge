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
  return (
    
    <div>
      <Cadastro fctNome={handleChangeNome} fctEmail={handleChangeEmail} fctPhone={handleChangePhone}/>
      <Header/>
      <div className="container head">
          <Title/>
          <Finalizar/>
      </div>
      <Teste/>
    </div>
  );
}

export default App;
