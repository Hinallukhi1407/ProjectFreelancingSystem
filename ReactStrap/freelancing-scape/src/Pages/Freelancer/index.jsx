import React from "react";
import IntroBanner from "../../Component/Guest/IntroBanner";
import NavBar from "../../Component/common/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../Component/common/Footer";
function Freelancer() {
    return (
        <>
            <NavBar pageType="Freelancer"/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Freelancer;