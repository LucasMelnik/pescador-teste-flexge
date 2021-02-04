import React from 'react'

import './style/Dicas.css'

function Dicas (props) {

    return(
        <div className="section">
            <p>{props.text}</p>
        </div>
    )

}

export default Dicas;