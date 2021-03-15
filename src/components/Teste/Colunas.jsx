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
                    <li>Marca do Carro</li>
                    <li>Nomes</li>
                    <li>Sanduiche</li>
                    <li>Objeto</li>
                    <li>Profissão</li>
                </ul>
            </div>
            <Barco
                name= "Carro 1" 
                cor="Branco" 
                barco="Toyota" 
                pescador="Rafael" 
                sanduiche="Queijo" 
                peixe="Tablet" 
                profissao="Piloto"
                setBarco={props.setBarco1}
            />
            <Barco 
                name="Carro 2" 
                cor="Vermelho" 
                barco="Fiat" 
                pescador="Pedro" 
                sanduiche="Frango" 
                peixe="Caixa de Som" 
                profissao="Veterinário"
                setBarco={props.setBarco2}
            />
            <Barco
                name="Carro 3" 
                cor="Verde" 
                barco="Peugeot" 
                pescador="João" 
                sanduiche="Presunto" 
                peixe="Televisão" 
                profissao="Analista"
                setBarco={props.setBarco3}
            />
            <Barco 
                name="Carro 4" 
                cor="Azul" 
                barco="Renault" 
                pescador="Felipe" 
                sanduiche="Carne" 
                peixe="Computador" 
                profissao="Médico"
                setBarco={props.setBarco4}
            />
            <Barco 
                name="Carro 5" 
                cor="Preto" 
                barco="Ford" 
                pescador="Leandro" 
                sanduiche="Tomate" 
                peixe="Celular" 
                profissao="Professor"
                setBarco={props.setBarco5}
            />
        </div>
    )

}

export default Colunas;