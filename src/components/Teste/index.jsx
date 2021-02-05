import React, {Component, PropTypes} from 'react'
import Title from './Title'
import Header from '../Header/Header'
import Colunas from './Colunas'
import Dicas from './Dicas'
import Finalizar from './Finalizar'
import CanvasDraw from 'react-canvas-draw'
import RichTextEditor from 'react-rte';

import listDicas from '../../../src/dicas.json'
import './style/index.css'

const column1 = listDicas.dica1
const column2 = listDicas.dica2


function Teste () {

    return(
        <div>
            <Header/>
            <div className="container">
                <Title/>
                <Colunas/>
                <Finalizar/>
                <CanvasDraw className="canvas"/>
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
            </div>
            
        </div>
        )

}

export default Teste;