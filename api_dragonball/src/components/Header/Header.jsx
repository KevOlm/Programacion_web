import React from 'react'
import './Header.css'
import Button from '@mui/material/Button';
import Logo from '../../assets/logo_dbz.png'

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Dragon Ball Logo" />
            <div className="enlaces">
                <ul>
                    <li><a href="#">Documentación</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><Button variant="contained" color="primary">Contáctanos</Button></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
