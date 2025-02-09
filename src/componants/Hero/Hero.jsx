import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero' >
      <div className='text' >
        <h1>We Ensure better education for a better world</h1>
        <h3>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</h3>
        <div className="flex justify-center mt-4">
          <button className="btn flex ">Explore more <img className='w-4 self-center ml-2' src={dark_arrow} alt="" /> </button>
        </div>
      </div>

    </div>
  )
}

export default Hero
