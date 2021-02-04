import React from 'react'
import Logo from '../../img/logo-flexge-white.png'

import './Header.css'

function Header () {

    return (
        <div className="header">
            <img src={Logo} width="170px" height="70px"></img>
        </div>
    )

}

export default Header