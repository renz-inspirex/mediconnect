import { Poppins, Raleway } from "next/font/google"
import SearchBar from "./_searchbarComponent"

const ralewayHeading700 = Raleway({ weight: '700', subsets: ['latin'], })
const poppinesParagraph400 = Poppins({ weight: '400', subsets: ['latin'], })

const Section2Component = () => {
    return (
      <section className="bg-secondary flex w-[100%] h-[704px] flex-col">
        <div className="flex mt-[60px] justify-center items-center gap-52 h-full">
           <div className="w-[710px] h-[384px]">
                <h2 className={`${ralewayHeading700.className} text-5xl text-white m-4 leading-[63.99px]`}>Bridging the gap between Doctors and Patients</h2>
                <p className={`${poppinesParagraph400.className} text-base text-white m-6 leading-[24px]`}>Scheduling appointments with doctors has never been easier. Take control of your healthcare journey and never miss another important appointment.</p>
                <SearchBar />
           </div>
           <img src="../assets/images/doctor_section2.svg" />
        </div>
      </section>
    )
  }
  
  export default Section2Component
  
  
  