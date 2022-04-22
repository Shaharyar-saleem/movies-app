import React, { useState } from "react";
import Movie from "./Movie";

export default function SearchBox() {
  let [movies, setMovies] = useState([]);

  const fetchMovie = async (e) => {
    const url = `https://api.netzkino.de.simplecache.net/capi-2.0a/search?q=${e.target.value}&d=devtest`;
    const rawData = await fetch(url);
    const movieData = await rawData.json();
    setMovies(movieData.posts);
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
              onChange={fetchMovie}
            />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-12 pb-2">
            <h4>
              <i>
                {movies.length >= 1
                  ? `${movies.length} Movies Found`
                  : "Enter Movie Name For Results"}
              </i>
            </h4>
          </div>
        </div>
        <div className="row">
          {movies.map((movie, index) => {
            let IMDb_string = movie.custom_fields["IMDb-Link"].toString();
            let IMDb_id = IMDb_string.split("title/")[1];
            return (
              <div className="col-md-4" key={index}>
                <Movie
                  length={movies.length}
                  movieTitle={movie.title}
                  year={movie.custom_fields.Jahr}
                  content={movie.content}
                  thumbnail={movie.thumbnail}
                  IMDb_id={IMDb_id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
