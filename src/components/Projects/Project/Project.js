import React from "react";
import "./project.css";
import Button from "../../Button/Button";
import { HiOutlineCheckCircle } from "react-icons/hi2";

export default function Projects({
  title,
  description,
  liveUrl,
  githubUrl,
  image,
  stackUsed,
}) {
  return (
    <div className="project">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="projectDetails">
        <div className="imageContainer">
          <img src={image} alt="amazon-page" className="image" />
        </div>
        <div className="desc">
          <div>
            <p>{description}</p>
          </div>
          <div className="tech">
            <div>
              <h4>Stack used</h4>
            </div>
            <div className="stackContainer">
              <div className="stack">
                <ul>
                  {stackUsed.map((item) => {
                    return (
                      <li>
                        <HiOutlineCheckCircle className="icon" />
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btnContainer">
        <Button value={"Webpage"} url={liveUrl} />
        <Button value={"Github"} url={githubUrl} />
      </div>
    </div>
  );
}
