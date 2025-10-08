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
                <div className="flex  w-109 justify-between">
                  <div className=" flex flex-col  h-full w-20  justify-start ">
                    <div className=" text-xs   flex">
                      <span className="font-bold text-[10px]">
                        {movie.title}{" "}
                      </span>{" "}
                    </div>
                    <div className="flex h-5  items-center">
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
                    <div className="text-[10px] font-[500] mt-5 flex ml-1">
                      {movie.release_date}
                    </div>
                  </div>
                  <div className="flex w-30  items-end ">
                    <Link href={`/movie-detail/${movie.id}`}>
                      <button className="flex items-center ml-3 gap-1 mb-3  text-[14px] ">
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
        className="h-15 flex items-center justify-center"
        onClick={handleResultClick}
      >
        See all results for "{valuees}"
      </div>
    </div>
  );
};
