import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Modal} from '@material-ui/core'
import Congrats from './Congrats'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      background: "#017b6e",
      color: "white"
    },
  },
}));


export default function Finalizar(props) {

    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
        props.fct();
    }
    
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Button type="submit" variant="contained" id="end-test" value={new Date()} onClick={handleOpen}>
                Finalizar Teste
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Congrats/>
            </Modal>
        </div>
    );
}
