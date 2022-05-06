import React from "react";
import BannerImage from "../../images/home-background.jpg";
function SearchBar() {
  return (
    <React.Fragment>
      <div className="Banner">
       
          <div className="container">
            {/* Intro Headline */}
            <div className="row">
              <div className="col-md-12">
                <div className="banner-headline">
                  <h3>
                    <strong>
                      Hire experts or be hired for any job, any time.
                    </strong>
                    <br />
                    <span>
                      Thousands of small businesses use{" "}
                      <strong className="color">Hireo</strong> to turn their
                      ideas into reality.
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/* Search Bar */}
            <div className="row">
              <div className="col-md-12">
                <div className="intro-banner-search-form margin-top-95">
                  {/* Search Field */}
                  <div className="intro-search-field with-autocomplete">
                    <label
                      htmlFor="autocomplete-input"
                      className="field-title ripple-effect"
                    >
                      Where?
                    </label>
                    <div className="input-with-icon">
                      <input
                        id="autocomplete-input"
                        type="text"
                        placeholder="Online Job"
                      />
                      <i className="icon-material-outline-location-on" />
                    </div>
                  </div>
                  {/* Search Field */}
                  <div className="intro-search-field">
                    <label
                      htmlFor="intro-keywords"
                      className="field-title ripple-effect"
                    >
                      What job you want?
                    </label>
                    <input
                      id="intro-keywords"
                      type="text"
                      placeholder="Job Title or Keywords"
                    />
                  </div>
                  {/* Button */}
                  <div className="intro-search-button">
                    <button
                      className="button ripple-effect"
                      onclick="window.location.href='jobs-list-layout-full-page-map.html'"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Stats */}
            <div className="row">
              <div className="col-md-12">
                <ul className="intro-stats margin-top-45 hide-under-992px">
                  <li>
                    <strong className="counter">1,586</strong>
                    <span>Jobs Posted</span>
                  </li>
                  <li>
                    <strong className="counter">3,543</strong>
                    <span>Tasks Posted</span>
                  </li>
                  <li>
                    <strong className="counter">1,232</strong>
                    <span>Freelancers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </React.Fragment>
  );
}

export default SearchBar;
