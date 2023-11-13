import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={{ width: "auto", height: "280px" }} />
        <div className="proj-txtx">
          <h4
            onClick={() => {
              window.open(githubLink, "_black");
            }}
            style={{ cursor: "pointer" }}
          >
            {title}
          </h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
