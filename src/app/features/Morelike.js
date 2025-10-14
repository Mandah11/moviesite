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

  const [totalPage, setTotalPage] = useState();

  const [nextClick, setNextClick] = useState(false);
  const [backClick, setBackClick] = useState(false);
  const [page, setPage] = useState(1);
  const getMore = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=${page}`,
      options
    );
    const jsondata = await data.json();
    setMoviesMore(jsondata.results);
    console.log("this is more like", jsondata.results);
  };

  useEffect(() => {
    getMore(page);
  }, [page]);
  const handleNumber = (number) => {
    setPage(number);
  };

  const handleNextStep = () => {
    setPage(page + 1);
    setNextClick(true);
    setBackClick(false);
  };

  const handleBackStep = () => {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
      setNextClick(false);
      setBackClick(true);
    }
  };

  return (
    <>
      <div className="w-full flex justify-center mt-10">
        <div className="sm:w-285 w-[430px] flex light: text-black flex-col ">
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
          <div className="gap-3 flex sm:gap-4  w-70 justify-center sm:w-225  mt-10 sm:justify-end sm:ml-59 ml-33">
            <button
              className="border-1 sm:w-24 w-16 text-[14px] sm:text-[16.5px] rounded-sm cursor-pointer"
              style={{
                borderColor: backClick ? "black" : "#f5f5f7",
              }}
              onClick={handleBackStep}
            >
              {" "}
              Previous{" "}
            </button>

            {page > 1 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleNumber(page - 1);
                }}
                className="text-[14px] sm:text-[16px] cursor-pointer"
              >
                {page - 1}
              </button>
            )}

            <button
              onClick={() => {
                handleNumber(page);
              }}
              className="border-1 sm:w-10 text-[14px] sm:text-[16px] w-7  rounded-sm cursor-pointer"
              style={{
                borderColor: backClick ? "black" : "none",
                borderColor: nextClick ? "black" : "none",
              }}
            >
              {page}
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleNumber(page + 1);
              }}
              className="text-[14px] sm:text-[16px] cursor-pointer"
              style={{
                borderColor: backClick ? "black" : "none",
                borderColor: nextClick ? "black" : "none",
              }}
            >
              {page + 1}
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleNumber(page + 2);
              }}
              className="text-[14px] sm:text-[16px] cursor-pointer"
              style={{
                borderColor: backClick ? "black" : "none",
                borderColor: nextClick ? "black" : "none",
              }}
            >
              {page + 2}
            </button>
            <button>....</button>
            <button className="text-[15px] sm:text-[16px] cursor-pointer">
              {totalPage}
            </button>
            <button
              className="border-1 sm:w-20 w-13 text-[14px] sm:text-[17px] rounded-sm cursor-pointer"
              style={{
                borderColor: nextClick ? "black" : "#f5f5f7",
              }}
              onClick={handleNextStep}
            >
              {" "}
              Next{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
