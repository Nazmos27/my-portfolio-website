import { useEffect } from 'react'
import './App.css'
import Navigation from './Components/Navigation'
import Contact from './Components/Contact'
import Home from './Components/Home'
import About from './Components/About'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Skills from './Components/Skills'
import Acquisition from './Components/Acquisition/Acquisition'
import MyProjects from './Components/MyProjects/MyProjects'
import Blog from './Components/Blog'

function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="min-h-full flex flex-col justify-center items-center">
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <MyProjects></MyProjects>
      <Acquisition></Acquisition>
      <Blog></Blog>
      <Contact></Contact>
      <Navigation></Navigation>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content mb-20 md:mb-24">
        <div>
          <p>Copyright © 2023 - All rights reserved by Md. Nazmos Sakib</p>
        </div>
      </footer>


    </div>

  )
}

export default App
