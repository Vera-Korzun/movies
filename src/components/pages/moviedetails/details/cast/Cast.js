import React, { Component } from "react";
import { fetchMovieCast } from "../../../../../api/api";

class Cast extends Component {
  state = { cast: [] };

  componentDidMount() {
    //console.log("this.props.match.params", this.props.match.params);
    fetchMovieCast(this.props.match.params.id).then((cast) => {
      console.log("cast", cast);
      this.setState({
        cast: cast,
      });
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.cast.map((item) => (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
                width="100px"
              />
              <p> {item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;
