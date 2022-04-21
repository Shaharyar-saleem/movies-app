import React,{useEffect, useState} from "react";
import DefaultImg from "../img/default_thumbnail.svg";

export default function Movie(props) {

    let [moviePoster, setMoviePoster] = useState([])
    const movieImg = {
        height: "500px",
    }
    const dateBadge = {
        position: "absolute",
        right: "10px",
        top: "10px"
    }
    const apiKey = "78247849b9888da02ffb1655caa3a9b9";

    const fetchPoster = async () => {
        const url = `https://api.themoviedb.org/3/find/${props.IMDb_id}?api_key=${apiKey}&language=en-US&external_source=imdb_id`
        const rawData = await fetch(url);
        const data = await rawData.json();
        setMoviePoster(data.movie_results[0].poster_path)
    }

    useEffect(()=>{
        fetchPoster()
    }, [])

  return (
    <div className="card position-relative mb-3" style={{width: '100%'}}>
        <span className="badge bg-warning text-dark" style={dateBadge}>Year: {props.year}</span>
      <img className="card-img-top" src={moviePoster ? `https://image.tmdb.org/t/p/w500/${moviePoster}` : DefaultImg} alt="Card image cap" style={movieImg} />
      <div className="px-2 py-3">
        <h5 className="card-title">{props.movieTitle}</h5>
        <p className="card-text">
          {props.content.slice(0, 250)} ......
        </p>
      </div>
    </div>
  );
}
