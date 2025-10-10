"use client";
import { useEffect, useState } from "react";

import { MovieCard } from "../_component/MovieCard";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const Movielike = ({ id }) => {
  const [MoviesMore, setMoviesMore] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMore = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
      options
    );
    const jsondata = await data.json();
    setMoviesMore(jsondata.results);
    console.log("this is more like", jsondata.results);

    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  useEffect(() => {
    getMore();
  }, []);

  if (loading) {
    return <div>fdsgfdsg</div>;
  }
  return (
    <>
      <div className="w-full flex justify-center mt-10">
        <div className="sm:w-285 flex light: text-black flex-col ">
          <div className="sm:w-285 flex  justify-between">
            <div className="sm:w-50 w-40 sm:ml-2 ml-6 text-xl font-medium ">
              More Like this
            </div>
          </div>
          <div className="flex flex-wrap  sm:w-285 mt-2 justify-evenly sm:gap-3">
            {MoviesMore?.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  footer={movie.title}
                  rate={Math.round(movie.vote_average)}
                  movieId={movie.id}
                  img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
