import React from "react";
import "./main.scss";
const Main = () => {
  return (
    <>
      
      <div className=" maim-img-bg">
        <img
          src={require("../../image/mainimg.png")}
          alt="mainimage"
          srcset=""
        />
          <img className="overlay-img"
          src={require("../../image/mainImgoverly.png")}
          alt="mainimage"
          srcset=""
        />

        <div className="main-info-container">
          <div className="info-wraper">
            <p>
              The new way to <br /> plan your next <br /> adventure
            </p>
            <span>Explore the colourful world</span>
            <button className="button"> </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
