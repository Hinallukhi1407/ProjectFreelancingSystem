import React from "react";
import {
  Container,
  Toast,
  ToastBody,
  ToastHeader,
  Row,
  Badge,
} from "reactstrap";

function FeaturedCities() {
  return (
    <React.Fragment>
      <section id="city-contaner">
          <h3 className="text-muted mt-5">Featured Cities</h3>
        <article id="city">
          <Row>
            <Toast className="city-toast" id="cityOne">
              <Badge
                color="light"
                className="mt-2"
                style={{
                  width: "5rem",
                  height: "2rem",
                  color: "black",
                  fontSize: "0.80rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                586 Jobs
              </Badge>
            </Toast>
            <Toast className="city-toast" id="cityTwo">
              <Badge
                color="light"
                className="mt-2"
                style={{
                  width: "5rem",
                  height: "2rem",
                  color: "black",
                  fontSize: "0.80rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                586 Jobs
              </Badge>
            </Toast>
            <Toast className="city-toast" id="cityThree">
              <Badge
                color="light"
                className="mt-2"
                style={{
                  width: "5rem",
                  height: "2rem",
                  color: "black",
                  fontSize: "0.80rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                586 Jobs
              </Badge>
            </Toast>
            <Toast className="city-toast" id="cityFour">
              <Badge
                color="light"
                className="mt-2"
                style={{
                  width: "5rem",
                  height: "2rem",
                  color: "black",
                  fontSize: "0.80rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                586 Jobs
              </Badge>
            </Toast>
          </Row>
        </article>
      </section>
    </React.Fragment>
  );
}

export default FeaturedCities;
