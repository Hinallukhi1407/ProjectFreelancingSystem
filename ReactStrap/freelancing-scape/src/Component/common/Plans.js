import React from "react";
import { Badge,Button } from "reactstrap";

function Plans() {
  return (
    <React.Fragment>
      <div>
        <div className="con-items ">
          <div className="item item1">
           
            <section>
              <h3>Basic</h3>
              <p>
                <b>10€ / user</b>
              </p>
            </section>
            <ul>
              <li>
                <i className="bx bx-check" />
                Get started with <b>messaging</b>
              </li>
              <li>
                <i className="bx bx-check" />
                Flexible <b>team meting</b>
              </li>
              <li>
                <i className="bx bx-check" />
                <b>5 TB</b>
                cloud storage
              </li>
            </ul>
            <Button className="border">Choose Plan</Button>
          </div>
          <div className="item color item2">
            <Badge color="primary">Popular</Badge>
            <section>
              <h3>Startup</h3>
              <p>
                <b>24€ / user</b>
              </p>
            </section>
            <ul>
              <li>
                <i className="bx bx-check" />
                All features in <b>Basic</b>
              </li>
              <li>
                <i className="bx bx-check" />
                Flexible <b>call scheduling</b>
              </li>
              <li>
                <i className="bx bx-check" />
                <b>15 TB</b> cloud storage
              </li>
            </ul>
            <Button className="border">Choose Plan</Button>
          </div>
          <div className="item item3">
            
            <section>
              <h3>Enterprise</h3>
              <p>
                <b>35€ / user</b>
              </p>
            </section>
            <ul>
              <li>
                <i className="bx bx-check" />
                All features in <b>Startup</b>
              </li>
              <li>
                <i className="bx bx-check" />
                Growth <b>oriented</b>
              </li>
              <li>
                <i className="bx bx-check" />
                <b>Unlimited</b> cloud storage
              </li>
            </ul>
            <Button className="border">Choose Plan</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Plans;
