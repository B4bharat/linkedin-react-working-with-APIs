import React, { Component } from "react";
import SingleSide from "./SingleSide";

class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {}

  renderItems() {
    return this.state.news.map((item) => {
      return <SingleSide key={item.id} item={item} />;
    });
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default SideNews;
