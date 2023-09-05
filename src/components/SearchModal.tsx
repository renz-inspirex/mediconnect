import {Dialog, Transition} from "@headlessui/react"
import {Inter, Poppins} from "next/font/google"
import {Fragment, useEffect, useState} from "react"
import SearchResultOutput from "./SearchResultOutput"
import {useRecoilState, useRecoilValue, useRecoilValueLoadable} from "recoil"
import {isSearchModalShowing, searchValueSelector} from "@/stores/search.store"
import {DoctorsService} from "@/services/doctors.service"

const poppinesHeading700 = Poppins({weight: "700", subsets: ["latin"]})
const interParagram400 = Inter({weight: "400", subsets: ["latin"]})

const SearchModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(isSearchModalShowing)
  const [specializations, setSpecialization] = useRecoilState(searchValueSelector)
  const [doctors, setDoctors] = useState([])
  const [isFetching, updateFetchingStatus] = useState(false)

  function closeModal() {
    setIsOpen(false)
    setDoctors([])
  }

  const getDoctors = async () => {
    try {
      updateFetchingStatus(true)
      const doctorService = DoctorsService.getInstance()
      const result = await doctorService.getDoctors(specializations)
      const data = result.data
      const doc = JSON.parse(data.payload.doctors).hits.hits.map(
        (val: any) => val._source
      )
      setDoctors(doc)
      updateFetchingStatus(false)
      console.log(doc)
    } catch {}
  }

  const updateSpecialization = (event: any) => {
    setSpecialization(event?.target?.value)
  }

  useEffect(() => {
    if (isOpen && !!specializations) {
      getDoctors()
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && !!specializations) {
      getDoctors()
    }
  }, [specializations])

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-dark bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[70vh] max-h-[80vh] transform overflow-y-auto rounded-[15px] bg-white  text-left align-middle shadow-xl transition-all px-[31px]">
                  <div className="sticky top-0 bg-white  py-6">
                   <input
                      type="text"
                      name="searchinput"
                      id="searchinput"
                      placeholder="Pick A Specialty Or Type Your Doctor’s Name"
                      className="w-full h-14 rounded-2xl border-2 border-input-grey p-4 mb-6"
                      onChange={updateSpecialization}
                      value={specializations}
                    />
                    {/* <div className='flex gap-[10px] mb-[32px]'>
                              <div className='relative p-0 w-full h-14 rounded-2xl border-2 border-input-grey p-4'>
                                  <input type="text" name="location" placeholder='Select Location' className='w-full h-full rounded-2xl p-4'/>
                                  <img src="../assets/images/location.svg" alt="Location" className='absolute right-2 bottom-[15px] w-[24px] h-[24px] ' />
                              </div>
                              <div className='relative p-0 w-full h-14 rounded-2xl border-2 border-input-grey p-4'>
                                  <input type="text" name="filter" placeholder='Filter' className='w-full h-full rounded-2xl p-4'/>
                                  <img src="../assets/images/filter.svg" alt="Filter" className='absolute right-2 bottom-[15px] w-[24px] h-[24px] ' />
                              </div>
                            </div> */}
                    {!!specializations && (
                      <div className="flex justify-between">
                        <p
                          className={`${poppinesHeading700.className} text-[23px] leading-[32px]`}
                        >
                          {specializations}
                        </p>
                        <img
                          src="../assets/images/closeModalBtn.svg"
                          alt="See More"
                        />
                      </div>
                    )}
                  </div>
                  <div className="mt-[32px]">
                    <div id="searchResults">
                      {!!doctors.length &&
                        doctors.map((doctor: any, index: number) => (
                          <SearchResultOutput
                            key={`doctor-${index}`}
                            doctor={doctor}
                          />
                        ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default SearchModal
