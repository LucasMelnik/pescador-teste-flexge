import React, { useEffect, useState } from 'react'

import './style/Barco.css'

function Barco (props) {

    const handleChangeColor = (event) => {

        let currentvalue = event.target.value

        if (currentvalue == props.cor){
            props.setBarco(prevState => {
                return {...prevState, color: "correct"}
            }) 
        } else{
            props.setBarco(prevState => {
                return {...prevState, color: "wrong"}
            }) 
        }
    }

    const handleChangeBoat = (event) => {
       
        let currentvalue = event.target.value

        if (currentvalue == props.barco){
            props.setBarco(prevState => {
                return {...prevState, boat: "correct"}
            }) 
        } else{
            props.setBarco(prevState => {
                return {...prevState, boat: "wrong"}
            }) 
        }
    }

    const handleChangeFisehrmann = (event) => {
       
        let currentvalue = event.target.value

        if (currentvalue == props.pescador){
            props.setBarco(prevState => {
                return {...prevState, fisherman: "correct"}
            }) 
        } else{
            props.setBarco(prevState => {
                return {...prevState, fisherman: "wrong"}
            }) 
        }
    }

    const handleChangeSanduich = (event) => {
        
        let currentvalue = event.target.value

        if (currentvalue == props.sanduiche){
            props.setBarco(prevState => {
                return {...prevState, sanduich: "correct"}
            }) 
        } else{
            props.setBarco(prevState => {
                return {...prevState, sanduich: "wrong"}
            }) 
        }
    }

    

    const handleChangeFish = (event) => {
       
        let currentvalue = event.target.value

        if (currentvalue == props.peixe){
            props.setBarco(prevState => {
                return {...prevState, fish: "correct"}
            }) 
        } else{
            props.setBarco(prevState => {
                return {...prevState, fish: "wrong"}
            }) 
        }
        
    }

    const handleChangeProfession = (event) => {
        
        let currentvalue = event.target.value

        if (currentvalue == props.profissao){
            props.setBarco(prevState => {
                return {...prevState, profession: "correct"}
            }) 
        } else{
            props.setBarco(prevState => {
                return {...prevState, profession: "wrong"}
            }) 
        }
    }

    return(
        <div className="column-sec">
            <p>{props.name}</p>
            <div className="options">
                <select id="color" onChange={handleChangeColor}>
                    <option value={null}></option>
                    <option value="Vermelho">Vermelho</option>
                    <option value="Branco">Branco</option>
                    <option value="Verde">Verde</option>
                    <option value="Preto">Preto</option>
                    <option value="Azul">Azul</option>
                </select>
                <select id="boat" onChange={handleChangeBoat}>
                    <option value={null}></option>
                    <option value="Renault">Renault</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Ford">Ford</option>
                    <option value="Fiat">Fiat</option>
                    <option value="Toyota">Toyota</option>
                </select>
                <select id="fisherman" onChange={handleChangeFisehrmann}>
                    <option value={null}></option>
                    <option value="Leandro">Leandro</option>
                    <option value="Rafael">Rafael</option>
                    <option value="João">João</option>
                    <option value="Pedro">Pedro</option>
                    <option value="Felipe">Felipe</option>
                </select>
                <select id="sanduich" onChange={handleChangeSanduich}>
                    <option value={null}></option>
                    <option value="Frango">Frango</option>
                    <option value="Presunto">Presunto</option>
                    <option value="Queijo">Queijo</option>
                    <option value="Tomate">Tomate</option>
                    <option value="Carne">Carne</option>
                </select>
                <select id="fish" onChange={handleChangeFish}>
                    <option value={null}></option>
                    <option value="Televisão">Televisão</option>
                    <option value="Caixa de Som">Caixa de Som</option>
                    <option value="Celular">Celular</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Computador">Computador</option>
                </select>
                <select id="profession" onChange={handleChangeProfession}>
                    <option value={null}></option>
                    <option value="Analista">Analista</option>
                    <option value="Piloto">Piloto</option>
                    <option value="Veterinário">Veterinário</option>
                    <option value="Professor">Professor</option>
                    <option value="Médico">Médico</option>
                </select>
            </div>
        </div>
    )

}

export default Barco;;