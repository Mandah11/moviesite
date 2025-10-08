import { RightIcon } from "../icons/RightIcon";
import { useRouter } from "next/navigation";
export const GenreItem = (props) => {
  const { genrename, genreid } = props;
  const router = useRouter();
  console.log("this is id", genreid);

  const handleGenreClick = () => {
    router.push(`/movie-genreclick/${genreid}`);
  };
  return (
    <div className="flex  mt-1 text-black ">
      <button
        className="flex text-sm/11 items-center border-1 gap-2 w-auto pl-2  border-zinc-400 h-5 justify-center rounded-xl cursor-pointer  "
        onClick={handleGenreClick}
      >
        {genrename} <RightIcon />
      </button>
    </div>
  );
};
