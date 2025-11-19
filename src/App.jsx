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
      {/* The Navbar component */}
      <Navbar />
      <section id="home">
        <HomePage />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* The Footer component */}
      <Footer />
    </div>
  )
}

export default App