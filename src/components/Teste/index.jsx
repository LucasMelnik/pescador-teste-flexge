import React, {useState} from 'react'
import Title from './Title'
import Colunas from './Colunas'
import Dicas from './Dicas'
import CanvasDraw from 'react-canvas-draw'
import RichText from './Richtext'

import listDicas from '../../../src/dicas.json'
import './style/index.css'

const column1 = listDicas.dica1
const column2 = listDicas.dica2

function Teste () {


    return(
        <div>
            <div className="container">
                <Colunas/>
            </div>
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
                    canvasWidth= "calc(100% - 210px)"
                    canvasHeight={570}
                    brushRadius={1}
                    hideGrid={true}
                    brushColor="black"
                    />
            </div>
            <div className="richtxt">
                    <RichText/>
            </div>
            
        </div>
        )

}

export default Teste;