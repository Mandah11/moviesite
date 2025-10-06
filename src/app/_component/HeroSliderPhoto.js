"use client";
import { useState } from "react";
import { StartIcon } from "../icons/StartIcon";
import { NextButtonIcon } from "../icons/NextButtonIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { TrailerId } from "../features/TrailerId";
import { useEffect } from "react";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const HeroSliderPhoto = (props) => {
  const { img, name, rate, handleNext, handleBack, overview, movieId } = props;
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
    <div className=" w-full m-auto h-170 flex relative object-cover  ">
      <img
        className=" absolute -z-1 h-full w-full object-cover "
        src={`https://image.tmdb.org/t/p/original${img}`}
      ></img>

      <div className="flex items-center justify-end w-full">
        <div>
          <div className="w-35 justify-center h-20  flex  pr-8">
            <button
              onClick={handleBack}
              className=" bg-[#f4f4f5]  dark:bg-black  h-9 w-9 flex items-center justify-center rounded-xl"
            >
              <NextButtonIcon />
            </button>
          </div>
        </div>

        <div className=" flex flex-col justify-center pl-10 w-280   text-white">
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
            className="w-40 light: bg-white rounded-sm h-8 items-center justify-center flex gap-2 mt-4"
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
          <button
            onClick={handleNext}
            className=" light: bg-[#f4f4f5] h-9 w-9 flex items-center justify-center rounded-xl"
          >
            <NextButtonIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
