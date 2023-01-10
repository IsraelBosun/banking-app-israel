import React from 'react'
import "./header.css"
import { FiDivide } from "react-icons/fi"
import { AiOutlineArrowUp } from "react-icons/ai"

import robo from "../../assets/robotcard.png"


const Header = () => {
  return (
    <div className='container-about section'>
      <div className = "about-flex">
        <div className='firsthalf'>
          <div className='twentypercent-container'>
            <div className='icon-back'>
              <div className=''>
                <FiDivide className='fi' />
              </div>
              <h3 className = "discount">
               <span>20%</span>  DISCOUNT FOR <span>1 MONTH </span> ACCOUNT
              </h3>
            </div>
          </div>
          <div className='next-container'>
            <h1>The Next</h1>
            <h1 className = "special-text-color">Generation</h1>
            <h1 >Payment Method.</h1>
            <h3 className= "text-color">Our team of experts uses a methodology to identify <br /> the credit cards most likely to fit your needs. <br /> We examine annual percentage rates, annual fees.</h3>
          </div>
        </div>
        <div className='secondhalf'>
          <div className='robo-div'>
            <img src={robo} alt="robo" className = "robo" />
          </div>
          <div className = "gradient-blur" />
          <div className='gradient-blur2'/>
          <div className='gradient-blur3'/>
        </div>
      </div>
      <div className='absolute'>
          <div className='rounded'>
            <h3 className='get'>Get <br/> Started</h3>
            <AiOutlineArrowUp className = "arrow" />
          </div>
        </div>
    </div>
  )
}

export default Header