const HeroComponent = () => {
  return (
    <div className="bg-secondary flex w-[100%] h-[815px] flex-col">
      <h1 className="text-white text-5xl w-[815px] h-[123px] text-center mx-auto  mt-[53px] font-bold font-sans proportional-nums lining-nums leading-[64px]">
        Welcome to your trusted source for reliable medical adviser
      </h1>
      <div className="flex mt-[60px] justify-center gap-52">
         <div className="w-[710px] h-[384px] rounded-lg bg-white "></div>
         <img src="../assets/images/doctor.svg" />
      </div>
    </div>
  )
}

export default HeroComponent
