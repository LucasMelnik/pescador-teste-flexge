import React, {useState} from 'react'
import Colunas from './Colunas'
import Dicas from './Dicas'
import CanvasDraw from 'react-canvas-draw'
import RichText from './Richtext'

import listDicas from '../../../src/dicas.json'
import './style/index.css'

const column1 = listDicas.dica1
const column2 = listDicas.dica2

function Teste (props) {


    return(
        <div>
            <div className="container">
                <Colunas 
                    setBarco1={props.setBarco1}
                    setBarco2={props.setBarco2}
                    setBarco3={props.setBarco3}
                    setBarco4={props.setBarco4}
                    setBarco5={props.setBarco5}
                />
            </div>
            <p className="canvas-ph">Você pode usar a ferramenta de caneta para riscar e organizar as dicas.</p>
            <div className="dicas-body">
                <div className="dicas-sec">   
                    <div className="sec">
                        {column1.map((e) =>
                            <Dicas text={e}/>
                            )}
                    </div>
                    <div className="sec">
                        {column2.map((e) =>
                            <Dicas text={e}/>
                            )}
                    </div> 
                    <CanvasDraw className="canvas"
                        gridColor="black"
                        canvasWidth= "calc(75% - 210px)"
                        canvasHeight="120%"
                        brushRadius={1}
                        hideGrid={true}
                        brushColor="black"
                        />
                </div>
                <div className="rich-txt">
                    <RichText/>
                </div>
            </div>
        </div>
        )

}

export default Teste;