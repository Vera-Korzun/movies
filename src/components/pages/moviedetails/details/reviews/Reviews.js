import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchMovieReviews } from "../../../../../api/api";

const Reviews = () => {
  const [state, setState] = useState({});
  const history = useHistory();

  const getReviews = async (id) => {
    const result = await fetchMovieReviews(id);
    console.log("result", result);
    setState({ ...result });
  };

  useEffect(() => {
    getReviews(history.location.state.movieId);
  }, []);

  const { results } = state;
  console.log("results", results);

  return (
    <div className="reviews">
      {results &&
        results.map((item) => (
          <div className="reviews__list" key={item.id}>
            <h3 className="reviews__list-title">Author: {item.author}</h3>
            <p className="reviews__list-content">{item.content}</p>
          </div>
        ))}
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
