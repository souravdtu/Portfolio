import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { servicesList } from "../constants";
import { TiltCard } from "./common/TiltCard";
import useTextLoop from "../hook/useTextLoop";

export const Banner = () => {
  const { text } = useTextLoop();
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                // className={
                //   isVisible ? "animate__animated animate__fadeIn" : ""
                // }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Sourav: `}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      style={{ color: "#6C6AC8" }}
                      // data-rotate='[ "Mobile Developer", "Web Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I'm a mobile application Developer with experience in React
                    Native, TypeScript, JavaScript, Java and android native
                    developement. Quick leaner with passion for new technology.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                // className={
                //   isVisible ? "animate__animated animate__zoomIn" : ""
                // }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Row className="align-items-center">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {servicesList.map((args) => (
              <div>
                <TiltCard {...args} />
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};
