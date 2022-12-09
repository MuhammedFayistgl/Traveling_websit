import React from "react";

import "./header.css";

const Header = () => {
  return (
    <header>
      <nav className="container nav-container">
        <div className="nav-itmes">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="69"
              height="30"
              viewBox="0 0 69 30"
            >
              <text
                id="Raido."
                transform="translate(0 24)"
                fill="#e89400"
                font-size="22"
                font-family="SegoeUI-Bold, Segoe UI"
                font-weight="700"
                letter-spacing="0.031em"
              >
                <tspan x="0" y="0">
                  Raido.
                </tspan>
              </text>
            </svg>
          </div>
          <div>
            <input type="checkbox" id="checked" />
            <label for="checked">
              <svg
                className="bar"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </label>

            <div id="nav-list" className="nav-list">
              <ul>
                <li>Home</li>
                <li>AboutUs</li>
                <li>Discover</li>
                <li>Blog</li>
                <li>Journals</li>
                <li>Gallery</li>
                <li>Contact</li>
              </ul>
              <svg
                id="search"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect
                  id="Rectangle_12"
                  data-name="Rectangle 12"
                  width="24"
                  height="24"
                  fill="#fff"
                  opacity="0"
                />
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M20.71,19.29l-3.4-3.39A7.92,7.92,0,0,0,19,11a8,8,0,1,0-8,8,7.92,7.92,0,0,0,4.9-1.69l3.39,3.4a1,1,0,1,0,1.42-1.42ZM5,11a6,6,0,1,1,6,6,6,6,0,0,1-6-6Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
