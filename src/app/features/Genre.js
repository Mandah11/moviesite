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
    <div className=" bg-white   flex flex-col  border-1 h-74 border-zinc-400 max-w-fit">
      <div className="text-sm ml-2 w-60">
        <p className="text-xl"> Genre</p>
        <p>See lists of movies by genre</p>
      </div>

      <div className="border-t-2 w-130 flex mt-3 mb-3   border-zinc-400 ml-2"></div>

      <div className="flex flex-wrap gap-4 mb-5 ml-2">
        {genresData.map((name, index) => {
          return (
            <GenreItem genrename={name.name} key={index} genreid={name.id} />
          );
        })}
      </div>
    </div>
  );
};
