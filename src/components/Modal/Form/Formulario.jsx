import {React} from 'react'
import '../../../styles/bootstrap-5.0.0-beta1-dist/css/bootstrap.min.css'
import './Formulario.css'
import Logo from '../../../img/logo-flexge-white.png'



function Formulario (props) {
    
    function handleSubmit(event){
        event.preventDefault()
        props.setInicio(new Date())
        props.onSubmit();
    }

    return(
        <div className="cadastro">
            <form className="form-cadastro" onSubmit={handleSubmit}>
                <img src={Logo} alt="logo" width="170" height="70"></img>
                <div className="input-sec">
                    <label>Nome completo</label>
                    <input className="form-control" onChange={props.fctNome} type="text"></input>
                </div>
                <div className="input-sec">
                    <label>E-mail</label>
                    <input className="form-control" onChange={props.fctEmail} type="email"></input>
                </div>
                <div className="input-sec">
                    <label>Telefone</label>
                    <input className="form-control" onChange={props.fctPhone} type="tel"></input>
                </div>
                <button type="submit">Iniciar teste</button>
            </form>
        </div>
        
    )

}

export default Formulario;