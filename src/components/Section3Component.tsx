import { Roboto, Raleway } from "next/font/google"

const ralewayHeading700 = Raleway({ weight: '700', subsets: ['latin'], })
const robotoParagraph400 = Roboto({ weight: '400', subsets: ['latin'], })

const Section3Component = () => {
    return (
      <section className="flex w-[100%] h-[815px] flex-col" id="section3">
        <div className="flex mt-[60px] justify-around items-center gap-52 h-full">
           <div className="w-[710px] h-[384px] z-10">
                <h2 className={`${ralewayHeading700.className} text-5xl text-dark m-4 leading-[63.99px]`}>Medical information and health advice you can trust</h2>
                <p className={`${robotoParagraph400.className} text-base text-ash m-6 leading-[24pxgit b]`}>Medconnect addresses the need for accessible and reliable medical information in a world where health decisions are becoming increasingly complex. By offering a user-friendly platform for symptom analysis, appointment scheduling, and medication availability</p>
           </div>
           <div></div>
        </div>
      </section>
    )
  }
  
  export default Section3Component
  
  
  