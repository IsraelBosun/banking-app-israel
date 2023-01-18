import React from 'react'
import Content from "../../oneliners/content/Content.jsx"
import aicard from "../../assets/analyticscard.png"

import "./solution.css"

const Solution = () => {
  return (
    <div className='solutions section__padding'>
        <div className='solution-text'>
          <Content main = "Find a better card deal in few easy steps." sub = "Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau." btn = "Get Started"  />
        </div>
        <div className='solution-image'>
          <img src= {aicard} alt="card" />
        </div>
    </div>
  )
}

export default Solution