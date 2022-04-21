import React from "react";

export default function Movie(props) {
    const movieImg = {
        height: "500px",
    }
    const dateBadge = {
        position: "absolute",
        right: "10px",
        top: "10px"
    }
    let date = new Date(props.date);
  return (
    <div className="card position-relative mb-3" style={{width: '100%'}}>
        <span class="badge bg-warning text-dark" style={dateBadge}>{date.toDateString()}</span>
      <img className="card-img-top" src={props.thumbnail} alt="Card image cap" style={movieImg} />
      <div className="px-2 py-3">
        <h5 className="card-title">{props.movieTitle}</h5>
        <p className="card-text">
          {props.content.slice(0, 250)} ......
        </p>
      </div>
    </div>
  );
}
