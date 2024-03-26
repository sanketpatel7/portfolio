import React from 'react'
import Header from '../component/Header'
import HeroImg1 from '../component/HeroImg1'
import Footer from '../component/Footer'
import AboutContent from '../component/AboutContent'


const About = () => {
  return (
    <div>
      <Header />
      {/* <h1>this page is About page</h1> */}
      <HeroImg1 heading = 'About us.' text = 'im a friendly Front-End Developer.' />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
