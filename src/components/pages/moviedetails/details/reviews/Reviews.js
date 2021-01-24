import React, { Component } from "react";
import { fetchMovieReviews } from "../../../../../api/api";

class Reviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    //console.log("this.props.match.params", this.props.match.params);
    fetchMovieReviews(this.props.match.params.id).then((reviews) => {
      console.log("reviews ==>>>", reviews);
      this.setState({
        reviews: reviews,
      });
    });
  }
  render() {
    return (
      <div className="reviews">
        {this.state.reviews.map((item) => (
          <div className="reviews__list" key={item.id}>
            <h3 className="reviews__list-title">Author: {item.author}</h3>
            <p className="reviews__list-content">{item.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Reviews;
