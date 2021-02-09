import React from 'react'
import Logo from '../../img/clapping.png'

import './style/Congrats.css'

export default function Congrats() {
    
    return(
        <div className="popup">
            <div className="congrats">
                <h2>Parabéns!</h2>
                <p className="phase"><srong>Você finalizou o teste.</srong></p>
                <img src={Logo} alt="logo" width="70" height="70"></img>
                <p>Seu resutado foi enviado para nós.</p>
            </div>
        </div>
    )
}