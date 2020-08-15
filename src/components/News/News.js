import React, { Component } from "react";
import NewSingle from "./NewSingle";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    const url = "https://cat-fact.herokuapp.com/facts";

    fetch(url, {
      method: "GET"
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.all
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderItems() {
    return this.state.news.map((item) => {
      return <NewSingle key={item._id} item={item} />;
    });
  }

  render() {
    return <ul>{this.renderItems()}</ul>;
  }
}

export default News;
