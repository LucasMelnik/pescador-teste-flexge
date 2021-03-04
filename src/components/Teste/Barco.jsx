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
                    <option value="Amarelo">Amarelo</option>
                    <option value="Azul">Azul</option>
                    <option value="Branco">Branco</option>
                    <option value="Verde">Verde</option>
                    <option value="Vermelho">Vermelho</option>
                </select>
                <select id="boat" onChange={handleChangeBoat}>
                    <option value={null}></option>
                    <option value="Alvorada">Alvorada</option>
                    <option value="Pacífico">Pacífico</option>
                    <option value="Santa-Monica">Santa Mônica</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Thor">Thor</option>
                </select>
                <select id="fisherman" onChange={handleChangeFisehrmann}>
                    <option value={null}></option>
                    <option value="André">André</option>
                    <option value="Daniel">Daniel</option>
                    <option value="Junior">Junior</option>
                    <option value="Leandro">Leandro</option>
                    <option value="Rodrigo">Rodrigo</option>
                </select>
                <select id="sanduich" onChange={handleChangeSanduich}>
                    <option value={null}></option>
                    <option value="Atum">Atum</option>
                    <option value="Frango">Frango</option>
                    <option value="Presunto">Presunto</option>
                    <option value="Queijo">Queijo</option>
                    <option value="Salame">Salame</option>
                </select>
                <select id="fish" onChange={handleChangeFish}>
                    <option value={null}></option>
                    <option value="Dourado">Dourado</option>
                    <option value="Jaú">Jaú</option>
                    <option value="Jurupoca">Jurupoca</option>
                    <option value="Pacu">Pacu</option>
                    <option value="Traíra">Traíra</option>
                </select>
                <select id="profession" onChange={handleChangeProfession}>
                    <option value={null}></option>
                    <option value="Analista">Analista</option>
                    <option value="Policial">Policial</option>
                    <option value="Professor">Professor</option>
                    <option value="Vendedor">Vendedor</option>
                    <option value="Veterinário">Veterinário</option>
                </select>
            </div>
        </div>
    )

}

export default Barco;;