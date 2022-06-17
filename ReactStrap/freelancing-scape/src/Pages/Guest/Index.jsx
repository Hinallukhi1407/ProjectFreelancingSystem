import React from 'react'
import NavBar from "../../Component/common/NavBar";
import IntroBanner from '../../Component/Guest/IntroBanner';
import Footer from '../../Component/common/Footer';
import FeaturedCities from '../../Component/Guest/FeaturedCities';
import {Outlet} from 'react-router-dom'
function Index() {
  return (
   <React.Fragment>
       <NavBar pageType="Guest"/>
        <Outlet/>
       <Footer/>
   </React.Fragment>
  )
}

export default Index
