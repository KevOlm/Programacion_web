import React from 'react'
import './header.css'
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';

const Header = () => {
  return (
    <header>
      <AirlineSeatReclineExtraIcon sx={{ fontSize: 50 }} />
      <h1>Ejercicio de React</h1>
    </header>
  )
}

export default Header