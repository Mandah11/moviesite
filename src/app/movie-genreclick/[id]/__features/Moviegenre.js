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
  const [totalPage, setTotalPage] = useState();
  const [totalResult, setTotalResult] = useState();
  const [page, setPage] = useState(1);
  const [nextClick, setNextClick] = useState(false);
  const [backClick, setBackClick] = useState(false);
  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${id}&page=${page}`,
      options
    );
    const jsondata = await data.json();
    setMoviesData(jsondata.results);
    setTotalPage(jsondata.total_pages);
    setTotalResult(jsondata.total_results);
    console.log("thoooooooot", jsondata);
    console.log("shsgsgsgs", jsondata.results);
  };

  const getDatas = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en`,
      options
    );
    const jsondata = await data.json();
    setGenresData(jsondata.genres);
  };

  useEffect(() => {
    getDatas();
  }, []);
  useEffect(() => {
    getData();
  }, [page]);
  const GenreName = genresData.filter((item) => item.id == id);
  const handleNextStep = () => {
    setPage(page + 1);
    setNextClick(true);
    setBackClick(false);
  };
  const handleBackStep = () => {
    if (page === 1) {
      return;
    } else setPage(page - 1);
    setNextClick(false);
    setBackClick(true);
  };

  return (
    <>
      <div>
        <div className="w-142 text-[30px] flex justify-end h-30 items-center">
          Search Filter
        </div>
        <div className="w-[1440px] flex justify-between m-auto  ">
          <div className="w-100 ">
            <GenreInform />
          </div>
          <div className="border-l-1 w-300 ">
            <div className=" w-70  flex justify-center mt-3">
              {totalResult} titles in "{GenreName[0]?.name}"
            </div>
            <div className="flex flex-wrap w-250 mt-4 gap-4 justify-center items-center">
              {MoviesData.slice(0, 20).map((movie, index) => {
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
            </div>{" "}
            <div className="flex gap-4 w-230  mt-10 justify-end ">
              <button
                className="border-1 w-24 rounded-sm cursor-pointer"
                style={{
                  borderColor: backClick ? "black" : "#f5f5f7",
                }}
                onClick={handleBackStep}
              >
                {" "}
                Previous{" "}
              </button>

              <button>{page - 1}</button>
              <button
                className="border-1 w-10 rounded-sm"
                style={{
                  borderColor: backClick ? "#f5f5f7" : "black",
                  borderColor: nextClick ? "black" : "#f5f5f7",
                }}
              >
                {page}
              </button>
              <button>{page + 1}</button>
              <button>....</button>
              <button>{totalPage}</button>
              <button
                className="border-1 w-20 rounded-sm cursor-pointer"
                style={{
                  borderColor: nextClick ? "black" : "#f5f5f7",
                }}
                onClick={handleNextStep}
              >
                {" "}
                Next{" "}
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
