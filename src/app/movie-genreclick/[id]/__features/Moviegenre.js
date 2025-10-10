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
  const getPageData = async (page) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${id}&page=${page}`,
      options
    );
    const jsondata = await data.json();
    setMoviesData(jsondata.results);
    setTotalPage(jsondata.total_pages);
    setTotalResult(jsondata.total_results);
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
    getPageData(page);
  }, [page]);

  const GenreName = genresData.filter((item) => item.id == id);

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
      <div className="sm:w-[1440px] flex justify-between m-auto ">
        <div className="flex flex-col w-100 ">
          <div className="  flex justify-start sm:text-[30px] ">
            Search Filter{" "}
          </div>
          <GenreInform />
        </div>
        <div className=" flex justify-center border-1 border-[#E4E4E7] "></div>
        <div>
          <div className=" w-85 justify-center flex  mt-3">
            {totalResult} titles in "{GenreName[0]?.name}"
          </div>
          <div className="flex flex-wrap w-full  mt-4 gap-4 justify-center items-center ">
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

            {page > 1 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleNumber(page - 1);
                }}
              >
                {page - 1}
              </button>
            )}

            <button
              onClick={() => {
                handleNumber(page);
              }}
              className="border-1 w-10 rounded-sm"
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
              style={{
                borderColor: backClick ? "black" : "none",
                borderColor: nextClick ? "black" : "none",
              }}
            >
              {page + 2}
            </button>
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
        </div>
      </div>
    </>
  );
};
