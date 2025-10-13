"use client";
import { useEffect, useState } from "react";
import { HeroSliderPhoto } from "../_component/HeroSliderPhoto";

import { HeroSliderLoading } from "../_component/HerosliderLoading";
import { HeroSliderPhotoMobileVersion } from "../_component/HeroSliderPhotoaMobileVersion";

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
      <div className="w-[100vw] overflow-hidden flex justify-center ">
        <div className="sm:w-[1440px] overflow-hidden w-[430px]">
          <div
            className="flex w-[100%] transition-transform sm:duration-700  ease-in-out h-fit "
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
    </>
  );
};
