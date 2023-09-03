import { Dialog, Transition } from '@headlessui/react'
import { Raleway, Poppins } from 'next/font/google'
import { Fragment, useState } from 'react'

const ralewayHeading700 = Raleway({ weight: '700', subsets: ['latin'], })
const poppinsHeading400 = Poppins({ weight: '400', subsets: ['latin'], })

const HeroOutputModalComponent = (props: HeroOutputModalComponentProps) => {

    function closeModal() {
        props.setIsOpen(false)
    }

    function closeModalbug() {
        props.setIsOpen(true)
    }

    function openModal() {
        props.setIsOpen(true)
    }

    return <div>
        <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalbug}>
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
                <Dialog.Panel className="w-full max-w-[80vh] max-h-[80vh] transform overflow-y-auto rounded-[15px] bg-white  px-[32px] text-left align-middle shadow-xl transition-all">
                    <div className='flex bg-white justify-between sticky top-0 py-6'>
                        <Dialog.Title
                            as="h3"
                            className={`${ralewayHeading700.className} text-2xl text-dark mb-[32px]leading-[31.99px]`}
                        >
                            Managing Eczema: Tips for Soothing Your Skin
                            Managing Eczema: Tips for Soothing Your Skin
                        </Dialog.Title>
                        <img src="../assets/images/closeModalBtn.svg" alt="Close Button" onClick={closeModal} className='flex self-start' />
                    </div>
                  <div className="mt-[32px]">
                    <p className={`${poppinsHeading400.className} text-base text-ash leading-6`}>
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci animi vel facere maiores, eaque molestias beatae qui earum amet. Laboriosam ratione laudantium blanditiis doloribus neque sint ut quod atque aliquid explicabo voluptate unde vel nemo earum, libero quasi totam distinctio quibusdam culpa, necessitatibus inventore pariatur omnis adipisci! Vero eveniet rem corrupti, perspiciatis iusto totam, laboriosam adipisci cumque ad omnis ab tenetur porro enim vel eos voluptatibus dolorum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum saepe repellendus molestias aperiam quidem consequatur dolore ea mollitia iste, eaque quia sapiente, ab perspiciatis hic aspernatur officiis? Nulla commodi perspiciatis voluptas adipisci, qui quasi officiis error aut accusantium distinctio non a dolorum quisquam dignissimos ipsum quo nisi repellendus, iure autem. Repellat, assumenda. Aliquid omnis dolorum, minima id nesciunt, sapiente soluta voluptates tempora rerum quaerat fugiat voluptatibus dolorem illo aperiam. Provident cum voluptas voluptates deserunt natus architecto doloremque ipsum quam omnis, exercitationem asperiores nostrum quos enim tempora vel laboriosam in dolore fugiat libero eos sunt officiis aperiam. Quae laboriosam perspiciatis reprehenderit. Doloremque molestiae sint fugit repellendus, aliquid eius possimus nesciunt laboriosam vel quo veniam architecto itaque, rem excepturi consequuntur accusantium. Incidunt fuga, autem laboriosam totam voluptatum asperiores molestias similique suscipit deleniti magni minima fugiat aut ea labore corrupti deserunt, ipsam rerum reiciendis provident minus officia quidem? Ad eos voluptates consequuntur nihil non eveniet doloribus animi fugit, cumque laudantium id officia at. Saepe culpa omnis, id aut esse maiores atque et corporis voluptates veritatis dolore tempora magni eius eligendi laboriosam modi ullam, aspernatur unde. Aliquid amet eligendi molestias dolorum culpa atque, mollitia sit reiciendis accusantium totam! Autem praesentium repellendus officiis libero similique odit consequatur veniam fugiat porro molestiae, debitis saepe et perspiciatis corrupti sapiente iure ullam. Dolor pariatur ullam consectetur aperiam rem aliquam eveniet dolorum sit velit corporis quia rerum quasi harum enim minus quam mollitia et libero obcaecati minima temporibus labore, animi repudiandae molestias. Neque modi hic sit sapiente ea voluptas? Dolor reiciendis incidunt consequuntur iusto a laboriosam quaerat voluptatem iste. Id, possimus. Molestias doloribus quidem porro itaque amet, totam voluptas facere obcaecati repudiandae numquam voluptatibus nam dicta fuga ipsa pariatur unde excepturi repellat labore cumque non nihil praesentium! Porro explicabo illum magnam dignissimos natus, ad doloribus voluptas mollitia architecto saepe esse veniam quas quia odio, asperiores quibusdam possimus ab quam, voluptatem temporibus soluta? Voluptatum debitis corporis, quos consequuntur iure ad soluta voluptatibus illum quis earum laudantium numquam mollitia laboriosam adipisci suscipit fugiat esse libero, deserunt minus culpa! Iste excepturi eveniet omnis aspernatur est numquam quae reprehenderit tempore. Eaque illo libero placeat optio sint fugit est voluptatibus a eum quia in sit sapiente possimus non doloremque ducimus, provident facere consequatur officiis aut corrupti aspernatur quo. Earum, quas facere voluptatum iure rerum veniam, mollitia iste magnam culpa, corrupti in deserunt nulla obcaecati labore est aut? Possimus dolor earum in vitae nemo! Adipisci ducimus magnam nobis voluptatem blanditiis ab ut voluptas, laborum esse. Dolorum saepe perspiciatis rem animi illum velit dolores debitis, officia quaerat quae inventore praesentium aut totam voluptas quia autem delectus quod maiores, tempora veritatis! Saepe, nemo cum, commodi vero sit est veritatis autem omnis ut repellendus laboriosam? Fugit itaque eaque quasi vitae, beatae rerum asperiores porro ut cumque, illum dolor quaerat voluptates atque! Facilis, tempora numquam? Dicta excepturi ex ipsum doloremque illum aut! Quos mollitia est, illo perferendis dolore quis porro ab totam eaque facere corrupti quibusdam eligendi modi suscipit repellat alias quam dicta, saepe cum? Alias, minima maiores?
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
}

type HeroOutputModalComponentProps = {
    isOpen: boolean,
    setIsOpen: Function
}

export default HeroOutputModalComponent