import React from 'react'

import './style/Barco.css'

function Barco (props) {

    return(
        <div className="column-sec">
            <p>{props.name}</p>
            <div className="options">
                <select>
                    <option value={null}></option>
                    <option>Amarelo</option>
                    <option>Azul</option>
                    <option>Branco</option>
                    <option>Verde</option>
                    <option>Vermelho</option>
                </select>
                <select>
                    <option value={null}></option>
                    <option>Alvorada</option>
                    <option>Pacífico</option>
                    <option>Santa Mônica</option>
                    <option>Saturno</option>
                    <option>Thor</option>
                </select>
                <select>
                    <option value={null}></option>
                    <option>André</option>
                    <option>Daniel</option>
                    <option>Junior</option>
                    <option>Leandro</option>
                    <option>Rodrigo</option>
                </select>
                <select>
                    <option value={null}></option>
                    <option>Atum</option>
                    <option>Frango</option>
                    <option>Presunto</option>
                    <option>Queijo</option>
                    <option>Salame</option>
                </select>
                <select>
                    <option value={null}></option>
                    <option>Dourado</option>
                    <option>Jaú</option>
                    <option>Jurupoca</option>
                    <option>Pacu</option>
                    <option>Traíra</option>
                </select>
                <select>
                    <option value={null}></option>
                    <option>Analista</option>
                    <option>Policial</option>
                    <option>Professor</option>
                    <option>Vendedor</option>
                    <option>Veterinário</option>
                </select>
            </div>
        </div>
    )

}

export default Barco;;