import { Poppins, Roboto } from "next/font/google"

const poppinesParagraph700 = Poppins({ weight: '700', subsets: ['latin'], })
const robotoParagraph400 = Roboto({ weight: '400', subsets: ['latin'], })

const DirectoryComponent = () => {
    return (
      <section className="bg-cream flex w-[100%] h-[752px] justify-center items-center">
        <div className="flex  w-[1232px] h-[528px]">
          <div className="bg-dirty-white w-2/4 w-full h-full flex items-center">
            <div className="ml-[100px]">
                <h5 className={`${poppinesParagraph700.className} text-[32px] text-dark leading-[43px] mb-2`}>Our Health Directory</h5>
                <p className={`${robotoParagraph400.className} text-base text-ash leading-6 w-[332px] mb-6`}>Medconnect presents a comprehensive health directory that empowers users to gain deeper insights into health and well-being.</p>
                <button className=" py-4 px-8 bg-primary rounded-lg text-white">Explore Health Directory</button>
            </div>
          </div>
           <div className="bg-secondary w-2/4 w-full h-full flex justify-center">
            <img src="../assets/images/directory-girl.svg" alt="directory-girl" className="h-[502px]" />
           </div>
        </div>
      </section>
    )
  }
  
  export default DirectoryComponent
  
  
  