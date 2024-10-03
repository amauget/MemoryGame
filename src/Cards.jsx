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
  const cardData = [
    {name: 'Auditory Assault', src: accordion},
    {name: 'Bass Guitar', src: bass},
    {name: 'Cello', src: cello},
    {name: 'Clarinet', src: clarinet},
    {name: 'Drum Set', src: drums},
    {name: 'Flute', src: flute},
    {name: 'Electric Guitar', src: guitar},
    {name: 'Piano', src: piano},
    {name: 'Saxophone', src: sax},
    {name: 'Trumpet', src: trumpet},
    {name: 'Tuba', src: tuba},
    {name: 'Viola', src: viola},
  ]
  return(
    <div className='deckContainer'>
      {cardData.map(item => {
        return(
          <Card
            key={item.name}
            name ={item.name}
            src = {item.src}
          ></Card> 
        )
      })}
    </div>
 
  )
}

function Card({ name, src }){
  
  return(
    <div className='cardContainer'>
      <img className='card' src={src}></img>
      <h3 className='name'>{name}</h3>

    </div>
  )
}