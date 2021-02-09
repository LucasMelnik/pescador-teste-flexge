import {React} from 'react'
import '../../../styles/bootstrap-5.0.0-beta1-dist/css/bootstrap.min.css'
import './Formulario.css'
import Logo from '../../../img/logo-flexge-white.png'
import {TextField, Button} from '@material-ui/core'



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
                    <TextField label="Nome Completo" className="form-control" onChange={props.fctNome} type="text"/>
                    <TextField label="E-mail" className="form-control" onChange={props.fctEmail} type="text"/>
                    <TextField label="Telefone" className="form-control" onChange={props.fctPhone} type="text"/>
                </div>
                <Button variant="contained" type="submit" onClick={props.fct}>Iniciar teste</Button>
            </form>
        </div>
        
    )

}

export default Formulario;