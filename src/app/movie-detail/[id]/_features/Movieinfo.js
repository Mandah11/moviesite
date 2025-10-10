"use client";
import { useEffect, useState } from "react";
import { RightIcon } from "@/app/icons/RightIcon";
import { MovieCard } from "@/app/_component/MovieCard";
import Link from "next/link";
import { PlayIcon } from "@/app/icons/PlayIcon";
import { TrailerId } from "@/app/features/TrailerId";

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
    }, 100);
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
    }, 100);
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

    setLoading(false);
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
        <div className="w-[1080px]  h-auto m-auto mt-10 ">
          <div className="w-full h-[428px]  flex justify-between">
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
            <div className="mt-3 w-full h-5 bg-[#f4f4f5]"></div>
            <div className="mt-3 w-100 h-5 bg-[#f4f4f5]"></div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {MoviesData && (
        <div className="w-[1080px]  h-auto m-auto mt-10 ">
          <div
            className="flex h-[72px]
          justify-between  items-center"
          >
            <div>
              <p className="text-2xl font-semibold">{MoviesData.title}</p>
              <p>{MoviesData.release_date}</p>
            </div>
            <div>
              <p>Rating{MoviesData.vote_average}/10</p>
            </div>
          </div>

          <div className="w-full h-[428px]  flex justify-between">
            <img
              className="h-full w-[290px] hover:opacity-30 object-cover"
              src={`https://image.tmdb.org/t/p/original/${MoviesData.poster_path}`}
            />
            <div className="h-full w-[760px]   relative items-end flex">
              <img
                className=" absolute -z-1 h-full w-full object-cover hover:opacity-30"
                src={`https://image.tmdb.org/t/p/original/${MoviesData.backdrop_path}`}
              />
              <div className="flex h-20  w-full items-center gap-2 z-0">
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
              {trailer && <TrailerId setTrailer={setTrailer} id={id} />}
            </div>
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
            <div className="mt-3">
              <p>{MoviesData.overview}</p>
            </div>
          </div>
        </div>
      )}
      {MoviesInform && (
        <div className="w-[1080px]  h-auto m-auto">
          <div className="mt-3 w-full">
            <div className="flex gap-4">
              <p className="w-17  ">Director</p>
              {MoviesInform.crew?.slice(0, 1).map((item, index) => {
                return <span key={index}>{item.name}</span>;
              })}
            </div>
            <div className="border-1 w-full h-0.2 border-[#E4E4E7] mt-2"> </div>
            <div className="flex  gap-4 ">
              <p className="w-17  font-bold"> Writers</p>
              {MoviesInform.crew?.slice(2, 4).map((item, index) => {
                return <span key={index}>{item.name}</span>;
              })}
            </div>
            <div className="border-1 w-full h-0.2 border-[#E4E4E7] mt-2"> </div>
            <div className="flex  gap-4">
              <p className="w-17  "> Stars</p>
              {MoviesInform.cast?.slice(0, 3).map((item, index) => {
                return <span key={index}>{item.name}</span>;
              })}
            </div>
            <div className="border-1 w-full h-0.2 border-[#E4E4E7] mt-2"> </div>
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
