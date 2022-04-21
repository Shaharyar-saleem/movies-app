import React, { useState } from "react";
import Movie from "./Movie";

export default function SearchBox() {
  let [movieName, setMovieName] = useState("");
  let [movies, setMovies] = useState([]);

  const setMovie = (e) => {
    console.log("entered movie name is", e.target.value);
    setMovieName(e.target.value);
    fetchMovie(e.target.value);
  };

  const fetchMovie = async (name) => {
    const url = `https://api.netzkino.de.simplecache.net/capi-2.0a/search?q=${name}&d=devtest`;
    console.log("API url:", url);
    const rawData = await fetch(url);
    const movieData = await rawData.json();
    setMovies(movieData.posts);
    console.log("movie data from API:", movieData.posts);
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <input
              type="text"
              placeholder="Enter Movie Name"
              className="form-control"
              onChange={setMovie}
            />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-12 pb-2">
            <h3>{movies.length} Movies Found</h3>
          </div>
        </div>
        <div className="row">
          {movies.map((movie, index) => {
            return (
              <div className="col-md-4" key={index}>
                <Movie
                  length={movies.length}
                  movieTitle={movie.title}
                  date={movie.modified}
                  content={movie.content}
                  thumbnail={movie.thumbnail}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
