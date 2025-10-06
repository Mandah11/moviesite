"use client";

import { Footer } from "@/app/features/Footer";
import { Header } from "@/app/features/Header";
import { Movielike } from "../features/Morelike";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div>
      <Header />
      <Movielike id={id} />
      <Footer />
    </div>
  );
}
