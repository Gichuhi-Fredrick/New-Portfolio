import React from "react";
import "./projects.css";
import Project from "./Project/Project";

import amzImage from "../../Images/amzn1.png";

const mainProjects = [
  {
    title: "Amzn-Clone",
    liveUrl: "https://amznclone.herokuapp.com/",
    image: `${amzImage}`,
    githubUrl:
      "https://github.com/Gichuhi-Fredrick/Amzn-Clone-Frontend-with-ReactJS",
    description:
      "This a simple clone of amazon website with all it's functionality like: add to busket, proceed to checkout and a payment method",
    stackUsed: ["CSS", "Node Js", "React JS", "PostgreSQL"],
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
