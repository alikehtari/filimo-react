import { AiOutlineEllipsis } from "react-icons/ai";


const Header = () => {
    return ( 
        <header  className=" bg-black py-3 md:py-1  justify-center flex h-12 font-iranian px-3 ">
            <div className="flex justify-between items-center w-full xl:w-[1300px] ">
                <div className="w-[80px] h-[25px]">
                    <img src="https://www.filimo.com/assets/web/ui/img-Fpl0gcDWm3dr1Aq8mKYQ/filimo/fa-filimo-dark-logo.svg" alt="" />
                </div>
                <div className="p-1 leading-7 text-white items-center flex">
                    <button className="bg-gray-700 bg-opacity-50 hover:bg-gray-500 hover:bg-opacity-55 mx-1 px-1 py-1 items-center text-3xl font-semibold rounded flex justify-center">
                    <AiOutlineEllipsis />
                    </button>
                    <button className="bg-gray-700 bg-opacity-50 hover:bg-gray-500 hover:bg-opacity-55 px-2 py-2 items-center text-sm font-semibold rounded flex justify-center">
                        ورود
                    </button>

                </div>
            </div>
        </header>
    );
}

 
export default Header;