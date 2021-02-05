import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import $ from 'jquery'
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


export default function Finalizar() {

    const [data2, setData2] = useState('')
    
    $('#end-test').on('click', function(){
        setData2(new Date())
        console.log(data2)
    })

    const [open, setOpen] = useState(false);
  
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true)
    }
    
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
        
            <Button variant="contained" id="end-test" onClick={handleOpen}>
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
