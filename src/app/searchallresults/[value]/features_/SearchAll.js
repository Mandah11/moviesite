"use client";
import { GenreInform } from "@/app/features/GenreInform";
import { MovieCard } from "@/app/_component/MovieCard";
import { useState, useEffect } from "react";
import { NotResult } from "@/app/_component/NotResult";
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
    <>
      <div>
        <div className="w-160   text-[30px] flex justify-end h-30 items-center">
          Search Results
        </div>
        <div className="w-[1440px] flex justify-between m-auto  ">
          <div className="border-r-1 w-290 ">
            <div className=" w-70  flex justify-center mt-3">
              <div>
                {MoviesData.length} results for "{value}"
                <div>{MoviesData.length == 0 && <NotResult />}</div>
              </div>
            </div>
            <div className="flex flex-wrap w-250 mt-4 gap-4 justify-center items-center">
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
          <div className="w-100 ml-10 ">
            <GenreInform />
          </div>
        </div>
      </div>
    </>
  );
};
