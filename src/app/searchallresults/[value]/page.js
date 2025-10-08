"use client";
import { useParams } from "next/navigation";

import { Header } from "@/app/features/Header";

import { Footer } from "@/app/features/Footer";
import { SearchAll } from "./features_/SearchAll";

export default function MovieDetail() {
  const params = useParams();
  console.log("this is params", params);
  const { value } = params;

  if (!value) {
    return <div> Something wrong</div>;
  }
  return (
    <div>
      <Header />
      <SearchAll value={value} />
      <Footer />
    </div>
  );
}
