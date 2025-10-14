import { LittlestarIcon } from "../icons/LittleStar";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa6";
export const MovieCard = (props) => {
  const { img, footer, rate, movieId } = props;

  const router = useRouter();

  const handleMovieClick = () => {
    router.push(`/movie-detail/${movieId}`);
  };
  return (
    <div
      className="sm:w-53 sm:h-90  bg-[#f4f4f5]  text-black   mt-4 w-45 h-83 mb-2 rounded-xl"
      style={{ cursor: "pointer" }}
      onClick={handleMovieClick}
    >
      <img
        className="sm:h-71  hover:brightness-75 duration-300 object-cover w-full h-65 rounded-xl"
        src={img}
      />

      <div className="ml-2">
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-400 size-4 sm:size-4.5" />
          <p>
            <span className="sm:text-[15px] text-[15px]">{rate}/</span>
            <span className="sm:text-[13px] text-[13px] text-[#979797]">
              10
            </span>
          </p>
        </div>
        <p className="flex sm:text-sm text-[17px]">{footer}</p>
      </div>
    </div>
  );
};
