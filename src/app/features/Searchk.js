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
    // <>
    //   <div className="  flex   border-1  border-zinc-400 w-140  rounded-sm mt-3 ">
    //     <div className="flex flex-wrap w-full h-[170px] max-h-fit   ">
    //       {moviesData.slice(0, 2).map((movie, index) => {
    //         return (
    //           <div
    //             key={index}
    //             className="flex  w-full h-full rounded-sm  items-center mb-2 bg-white"
    //           >
    //             <div className="w-full flex justify-between ">
    //               <div className="bg-[#f4f4f5] w-22  ml-3 rounded-xl">
    //                 <img
    //                   className="rounded-xl"
    //                   src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
    //                 />
    //               </div>
    //               <div className="w-110 flex flex-col justify-between  ">
    //                 <div>
    //                   <div className=""> {movie.title} </div>
    //                   <div className="flex ">
    //                     <LittlestarIcon /> {movie.vote_average}
    //                   </div>
    //                 </div>

    //                 <div className="flex justify-between  w-105 ">
    //                   <div>{movie.release_date}</div>
    //                   <div>
    //                     <button className="flex items-center sm:ml-3 gap-1 sm:mb-3  sm:text-[14px] cursor-pointer text-[10px] ">
    //                       see more <Right />
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </>

    <div className="  flex flex-col h-[500px]  border-1  border-zinc-400 w-140 mt-3  bg-white  ">
      <div className="flex flex-wrap gap-2  justify-center w-full mt-3 bg-amber-300">
        {moviesData.slice(0, 3).map((movie, index) => {
          return (
            <div
              key={index}
              className="flex items-center w-full sm:h-[135px]  mb-3  sm:rounded-sm bg-amber-400 "
            >
              <div className="w-full flex  sm:h-[110px] justify-between">
                <div className="bg-[#f4f4f5] w-22 ml-3 sm:rounded-xl rounded-md ">
                  <img
                    className="sm:rounded-xl rounded-md"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  />
                </div>
                <div className="flex  w-109 justify-between  h-[135px] ">
                  <div className=" flex flex-col  h-full w-20  justify-evenly  ">
                    <div className=" text-xs  w-50  flex">
                      <span className="font-bold sm:text-[14px] text-[10px]">
                        {movie.title}{" "}
                      </span>{" "}
                    </div>
                    <div className="flex h-5  items-center mt-1">
                      <LittlestarIcon />
                      <span className="sm:text-[15px] font-[400] ml-1 text-[10px]">
                        {movie.vote_average}
                      </span>
                      <span className="sm:text-[15px] font-[400] text-[#78787be5] text-[10px]">
                        /
                      </span>
                      <span className="sm:text-[13px] font-[400] flex items-center mt-0.5 text-[#78787be5] text-[9px]">
                        10
                      </span>
                    </div>
                    <div className="sm:text-[12px] font-[500] sm:mt-5 flex ml-1 sm:h-8  items-center text-[8px]">
                      {movie.release_date}
                    </div>
                  </div>
                  <div className="flex w-30  items-end ">
                    <Link href={`/movie-detail/${movie.id}`}>
                      <button className="flex items-center sm:ml-3 gap-1 sm:mb-3  sm:text-[14px] cursor-pointer text-[10px] ">
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
