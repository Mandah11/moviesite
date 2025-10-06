import { Footer } from "../features/Footer";
import { Header } from "../features/Header";
import { UpComingMovieSeeMore } from "../features/UpcomingMovieSeemore";
export default function Home() {
  return (
    <div>
      <Header />
      <UpComingMovieSeeMore title={"Upcoming"} />
      <Footer />
    </div>
  );
}
