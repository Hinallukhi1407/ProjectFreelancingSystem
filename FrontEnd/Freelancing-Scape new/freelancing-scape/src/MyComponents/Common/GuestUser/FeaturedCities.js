import React from 'react';
import CityImage1 from '../../images/featured-city-01.jpg'
import CityImage2 from '../../images/featured-city-02.jpg'
import CityImage3 from '../../images/featured-city-03.jpg'
import CityImage4 from '../../images/featured-city-04.jpg'




function FeaturedCities() {
    return (  
        <React.Fragment>
            <div className="section margin-top-65 margin-bottom-65">
  <div className="container">
    <div className="row">
      {/* Section Headline */}
      <div className="col-xl-12">
        <div className="section-headline centered margin-top-0 margin-bottom-45">
          <h3>Featured Cities</h3>
        </div>
      </div>
      <div className="col-xl-3 col-md-6" >
        {/* Photo Box */}
        <a href="jobs-list-layout-1.html" className="photo-box" style={{backgroundImage:`url(${CityImage1})`}}>
          <div className="photo-box-content">
            <h3>San Francisco</h3>
            <span>376 Jobs</span>
          </div>
        </a>
      </div>
      <div className="col-xl-3 col-md-6">
        {/* Photo Box */}
        <a href="jobs-list-layout-full-page-map.html" className="photo-box" style={{backgroundImage:`url(${CityImage2})`}}>
          <div className="photo-box-content">
            <h3>New York</h3>
            <span>645 Jobs</span>
          </div>
        </a>
      </div>
      <div className="col-xl-3 col-md-6">
        {/* Photo Box */}
        <a href="jobs-grid-layout-full-page.html" className="photo-box" style={{backgroundImage:`url(${CityImage3})`}}>
          <div className="photo-box-content">
            <h3>Los Angeles</h3>
            <span>832 Jobs</span>
          </div>
        </a>
      </div>
      <div className="col-xl-3 col-md-6">
        {/* Photo Box */}
        <a href="jobs-list-layout-2.html" className="photo-box" style={{backgroundImage:`url(${CityImage4})`}}>
          <div className="photo-box-content">
            <h3>Miami</h3>
            <span>513 Jobs</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

        </React.Fragment>
    );
}

export default FeaturedCities;