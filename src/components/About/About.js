import React from "react";
import "./About.css";
import { HiOutlineCheckCircle } from "react-icons/hi2";

export default function about() {
  return (
    <div className="about">
      <p className="white">
        I'm a software engineer who specializes in building websties and 'I'm
        passionate about creating quality products that meet all of the
        customer's needs, and I love learning new technologies that allow me to
        make that happen.
      </p>

      <div className="listContainer">
        <h3 className="weapons">Technologies that I use are: </h3>
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
