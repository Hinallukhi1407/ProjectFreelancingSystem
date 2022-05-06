import React from 'react';
function JobsCategory() {
    return (
      <React.Fragment>
        {/* Category Boxes */}
        <div className="section margin-top-65">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-headline centered margin-bottom-15">
                  <h3>Popular Job Categories</h3>
                </div>
                {/* Category Boxes Container */}
                <div className="categories-container">
                  {/* Category Box */}
                  <a
                    href="jobs-grid-layout-full-page.html"
                    className="category-box"
                  >
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-file-code-o" />
                    </div>
                    <div className="category-box-counter">612</div>
                    <div className="category-box-content">
                      <h3>Web &amp; Software Dev</h3>
                      <p>
                        Software Engineer, Web / Mobile Developer &amp; More
                      </p>
                    </div>
                  </a>
                  {/* Category Box */}
                  <a
                    href="jobs-list-layout-full-page-map.html"
                    className="category-box"
                  >
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-cloud-upload" />
                    </div>
                    <div className="category-box-counter">113</div>
                    <div className="category-box-content">
                      <h3>Data Science &amp; Analitycs</h3>
                      <p>
                        Data Specialist / Scientist, Data Analyst &amp; More
                      </p>
                    </div>
                  </a>
                  {/* Category Box */}
                  <a
                    href="jobs-list-layout-full-page-map.html"
                    className="category-box"
                  >
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-suitcase" />
                    </div>
                    <div className="category-box-counter">186</div>
                    <div className="category-box-content">
                      <h3>Accounting &amp; Consulting</h3>
                      <p>Auditor, Accountant, Fnancial Analyst &amp; More</p>
                    </div>
                  </a>
                  {/* Category Box */}
                  <a href="jobs-list-layout-1.html" className="category-box">
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-pencil" />
                    </div>
                    <div className="category-box-counter">298</div>
                    <div className="category-box-content">
                      <h3>Writing &amp; Translations</h3>
                      <p>Copywriter, Creative Writer, Translator &amp; More</p>
                    </div>
                  </a>
                  {/* Category Box */}
                  <a href="jobs-list-layout-2.html" className="category-box">
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-pie-chart" />
                    </div>
                    <div className="category-box-counter">549</div>
                    <div className="category-box-content">
                      <h3>Sales &amp; Marketing</h3>
                      <p>Brand Manager, Marketing Coordinator &amp; More</p>
                    </div>
                  </a>
                  {/* Category Box */}
                  <a href="jobs-list-layout-1.html" className="category-box">
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-image" />
                    </div>
                    <div className="category-box-counter">873</div>
                    <div className="category-box-content">
                      <h3>Graphics &amp; Design</h3>
                      <p>Creative Director, Web Designer &amp; More</p>
                    </div>
                  </a>
                  {/* Category Box */}
                  <a href="jobs-list-layout-2.html" className="category-box">
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-bullhorn" />
                    </div>
                    <div className="category-box-counter">125</div>
                    <div className="category-box-content">
                      <h3>Digital Marketing</h3>
                      <p>Darketing Analyst, Social Profile Admin &amp; More</p>
                    </div>
                  </a>
                  {/* Category Box */}
                  <a
                    href="jobs-grid-layout-full-page.html"
                    className="category-box"
                  >
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-graduation-cap" />
                    </div>
                    <div className="category-box-counter">445</div>
                    <div className="category-box-content">
                      <h3>Education &amp; Training</h3>
                      <p>Advisor, Coach, Education Coordinator &amp; More</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Category Boxes / End */}
      </React.Fragment>
    );
}

export default JobsCategory ;