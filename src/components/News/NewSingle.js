import React from "react";

const NewSingle = ({ item }) => (
  <div className="col s4">
    <div className="card">
      <div className="card-image">
        <img
          src={
            item.media[0]?.["media-metadata"][0].url ||
            "http://lorempixel.com/400/200/"
          }
          alt={item.type}
        />
        <span className="card-title">{item.text}</span>
      </div>
    </div>
  </div>
);

export default NewSingle;
