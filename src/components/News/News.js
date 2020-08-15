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
    const url =
      "http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=bfef6454abcc4607acaf521ee9e53e13";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderItems() {
    return this.props.items.map((item) => {
      <NewSingle key={item.id} item={item} />;
    });
  }

  render() {
    return <ul>{this.renderItems()}</ul>;
  }
}

export default News;
