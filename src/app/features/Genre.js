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
export const Genre = () => {
  const [genresData, setGenresData] = useState([]);
  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsondata = await data.json();
    setGenresData(jsondata.genres);
  };
  console.log("gfhf", genresData);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" bg-white   flex flex-col  border-1 sm:h-58 h-100  rounded-xl  border-zinc-400 sm:w-140 sm:mt-3 mt-4  w-96">
      <div className="text-sm w-60 ml-2">
        <p className="text-xl"> Genre</p>
        <p>See lists of movies by genre</p>
      </div>

      <div className="border-t-2 w-130 sm:flex mt-3 mb-3   border-zinc-400 ml-2 hidden "></div>

      <div className="flex flex-wrap sm:gap-2 gap-3 mb-4 ml-2 sm:mt-0 mt-4.5 h-60">
        {genresData.map((name, index) => {
          return (
            <GenreItem genrename={name.name} key={index} genreid={name.id} />
          );
        })}
      </div>
    </div>
  );
};
