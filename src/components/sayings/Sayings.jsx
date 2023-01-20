import React from 'react'
import Testimonials from '../../oneliners/testimonials/Testimonials'
import tick from "../../assets/tick.png"
import img1 from "../../assets/male1.png"
import img2 from "../../assets/male2.png"
import img3 from "../../assets/female.png"
import "./sayings.css"

const packageData = [
  {
    imageicon: tick,
    text: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    image: img1,
    title: "Herman Jensen",
    subtitle: "Founder & Leader"
  },
  {
    imageicon: tick,
    text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
    image: img2,
    title: "Steve Mark",
    subtitle: "Founder & Leader"
  },
  {
    imageicon: tick,
    text: "It is usually people in the money business, finance, and international trade that are really rich.",
    image: img3,
    firstname: "Kenn Gallagher",
    subtitle: "Founder & Leader"
  },
]

const Sayings = () => {
  return (
    <div className = "sayings section__padding2">
      <div className = "sayings__upper">
        <h1>What people are saying about us</h1>
        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div className='sayings__testimonials'>
        {/* {packageData.map((item, index) => {
          <Testimonials key = {index} text ={item.text} image = {item.image} firstname = {item.firstname} subtitle = {item.subtitle}  />
        })} */}

        <Testimonials className = "trying" text = "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver." firstname = "Herman Jensen" subtitle = "Founder & Leader" image = {img3} />
        <Testimonials text = "Money makes your life easier. If you're lucky to have it, you're lucky ." firstname = "Steve Mark" subtitle = "Founder & Leader" image = {img1} />
        <Testimonials text = "It is usually people in the money business, finance, and international trade that are really rich." firstname = "Kenn Gallagher" subtitle = "Founder & Leader" image = {img2} />
        
      </div>
    </div>
  )
}

export default Sayings

