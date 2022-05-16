import React from 'react'
import NavBar from '../Guest/NavBar'
import IntroBanner from '../Employeer/IntroBanner'
import ListFreelancer from './ListFreelancer'
function Employeer() {
  return (
    <div>
       <NavBar/>
       {/* <IntroBanner/> */}
       <ListFreelancer/>
    </div>
  )
}

export default Employeer
