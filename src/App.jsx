import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation'
import Contact from './Components/Contact'
import Camera from './Components/Camera'
import Profile from './Components/Profile'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-full flex flex-col justify-center items-center">
      <Home></Home>
      <Navigation></Navigation>
      <Contact></Contact>
      <Camera></Camera>
      <Profile></Profile>
      

    </div>
    
  )
}

export default App
