import React from "react";
import resume from "../../docs/Resume.Alan.Hornbaker.pdf";

//Function to make the Resume page
export default function Resume() {
  return (
    <div className="resume">
      <p>
        Download my{" "}
        <a href={resume} download={resume}>
          resume
        </a>
      </p>
      <h3>Front End</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Redux</li>
        <li>GraphQL</li>
        <li>Progressive Web Applications</li>
      </ul>
      <h3>Back End</h3>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Sql</li>
        <li>Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>Apollo</li>
      </ul>
      <h3>Other</h3>
      <ul>
        <li>GitHub</li>
        <li>MVC Paradigm</li>
        <li>Handlebars.js</li>
        <li>Nodemailer</li>
        <li>MailGen</li>
      </ul>
    </div>
  );
}
