"use client";
import { GenreInform } from "@/app/features/GenreInform";
import { MovieCard } from "@/app/_component/MovieCard";
import { useState, useEffect } from "react";
import { NotResult } from "@/app/_component/NotResult";
import { GenreItem } from "@/app/_component/GenreItem";
import { Genre } from "@/app/features/Genre";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const SearchAll = ({ value }) => {
  const [MoviesData, setMoviesData] = useState([]);
  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${value}&language=en-US&page=1`,
      options
    );
    const jsondata = await data.json();
    setMoviesData(jsondata.results);
  };
  useEffect(() => {
    getData();
  }, [value]);
  return (
    <div className="mt-7 ">
      <div className="sm:pl-14 pl-5 text-[25px] font-medium ">
        Search results
      </div>
      <div className=" sm:flex justify-between mt-5  ">
        <div className="sm:w-[70%]  sm:pl-14 pl-5 sm:border-r-1">
          <div>
            {MoviesData.length} results for "{value}"
            <div>{MoviesData.length == 0 && <NotResult />}</div>
          </div>

          <div className="flex flex-wrap sm:w-full sm:gap-4 gap-7">
            {MoviesData.map((movie, index) => {
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
        <div>
          <GenreInform />
        </div>
      </div>
    </div>
  );
};
