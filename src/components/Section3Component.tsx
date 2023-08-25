import { Poppins, Raleway } from "next/font/google"

const ralewayHeading700 = Raleway({ weight: '700', subsets: ['latin'], })
const poppinesParagraph400 = Poppins({ weight: '400', subsets: ['latin'], })

const Section3Component = () => {
    return (
      <section className="flex w-[100%] h-[815px] flex-col" id="section3">
        <div className="flex mt-[60px] justify-around items-center gap-52 h-full">
           <div className="w-[710px] h-[384px]">
                <h2 className={`${ralewayHeading700.className} text-5xl text-dark m-4 leading-[63.99px]`}>Bridging the gap between Doctors and Patients</h2>
                <p className={`${poppinesParagraph400.className} text-base text-ash m-6 leading-[24px]`}>Scheduling appointments with doctors has never been easier. Take control of your healthcare journey and never miss another important appointment.</p>
           </div>
           <div></div>
        </div>
      </section>
    )
  }
  
  export default Section3Component
  
  
  