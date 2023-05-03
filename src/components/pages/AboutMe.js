import React from "react";
import "../../styles/main.css";
import profilePicture from "../../images/profile-pic.jpg";

const style = {
  backgroundColor: "#535B8D",
  width: "100%",
  height: "100%",
  margin: "10px",
  padding: "10px",
};

const pStyle = {
  width: "200px",
  margin: "auto",
};

export default function AboutMe() {
  return (
    <div style={style}>
      <img className="profile" src={profilePicture} alt="Alan"></img>
      <p style={pStyle}>
        Full Stack Developer with a passion for learning, tinkering, and creating high-quality
        applications that meet business needs and provide value. Skilled in UI
        design, API development, and cloud apps. Collaborative team player who
        values technical excellence and continuous improvement. Started in
        working in retail customer service in 2008, then switched to fitness
        instruciton and exercise science in 2017. Currently pursuing a Full
        Stack BootCamp Certificate from the University of Kansas.
      </p>
    </div>
  );
}
