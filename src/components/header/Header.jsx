import React from 'react'
import "./header.css"
import { FiDivide } from "react-icons/fi"
import { AiOutlineArrowUp } from "react-icons/ai"

import robo from "../../assets/robotcard.png"


const Header = () => {
  return (
    <div className='generation__header section'>
      <div className = "generation__header-content">
        <div className='gradient__text'>
          <FiDivide className='header__divide'/>
          <p>20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
        </div>
        <h1>The Next</h1>
        <h1 className = "colorful">Generation</h1>
        <h1>Payment Method</h1>
        <p className='generation__para'>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
        We examine annual percentage rates, annual fees.
        </p>
      </div>
      <div className='generation__header-image'>
        <img src= {robo} alt="robot" />
      </div>
    </div>
  )
}

export default Header