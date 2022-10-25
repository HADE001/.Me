import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello chaiwat</h1>
      <a href="https://github.com/HADE001" target="_blank" rel="noopener noreferrer">      <img src="https://raw.githubusercontent.com/Arikato111/Arikato111/main/icons/github-original.svg" alt="icon github" className='logo'/></a>
      <a href="https://www.facebook.com/profile.php?id=100019345741626" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/Arikato111/Arikato111/main/icons/facebook-original.svg" alt="" className='logo'/></a>


    </div>
  )
}

export default App
