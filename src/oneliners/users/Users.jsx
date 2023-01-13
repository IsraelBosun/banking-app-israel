import React from 'react'
import Content from "../content/Content.jsx"
import Circle from "../../components/circle/Circle.jsx"
import { BsFillStarFill } from "react-icons/bs"
import { BsShieldFillCheck } from "react-icons/bs"
import { RiSendPlaneFill } from "react-icons/ri"
import "./users.css"

const Users = () => {
  return (
    <div className='users section__padding'>
      <div className = "content__users">
      <Content  main = "You do the business, we’ll handle the money." sub = "With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market." btn= "Get started"/>
      </div>
    <div className='users__card'>
      <div className='users__card-benefit'>
        <div className='icon__text'>
          <div className='circle'>
            <BsFillStarFill className = "users__icon" />
          </div>
          <div className = "users__text">
            <h5>Rewards</h5>
            <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
          </div>
        </div>
      </div>

      <div className='users__card-benefit'>
      <div className='icon__text secure'>
      <div className='circle'>
            <BsShieldFillCheck className = "users__icon" />
          </div>
          <div className = "users__text">
            <h5>100% Secured</h5>
            <p>We take proactive steps make sure your information and transactions are secure.</p>
          </div>
        </div>
      </div>

      <div className='users__card-benefit'>
      <div className='icon__text'>
      <div className='circle'>
            <RiSendPlaneFill className = "users__icon" />
          </div>
          <div className = "users__text" >
            <h5>Balance Transfer</h5>
            <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Users