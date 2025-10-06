import { LittlestarIcon } from "../icons/LittleStar";
import { useRouter } from "next/navigation";
export const MovieCard = (props) => {
  const { img, footer, rate, movieId } = props;

  const router = useRouter();
  console.log("this is id", movieId);

  const handleMovieClick = () => {
    router.push(`/movie-detail/${movieId}`);
  };
  return (
    <div
      className="w-53 h-90  bg-[#f4f4f5]  text-black   mt-1"
      style={{ cursor: "pointer" }}
      onClick={handleMovieClick}
    >
      <img className="h-71 w-53 hover:opacity-30 object-cover" src={img} />

      <div className="ml-2">
        <div className="flex items-center gap-2">
          <LittlestarIcon />
          <p>
            <span className="text-ms">{rate}/</span>
            <span className="text-xs">10</span>
          </p>
        </div>
        <p className="flex text-ms">{footer}</p>
      </div>
    </div>
  );
};
