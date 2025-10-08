"use client";

import { DownIcon } from "../icons/DownIcon";
import { Moon } from "../icons/MoonIcon";
import { MoviesZ } from "../icons/MoviesIZcon";
import { Genre } from "../features/Genre";
import { useState } from "react";
import { Search } from "../icons/Search";
import { useEffect } from "react";
import { SearchResults } from "./Searchk";
import Link from "next/link";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const Header = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [openGenre, setOpenGenre] = useState(false);

  const [values, setValues] = useState("");

  const handleInputChange = (e) => {
    setValues(e.target.value);
  };

  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${values}&language=en-US&page=1`,
      options
    );
    const jsondata = await data.json();
    setMoviesData(jsondata.results);
    console.log("header", jsondata.results);
  };
  useEffect(() => {
    getData();
  }, [values]);

  return (
    <div>
      <div className="m-auto  flex-col  w-[1440px] h-12 items-center mt-2 z-20 relative  ">
        <div className="w-360 h-10 flex items-center justify-evenly ">
          <div className="w-80 ">
            <MoviesZ />
          </div>

          <div className="w-140 h-7 gap-[8px] flex flex-col">
            <div className="w-140 h-7 gap-[8px] flex ">
              <button
                className="h-7 border-1  border-zinc-400 w-19 rounded-sm items-center flex justify-center cursor-pointer"
                onClick={() => {
                  setOpenGenre(!openGenre);
                }}
              >
                <DownIcon />
                <p className="text-black text-[10px]  "> Genre </p>
              </button>
              <div className="flex items-center border-1  border-zinc-400  rounded-sm justify-evenly w-60">
                <Search />

                <input
                  className="w-50 h-full   text-xs outline-0"
                  placeholder="search..."
                  type="text"
                  value={values}
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>

            {openGenre && <Genre />}
            {values.length > 1 && (
              <SearchResults moviesData={moviesData} valuees={values} />
            )}
          </div>

          <button className="border-solid border-1 h-6 w-7 items-center flex justify-center border-zinc-400 rounded-sm ">
            <Moon />
          </button>
        </div>
      </div>
    </div>
  );
};
