import React from "react";
import "./sectiontwo.scss";

const Sectiontwo = () => {
  return (
    <>
      <div className="">
        <div className="sectiontwo-content-wraper">
          <div className="sectiontwo-content-img">
            <img
              src={require("../../image/sectiontwo.png")}
              alt="sectiontwo-image-loding..."
            />
          </div>

          <div className="sectiontwo-content-info">
            <div className="sectiontwo-content-info-content">
              <h5>About Us</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <span className="trip-disply-count">
              <div className="trip-disply-count-wraper">
                <span>
                  <h4>268</h4>
                  <h6>Completed Trips</h6>
                  
                </span>
                <hr/>
                <span>
                  <h4>268</h4>
                  <h6>Completed Trips</h6>
                </span>
                <hr />
                <span>
                  <h4>268</h4>
                  <h6>Completed Trips</h6>
                </span>
              </div>
            </span>
            <button className="button"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sectiontwo;
