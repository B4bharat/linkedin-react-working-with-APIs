import React from "react";

import News from "./News/News";

import "../styles.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>My feed</h1>
      </header>
      <News type={"viewed"} period={7} />
    </div>
  );
}
