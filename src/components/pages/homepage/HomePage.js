import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { fetchTrending } from "../../../api/api";
import HomeStyled from "./HomeStyled";

class HomePage extends Component {
  state = {
    trendMovies: [],
  };

  componentDidMount = () => {
    fetchTrending().then((response) => {
      //console.log("response ==>>", response);
      this.setState((prev) => ({
        ...prev,
        trendMovies: [...response],
      }));
    });
  };

  render() {
    const { trendMovies } = this.state;
    //console.log("trendMovies ==>>", trendMovies);
    return (
      <HomeStyled>
        <div className="homepage">
          <h2>Trending today</h2>
          <ul>
            {trendMovies.map((movie, index) => (
              <li key={`${movie.id}${index}`}>
                <NavLink to={`/movies/:${movie.id}`}>{movie.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </HomeStyled>
    );
  }
}

export default HomePage;
