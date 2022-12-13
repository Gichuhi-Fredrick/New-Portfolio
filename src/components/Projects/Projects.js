import React from "react";
import "./projects.css";
import Project from "./Project/Project";

import amzImage from "../../Images/amzn1.png";
import landingImg from "../../Images/landing-page.png";
import portfolioImg from "../../Images/Porfolio.png";

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
    id: 1,
  },
  {
    title: "A Responsive Landing Page",
    liveUrl: "https://blogger-landing-page.netlify.app/",
    image: `${landingImg}`,
    githubUrl: "https://github.com/Gichuhi-Fredrick/Blogr-Landing-Page",
    description:
      "This is a solution to the Blogr landing page challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
    stackUsed: ["CSS", "HTML", "React JS"],
    id: 2,
  },
  {
    title: "Portfolio",
    liveUrl: "https://gichuhi-portfolio.herokuapp.com/",
    image: `${portfolioImg}`,
    githubUrl: "https://github.com/Gichuhi-Fredrick/New-Portfolio",
    description: "My personal website to show some of my projects.",
    stackUsed: ["CSS", "React JS"],
    id: 3,
  },
];

export default function Projects() {
  return (
    <div className="projects">
      <h3>Projects</h3>
      {mainProjects.map((project, id) => {
        return <Project key={id} {...project} />;
      })}
    </div>
  );
}
