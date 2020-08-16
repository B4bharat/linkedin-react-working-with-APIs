import React from "react";

import News from "./News/News";
import SideNews from "./News/SideNews";

import "../styles.css";
import "./App.css";

export default function App() {
  return (
    <div className="container-fluid">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper indigo lighten-4">
            <a href="/" className="bran-logo center">
              My Feed
            </a>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col s8">
          <News type={"viewed"} period={7} />
          <News type={"shared"} period={30} />
        </div>
        <div className="col s4">
          <SideNews type={"emailed"} period={1} />
        </div>
      </div>
    </div>
  );
}
