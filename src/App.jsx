import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation'
import Contact from './Components/Contact'
import Camera from './Components/Camera'
import Home from './Components/Home'
import About from './Components/About'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Skills from './Components/Skills'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    Aos.init()
},[])

  return (
    <div className="min-h-full flex flex-col justify-center items-center">
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Navigation></Navigation>
      <Contact></Contact>
      

    </div>
    
  )
}

export default App
