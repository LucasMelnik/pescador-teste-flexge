import React from 'react'
import '../../../styles/bootstrap-5.0.0-beta1-dist/css/bootstrap.min.css'
import './Formulario.css'
import Logo from '../../../img/logo-flexge-white.png'

function handleSubmit(event){
    event.preventDefault()
}

function Formulario (props) {

    return(
        
        <div className="cadastro">
            
            <form className="form-cadastro">
                <img src={Logo} width="170" height="70"></img>
                <div className="input-sec">
                    <label>Nome completo</label>
                    <input className="form-control" type="text"></input>
                </div>
                <div className="input-sec">
                    <label>E-mail</label>
                    <input className="form-control" type="email"></input>
                </div>
                <div className="input-sec">
                    <label>Telefone</label>
                    <input className="form-control" type="tel"></input>
                </div>
                <button onClick={handleSubmit, props.fct}>Iniciar teste</button>
            </form>
        </div>
        
    )

}

export default Formulario;