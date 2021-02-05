import {React, useState} from 'react'
import '../../../styles/bootstrap-5.0.0-beta1-dist/css/bootstrap.min.css'
import './Formulario.css'
import Logo from '../../../img/logo-flexge-white.png'
import $ from 'jquery'

function handleSubmit(event){
    event.preventDefault()
}


function Formulario (props) {
    
    const [data1, setData1] = useState('')
    
    $('#form-submit').on('click', function(){
        setData1(new Date())
        console.log(data1)
    })

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
                <button id="form-submit" onClick={handleSubmit, props.fct}>Iniciar teste</button>
            </form>
        </div>
        
    )

}

export default Formulario;