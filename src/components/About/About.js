import React from "react";
import "./About.css";
import { HiOutlineCheckCircle } from "react-icons/hi2";

export default function about() {
  return (
    <div className="about">
      <p className="white">
        I'm a softwared engineer who specializes in building websties and 'I’m
        passionate about creating quality products that meet all of the
        customer’s needs, and I love learning new techniques and technologies
        that allow me to make that happen.
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
