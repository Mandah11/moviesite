import { Footer } from "../features/Footer";
import { Header } from "../features/Header";

import { PopularMovieSeeMore } from "../features/PopularMovieSeemore";
export default function Home() {
  return (
    <div>
      <Header />
      <PopularMovieSeeMore title={"Popular"} />
      <Footer />
    </div>
  );
}
