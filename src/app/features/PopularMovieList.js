"use client";
import { useEffect, useState } from "react";
import { MovieCard } from "../_component/MovieCard";
import { RightIcon } from "../icons/RightIcon";
import Link from "next/link";
import { MovieCardLoading } from "../_component/MovieCardLoading";
const apiLink =
  "https://api.themoviedb.org/3//movie/popular?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const PopularMovieList = (props) => {
  const { title } = props;
  const [upcomingMoviesData, setUpComingMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const data = await fetch(apiLink, options);
    const jsondata = await data.json();
    setUpComingMoviesData(jsondata.results.splice(10));
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };
  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return (
      <>
        <MovieCardLoading />
      </>
    );
  }
  return (
    <div className="w-full flex justify-center mt-10">
      <div
        className="w-285 flex light: text-black flex-col "
        style={{ cursor: "pointer" }}
      >
        <div className="w-285 flex justify-between">
          <div className="w-50  ml-2  text-xl">{title}</div>
          <Link href={"/popular"}>
            <button className="w-50   justify-end  flex items-center">
              See more <RightIcon />
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap  w-285 mt-2 justify-around gap-3">
          {upcomingMoviesData.map((movie, index) => {
            return (
              <MovieCard
                key={index}
                footer={movie.title}
                rate={Math.floor(movie.vote_average)}
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
