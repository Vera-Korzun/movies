import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovieReviews } from "../../../../../api/api";

const Reviews = () => {
  const [state, setState] = useState({});
  const location = useLocation();
  //console.log(" history history", history);

  const getReviews = async (id) => {
    const results = await fetchMovieReviews(id);
    console.log("result fetched ", results);
    setState({ ...results });
  };

  useEffect(() => {
    console.log(" Reviews location", location);
    getReviews(location.state.movieId);
    // eslint-disable-next-line
  }, []);

  const { results } = state;
  console.log("state results", state.results);

  return (
    <div className="reviews">
      {results !== undefined && results.length === 0 && (
        <div className="reviews__list">
          <p className="reviews__list-content">
            We don't have any reviews for this movie
          </p>
        </div>
      )}
      <ul className="reviews__list">
        {results &&
          results.map((item) => (
            <li key={item.id}>
              <h3 className="reviews__list-title">Author: {item.author}</h3>
              <p className="reviews__list-content">{item.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;

// class Reviews extends Component {
//   state = { reviews: [] };

//   componentDidMount() {
//     //console.log("this.props.match.params", this.props.match.params);
//     fetchMovieReviews(this.props.match.params.id).then((reviews) => {
//       console.log("reviews ==>>>", reviews);
//       this.setState({
//         reviews: reviews,
//       });
//     });
//   }
//   render() {
//     return (
//       <div className="reviews">
//         {this.state.reviews.map((item) => (
//           <div className="reviews__list" key={item.id}>
//             <h3 className="reviews__list-title">Author: {item.author}</h3>
//             <p className="reviews__list-content">{item.content}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Reviews;
