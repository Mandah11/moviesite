"use client";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const TrailerId = ({ id }) => {
  const [MoviesMore, setMoviesMore] = useState([]);
  const [loading, setLoading] = useState(false);
  const [removetrailer, setRemoveTrailer] = useState(null);

  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  const getMore = async () => {
    setLoading(true);
    const data = await fetch(url, options);
    const jsondata = await data.json();
    console.log("this is", jsondata);
    setMoviesMore(jsondata.results);

    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  const handleRemove = () => {
    return setRemoveTrailer(!removetrailer);
  };
  useEffect(() => {
    getMore();
  }, [id]);

  if (loading) {
    return <div>fdsgfdsg</div>;
  }
  return (
    <>
      <div className="relative flex w-[1440px] justify-center items-center mt-10  ">
        <div className="w-[1050px] flex ">
          <iframe
            width="600px"
            height="400px"
            src={`https://www.youtube.com/embed/${MoviesMore[0]?.key}?autoplay=1`}
            title="Path of the Wind - My Neighbor Totoro [Piano Tutorial] (Synthesia) // Torby Brand"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div className="w-10 h-10 bg-transparent flex justify-center items-center">
            <button
              onClick={handleRemove}
              className="bg-white w-7 h-7 flex items-center justify-center rounded-full "
            >
              {" "}
              x
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
