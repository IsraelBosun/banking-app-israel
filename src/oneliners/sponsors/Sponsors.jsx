import React from "react"
import air from "../../assets/airbnb.png"
import binance from "../../assets/binance.png"
import coinbase from "../../assets/coinbase.png"
import dropbox1 from "../../assets/dropbox1.png"
import dropbox2 from "../../assets/dropbox2.png"

import "./sponsors.css"

const Sponsors = () => {
    return (
        <div className = "sponsors section__padding">
            <div className="sponsors__icons">
                <img src={air} alt="" />
            </div>

            <div className="sponsors__icons">
                <img src ={binance} alt="" />
            </div>

            <div className="sponsors__icons">
                <img src={coinbase} alt="" />
            </div>

            <div className="sponsors__dropbox sponsors__icons">
                <img src={dropbox2} alt="" />
                <img src={dropbox1} alt="" />
            </div>
        </div>
    )
}

export default Sponsors