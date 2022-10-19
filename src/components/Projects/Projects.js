import React from "react";
import "./projects.css";
import Project from "./Project/Project";

import amzImage from "../../Images/amzn1.png";
import landingImg from "../../Images/landing-page.png";

const mainProjects = [
  {
    title: "Amzn-Clone",
    liveUrl: "https://amznclone.herokuapp.com/",
    image: `${amzImage}`,
    githubUrl:
      "https://github.com/Gichuhi-Fredrick/Amzn-Clone-Frontend-with-ReactJS",
    description:
      "This a simple clone of amazon website with all it's functionality like: add to basket, proceed to checkout and a payment method",
    stackUsed: ["CSS", "Node Js", "React JS", "PostgreSQL"],
  },
  {
    title: "A Responsive Landing Page",
    liveUrl: "https://blogger-landing-page.netlify.app/",
    image: `${landingImg}`,
    githubUrl: "https://github.com/Gichuhi-Fredrick/Blogr-Landing-Page",
    description:
      "This is a solution to the Blogr landing page challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
    stackUsed: ["CSS", "HTML", "React JS"],
  },
];

export default function Projects() {
  return (
    <div className="projects">
      <h3>Projects</h3>
      {mainProjects.map((project, title) => {
        return <Project key={title} {...project} />;
      })}
    </div>
  );
}
