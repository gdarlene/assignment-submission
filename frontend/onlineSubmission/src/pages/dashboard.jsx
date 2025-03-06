import Card from "../components/card";
import Greetings from "../components/greetings";
import { FaBell, FaChevronDown } from "react-icons/fa"
import Language from "../../public/language-solid 1(1).png"
import LargCards from "../components/LargCards";
import Sidenav from "../components/sidenav";



export default function Dashboard(){


return (
    <div className="flex  ">
    <Sidenav/>
    <div className="flex flex-col gap-[3rem] mt-[47px]">

    <div className="flex justify-between items-center  ">
            <div className="flex flex-col gap-[1px]">
                <h1 className="font-bold text-[15px] text-[#000]">Dashboard</h1>
                <div className="flex  justify-between font-bold text-[#2C7BE5] ">
                    Monday,  <p className=" text-[#CBCBCB] ">03 March 2025</p> 
                </div>
            </div>

            <div className="self-end">
                <div className="flex gap-[1rem] items-center">
                <button className="bg-[#FFC10761] w-[40px] h-[20px] flex rounded-full  "> 
                    <div className="w-1/2  rounded-full bg-[#FFC107] "></div>
                    </button>
                    <div className="flex gap-[0.5rem] items-center">
                        <p className="text-[#63636378] text-[13px] font-semibold">ENG</p>
                        <img className="w-[14px] h-[11px]" src={Language}/>
                    </div>

           
                        <div className=" bg-[#2C7BE571] py-[5px] px-[5px] rounded">
                            <p className="font-semibold text-[#2C7BE5]">LM</p>
                            </div>
                   
                    <div className="flex items-center gap-[0.5rem] ">
                        <p className="font-semibold">Teacher name</p>
                        <FaChevronDown/>
                    </div>
                    <FaBell color="#3B85E7" size="25px"/>
                </div>
            

            </div>
           
        </div>

    <Greetings/>
    <h1 className="font-bold text-[#d9d9d9]">Overview</h1>
    <Card/>
    <LargCards/>

    </div>

    </div>

)




}