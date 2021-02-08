import React from 'react'
import '../../styles/bootstrap-5.0.0-beta1-dist/css/bootstrap.min.css'
import Formulario from './Form/Formulario'
import { Modal } from '@material-ui/core'

export default function Cadastro(props) {

    const [open, setOpen] = React.useState(false);
  
    const handleClose = () => {
        setOpen(false);
    };
  
    window.onload = function(){
        setOpen(true);
    }

  
    return (
        <div>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                <Formulario inicio={props.inicio} setInicio={props.setInicio} fct={handleClose} fctNome={props.fctNome} fctEmail={props.fctEmail} fctPhone={props.fctPhone}/>
            </Modal>
        </div>
    );
}