import React, { Component } from "react";
import { fetchMovieReviews } from "../../../../../api/api";

class Reviews extends Component {
  state = { reviews: "" };

  componentDidMount() {
    //console.log("this.props.match.params", this.props.match.params);
    fetchMovieReviews(this.props.match.params.id).then((reviews) => {
      //console.log("reviews ==>>>", reviews);
      this.setState({
        reviews: reviews,
      });
    });
  }
  render() {
    const { reviews } = this.state;
    return <p>{reviews}</p>;
  }
}

export default Reviews;
