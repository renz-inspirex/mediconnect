import {MedicineService} from "@/services/medicine.service"
import {
  getPossibleMedicine,
  isMedicineModalOpen,
  symptoms,
} from "@/stores/modal.store"
import {Dialog, Transition} from "@headlessui/react"
import {Raleway, Poppins} from "next/font/google"
import {Fragment, useEffect, useState} from "react"
import {useRecoilState, useRecoilValue} from "recoil"

const ralewayHeading700 = Raleway({weight: "700", subsets: ["latin"]})
const poppinsHeading400 = Poppins({weight: "400", subsets: ["latin"]})

const HeroOutputModalComponent = () => {
  const [isOpen, setIsOpen] = useRecoilState(isMedicineModalOpen)
  const mSymptoms = useRecoilValue(symptoms)
  const [solution, setSolution] = useState([])
  const [isFetching, updateFetchingStatus] = useState(false)

  function closeModal() {
    setIsOpen(false)
    setSolution([])
  }

  function closeModalbug() {
    setIsOpen(false)
    setSolution([])
  }

  const getMedicine = async () => {
    try {
      updateFetchingStatus(true)
      const medicinesService = MedicineService.getInstance()
      const result = await medicinesService.getPossibleMedicine(mSymptoms)
      const data = result.data
      const message = data.choices[0].message.content
  
      console.log({message})
      setSolution(message.split(/(^\n)|\n/gm))
      updateFetchingStatus(false)
      console.log(data)
    } catch {

    }
   
  }

  useEffect(() => {
    if (isOpen) {
      getMedicine()
    }
  }, [isOpen])

  return (
    <section>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalbug}>
          <div className="fixed inset-0 bg-dark bg-opacity-50" />
          <div className="fixed inset-0">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              
                <Dialog.Panel className="w-full max-w-[80vh] max-h-[80vh] overflow-y-auto transform rounded-[15px] bg-white  px-[32px] text-left align-middle shadow-xl transition-all">
                  <div className="flex bg-white justify-between sticky top-0 pt-6">
                    <Dialog.Title
                      as="h3"
                      className={`${ralewayHeading700.className} text-2xl text-dark mb-[20px]leading-[31.99px]`}
                    >Possible Solution</Dialog.Title>
                    <img
                      src="../assets/images/closeModalBtn.svg"
                      alt="Close Button"
                      onClick={closeModal}
                      className="flex self-start cursor-pointer"
                    />
                  </div>
                  <div className="mt-[32px] overflow-y-auto max-w-[100%] pb-10">
                    <p
                      className={`${poppinsHeading400.className} text-base text-ash leading-6`}
                    >
                      {!!solution.length && !isFetching && solution.map(sentence => <p className="pb-2">{sentence}</p>)}
                      {(!!!solution.length || isFetching)&& (
                        <p>Finding possible cause...</p>
                      )}
                    </p>
                  </div>
                </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  )
}

export default HeroOutputModalComponent