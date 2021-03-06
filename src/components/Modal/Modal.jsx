import React, { useEffect } from 'react';
import '../../styles/bootstrap-5.0.0-beta1-dist/css/bootstrap.min.css'
import Formulario from './Form/Formulario'
import { Modal } from '@material-ui/core'

export default function Cadastro(props) {

    const [open, setOpen] = React.useState(true);
  
    const handleClose = () => {
        setOpen(false);
        props.onClose();
    };

    return (
        <div>
            <Modal
            open={open}
            onClose={handleClose}
            >
                <Formulario inicio={props.inicio} setInicio={props.setInicio} onSubmit={handleClose} fctNome={props.fctNome} fctEmail={props.fctEmail} fctPhone={props.fctPhone}/>
            </Modal>
        </div>
    );
}