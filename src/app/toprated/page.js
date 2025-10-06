import { Footer } from "../features/Footer";
import { Header } from "../features/Header";
import { TopRatedMovieSeeMore } from "../features/TopRatedMovieSeemore";
export default function Home() {
  return (
    <div>
      <Header />
      <TopRatedMovieSeeMore title={"Upcoming"} />
      <Footer />
    </div>
  );
}
