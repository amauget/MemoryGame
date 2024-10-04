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

export default function randomCardArray(){
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