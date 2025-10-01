import React from 'react'
import {useState, useEffect} from 'react'
import './Main.css'
import Card_character from '../Card_character/Card_character.jsx'

// const characters =[
//     {
//         id: 1,
//         name: 'Goku',
//         image: 'https://static.wikia.nocookie.net/dragonball/images/2/20/Super_Saiyan_Goku_Infobox.png/revision/latest?cb=20210727000452&path-prefix=es',
//         description: 'El protagonista principal de la serie. Es un Saiyajin criado en la Tierra que protege el planeta de diversas amenazas.'
//     },
//     {
//         id: 2,
//         name: 'Vegeta',
//         image: 'https://static.wikia.nocookie.net/dragonball/images/9/99/Vegeta_Dragon_Ball_Super_Anime.png/revision/latest?cb=20210727000506&path-prefix=es',
//         description: 'El príncipe de los Saiyajins. Vegeta es un guerrero orgulloso y poderoso que busca superar a Goku.'
//     },
//     {
//         id: 3,
//         name: 'Bulma',
//         image: 'https://static.wikia.nocookie.net/dragonball/images/0/0f/Bulma_Dragon_Ball_Super_Anime.png/revision/latest?cb=20210727000506&path-prefix=es',
//         description: 'Una brillante científica y la mejor amiga de Goku. Bulma es conocida por su ingenio y determinación.'
//     }
// ]

const Main = () => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters')
        .then(response => response.json())
        .then(data => setCharacters(data.items))
        .catch(error => console.error('Error fetching characters:', error));
    }, [])

  return (
    <main>
        {characters.length > 0 ? (
            characters.map(character => (
                <Card_character key={character.id} character={character} />
            ))
        ) : (
            <p>No hay personajes disponibles.</p>
        )}
    </main>
  )
}

export default Main
