import { useState } from 'react'
import Header from './Header.jsx'
import Cards from './Cards.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header></Header> */}
      <Cards></Cards>
    </>
  )
}

export default App
