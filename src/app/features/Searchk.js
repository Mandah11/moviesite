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
    <div className=" bg-white  flex flex-col h-[10000px]  border-1  border-zinc-400 w-140 ">
      <div className="flex flex-wrap gap-2  justify-center w-full ">
        {moviesData.slice(0, 3).map((movie, index) => {
          return (
            <div
              key={index}
              className="flex items-center w-full h-[135px]  mb-3  rounded-sm  "
            >
              <div className="w-full flex   h-[110px] justify-between">
                <div className="bg-[#f4f4f5] w-22 ml-3 rounded-xl">
                  <img
                    className="rounded-xl"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  />
                </div>
                <div className="flex  w-109 justify-between  h-[135px] ">
                  <div className=" flex flex-col  h-full w-20  justify-evenly  ">
                    <div className=" text-xs  w-50  flex">
                      <span className="font-bold text-[14px]">
                        {movie.title}{" "}
                      </span>{" "}
                    </div>
                    <div className="flex h-5  items-center mt-1">
                      <LittlestarIcon />
                      <span className="text-[15px] font-[400] ml-1">
                        {movie.vote_average}
                      </span>
                      <span className="text-[15px] font-[400] text-[#78787be5]">
                        /
                      </span>
                      <span className="text-[13px] font-[400] flex items-center mt-0.5 text-[#78787be5]">
                        10
                      </span>
                    </div>
                    <div className="text-[12px] font-[500] mt-5 flex ml-1 h-10  items-center">
                      {movie.release_date}
                    </div>
                  </div>
                  <div className="flex w-30  items-end ">
                    <Link href={`/movie-detail/${movie.id}`}>
                      <button className="flex items-center ml-3 gap-1 mb-3  text-[14px] cursor-pointer  ">
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
        className="h-15 flex items-center  justify-start ml-5"
        onClick={handleResultClick}
      >
        <p className="cursor-pointer"> See all results for "{valuees}"</p>
      </div>
    </div>
  );
};
