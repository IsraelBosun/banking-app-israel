import React from 'react'
import "./features.css"

import trxcard from "../../assets/transactioncard.png"
import Content from "../../oneliners/content/Content.jsx"


const Features = () => {
  return (
    <div className='features section__padding'>
      <div className='features__container'>
        <div className='transaction__card'>
          <img src={trxcard} alt="bankcard" />
        </div>
        <div className='transaction__text'>
          <Content main = "Easily control your billing & invoicing." sub = "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat." btn = "Home" />
        </div>
      </div>
    </div>
  )
}

export default Features