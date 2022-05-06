import React from "react";
import NavBar from "./NabBar"
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import JobsCaregory from "./JobsCategory";
import FeaturedCities from "./FeaturedCities";
import FreelancerSlider from "./FreelancerSlider"; 
function Content() {
    return (  
        <React.Fragment>
            <div>
                <NavBar/>
                <SearchBar/>
                <JobsCaregory></JobsCaregory>
                <FeaturedCities/>
                <FreelancerSlider/>
                 <Footer/>
            </div>
        </React.Fragment>
    );
}
export default Content;