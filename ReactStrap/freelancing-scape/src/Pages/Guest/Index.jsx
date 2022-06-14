import React from 'react'
import NavBar from "../../Component/common/NavBar";
import IntroBanner from '../../Component/Guest/IntroBanner';
import Footer from '../../Component/common/Footer';
import FeaturedCities from '../../Component/Guest/FeaturedCities';
function Index() {
  return (
   <React.Fragment>
       <NavBar pageType="Guest"/>
       <IntroBanner/>
       <FeaturedCities/>
       <Footer/>
   </React.Fragment>
  )
}

export default Index
