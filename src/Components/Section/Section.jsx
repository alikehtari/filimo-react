import { IoLaptopOutline , IoPhonePortraitOutline , IoGameControllerOutline   } from "react-icons/io5";
import BuyButton from "../Buttons/BuyButton";


const Section = () => {
    return ( 
        <>
        <div className="bg-darkestGray flex justify-center items-center">
            <div className="w-full xl:w-[1300px] flex flex-col md:flex-row">
                <div>
                    <img src="https://www.filimo.com/assets/web/ui/img-Fpl0gcDWm3dr1Aq8mKYQ/campaigns/nosub-v_new/deviceYaghi.png" alt="" />
                </div>
                <div className="p-2 my-3">
                    <h4 className="text-white pb-2">تماشای فیلیمو با همه دستگاه‌ها</h4>
                    <p className="text-gray-200 text-sm">می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل، تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.</p>
                    <div className="flex gap-2 py-2 items-top">
                        <div className=" text-gray-400 text-3xl">
                         <IoLaptopOutline />
                        </div>
                        <div>
                            <p className="text-gray-300 font-bold">کامپیوتر و لپ‌تاپ</p>
                            <p className="text-gray-400 text-xs font-thin">windows PC - MacOS - Chorom OS </p>
                        </div>

                    </div>
                    <div className="flex gap-2 py-2 items-top">
                        <div className=" text-gray-400 text-3xl">
                         <IoPhonePortraitOutline  />
                        </div>
                        <div>
                            <p className="text-gray-300 font-bold">موبایل و تبلت</p>
                            <p className="text-gray-400 text-xs font-thin">Android Phone & Tablets - Iphone and Ipad - Amazon Fire Tablets </p>
                        </div>

                    </div>
                    <div className="flex gap-2 py-2 items-top">
                        <div className=" text-gray-400 text-3xl">
                         <IoGameControllerOutline  />
                        </div>
                        <div>
                            <p className="text-gray-300 font-bold">کنسول‌های بازی (Browser)</p>
                            <p className="text-gray-400 text-xs font-thin">Xbox Series S - Xbox Seris X - PS5 - PS4 </p>
                        </div>

                    </div>
                    <div className=" m-1">
                        <BuyButton />
                    </div>
                </div>
            </div>
        </div>
            <div className="bg-slowGray flex justify-center items-center">
            <div className="w-full flex flex-col-reverse md:flex-row justify-between px-7">

                <div className="p-2 my-3">
                    <h4 className="text-white pb-2">تماشای فیلیمو با همه دستگاه‌ها</h4>
                    <p className="text-gray-200 text-sm">می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل، تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.</p>
                    <div className="flex gap-2 py-2 items-top">
                        <div className="text-gray-400 text-3xl">
                            <IoLaptopOutline />
                        </div>
                        <div>
                            <p className="text-gray-300 font-bold">کامپیوتر و لپ‌تاپ</p>
                            <p className="text-gray-400 text-xs font-thin">Windows PC - MacOS - Chrome OS</p>
                        </div>
                    </div>
                    <div className="flex gap-2 py-2 items-top">
                        <div className="text-gray-400 text-3xl">
                            <IoPhonePortraitOutline />
                        </div>
                        <div>
                            <p className="text-gray-300 font-bold">موبایل و تبلت</p>
                            <p className="text-gray-400 text-xs font-thin">Android Phone & Tablets - iPhone and iPad - Amazon Fire Tablets</p>
                        </div>
                    </div>
                    <div className="flex gap-2 py-2 items-top">
                        <div className="text-gray-400 text-3xl">
                            <IoGameControllerOutline />
                        </div>
                        <div>
                            <p className="text-gray-300 font-bold">کنسول‌های بازی (Browser)</p>
                            <p className="text-gray-400 text-xs font-thin">Xbox Series S - Xbox Series X - PS5 - PS4</p>
                        </div>
                    </div>
                    <div className="m-1">
                        <BuyButton />
                    </div>
                </div>
                <div className="w-full md:w-auto md:flex-1 flex justify-center md:justify-end">
                    <img className="w-full md:w-[780px]" src="https://www.filimo.com/assets/web/ui/img-Fpl0gcDWm3dr1Aq8mKYQ/campaigns/nosub-v_new/TVBG.png" alt="" />
                </div>
            </div>
        </div>



        </>
     );
}
 
export default Section;