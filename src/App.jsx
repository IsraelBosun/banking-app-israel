import React from 'react'

import { Aboutus, Features, Footer, Header, Sayings, Service, Solution } from './components'
import { Navbar, Sponsors, Users } from "./oneliners"
import "./index.css"

const App = () => {
    return(
        <div>
            <div className='right-bg'>
            <Navbar />
            <Header />
            </div>
            <Aboutus />
            <Users />
            <Features />
            <Solution />
            <Sayings />
            <Sponsors />
            <Service />
            <Footer />
        </div>
    )
}

export default App