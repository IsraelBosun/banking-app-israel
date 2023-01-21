import React from 'react'
import "./features.css"

import trxcard from "../../assets/transactioncard.png"
import Content from "../../oneliners/content/Content.jsx"
import google from "../../assets/google.png"
import apple from "../../assets/apple.png"


const Features = () => {
  return (
    <div className='features section__padding2'>
      <div className = "features__bg"/>
      <div className='features__container'>
        <div className='transaction__card'>
          <img src={trxcard} alt="bankcard" />
        </div>
        <div className='transaction__text'>
          <Content main = "Easily control your billing & invoicing." sub = "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat." btn = "Home" />
          <div className='features__brands'>
            <div className='features__brands-items'>
              <img src={apple} alt="" />
            </div>
            <div className='features__brands-items'>
              <img src={google} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features