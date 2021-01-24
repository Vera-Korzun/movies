import React, { Component } from "react";
import { fetchMovieCast } from "../../../../../api/api";

class Cast extends Component {
  state = { cast: [] };

  componentDidMount() {
    //console.log("this.props.match.params", this.props.match.params);
    fetchMovieCast(this.props.match.params.id).then((cast) => {
      //console.log("cast", cast);
      this.setState({
        cast: cast,
      });
    });
  }
  render() {
    return (
      <div className="cast">
        <ul className="cast__list">
          {this.state.cast.map((item) => (
            <li className="cast__list-item" key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
                width="100px"
              />
              <p className="cast__list-item-name"> {item.name}</p>
              <p className="cast__list-item-character">
                Character: {item.character}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;
