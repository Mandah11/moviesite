"use client";
import { useEffect, useState } from "react";
import { HeroSliderPhoto } from "../_component/HeroSliderPhoto";

import { HeroSliderLoading } from "../_component/HerosliderLoading";

const apiLink =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const HeroSlider2 = () => {
  const [upcomingMoviesData, setUpComingMoviesData] = useState([]);
  const [slideNumber, SetSlideNumber] = useState(0);

  const mmm = slideNumber * 100;
  const handleNextSlide = () => {
    SetSlideNumber(slideNumber + 1);
  };
  const handleBackStep = () => {
    if (slideNumber === 0) {
      return;
    } else {
      SetSlideNumber(slideNumber - 1);
    }
  };

  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const data = await fetch(apiLink, options);
    const jsondata = await data.json();
    setUpComingMoviesData(jsondata.results.slice(0, 4));
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div>
        {" "}
        <HeroSliderLoading />{" "}
      </div>
    );
  }
  console.log(upcomingMoviesData);
  console.log(slideNumber);

  return (
    <>
      <div className="w-[100%] overflow-hidden flex justify-center ">
        <div className="sm:w-[1440px] overflow-hidden w-[640px]">
          <div
            className="flex w-[100%] transition-transform sm:duration-700  ease-in-out  "
            style={{ transform: `translateX(-${mmm}%)` }}
          >
            {upcomingMoviesData.map((movie, index) => {
              return (
                <HeroSliderPhoto
                  key={index}
                  index={index}
                  total={upcomingMoviesData.length}
                  img={movie.backdrop_path}
                  name={movie.title}
                  overview={movie.overview}
                  rate={Math.floor(movie.vote_average)}
                  movieId={movie.id}
                  handleNext={handleNextSlide}
                  handleBack={handleBackStep}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="sm:hidden ml-5 mt-4">
        <div>Now Playing: </div>
        <div className="flex justify-between w-96 ">
          <div className="w-30 text-red  ">wicked</div>
          <div>6.9/10</div>
        </div>
        <div className="w-95 mt-4">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.{" "}
        </div>

        <button className="w-40 h-10 bg-black text-white rounded-md mt-4">
          Watch Trailer
        </button>
      </div>
    </>
  );
};
