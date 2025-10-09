"use client";
import { useState } from "react";
import { StartIcon } from "../icons/StartIcon";
import { NextButtonIcon } from "../icons/NextButtonIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { TrailerId } from "../features/TrailerId";
import { useEffect } from "react";
import { BackButtonIcon } from "../icons/BackButtonIcon";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const HeroSliderPhoto = (props) => {
  const {
    img,
    name,
    rate,
    handleNext,
    handleBack,
    overview,
    movieId,
    index,
    total,
  } = props;
  const [trailer, setTrailer] = useState();
  const [MoviesMore, setMoviesMore] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
  const getMore = async () => {
    const data = await fetch(url, options);
    const jsondata = await data.json();
    setMoviesMore(jsondata.results);
  };

  useEffect(() => {
    getMore();
  }, [movieId]);

  return (
    <div className=" w-full m-auto sm:h-170 h-90 flex relative object-cover  ">
      <img
        className=" absolute -z-1 h-full w-full object-cover "
        src={`https://image.tmdb.org/t/p/original${img}`}
      ></img>

      <div className="flex items-center justify-end w-full">
        <div>
          <div className="sm:w-35 w-20 justify-center h-20  flex  pr-8">
            {index > 0 && (
              <button
                onClick={handleBack}
                className=" bg-[#f4f4f5]   sm:h-9 sm:w-9 h-5 w-5 flex items-center justify-center rounded-xl"
              >
                <BackButtonIcon />
              </button>
            )}
          </div>
        </div>

        <div className=" sm:flex flex-col justify-center pl-10 w-280   text-white hidden">
          <div className="w-36 ">
            <span>Now Playing: </span>
            <span>{name}</span>
          </div>
          <div className="flex items-center">
            <StartIcon />
            <p> {rate}/10</p>
          </div>
          <div className="w-100       text-white">{overview}</div>
          <button
            className="w-40 bg-white rounded-sm h-8 items-center justify-center flex gap-2 mt-4"
            onClick={() => {
              setTrailer(!trailer);
            }}
          >
            <PlayIcon />
            <p className="text-black">Watch Trailer</p>
          </button>
        </div>
        <div className=" absolute h-full mt-10">
          {trailer && <TrailerId id={movieId} />}
        </div>
        <div className="w-60 h-20  flex justify-end pr-8">
          {index < total - 1 && (
            <button
              onClick={handleNext}
              className=" light: bg-[#f4f4f5] sm:h-9 sm:w-9 h-5 w-5 flex items-center justify-center rounded-xl"
            >
              <NextButtonIcon />
            </button>
          )}
        </div>
      </div>
    </div>
    // <div className=" w-full m-auto sm:h-170 h-90 flex relative object-cover  ">
    //   <img
    //     className=" absolute z-10 h-full w-full object-cover "
    //     src={`https://image.tmdb.org/t/p/original${img}`}
    //   ></img>

    //   <div className="flex items-center justify-end w-full">
    //     <div>
    //       <div className="w-35 justify-center sm:h-20  flex  sm:pr-8">
    //         {index > 0 && (
    //           <button
    //             onClick={handleBack}
    //             className=" bg-[#f4f4f5]   sm:h-9 sm:w-9 flex items-center justify-center rounded-xl"
    //           >
    //             <BackButtonIcon />
    //           </button>
    //         )}
    //       </div>
    //     </div>

    //     <div className=" sm:flex flex-col justify-center pl-10 w-280   text-white hidden  ">
    //       <div className="w-36 ">
    //         <span>Now Playing: </span>
    //         <span>{name}</span>
    //       </div>
    //       <div className="flex items-center">
    //         <StartIcon />
    //         <p> {rate}/10</p>
    //       </div>
    //       <div className="w-100       text-white">{overview}</div>
    //       <button
    //         className="w-40 light: bg-white rounded-sm h-8 items-center justify-center flex gap-2 mt-4"
    //         onClick={() => {
    //           setTrailer(!trailer);
    //         }}
    //       >
    //         <PlayIcon />
    //         <p className="text-black">Watch Trailer</p>
    //       </button>
    //     </div>
    //     <div className=" absolute h-full mt-10">
    //       {trailer && <TrailerId id={movieId} />}
    //     </div>
    //     <div className="w-60 h-20  flex justify-end pr-8">
    //       {index < total - 1 && (
    //         <button
    //           onClick={handleNext}
    //           className=" light: bg-[#f4f4f5] h-9 w-9 flex items-center justify-center rounded-xl"
    //         >
    //           <NextButtonIcon />
    //         </button>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};
