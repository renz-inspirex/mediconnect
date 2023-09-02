import { Roboto } from "next/font/google"

const robotoParagraph400 = Roboto({ weight: '400', subsets: ['latin'], })

const FooterComponent = () => {
    return (
      <footer className="bg-dark-blue w-full h-[296px] flex justify-center items-center">
        <div className="flex justify-center items-center text-center flex-col">
            <img src="../assets/images/logo.svg" alt="logo" className="mb-[20.62px]" />
            <p className={`${robotoParagraph400.className} text-base text-white leading-[24px] mb-[28px]`}>Medconnect empowers users to take control of their health journey.</p>
            <p className={`${robotoParagraph400.className} text-base text-white leading-[24px]`}>© 2023 MedConnect. All rights reserved</p>
        </div>
      </footer>
    )
  }
  
  export default FooterComponent
  
  
  