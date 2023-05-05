import React from "react";
import "../styles/main.css";
import GithubLogo from "../images/GithubLogo.PNG";
import linkedInLogo from "../images/linkedIn.PNG";

export default function Footer() {
  return (
    <footer className="fixed-bottom">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ul className="footer-list d-flex justify-content-center">
              <li className="footer-link">
                <a href="https://github.com/alanhornbaker">
                  <img
                    className="footerImg"
                    src={gitHubLogo}
                    alt="Link to Github"
                  />
                </a>
              </li>
              <li className="footer-link">
                <a href="">
                  {/* Need link for linkedIn */}
                  <img
                    className="footerImg"
                    src={linkedInLogo}
                    alt="Link to LinkedIn"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
