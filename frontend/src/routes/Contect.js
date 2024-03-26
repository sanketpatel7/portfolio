import React from 'react'
import Header from '../component/Header'
import HeroImg1 from '../component/HeroImg1'
import Footer from '../component/Footer'
import ContectForm from '../component/ContectForm'

const Contect = () => {
  return (
    <div>
      <Header />
      {/* <h1>this page is Contect page </h1> */}
      <HeroImg1 heading = 'Contact us.' text = 'Lets have a chat' />
      <ContectForm />
      <Footer />
    </div>
  )
}

export default Contect
