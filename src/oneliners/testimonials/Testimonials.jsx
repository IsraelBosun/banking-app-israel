import React from 'react'
import tick from "../../assets/tick.png"
import "./testimonials.css"

const Testimonials = ({text, firstname, subtitle, image}) => {
  return (
    <div className=' testimonials'>
          
        <div className=' testimonials-image'>
            <img src={tick} alt="" />
        </div>
        <p>{text}</p>
        <div className='testimonials__image-div'>
            <div><img src={image} alt="" /></div>
            <div className='testimonials__lowerdiv'>
               <p>{firstname}</p>
               <p className='testimonials__p'>{subtitle}</p> 
            </div>
        </div>
            
    </div>
  )
}

export default Testimonials