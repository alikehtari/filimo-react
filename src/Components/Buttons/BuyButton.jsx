import { IoEnterOutline } from "react-icons/io5";


const BuyButton = () => {
    return ( 
        <div className=" flex   text-white">
        <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-sm md:text-lg flex">
        <IoEnterOutline className="text-xl md:text-3xl " />
        <span className="px-1">
        خرید اشتراک و تماشا         


        </span>

        </button>

        </div>
     );
}
 
export default BuyButton;