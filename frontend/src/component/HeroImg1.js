import React from 'react'
import './heroimg1.css'

const HeroImg1 = (props) => {
  return (
    <>
      <div className='hero-img-1'>
        <div className='hero-1-heading'>
            <h1>{props.heading}</h1><br></br>
            <p>{props.text}</p>
        </div>
      </div>
    </>
  )
}

export default HeroImg1
