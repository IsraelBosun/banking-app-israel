import React from "react"
import "./content.css"

const Content = ({main, sub, btn}) => {
    return (
        <div className="content">
           <div className="content__content">
            <div>
                <h1>{main}</h1>
                <p>{sub}</p>
            </div>    
                <button className="first-btn">{btn}</button>
            </div> 
        </div>
    )
}

export default Content