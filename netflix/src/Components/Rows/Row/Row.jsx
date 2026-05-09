import React, { useEffect, useState } from "react";
import axios from "../../../utiles/axios";
import movieTrailer from "movie-trailer";
import "./Row.css";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data?.results || []);
      } catch (error) {
        console.log("Error fetching movies:", error);
        setMovies([]);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.title || movie?.name || movie?.original_name || ""
      )
        .then((url) => {
          if (!url) {
            console.log(url);
            return;
          }

          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));

          setTrailerUrl(urlParams.get("v"));
    
        })
        .catch((error) => console.log(error));

      console.log("Movie clicked:", movie);
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${
              isLargeRow ? "row_posterLarge" : ""
            }`}
            src={
              movie.poster_path || movie.backdrop_path
                ? `${base_url}${
                    isLargeRow
                      ? movie.poster_path
                      : movie.backdrop_path
                  }`
                : "https://via.placeholder.com/300"
            }
            alt={movie.title || movie.name}
          />
        ))}
      </div>
        {trailerUrl && (
          <YouTube
            videoId={trailerUrl}
            opts={opts}
          />
        )}
    </div>
  );
};

export default Row;