"use client";
import { useParams } from "next/navigation";

import { Header } from "@/app/features/Header";
import { MovieGenre } from "./__features/Moviegenre";
import { Footer } from "@/app/features/Footer";

export default function MovieDetail() {
  const params = useParams();

  const { id } = params;

  if (!id) {
    return <div> Something wrong</div>;
  }
  return (
    <div>
      <Header />
      <div className="sm:w-[1440px] m-auto  ">
        <MovieGenre id={id} />
      </div>
      <Footer />
    </div>
  );
}
