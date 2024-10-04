export default function Header({ current, allTime }){
  return(
    <div className="headerWrapper">
      <h1 className="title">Memory Game!</h1>
      <h2 className="instruct">Try to select as many cards as you can. If you select the same card twice before reaching the final card, you lose! If you reach card 12, continue until failure.</h2>
      <div className="scoreContainer">
        <div className="currentContainer">
          <p className="label">Current:</p>
          <p>{current}</p> 
        </div>
        <div className="bestContainer">
          <p className="label">Best:</p>
          <p>{allTime}</p>
        </div>
      </div>
    </div>
  )
}