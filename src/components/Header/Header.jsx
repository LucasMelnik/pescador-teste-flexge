import React from 'react'
import Logo from '../../img/logo-flexge-branco.png'

import './Header.css'

function Header () {

    return (
        <div className="header">
            <img src={Logo} alt="logo" width="140px"></img>
        </div>
    )

}

export default Header