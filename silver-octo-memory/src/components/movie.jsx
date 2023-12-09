import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movie extends Component {
  state = { movies: getMovies() };

  handleClick = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  render() {
    const count = this.state.movies.length;
    if (count === 0) {
      return (
        <p>
          {" "}
          <span className="badge bg-warning badge-sm">
            There're no movies available
          </span>{" "}
        </p>
      );
    }
    return (
      <React.Fragment>
        <p>
          {" "}
          <span className="badge bg-primary badge-sm">
            There're {count} movies available
          </span>
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Daily Rental Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                {" "}
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => this.handleClick(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movie;
