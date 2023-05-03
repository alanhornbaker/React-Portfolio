import React from "react";

export default function Header({ page }) {
  if (page === "AboutMe") {
    return <h2>About Me</h2>;
  }
  if (page === "Work") {
    return <h2>Portfolio</h2>;
  }
  if (page === "Contact") {
    return <h2>Contact</h2>;
  }
  return <h2>Resume</h2>;
}
