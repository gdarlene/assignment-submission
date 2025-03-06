import Card from "../components/card";
import Greetings from "../components/greetings";
import LargCards from "../components/LargCards";
import Sidenav from "../components/sidenav";
import Dropdown from "../components/dropdown"



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

        <Dropdown/>
           
        </div>

    <Greetings/>
    <h1 className="font-bold text-[#d9d9d9]">Overview</h1>
    <Card/>
    <LargCards/>

    </div>

    </div>

)




}