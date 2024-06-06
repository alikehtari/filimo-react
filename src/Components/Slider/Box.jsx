import { IoCheckmark ,IoEnterOutline } from "react-icons/io5";
import BuyButton from "../Buttons/BuyButton";

const Box = () => {
    return (
        <div 
        className='absolute bottom-0 right-0 left-0 mt-10 z-10'
             style={{
            backgroundImage: " linear-gradient(to top, rgb(21,21,21) 60%, transparent)",
        }}>
            <div className=" m-auto w-full  sm:w-1/2  text-center pb-10">
                <h4 className="text-yellow-300 font-bold ">با فییمو بی وقفه فیلم ببین</h4>
                <h2 className="text-white font-bold">کنترل همیشه دست توست!</h2>
            </div>
            <div className="text-lg   justify-center text-white hidden md:flex  m-auto  w-full xl:w-[1300px] gap-11">
                <div className="flex items-center justify-end">
                    <IoCheckmark className="text-yellow-500 text-3xl m-2 rounded-full p-1 font-bold mb-4 bg-gray-500 " />
                    <p>95 هزار اپیزود فیلم و سریال برای تماشا داری</p>
                </div>
                <div className="flex items-center justify-end">
                    <IoCheckmark className="text-yellow-500 text-3xl m-2 rounded-full p-1 font-bold mb-4 bg-gray-500 " />
                    <p>می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی</p>
                </div>
                <div className="flex items-center justify-end">
                    <IoCheckmark className="text-yellow-500 text-3xl m-2 rounded-full p-1 font-bold mb-4 bg-gray-500 " />
                    <p>می‌تونی یک عضو، مخصوص تماشای کودک بسازی</p>
                </div>



            </div>
            <div className="m-auto flex justify-center pb-20">
                <BuyButton />

            </div>


        </div> 

     );
}
 
export default Box;