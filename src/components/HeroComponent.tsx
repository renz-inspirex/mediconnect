import { Raleway } from "next/font/google";

const raleway_font = Raleway({subsets: ['latin']})

const HeroComponent = () => {

  const value = ''; 
  const isfocused = false;
  
  return (
    <div className="bg-secondary flex w-[100%] h-[815px] flex-col">
      <h1 className="text-white text-5xl w-[815px] h-[123px] text-center mx-auto  mt-[53px] font-bold font-sans proportional-nums lining-nums leading-[64px]">
        MedConnect - online medical hub for everyone
      </h1>
      <div className="flex mt-[60px] justify-center gap-52">
         <div className="w-[710px] h-[384px] rounded-lg bg-white p-8 relative">
          <textarea className="w-full h-full outline-0 placeholder-black hero-textInput" placeholder={"Kindly describe your\nsymptoms here"}></textarea>
          <button className="absolute bottom-6 right-6 py-4 px-24 bg-primary rounded-lg text-white ">Send</button>
         </div>
         <img src="../assets/images/doctor.svg" />
      </div>
    </div>
  )
}

export default HeroComponent


