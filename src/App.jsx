import React from 'react'

import { Aboutus, Features, Footer, Header, Sayings, Service, Solution } from './components'
import { Navbar, Sponsors, Users } from "./oneliners"

const App = () => {
    return(
        <div>
            <Navbar />
            <Header />
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