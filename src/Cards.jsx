import { useState } from 'react'
import './Cards.css'

import accordion from './assets/accordion.jpg'
import bass from './assets/bass.jpg'
import cello from './assets/cello.jpg'
import clarinet from './assets/clarinet.jpg'
import drums from './assets/drums.jpg'
import flute from './assets/flute.jpg'
import guitar from './assets/guitar.jpg'
import piano from './assets/piano.jpg'
import sax from './assets/sax.jpg'
import trumpet from './assets/trumpet.jpg'
import tuba from './assets/tuba.jpg'
import viola from './assets/viola.jpg'

export default function Cards(){
  const [cardSelect, updateCardSelect] = useState({
    AuditoryAssault: false, BassGuitar: false, Cello: false, Clarinet: false, DrumSet: false, Flute: false, 
    Guitar: false, Piano: false, Saxophone: false, Trumpet: false, Tuba: false, viola: false 
  })
  const [cardData, updateCardData] = useState(randomCardArray())

  const handleClick = (e) =>{
    const selected = e.target.id

    if(cardSelect[selected] === false){
      updateCardSelect(cardSelect, cardSelect[selected] = true)
      updateCardData(randomCardArray())
    }
  }
  return(
    <div className='deckContainer'>
      {cardData.map(item => { 
        return(
          <Card
            key={item.name}
            name ={item.name}
            src = {item.src}
            id = {(item.name).replace(' ', '')}
            onClick={handleClick}
          ></Card> 
        )
      })}
    </div>
 
  )
}

function Card({ name, src, id, onClick }){
  
  return(
    <div className='cardContainer' onClick={onClick} id={id}>
      <img className='card' src={src} id={id}></img>
      <h3 className='name' id={id}>{name}</h3>

    </div>
  )
}
function randomCardArray(){
  const items = [
    {name: 'Auditory Assault', src: accordion},
    {name: 'Bass Guitar', src: bass},
    {name: 'Cello', src: cello},
    {name: 'Clarinet', src: clarinet},
    {name: 'Drum Set', src: drums},
    {name: 'Flute', src: flute},
    {name: 'Guitar', src: guitar},
    {name: 'Piano', src: piano},
    {name: 'Saxophone', src: sax},
    {name: 'Trumpet', src: trumpet},
    {name: 'Tuba', src: tuba},
    {name: 'Viola', src: viola},
  ]
  let randomIndexes = randomIndexArray()
  let randomArray = []

  for(let i = 0; i < 12; i++){
    randomArray.push(items[randomIndexes[i]])
  }
  return randomArray
}
function randomIndexArray(){
  let array = []
  let count = 0;
  let index = undefined

  while(count < 12){
    index = randomNumber()

    if(!array.includes(index)){
      array.push(index)
      count++
    }
  }
  return array
}

function randomNumber(){
  return Math.floor(Math.random() * 12)
}