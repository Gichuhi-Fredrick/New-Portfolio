import React from "react";
import "./About.css";
import { HiOutlineCheckCircle } from "react-icons/hi2";

export default function about() {
  return (
    <div className="about">
      <p className="white">
        Hi, my name is Fredrick Gichuhi. I build things for the web. I’m a
        software engineer specializing in building (and occasionally designing)
        exceptional digital experiences.
      </p>

      <p>
        My goal is to listen to your ideas and bring them into a reality, be it
        a simple website or a complex website I will work with you closely until
        your ideas manifest to your desired results.
      </p>

      <div className="listContainer">
        <h4 className="weapons">Here are some of the technologies I use </h4>
        <div className="weaponsContainer">
          <div>
            <ul className="ul-1">
              <li>
                <HiOutlineCheckCircle className="icon" />
                <span>JavaScript</span>
              </li>
              <li>
                <HiOutlineCheckCircle className="icon" />
                <span>React-JS</span>
              </li>
              <li>
                <HiOutlineCheckCircle className="icon" />
                <span>HTML</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="ul-2">
              <li>
                <HiOutlineCheckCircle className="icon" />
                <span>PostgreSQL</span>
              </li>
              <li>
                <HiOutlineCheckCircle className="icon" />
                <span>Node-Js</span>
              </li>
              <li>
                <HiOutlineCheckCircle className="icon" />
                <span>CSS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
