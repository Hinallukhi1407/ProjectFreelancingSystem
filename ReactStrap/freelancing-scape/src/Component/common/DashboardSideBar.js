import React from "react";
import { Col, Row } from "reactstrap";
import DashboardTopNav from "./DashboardTopNav";
import * as Mdicons from "react-icons/md";
import * as Aiicons from "react-icons/ai";
import * as Riicons from "react-icons/ri";
import {Link,useNavigate} from "react-router-dom"
function DashboardSideBar() {
  const navigate = useNavigate()
  return (
    <React.Fragment>
        <section id="dashboardSidebar" className="hide-in-small-screen">
          <ul >
            <li>
              <Mdicons.MdDashboard size={25} style={{ margin: "6%" }} />
              Dashboard
            </li>
            <li>
              <Aiicons.AiFillProject size={25} style={{ margin: "6%" }} />
              Manage Project
            </li>
            <li onClick={()=>navigate("/employer/managebidders")}>
                  <Riicons.RiAuctionFill size={25} style={{ margin: "6%" }} />
                  Manage Bidder
            </li>
            <li onClick={()=>navigate("/employer/postproject")}>
              <Mdicons.MdPostAdd size={25} style={{ margin: "6%" }} />
              Post Project
            </li>
            <li>
              <Aiicons.AiFillSetting size={25} style={{ margin: "6%" }} />
              Settings
            </li>
            <li>
              <Mdicons.MdLogout size={25} style={{ margin: "6%" }} />
              Logout
            </li>
          </ul>
        </section>
    </React.Fragment>
  );
}

export default DashboardSideBar;
