"use client";
import { useParams } from "next/navigation";

import { Movieinfo } from "./_features/Movieinfo";
import { Header } from "@/app/features/Header";
import { Footer } from "@/app/features/Footer";

export default function MovieDetail() {
  const params = useParams();
  console.log("this is params", params);
  const { id } = params;

  if (!id) {
    return <div> Something wrong</div>;
  }
  return (
    <div>
      <Header />
      <Movieinfo id={id} />
      <Footer />
    </div>
  );
}
