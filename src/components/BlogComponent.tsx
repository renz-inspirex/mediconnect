/* eslint-disable react/no-unescaped-entities */
import { Roboto, Raleway } from "next/font/google"

const ralewayHeading700 = Raleway({ weight: '700', subsets: ['latin'],  })
const robotoParagraph400 = Roboto({ weight: '400', subsets: ['latin'], })

const BlogComponent = () => {
    return (
      <div className="bg-secondary flex w-[100%] h-[896px] flex-col" id="editorial">
        <div className="text-center mt-[66px]">
            <h3 className={`${ralewayHeading700.className} text-5xl text-white leading-[63.99px] mb-1.5`}>
                MedConnect Editorial
            </h3>
            <p className={`${robotoParagraph400.className}  text-white text-base leading-6`}>
                Our comprehensive archive of articles delves deep into the realms of health and well-being,<br /> offering valuable insights, expert advice, and the latest trends in the world of healthcare.
            </p>
        </div>
        <div>
        <div className="flex justify-center m-16">
          <div className="h-[384px] flex gap-4">
                <div className="bg-white w-[400px] h-[552px] rounded-lg p-4 relative">
                  <img src="../assets/images/blog-1.png" alt="blog-1-thumbnail" className="w-full" />
                  <p className={`${robotoParagraph400.className} text-base text-ash leading-6 my-4`}>Nutrition</p>
                  <h4 className={`${ralewayHeading700.className} text-2xl text-dark leading-[31.99px]`}>15 Staple Foods to Make Healthy Eating Easy All Week Long</h4>
                  <p className={`${robotoParagraph400.className} text-base text-ash leading-6 my-4`}>Here's how to always have something to make for dinner.</p>
                  <div className="w-11/12 flex justify-between absolute bottom-4">
                    <p className={`${robotoParagraph400.className} text-base text-ash leading-6`}>September 20, 2023</p>
                    <div className="flex gap-4">
                      <img className="cursor-pointer" src="../assets/images/thumb_up_alt.svg" alt="like button" />
                      <img className="cursor-pointer" src="../assets/images/mode_comment.svg" alt="comment button" />
                      <img className="cursor-pointer" src="../assets/images/share.svg" alt="share button" />
                    </div>
                  </div>
                </div>

                <div className="bg-white w-[400px] h-[552px] rounded-lg p-4 relative">
                  <img src="../assets/images/blog-2.png" alt="blog-2-thumbnail" className="w-full" />
                  <p className={`${robotoParagraph400.className} text-base text-ash leading-6 my-4`}>Fitness</p>
                  <h4 className={`${ralewayHeading700.className} text-2xl text-dark leading-[31.99px]`}>People Who Exercise in Groups Get More Health Benefits</h4>
                  <p className={`${robotoParagraph400.className} text-base text-ash leading-6 my-4`}>Any kind of exercise is good for you, but working out in groups may give you a little…</p>
                  <div className="w-11/12 flex justify-between absolute bottom-4">
                    <p className={`${robotoParagraph400.className} text-base text-ash leading-6`}>August 29, 2023</p>
                    <div className="flex gap-4">
                      <img className="cursor-pointer" src="../assets/images/thumb_up_alt.svg" alt="like button" />
                      <img className="cursor-pointer" src="../assets/images/mode_comment.svg" alt="comment button" />
                      <img className="cursor-pointer" src="../assets/images/share.svg" alt="share button" />
                    </div>
                  </div>
                </div>

                <div className="bg-white w-[400px] h-[552px] rounded-lg p-4 relative">
                  <img src="../assets/images/blog-3.png" alt="blog-3-thumbnail" className="w-full" />
                  <p className={`${robotoParagraph400.className} text-base text-ash leading-6 my-4`}>Mental Well-Being</p>
                  <h4 className={`${ralewayHeading700.className} text-2xl text-dark leading-[31.99px]`}>10 Ways to Naturally Reduce Anxiety</h4>
                  <p className={`${robotoParagraph400.className} text-base text-ash leading-6 my-4`}>If you experience anxiety, find calm through these 10 natural remedies. Chamomile…</p>
                  <div className="w-11/12 flex justify-between absolute bottom-4">
                    <p className={`${robotoParagraph400.className} text-base text-ash leading-6`}>August 19, 2023</p>
                    <div className="flex gap-4">
                      <img className="cursor-pointer" src="../assets/images/thumb_up_alt.svg" alt="like button" />
                      <img className="cursor-pointer" src="../assets/images/mode_comment.svg" alt="comment button" />
                      <img className="cursor-pointer" src="../assets/images/share.svg" alt="share button" />
                    </div>
                  </div>
                </div>
          </div>
         
          </div>
        </div>
          
      </div>
    )
  }
  
  export default BlogComponent
  
  
  