import './Cards.css'

export default function Cards({ cardData , handleClick }){
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
