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
  console.log("gfhf", genresData);

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className=" bg-white   flex flex-col max-h-fit   ">
      <div className="text-sm ml-2 w-100">
        <p className="text-[24px]"> Genre</p>
        <p className="text-[18px] ">See lists of movies by genre</p>
      </div>

      <div className="flex flex-wrap gap-4  ml-2 w-80 mt-4 ">
        {genresData.map((name, index) => {
          return (
            <GenreItem genrename={name.name} key={index} genreid={name.id} />
          );
        })}
      </div>
    </div>
  );
};
