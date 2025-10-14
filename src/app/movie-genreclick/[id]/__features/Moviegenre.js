"use client";
import { MovieCard } from "@/app/_component/MovieCard";
import { MovieCardLoading } from "@/app/_component/MovieCardLoading";
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
  const [loading, setLoading] = useState(false);
  const getPageData = async (page) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${id}&page=${page}`,
      options
    );
    const jsondata = await data.json();
    setLoading(true);
    setMoviesData(jsondata.results);
    setTotalPage(jsondata.total_pages);
    setTotalResult(jsondata.total_results);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
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
  if (loading) {
    return (
      <div className="mt-7 ">
        <button className=" w-65 bg-[#f4f4f5] h-9 rounded-xl sm:ml-0 ml-2"></button>
        <div className="sm:flex justify-between mt-5  ">
          <div className="pl-5 sm:pl-0">
            <div className=" sm:bg-white  flex flex-col max-h-fit w-95 sm:mt-0 mt-5 sm:mb-0 mb-10 sm:ml-0 ml-4 ">
              <div className="flex flex-col gap-3">
                <button className="bg-[#f4f4f5] w-30 h-7 rounded-xl"></button>
                <button className="bg-[#f4f4f5] w-55  h-7  rounded-xl"></button>
              </div>
              <div className="flex justify-evenly mt-4  sm:mt-2 ">
                <div className="flex flex-wrap sm:gap-4  sm:w-100  sm:mt-2 gap-4  ">
                  <div className="sm:flex  sm:mt-1 text-black ">
                    <button className="   gap-2 w-25   pl-2  h-6  rounded-xl bg-[#f4f4f5] "></button>
                  </div>
                  <div className="sm:flex  sm:mt-1 text-black ">
                    <button className=" gap-2 w-20   pl-2   h-6  rounded-xl cursor-pointer bg-[#f4f4f5] "></button>
                  </div>
                  <div className="sm:flex  sm:mt-1 text-black ">
                    <button className=" gap-2 w-35   pl-2   h-6  rounded-xl cursor-pointer bg-[#f4f4f5]  "></button>
                  </div>
                  <div className="sm:flex  sm:mt-1 text-black ">
                    <button className=" gap-2 w-20   pl-2   h-6  rounded-xl cursor-pointer  bg-[#f4f4f5] "></button>
                  </div>
                  <div className="sm:flex  sm:mt-1 text-black ">
                    <button className=" gap-2 w-25   pl-2   h-6  rounded-xl cursor-pointer  bg-[#f4f4f5] "></button>
                  </div>
                  <div className="sm:flex  sm:mt-1 text-black ">
                    <button className=" gap-2 w-28   pl-2   h-6  rounded-xl cursor-pointer bg-[#f4f4f5]  "></button>
                  </div>
                  <div className="sm:flex  sm:mt-1 text-black ">
                    <button className=" gap-2 w-32   pl-2   h-6  rounded-xl cursor-pointer bg-[#f4f4f5]  "></button>
                  </div>
                  <div className="sm:flex  sm:mt-1 text-black ">
                    <button className=" gap-2 w-37   pl-2   h-6  rounded-xl cursor-pointer  bg-[#f4f4f5] "></button>
                  </div>
                  <div className="sm:flex  sm:mt-1 text-black ">
                    <button className=" gap-2 w-15   pl-2   h-6  rounded-xl cursor-pointer bg-[#f4f4f5]  "></button>
                  </div>
                  <div className="sm:flex  sm:mt-1 text-black ">
                    <button className=" gap-2 w-35   pl-2   h-6  rounded-xl cursor-pointer  bg-[#f4f4f5] "></button>
                  </div>
                  <div className="sm:flex  sm:mt-1 text-black ">
                    <button className=" gap-2 w-45   pl-2   h-6  rounded-xl cursor-pointer  bg-[#f4f4f5] "></button>
                  </div>
                  <div className="sm:flex  sm:mt-1 text-black ">
                    <button className=" gap-2 w-25   pl-2   h-6  rounded-xl cursor-pointer  bg-[#f4f4f5] "></button>
                  </div>
                  <div className="sm:flex  sm:mt-1 text-black ">
                    <button className=" gap-2 w-35   pl-2   h-6  rounded-xl cursor-pointer  bg-[#f4f4f5] "></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[70%] sm:border-l-1 sm:pl-14 pl-5">
            <div className="sm:flex  sm:mt-1 mb-3 ml-5 sm:ml-0   ">
              <button className=" gap-2 w-55   pl-2   h-6  rounded-xl cursor-pointer bg-[#f4f4f5] "></button>
            </div>
            <div className="flex flex-wrap  sm:gap-4 gap-7 sm:w-full sm:ml-0 ml-5 ">
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>

              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-7 ">
      <div className=" text-[25px] font-medium  sm:pl-0 pl-5">
        Search Filter
      </div>
      <div className="sm:flex justify-between mt-5  ">
        <div className="pl-5 sm:pl-0">
          <GenreInform />
        </div>
        <div className="sm:w-[70%] sm:border-l-1 sm:pl-14 pl-5">
          <div>
            {totalResult} titles in &quot;{GenreName[0]?.name}&quot;
          </div>
          <div className="flex flex-wrap  sm:gap-4 gap-7 sm:w-full ">
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
      </div>
    </div>
  );
};
