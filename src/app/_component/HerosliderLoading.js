export const HeroSliderLoading = (props) => {
  const { img, name, rate, handleNext, handleBack, overview } = props;
  console.log("this is props", props);
  return (
    <div className=" w-full m-auto h-170 flex relative object-cover bg-[#f4f4f5]"></div>
  );
};
