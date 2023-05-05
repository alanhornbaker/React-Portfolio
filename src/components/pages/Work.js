import React from "react";
import Project from "../Project.js";
import gpsSatellite from "../../imgs/gps-satellite.png";
import SocialNetworkAPI from "../../images/Social-Network-API.PNG";
import AndrewsList from "../../images/andrews-list.PNG";
import WorkdayScheduler from "../../images/WorkdayScheduler.PNG";
import READMEGenerator from "../../images/README-Generator.PNG";
import EmployeeTracker from "../../images/Employee-Tracker.PNG";

const projectRepo = [
  "https://github.com/alanhornbaker/README-Generator",
  "https://github.com/alanhornbaker/Module-5-Project_Scheduler",
  "https://github.com/AMess33/AndrewsList",
  "https://github.com/alanhornbaker/Social-Network_API",
  "https://github.com/Cyril1743/GPS-Satellite",
  "https://github.com/alanhornbaker/Employee_Tracker",
];

const projectImgs = [
  README - Generator,
  WorkdayScheduler,
  AndrewsList,
  SocialNetworkAPI,
  gpsSatellite,
  Employee - Tracker,
];

const projectName = [
  "README Generator",
  "Workday Scheduler",
  "AndrewsList",
  "Social Network API",
  "GPS-Satellite",
  "Employee Tracker",
];

const projectURL = [
  "https://github.com/alanhornbaker/README-Generator",
  "https://github.com/alanhornbaker/Module-5-Project_Scheduler",
  "https://andrews-list.herokuapp.com/",
  "https://fashgp51.herokuapp.com/",
  "https://cyril1743.github.io/GPS-Satellite/",
  "https://github.com/alanhornbaker/Employee_Tracker",
];

export default function Work() {
  return (
    <div className="container">
      <div className="row">
        {projectRepo.map((project, index) => {
          return (
            <Project
              projectRepo={project}
              img={projectImgs[index]}
              projectName={projectName[index]}
              projectURL={projectURL[index]}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
