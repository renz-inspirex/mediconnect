import { Poppins, Raleway } from "next/font/google"

const ralewayHeading700 = Raleway({ weight: '700', subsets: ['latin'], })
const poppinesParagraph400 = Poppins({ weight: '400', subsets: ['latin'], })

const Section1Component = () => {
    return (
      <section className="bg-dirty-white flex w-[100%] h-[815px] flex-col">
        <div className="flex mt-[60px] justify-center items-center gap-52 h-full">
            <img src="../assets/images/doctor.svg" />
           <div className="w-[710px] h-[384px]">
                <h2 className={`${ralewayHeading700.className} text-5xl text-dark m-4 leading-[63.99px]`}>Locate Your Medication with Ease</h2>
                <p className={`${poppinesParagraph400.className} text-base text-ash m-6 leading-[24px]`}>Never wonder where to find your medications again. Medconnect puts the power in your hands, helping you swiftly locate your prescribed medications at nearby pharmacies. Say goodbye to frustration and hello to convenience.</p>
                <button className=" py-4 px-24 bg-primary rounded-lg text-white ml-6">Search Here</button>
           </div>
        </div>
      </section>
    )
  }
  
  export default Section1Component
  
  
  