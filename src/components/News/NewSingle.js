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
          alt={item.title}
        />
        <span className="card-title">{item.source}</span>
      </div>
      <div className="card-content">
        <p>{item.title}</p>
      </div>
      <div className="card-action">
        <a href={item.url} target="_blanck">
          Full Article
        </a>
      </div>
    </div>
  </div>
);

export default NewSingle;
