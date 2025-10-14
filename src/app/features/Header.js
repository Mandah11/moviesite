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
import { NotResult } from "../_component/NotResult";
import { useRouter } from "next/navigation";
import { MoonIcon } from "lucide-react";
import { SearchItem } from "./SearchItem";
import { SearchLoading } from "./SearchLoading";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const Header = () => {
  const router = useRouter();
  const handleHomeClick = () => {
    router.push(`/`);
  };
  const [moviesData, setMoviesData] = useState([]);
  const [openGenre, setOpenGenre] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const [values, setValues] = useState("");

  const handleInputChange = (e) => {
    setValues(e.target.value);
    setOpenGenre(false);
  };

  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${values}&language=en-US&page=1`,
      options
    );
    const jsondata = await data.json();
    setMoviesData(jsondata.results);
  };
  useEffect(() => {
    getData();
  }, [values]);

  return (
    <div className="sm:w-[1440px] m-auto relative z-20 h-15 items-center  justify-center">
      <div className="flex justify-between sm:w-[1200px]  m-auto h-full items-center ">
        <div
          className="h-8 w-30 sm:w-80 flex items-center ml-4 sm:ml-0 cursor-pointer"
          onClick={handleHomeClick}
        >
          <MoviesZ />
        </div>
        <div className=" flex gap-2 sm:w-180 sm:justify-between items-center  ">
          <div className="sm:w-140 flex flex-col h-9">
            <div className=" sm:w-100 flex gap-2 ">
              <button
                className="h-9   border-1  border-zinc-400 w-19 rounded-sm items-center sm:flex justify-center cursor-pointer hidden "
                onClick={() => {
                  setOpenGenre(!openGenre);
                  setValues("");
                }}
              >
                <DownIcon />
                <p className="text-black sm:text-[10px] hidden sm:inline ">
                  {" "}
                  Genre{" "}
                </p>
              </button>
              <div className="flex items-center border-1  border-zinc-400  rounded-sm justify-center sm:w-60  w-9  h-9 sm: gap-2">
                <div
                  onClick={() => {
                    setOpenSearchBar(!openSearchBar);
                  }}
                >
                  <Search />
                </div>

                <input
                  className="sm:w-50 h-full   sm:text-xs outline-0 hidden sm:flex"
                  placeholder="search..."
                  type="text"
                  value={values}
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            {moviesData == 0 && openGenre && <Genre />}
            {values.length == 1 && <SearchLoading />}
            {values.length > 1 && (
              <SearchResults moviesData={moviesData} valuees={values} />
            )}
          </div>
          <button className="border-solid border-1  items-center flex justify-center border-zinc-400 rounded-sm   h-9 w-9 mr-4 ">
            <Moon />
          </button>
        </div>
        <div className=" absolute w-full sm:hidden">
          {openSearchBar && <SearchItem setOpenSearchBar={setOpenSearchBar} />}
        </div>
      </div>
    </div>
  );
};
