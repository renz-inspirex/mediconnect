import { Dialog, Transition } from '@headlessui/react'
import { Inter, Poppins } from 'next/font/google'
import { Fragment, useState } from 'react'
import SearchResultOutput from './SearchResultOutput'


const poppinesHeading700 = Poppins({ weight: '700', subsets: ['latin'], })
const interParagram400 = Inter({ weight: '400', subsets: ['latin'], })

const SearchModal = (props: SearchModalProps) => {

    function closeModal() {
        props.setIsOpen(false)
    }

    function openModal() {
        props.setIsOpen(true)
    }

    return <div>
        <Transition appear show={props.isOpen} as={Fragment}>
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
                       <div className='sticky top-0 bg-white  py-6'>
                            <input type="text" name="searchinput" id="searchinput" placeholder='Pick A Specialty Or Type Your Doctor’s Name' className='w-full h-14 rounded-2xl border-2 border-input-grey p-4 mb-6'/>
                            <div className='flex gap-[10px] mb-[32px]'>
                              <div className='relative p-0 w-full h-14 rounded-2xl border-2 border-input-grey p-4'>
                                  <input type="text" name="location" placeholder='Select Location' className='w-full h-full rounded-2xl p-4'/>
                                  <img src="../assets/images/location.svg" alt="Location" className='absolute right-2 bottom-[15px] w-[24px] h-[24px] ' />
                              </div>
                              <div className='relative p-0 w-full h-14 rounded-2xl border-2 border-input-grey p-4'>
                                  <input type="text" name="filter" placeholder='Filter' className='w-full h-full rounded-2xl p-4'/>
                                  <img src="../assets/images/filter.svg" alt="Filter" className='absolute right-2 bottom-[15px] w-[24px] h-[24px] ' />
                              </div>
                            </div>
                            <div className='flex justify-between'>
                              <p className={`${poppinesHeading700.className} text-[23px] leading-[32px]`}>General Medicine</p>
                              <img src="../assets/images/closeModalBtn.svg" alt="See More" />
                            </div>
                       </div>
                  <div className="mt-[32px]">
                    
                    <div id="searchResults">
                        <SearchResultOutput />
                        <SearchResultOutput />
                        <SearchResultOutput />
                        <SearchResultOutput />
                        <SearchResultOutput />
                        <SearchResultOutput />
                        <SearchResultOutput />

                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
}

type SearchModalProps = {
    isOpen: boolean,
    setIsOpen: Function
}

export default SearchModal