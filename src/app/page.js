"use client";

import { Footer } from "./features/Footer";
import { Header } from "./features/Header";

import { HeroSlider2 } from "./features/HeroSlider2";
import { UpComingMovielist } from "./features/UpComingMovielist";
import { PopularMovieList } from "./features/PopularMovieList";
import { TopRatedMovieList } from "./features/TopRatedMovieList";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSlider2 />
      <UpComingMovielist title={"Upcoming"} />
      <PopularMovieList title={"Popular"} />
      <TopRatedMovieList title={"Top Rated"} />
      <Footer />
    </div>
  );
}
