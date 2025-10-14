"use client";
import { useEffect, useState } from "react";
import { RightIcon } from "@/app/icons/RightIcon";
import { MovieCard } from "@/app/_component/MovieCard";
import Link from "next/link";
import { PlayIcon } from "@/app/icons/PlayIcon";
import { TrailerId } from "@/app/features/TrailerId";
import { TrailerIdMovieInfo } from "@/app/features/TrailerIdMovieInfo";
import { LittlestarIcon } from "@/app/icons/LittleStar";
import { StarIcon } from "lucide-react";
import { StartInfo } from "@/app/icons/StarInfo";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const Movieinfo = ({ id }) => {
  const [MoviesData, setMoviesData] = useState([]);
  const [MoviesInform, setMoviesInform] = useState();
  const [MoviesMore, setMoviesMore] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    const jsondata = await data.json();
    console.log("moviedata", jsondata);
    setMoviesData(jsondata);

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  const getInform = async () => {
    setLoading(true);
    const inform = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    );
    const jsondata = await inform.json();
    setMoviesInform(jsondata);
    console.log("gfhdh", jsondata);

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };
  const getMore = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
      options
    );
    const jsondata = await data.json();
    setMoviesMore(jsondata.results);
    console.log("this is more like", jsondata.results);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getInform();
  }, []);
  useEffect(() => {
    getMore();
  }, []);

  if (loading) {
    return (
      <>
        <div className="sm:w-[1080px] w-[430px] h-auto m-auto mt-10 ">
          <div className="w-full sm:h-[428px] h-[328px]  flex justify-between">
            <div className=" bg-[#f4f4f5] h-full w-[290px] hover:opacity-30 object-cover" />
            <div className=" bg-[#f4f4f5] h-full w-[760px] hover:opacity-30 object-cover" />
          </div>
          <div className="w-full">
            <div className="mt-3 flex gap-2">
              {MoviesData?.genres?.map((genre, index) => {
                return (
                  <button
                    key={index}
                    className="flex text-sm/11 items-center border-1 gap-1 w-auto pl-2  border-zinc-400 h-5 justify-center rounded-xl "
                  >
                    {genre.name} <RightIcon />
                  </button>
                );
              })}
            </div>
            <div className="mt-3 sm:w-full w-102 ml-3 h-5 bg-[#f4f4f5]"></div>
            <div className="mt-3 w-100 h-5 ml-3 bg-[#f4f4f5]"></div>
          </div>
          <div className="sm:hidden flex ">
            <div className="mt-3 w-[120px] ml-3 h-35 bg-[#f4f4f5]"></div>
            <div className="flex flex-col">
              <div className="mt-3 w-70 h-5 ml-3 bg-[#f4f4f5]"></div>
              <div className="mt-3 w-70 h-5 ml-3 bg-[#f4f4f5]"></div>
              <div className="mt-3 w-50 h-5 ml-3 bg-[#f4f4f5]"></div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap sm:w-285 w-[430px] mt-2 sm:justify-around sm:gap-3 justify-evenly gap-3">
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
            </div>
          </div>
          <div className="sm:hidden flex flex-col justify-evenly  mt-3 sm:w-[1080px] w-[430px] ml-3 sm:ml-0 ">
            <div className="flex gap-8">
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
            </div>

            <div className="flex gap-8">
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
              <div className="sm:w-53 sm:h-90 w-40 h-70 bg-[#f4f4f5]  mt-1"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {MoviesData && (
        <div className="sm:w-[1080px]  h-auto m-auto sm:mt-10 mt-5 ">
          <div
            className="flex sm:h-[72px]
           justify-between  items-center sm:p-0 p-2 "
          >
            <div>
              <p className="sm:text-2xl sm:font-semibold text-2xl font-semibold">
                {MoviesData.title}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-[15px] sm:text-[18px] text-[#515151]">
                  {MoviesData.release_date}
                </p>
                <div className="flex gap-1 text-[#515151]">
                  {" "}
                  <p>{Math.floor(MoviesData.runtime / 60)}h </p>
                  <p>{Math.ceil(MoviesData.runtime % 60)}min</p>
                </div>
              </div>
            </div>
            <div className="ml- sm:ml-0">
              <p className="text-[13px]"> Rating</p>
              <div className=" w-23 flex flex-col  h-full">
                <div className="flex w-20 items-center h-10">
                  <StartInfo />
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <span className="text-[17px] font-medium">
                        {" "}
                        {Math.round(MoviesData.vote_average)}
                      </span>
                      <span className="text-[#515151]"> /</span>
                      <span className="text-[#515151] sm:text-[15px] text-[13px]">
                        10
                      </span>
                    </div>
                    <p className=" sm:text-[12px] text-[13px] text-[#515151]  ">
                      {Math.ceil(MoviesData.popularity)}K
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:h-[428px] h-[283px]  flex justify-between">
            <img
              className="h-full w-[290px] hover:opacity-30 object-cover sm:flex hidden "
              src={`https://image.tmdb.org/t/p/original/${MoviesData.poster_path}`}
            />
            <div className="h-full w-[760px]   relative items-end flex ">
              <img
                className=" absolute -z-1 h-full w-full object-cover hover:opacity-30"
                src={`https://image.tmdb.org/t/p/original/${MoviesData.backdrop_path}`}
              />
              <div className="flex h-20  w-full items-center gap-2 z-0 ">
                <div className=" flex justify-center    text-white items-center h-full ml-3">
                  <button
                    className="w-11  bg-white rounded-full h-11 items-center justify-center flex gap-2 "
                    onClick={() => {
                      setTrailer(!trailer);
                    }}
                  >
                    <PlayIcon />{" "}
                  </button>
                </div>{" "}
                <div className="w-70 flex items-center  h-8 text-lg  text-white">
                  Play Trailer
                </div>
              </div>
            </div>
            <div className=" absolute h-full mt-10">
              {trailer && (
                <TrailerIdMovieInfo setTrailer={setTrailer} id={id} />
              )}
            </div>
          </div>

          <div className="w-full mt-3 sm:flex flex-col hidden ">
            <div className="mt-3 flex gap-2">
              {MoviesData?.genres?.map((genre, index) => {
                return (
                  <button
                    key={index}
                    className="flex text-sm/11 items-center border-1 gap-1 w-auto pl-2  border-zinc-400 h-5 justify-center rounded-xl "
                  >
                    {genre.name} <RightIcon />
                  </button>
                );
              })}
            </div>
            <div className="mt-5">
              <p>{MoviesData.overview}</p>
            </div>
          </div>
          <div className="sm:hidden w-full  flex justify-center">
            <div className="flex w-[90%]  justify-between">
              <img
                className="h-[148px] w-[100px]  hover:opacity-30 object-cover sm:flex mt-4 sm:mt-0"
                src={`https://image.tmdb.org/t/p/original/${MoviesData.poster_path}`}
              />
              <div className=" w-[70%]">
                <div className="mt-4 flex gap-2 flex-wrap ">
                  {MoviesData?.genres?.map((genre, index) => {
                    return (
                      <button
                        key={index}
                        className="flex text-sm/11 items-center border-1 gap-1 w-auto pl-2  border-zinc-400 h-5 justify-center rounded-xl "
                      >
                        {genre.name} <RightIcon />
                      </button>
                    );
                  })}
                </div>
                <div className="ml-1.5  w-[90%] mt-2.5">
                  <p>{MoviesData.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {MoviesInform && (
        <div className="sm:w-[1080px]  h-auto m-auto  ">
          <div className="sm:mt-3 w-full sm:ml-0 p-6 sm:p-0 ">
            <div className="flex gap-4 h-10 items-center">
              <p className="w-17 font-bold ">Director</p>
              {MoviesInform.crew?.slice(0, 1).map((item, index) => {
                return <span key={index}>{item.name}</span>;
              })}
            </div>
            <div className="border-1 sm:w-full w-95 h-0.2 border-[#E4E4E7] mt-2">
              {" "}
            </div>
            <div className="flex  gap-4 h-10 items-center ">
              <p className="w-17  font-bold"> Writers</p>
              {MoviesInform.crew?.slice(2, 4).map((item, index) => {
                return <span key={index}>{item.name}</span>;
              })}
            </div>
            <div className="border-1 sm:w-full w-95 h-0.2 border-[#E4E4E7] mt-2">
              {" "}
            </div>
            <div className="flex  gap-4 h-10 items-center">
              <p className="w-17 font-bold "> Stars</p>
              {MoviesInform.cast?.slice(0, 2).map((item, index) => {
                return <span key={index}>{item.name}</span>;
              })}
            </div>
            <div className="border-1 sm:w-full w-95 h-0.2 border-[#E4E4E7] mt-2">
              {" "}
            </div>
          </div>
        </div>
      )}

      <div className="w-285 m-auto sm:flex justify-center mt-10 hidden">
        <div className="w-full flex  text-black flex-col ">
          <div className="w-full flex  justify-between">
            <div className="w-50 ml-2 text-xl font-medium ">More Like this</div>
            <Link href={`/movieseemore/?id=${id}`}>
              <button className="sm:w-50 w-40  justify-end  flex items-center mr-5 sm:mr-0 mt-1">
                <p className="cursor-pointer"> See more</p>
                <RightIcon />
              </button>
            </Link>
          </div>
          <div className="flex flex-wrap  sm:w-285 mt-2 justify-evenly sm:gap-3">
            {MoviesMore?.slice(0, 5).map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  footer={movie.title}
                  rate={Math.round(movie.vote_average)}
                  movieId={movie.id}
                  img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10 sm:hidden">
        <div className="w-[430px] flex  text-black flex-col ">
          <div className=" flex  justify-between">
            <div className=" w-40  ml-6 text-xl font-medium ">
              More Like this
            </div>
            <Link href={`/movieseemore/?id=${id}`}>
              <button className=" w-40  justify-end  flex items-center mr-5 mt-1">
                <p className="cursor-pointer"> See more</p>
                <RightIcon />
              </button>
            </Link>
          </div>
          <div className="flex flex-wrap   mt-2 justify-evenly ">
            {MoviesMore?.slice(0, 2).map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  footer={movie.title}
                  rate={Math.round(movie.vote_average)}
                  movieId={movie.id}
                  img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
