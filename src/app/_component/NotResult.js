export const NotResult = () => {
  return (
    <div>
      <div className=" flex sm:h-40 h-30 items-center  ">
        <div className="border-gray-400 border-1 sm:h-30 h-20 w-93 sm:w-225  flex justify-center items-center rounded-sm  ">
          Not found
        </div>
      </div>
      <div className="justify-between sm:w-60 w-40  flex">
        <button className="border-gray-400 sm:w-22 w-15 text-[14px] sm:text-[17px] rounded-sm cursor-pointer border-1 ">
          Previous
        </button>
        <button className="border-gray-400 border-1 sm:w-8 w-7 text-[14px] sm:text-[17px] rounded-sm cursor-pointer">
          1
        </button>
        <button className="border-gray-400 border-1 sm:w-20 w-13 text-[14px] sm:text-[17px] rounded-sm cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
};
