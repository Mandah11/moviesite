"use client";

import { Right } from "../icons/Right";
import { LittlestarIcon } from "../icons/LittleStar";
import Link from "next/link";
import { useRouter } from "next/navigation";
export const SearchResults = (props) => {
  const { moviesData, valuees } = props;
  const router = useRouter();
  const handleResultClick = () => {
    router.push(`/searchallresults/${valuees}`);
  };

  return (
    <div className="  flex flex-col h-[500px]  border-1  border-zinc-400 sm:w-140   mt-3 w-95 bg-white  ">
      <div className="flex flex-wrap gap-2  justify-center w-full sm:mt-0  mt-3 ">
        {moviesData.slice(0, 3).map((movie, index) => {
          return (
            <div
              key={index}
              className="flex items-center w-full sm:h-[135px]  mb-3  sm:rounded-sm  "
            >
              <div className="w-full flex  sm:h-[110px] justify-between ">
                <div className="bg-[#f4f4f5] w-22 ml-3 sm:rounded-xl rounded-md ">
                  <img
                    className="sm:rounded-xl rounded-md"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  />
                </div>
                <div className="flex  sm:w-109 w-68 justify-between  sm:h-[140px] ">
                  <div className=" flex flex-col    justify-evenly  ">
                    <div className=" text-xs  w-50  flex ">
                      <span className="font-bold sm:text-[14px] text-[12px]">
                        {movie.title}{" "}
                      </span>{" "}
                    </div>
                    <div className="flex h-5  items-center mt-1">
                      <LittlestarIcon />
                      <span className="sm:text-[15px] font-[400] ml-1 text-[12px]">
                        {movie.vote_average}
                      </span>
                      <span className="sm:text-[15px] font-[400] text-[#78787be5] text-[11px]">
                        /
                      </span>
                      <span className="sm:text-[13px] font-[400] flex items-center mt-0.5 text-[#78787be5] text-[10px]">
                        10
                      </span>
                    </div>
                    <div className="sm:text-[12px] font-[500] sm:mt-5 flex ml-1 sm:h-8  items-center text-[10px]">
                      {movie.release_date}
                    </div>
                  </div>
                  <div className="flex sm:w-30 w-18  items-end sm:h-full h-30 ">
                    <Link href={`/movie-detail/${movie.id}`}>
                      <button className="flex items-center sm:ml-3 gap-1 sm:mb-3  sm:text-[14px] cursor-pointer text-[11px] ">
                        see more <Right />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="h-15 flex items-center  justify-start ml-5 cursor-pointer"
        onClick={handleResultClick}
      >
        <p>See all results for &quot;{valuees}&quot;</p>
      </div>
    </div>
  );
};
