import { useState, useEffect, ChangeEvent } from "react"
import { Roboto, Raleway } from "next/font/google"
import HeroOutputModalComponent from "./HeroOutputModalComponent"
import { useRecoilState, useRecoilValue } from "recoil"
import { isMedicineModalOpen, symptoms } from "@/stores/modal.store"

const ralewayHeading700 = Raleway({ weight: '700', subsets: ['latin'], })
const robotoParagraph400 = Roboto({ weight: '400', subsets: ['latin'], })

const HeroComponent = () => {

  // Textarea value
  const [value, setValue] = useState<string>('');
  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  // For Placeholder message
  const [placeHolderVisibility, setPlaceHolderVisibility] = useState(true);

  // For Pleceholder blinking cursor
  const [count, setCount] = useState(0);

  // Controling modal visibility
  const [, setIsOpen] = useRecoilState(isMedicineModalOpen);
  const [, setSymptoms] = useRecoilState(symptoms);

  const getInputedValue = () => {
      setSymptoms(value)
      setIsOpen(true)
  }


  useEffect(() => {
    // Start the interval when the component mounts
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // 1000ms = 1 second

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-secondary flex w-[100%] h-[815px] flex-col">
      
      <h1 className="text-white text-5xl w-[815px] h-[123px] text-center mx-auto  mt-[53px] font-bold font-sans proportional-nums lining-nums leading-[64px]">
        MedConnect - online medical hub for everyone
      </h1>
      <div className="flex mt-[60px] justify-center gap-52">
         <div className="w-[710px] h-[384px] rounded-lg bg-white py-[41px] px-[37px]  relative" onMouseEnter={() => setPlaceHolderVisibility(false)} onMouseLeave={() => setPlaceHolderVisibility(true)}>
          {
            placeHolderVisibility && !value ? 
            (
            <div className="w-full h-full">
              <h3 className={`${ralewayHeading700.className} text-[32px] text-dark leading-[43px] mb-2`}>Kindly describe your <br/> symptoms here{count % 2 == 0 ? '|': ''}</h3>
              <p  className={`${robotoParagraph400.className} text-base text-ash leading-6`}>So we can provide you with accurate guidance <br /> and information</p>
            </div>
            ):
            (
              <textarea className="w-full h-4/5 outline-0 placeholder-black hero-textInput resize-none" value={value} onChange={handleTextareaChange} autoFocus></textarea>
            )
          }
            <button className="absolute bottom-6 right-6 py-4 px-24 bg-primary rounded-lg text-white " onClick={getInputedValue} disabled={!value}>Send</button>
         </div>
         <img src="../assets/images/doctor.svg" />
      </div>
    </div>
  )
}

export default HeroComponent


