import { FaGlobe } from "react-icons/fa"
import Background from "../../public/MacBook Pro 16_ - 19.png"
import Penguin from "../../public/penguin 1.png"
import Dropdown from "../components/dropdown"
import { Link } from "react-router-dom"



export default function Logout(){
  

    return (
     <div className=" flex flex-col  gap-[50px] py-[30px] px-[20px]" style={{backgroundImage:`url(${Background})`}}>

        <div className="flex gap-[1rem] items-center self-end">
        <FaGlobe/>
        <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <span className="ml-1 text-sm text-gray-600">ENG</span>
            </div>
       
            <button className=" px-6 py-3  bg-[#2C7BE5] text-white flex min-w-[140px] w-auto  gap-[5px] shadow-md  items-center font-bold    text-[15px]  justify-center rounded-full   hover:bg-[#2365d2]">  
                       Sign up 
                       </button>
        </div>
 

      <div className="flex flex-col items-center gap-[20px] self-center">
       <img src={Penguin} className="w-[150px] h-[150px] object-contain" alt=""/>
       <div className="flex flex-col items-center">
        <h1 className="font-semibold text-[60px]">You have been logged out</h1>
        <p className="font-light">Log in again to access Scholarly’s features and functionialities.</p>
       </div>

         <Link to={"/login"} className=" px-20 py-3  bg-[#2C7BE5] text-white flex min-w-[140px] w-auto  gap-[5px] shadow-md  items-center font-bold    text-[20px]  justify-center rounded-full   hover:bg-[#2365d2]">  
                       Log in 
                       </Link>
               
      </div>



     </div>
    )

}