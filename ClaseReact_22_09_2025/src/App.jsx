import { useState, useEffect } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import CardSection from './components/card_section/card_section'
import Accordion from './components/accordion/accordion'
import Button from '@mui/material/Button'
import './App.css'

const App = () => {
  const [variable, setVariable] = useState('Hola Mundo')
  useEffect(() => {
    console.log('Componente montado')
  }, [])

  return (
    <>
      <Header/>
      <div className="boton">
        <Button variant="outlined" onClick={() => setVariable('Hola')}>Cambiar Variable</Button>
      </div>
      <main>
        <section id="card_section">
          <CardSection data={{ content: 'The domestic cat is a small, typically furry carnivore.'}}/>
          <CardSection data={{ title: variable, content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.'}}/>
        </section>
        <section id="accordion_section">
          <Accordion/>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default App