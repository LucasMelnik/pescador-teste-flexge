import React from 'react'
import Barco from './Barco'

import './style/Colunas.css'

function Colunas () {

    return(
        <div className="teste-sec">
            <div className="categories">
                <p>Categorias</p>
                <ul className="list-sec">
                    <li>Cor</li>
                    <li>Barco</li>
                    <li>Pescador</li>
                    <li>Sanduiche</li>
                    <li>Peixe</li>
                    <li>Profissão</li>
                </ul>
            </div>
            <Barco name="Barco 1"/>
            <Barco name="Barco 2"/>
            <Barco name="Barco 3"/>
            <Barco name="Barco 4"/>
            <Barco name="Barco 5"/>
        </div>
    )

}

export default Colunas;