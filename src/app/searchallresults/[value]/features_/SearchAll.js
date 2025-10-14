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
  const [totalPage, setTotalPage] = useState();
  const [totalResult, setTotalResult] = useState();
  const [page, setPage] = useState(1);
  const [nextClick, setNextClick] = useState(false);
  const [backClick, setBackClick] = useState(false);
  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${value}&language=en-US&page=${page}`,
      options
    );
    const jsondata = await data.json();
    console.log("search all", jsondata);

    setMoviesData(jsondata.results);
    setTotalPage(jsondata.total_pages);
    setTotalResult(jsondata.total_results);
  };
  useEffect(() => {
    getData(page);
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
    <div className="mt-7 ">
      <div className="sm:pl-14 pl-5 text-[25px] font-medium ">
        Search results
      </div>
      <div className=" sm:flex justify-between mt-5  ">
        <div className="sm:w-[70%]  sm:pl-14 pl-5 sm:border-r-1">
          <div>
            {MoviesData.length} results for &quot;{value}&quot;
            <div>{MoviesData.length == 0 && <NotResult />}</div>
          </div>

          <div className="flex flex-wrap sm:w-full sm:gap-4 gap-7">
            {MoviesData.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  footer={movie.title}
                  rate={movie.vote_average.toFixed(1)}
                  movieId={movie.id}
                  img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              );
            })}
          </div>
          <div className="gap-3 flex sm:gap-4  w-100 sm:w-225  mt-10 sm:justify-end ">
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
                className="text-[14px] sm:text-[16px]"
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
            <button className="text-[15px] sm:text-[16px]">{totalPage}</button>
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
        <div className="pl-5">
          <GenreInform />
        </div>
      </div>
    </div>
  );
};
