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
    const { type, period } = this.props;

    const url = `https://api.nytimes.com/svc/mostpopular/v2/${type}/${period}.json?api-key=vAu0Y3eYif1FNFIbQi5GrbSGOGnO02wf`;

    fetch(url, {
      method: "GET"
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.results
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderItems() {
    return this.state.news.map((item) => {
      return <NewSingle key={item.id} item={item} />;
    });
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
