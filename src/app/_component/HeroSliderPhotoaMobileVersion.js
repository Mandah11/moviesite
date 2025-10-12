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
export const HeroSliderPhotoMobileVersion = (props) => {
  const { name, rate, overview, movieId } = props;
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
    <>
      <div>
        <div>Now Playing: </div>
        <div className="flex justify-between w-96 ">
          <div className="w-30 text-red  ">{name}</div>
          <div>{rate}/10</div>
        </div>
        <div className="w-95 mt-4">{overview}</div>
        <button
          className="w-40 h-10 bg-black text-white rounded-md mt-4"
          onClick={() => {
            setTrailer(!trailer);
          }}
        >
          Watch Trailer
        </button>
      </div>

      <div className=" absolute h-full mt-10">
        {trailer && <TrailerId setTrailer={setTrailer} id={movieId} />}
      </div>
    </>
  );
};
