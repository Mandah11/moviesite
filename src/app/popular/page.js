import { Footer } from "../features/Footer";
// import { HeaderPopular } from "./HeaderPopular";
import { PopularMovieSeeMore } from "../features/PopularMovieSeemore";
export default function Home() {
  return (
    <div>
      {/* <HeaderPopular /> */}
      <PopularMovieSeeMore title={"Popular"} />
      <Footer />
    </div>
  );
}
