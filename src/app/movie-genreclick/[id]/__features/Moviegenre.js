"use client";
import { MovieCard } from "@/app/_component/MovieCard";
import { GenreInform } from "@/app/features/GenreInform";
import { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const MovieGenre = ({ id }) => {
  const [MoviesData, setMoviesData] = useState([]);
  const [genresData, setGenresData] = useState([]);
  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${id}&page=1`,
      options
    );
    const jsondata = await data.json();
    setMoviesData(jsondata.results);
    console.log("thoooooooot", jsondata.results);
  };

  const getDatas = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en`,
      options
    );
    const jsondata = await data.json();
    setGenresData(jsondata.genres);
  };
  console.log("gfhf", genresData);

  useEffect(() => {
    getDatas();
  }, []);
  useEffect(() => {
    getData();
  }, []);
  const GenreName = genresData.filter((item) => item.id == id);
  return (
    <>
      <div>
        <div className="w-146 text-[30px] flex justify-center h-30 items-center">
          Search Filter
        </div>
        <div className="w-[1440px] flex justify-between m-auto  ">
          <div className="w-100 ">
            <GenreInform />
          </div>

          <div className="border-l-1 w-300 ">
            <div className=" w-70  flex justify-center mt-3">
              {/* {genresData && } */}
              20 titles in
            </div>
            <div className="flex flex-wrap w-250 mt-4 gap-4 justify-center items-center">
              {MoviesData.slice(0, 16).map((movie, index) => {
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
      </div>
    </>
  );
};
