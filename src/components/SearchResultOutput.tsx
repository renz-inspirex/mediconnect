/* eslint-disable react/no-unescaped-entities */
import { Inter, Poppins } from 'next/font/google'

const poppinesHeading700 = Poppins({ weight: '700', subsets: ['latin'], })
const interParagram400 = Inter({ weight: '400', subsets: ['latin'], })

const SearchResultOutput = () => {
    return (
         <div className='flex justify-between rounded-2xl border-2 border-input-grey py-2 p-4 my-[32px]'>
                            <div className='flex'>
                                <div>
                                    <img src="../assets/images/profilePic.png" alt="profile picture" />
                                </div>
                                <div className='flex flex-col justify-between py-[2px] pl-2'>
                                    <p className={`${interParagram400.className} text-xs leading-4 text-dark-ash`}>MD General Medicine</p>
                                    <p className={`${interParagram400.className} leading-4 leading-4 text-darker-ash`}>Dr. Nikki Gonzales</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='flex flex-col justify-evenly'>
                                    <p className='leading-none'>
                                        <img src="../assets/images/check-active.svg" alt="Available" className='inline' />
                                        <span className={`${interParagram400.className} text-xs text-secondary leading-4 ml-[3.3px]`}>Online Consultation</span>
                                    </p>
                                    <p className='leading-none'>
                                        <img src="../assets/images/unavailable.svg" alt="Not Avaialbe" className='inline' />
                                        <span className={`${interParagram400.className} text-xs text-lighter-grey leading-4 ml-[3.3px]`}>In Person Consultation</span> 
                                    </p>
                                </div>
                                <div className='flex justify-between ml-6'>
                                    <img src="../assets/images/downArrow.svg" alt="See More" />
                                </div>
                            </div>
                        </div>);
}

export default SearchResultOutput