import React from 'react'
import Barco from './Barco'

import './style/Colunas.css'

function Colunas (props) {

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
            <Barco
                name="Barco 1" 
                cor="Verde" 
                barco="Thor" 
                pescador="Daniel" 
                sanduiche="Frango" 
                peixe="Pacu" 
                profissao="Professor"
                setBarco={props.setBarco1}
            />
            <Barco 
                name="Barco 2" 
                cor="Azul" 
                barco="Santa-Monica" 
                pescador="André" 
                sanduiche="Salame" 
                peixe="Jaú" 
                profissao="Policial"
                setBarco={props.setBarco2}
            />
            <Barco
                name="Barco 3" 
                cor="Vermelho" 
                barco="Pacífico" 
                pescador="Rodrigo" 
                sanduiche="Atum" 
                peixe="Dourado" 
                profissao="Veterinário"
                setBarco={props.setBarco3}
            />
            <Barco 
                name="Barco 4" 
                cor="Amarelo" 
                barco="Alvorada" 
                pescador="Junior" 
                sanduiche="Queijo" 
                peixe="Jurupoca" 
                profissao="Analista"
                setBarco={props.setBarco4}
            />
            <Barco 
                name="Barco 5" 
                cor="Branco" 
                barco="Saturno" 
                pescador="Leandro" 
                sanduiche="Presunto" 
                peixe="Traíra" 
                profissao="Vendedor"
                setBarco={props.setBarco5}
            />
        </div>
    )

}

export default Colunas;