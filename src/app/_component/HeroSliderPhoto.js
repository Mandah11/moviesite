"use client";
import { useState } from "react";
import { StartIcon } from "../icons/StartIcon";
import { NextButtonIcon } from "../icons/NextButtonIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { TrailerId } from "../features/TrailerId";
import { useEffect } from "react";
import { BackButtonIcon } from "../icons/BackButtonIcon";
import { MiniTrailerId } from "../features/MiniTrailerId";
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
  const [minitrailer, setMiniTrailer] = useState();
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
    <div className="flex flex-col h-170  max-h-fit items-center ">
      <div className="w-[430px] sm:w-full ">
        <div className="sm:h-170 h-90  flex relative object-cover">
          <img
            className=" absolute -z-1 h-full w-full object-cover "
            src={`https://image.tmdb.org/t/p/original${img}`}
          ></img>
          <div className="flex  sm:w-[1440px] w-[430px]  h-full justify-center ">
            <div className="sm:w-[1330px] w-[380px] flex justify-between h-full items-center">
              {index && (
                <button
                  onClick={handleBack}
                  className=" bg-[#f4f4f5] sm:h-9 sm:w-9 w-5 h-5 flex items-center justify-center rounded-xl"
                >
                  <BackButtonIcon />
                </button>
              )}
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
                {trailer && <TrailerId setTrailer={setTrailer} id={movieId} />}
              </div>
              <div className=" absolute h-full mt-20">
                {minitrailer && (
                  <MiniTrailerId setMiniTrailer={setMiniTrailer} id={movieId} />
                )}
              </div>
              {index < total - 1 && (
                <button
                  onClick={handleNext}
                  className=" bg-[#f4f4f5] sm:h-9 sm:w-9 h-5 w-5 flex items-center justify-center rounded-xl"
                >
                  <NextButtonIcon />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text-black  sm:hidden  w-[386px] mt-6">
        {" "}
        <div className="w-full flex justify-between">
          <div>
            <p className="text-[17px]">Now Playing: </p>
            <p className="text-[20px] font-medium">{name}</p>
          </div>

          <div className="flex items-center text-[19px] font-medium">
            <StartIcon />
            <p> {rate}/10</p>
          </div>
        </div>
        <div className="w-full text-black text-[15px] mt-4">{overview}</div>
        <div>
          <button
            className="w-40 bg-black rounded  h-10 items-center justify-center flex gap-2 mt-4 "
            onClick={() => {
              setMiniTrailer(!minitrailer);
            }}
          >
            <p className="text-white">Watch Trailer</p>
          </button>
        </div>
      </div>
    </div>
  );
};
