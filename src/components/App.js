import React from "react";

import News from "./News/News";

import "../styles.css";
import "./App.css";

// API KEY - bfef6454abcc4607acaf521ee9e53e13

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>My feed</h1>
      </header>
      <News />
    </div>
  );
}
