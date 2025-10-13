"use client";

import { useEffect } from "react";
import { useState } from "react";
import { DownIcon } from "../icons/DownIcon";
import { Search } from "../icons/Search";
import { SearchResults } from "./Searchk";
import { Genre } from "./Genre";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const SearchItem = ({ setOpenSearchBar }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [openGenre, setOpenGenre] = useState(false);

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
  const handleRemove = () => {
    setOpenSearchBar(null);
  };
  return (
    <div className="w-full flex bg-white ">
      <div className="flex gap-2  w-95 justify-between ml-6 ">
        <div className="flex flex-col w-80 h-9  ">
          <div className="flex gap-3 w-full">
            <button
              className=" border-1  border-zinc-400 h-9 w-10 rounded-sm items-center flex justify-center cursor-pointer "
              onClick={() => {
                setOpenGenre(!openGenre);
                setValues("");
              }}
            >
              <DownIcon />
            </button>
            <div className="flex items-center  border-1  border-zinc-400   rounded-sm  w-75 gap-3  ">
              <div className="ml-2">
                <Search />
              </div>
              <input
                className="w-30 h-full  text-xs  flex outline-0 "
                placeholder="search..."
                onChange={handleInputChange}
                value={values}
                type="text"
              ></input>
            </div>
          </div>
          {moviesData == 0 && openGenre && <Genre />}
          {values.length > 1 && (
            <SearchResults moviesData={moviesData} valuees={values} />
          )}
        </div>

        <button
          className=" h-9 w-9 rounded-sm items-center flex justify-center cursor-pointer border-1  border-zinc-400  "
          onClick={handleRemove}
        >
          x
        </button>
      </div>
    </div>
  );
};
