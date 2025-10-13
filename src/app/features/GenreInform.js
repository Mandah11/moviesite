"use client";
import { GenreItem } from "../_component/GenreItem";
import { useEffect } from "react";
import { useState } from "react";
const apiLink = "https://api.themoviedb.org/3/genre/movie/list?language=en";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const GenreInform = () => {
  const [genresData, setGenresData] = useState([]);
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

  return (
    <div className=" sm:bg-white  flex flex-col max-h-fit w-95 sm:mt-0 mt-5 sm:mb-0 mb-10 ">
      <div>
        <p className="sm:text-[22px] text-[25px] font-medium"> Genre</p>
        <p className="sm:text-[17px] text-[18px] font-medium">
          See lists of movies by genre
        </p>
      </div>
      <div className="flex justify-evenly mt-4  sm:mt-2 ">
        <div className="flex flex-wrap sm:gap-4  sm:w-100  sm:mt-2 gap-4  ">
          {genresData.map((name, index) => {
            return (
              <GenreItem genrename={name.name} key={index} genreid={name.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
