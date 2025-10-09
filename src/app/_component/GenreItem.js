import { RightIcon } from "../icons/RightIcon";
import { useRouter } from "next/navigation";
export const GenreItem = (props) => {
  const { genrename, genreid } = props;
  const router = useRouter();

  const handleGenreClick = () => {
    router.push(`/movie-genreclick/${genreid}`);
  };
  return (
    <div className="sm:flex  sm:mt-1 text-black ">
      <button
        className="flex sm:text-[16px] text-[15px] items-center border-1 gap-2 w-auto pl-2  border-zinc-400 h-6 justify-center rounded-xl cursor-pointer font-medium  "
        onClick={handleGenreClick}
      >
        {genrename} <RightIcon />
      </button>
    </div>
  );
};
