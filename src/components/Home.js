import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";

export const Home = ({ showPage }) => {
  return (
    <>
      <div className="container">
        <div className="name_box">
          <h3 className="greet">Hi, my name is</h3>
          <h1>Muhammed Basheer</h1>
          <h2>
            I build things <span>with code</span>
          </h2>
          <div className="para">
            <p>
              i am an electical engineering student who loves electronics and
              code. i am very much interested in iot's,web and mobile
              developmet.
            </p>
          </div>
          <button onClick={showPage}>Check out my projects</button>
        </div>
      </div>
    </>
  );
};
