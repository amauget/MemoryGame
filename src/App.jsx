
import { useState } from 'react'
import Header from './Header.jsx'
import Cards from './Cards.jsx'
import randomCardArray from './RandomCard.jsx'
import './App.css'

function App() {
  const [cardData, updateCardData] = useState(randomCardArray()) //randomizes the deck of cards

  const [cardSelect, updateCardSelect] = useState({
    AuditoryAssault: false, BassGuitar: false, Cello: false, Clarinet: false, DrumSet: false, Flute: false, 
    Guitar: false, Piano: false, Saxophone: false, Trumpet: false, Tuba: false, Viola: false 
  })

  const [current, updateCurrent] = useState(0) //Current score
  const [allTime, updateAllTime] = useState(0) //All time score


  const handleClick = (e) =>{
    const selected = e.target.id
    console.log(cardSelect[selected])

    if(cardSelect[selected] === false){
      updateCardSelect(cardSelect, cardSelect[selected] = true) //mark card as selected
      
      if((current + 1) % 12 === 0){ //player has ran through deck successfully

        for(let i in cardSelect){ //resets card select status to false (continue game)
          updateCardSelect(cardSelect, cardSelect[i] = false)
        }     
      }
      updateCurrent(current + 1) //update current score
    }
    else{
      if(current > allTime){
        updateAllTime(current)
      }
      updateCurrent(0)

      for(let i in cardSelect){ //resets card select status to false (new game)
        updateCardSelect(cardSelect, cardSelect[i] = false)
      }
    }
    updateCardData(randomCardArray()) //shuffle deck

  }


  return (
    <>
      <Header
        current={current}
        allTime={allTime}
      ></Header>
      <Cards
        cardData={cardData}
        handleClick={handleClick}
      ></Cards>
    </>
  )
}

export default App
