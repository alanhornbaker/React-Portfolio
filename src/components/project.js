import React, { useState } from "react";
import GithubLogo from "../images/GithubLogo.PNG";
import browserIcon from "../images/browserIcon.PNG";

export default function Project({ projectRepo, img, projectName, projectURL }) {
  //Use States to store whether the picture is hovered or not
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const gitHubStyle = {
    height: "50px",
    width: "50px",
    borderRadius: "50px",
    marginLeft: "10px",
  };

  const iconStyle = {
    height: "50px",
    width: "70px",
    borderRadius: "10px",
    margin: "5px",
  };

  return (
    <div className="col-md-6">
      <h3>{projectName}</h3>
      <div
        className="position-relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={img}
          alt="Screenshot of Project"
          className={`img-fluid ${
            isHovered ? "blur-image blur-effect" : "blur-image"
          }`}
        />
        {isHovered && (
          <div className="position-absolute bottom-50 start-0">
            <a
              href={projectRepo}
              className="badge"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="image-fluid"
                style={gitHubStyle}
                src={gitHubLogo}
                alt="Link to Repo"
              />
            </a>
            <a
              href={projectURL}
              className="badge"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="image-fluid"
                style={iconStyle}
                src={browserIcon}
                alt="Link to Deployed Application"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
