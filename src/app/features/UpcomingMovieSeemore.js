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
export const UpComingMovieSeeMore = (props) => {
  const { title } = props;
  const [upcomingMoviesData, setUpComingMoviesData] = useState([]);
  const [page, setPage] = useState(1);
  const apiLink = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`;
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const data = await fetch(apiLink, options);
    const jsondata = await data.json();
    setUpComingMoviesData(jsondata.results);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [page]);
  if (loading) {
    return <div> </div>;
  }
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="sm:w-285 flex text-black flex-col ">
        <div className="sm:w-285 flex  justify-between">
          <div className="sm:w-50 w-40 sm:ml-2 ml-6 text-xl font-medium ">
            {title}
          </div>
        </div>
        <div className="flex flex-wrap  sm:w-285 mt-2 justify-evenly sm:gap-3">
          {upcomingMoviesData.map((movie, index) => {
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
  );
};
