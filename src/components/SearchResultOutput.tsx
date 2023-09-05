/* eslint-disable react/no-unescaped-entities */
import { Inter, Poppins } from "next/font/google"

const poppinesHeading700 = Poppins({ weight: "700", subsets: ["latin"] })
const interParagram400 = Inter({ weight: "400", subsets: ["latin"] })

const SearchResultOutput = (props: any) => {
  const doctor = props.doctor

  const haveInPersonConsultation = doctor?.clinics.some(
    (clinic: any) => clinic.name !== "Online Clinic"
  )
  const haveOnlineConsultation = doctor?.clinics.some(
    (clinic: any) => clinic.name === "Online Clinic"
  )

  const getConsultationStatus = (status: boolean, consultationType: string) => {
    if (status) {
      return (
        <p className="leading-none">
          <img
            src="../assets/images/check-active.svg"
            alt="Available"
            className="inline"
          />
          <span
            className={`${interParagram400.className} text-xs text-secondary leading-4 ml-[3.3px]`}
          >
            {consultationType}
          </span>
        </p>
      )
    } else {
      return (
        <p className="leading-none">
          <img
            src="../assets/images/unavailable.svg"
            alt="Not Avaialbe"
            className="inline"
          />
          <span
            className={`${interParagram400.className} text-xs text-lighter-grey leading-4 ml-[3.3px]`}
          >
            {consultationType}
          </span>
        </p>
      )
    }
  }

  return (
    <section className="flex justify-between rounded-2xl border-2 border-input-grey py-2 p-4 my-[32px]">
      <div className="flex">
        <div className="w-[48px] h-[48px] overflow-hidden">
          <img
            src={`https://static.seriousmd.com/${doctor?.image?.replace(
              /^\//g,
              ""
            )}`}
            alt="profile picture"
          />
        </div>
        <div className="flex flex-col justify-between py-[2px] pl-2">
          <p
            className={`${interParagram400.className} text-xs leading-4 text-dark-ash`}
          >
            {doctor?.title} {doctor?.professional?.mainspecialty}
          </p>
          <p
            className={`${interParagram400.className} leading-4 leading-4 text-darker-ash`}
          >
            Dr. {doctor?.firstname} {doctor?.lastname}
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-evenly">
          {getConsultationStatus(haveOnlineConsultation, "Online Consulation")}
          {getConsultationStatus(
            haveInPersonConsultation,
            " In Person Consultation"
          )}
        </div>
        {/* <div className="flex justify-between ml-6">
          <img src="../assets/images/downArrow.svg" alt="See More" />
        </div> */}
      </div>
    </section>
  )
}

export default SearchResultOutput
