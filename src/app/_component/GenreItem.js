import { RightIcon } from "../icons/RightIcon";

export const GenreItem = (props) => {
  const { genrename } = props;
  return (
    <div className="flex  mt-1 text-black ">
      <button className="flex text-sm/11 items-center border-1 gap-2 w-auto pl-2  border-zinc-400 h-5 justify-center rounded-xl">
        {genrename} <RightIcon />
      </button>
    </div>
  );
};
