import React, { Component } from "react";
import axios from "axios";
import SingleSide from "./SingleSide";

class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: []
    };
  }

  componentDidMount() {
    const { type, period } = this.props;

    const url = `https://api.nytimes.com/svc/mostpopular/v2/${type}/${period}.json?api-key=vAu0Y3eYif1FNFIbQi5GrbSGOGnO02wf`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        this.setState({
          sidenews: response.data.results
        });
      })
      .catch((error) => console.log(error));
  }

  renderItems() {
    return this.state.sidenews.map((item) => {
      return <SingleSide key={item.id} item={item} />;
    });
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default SideNews;
