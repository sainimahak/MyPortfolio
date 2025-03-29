import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>

      <Navbar/>
      <HomePage/>
      <About/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App