import Sidenav from "../components/sidenav";
import Language from "../../public/language-solid 1(1).png"; 
import {FaChevronDown,FaBell,FaPlusCircle} from "react-icons/fa"; 
import GivenAssignment from "../components/givenAssignment";



export default function Assignments(){
    return (
      <div className="flex ">
        <Sidenav/>
        <div className="flex flex-col gap-[4rem] mt-[47px] ">
        
        <div className="flex justify-between items-center gap-[400px] ">
                <div className="flex flex-col gap-[1px]">
                    <h1 className="font-bold text-[15px] text-[#000]">Assignments</h1>
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

        <button className="bg-[#ECE5E5] flex gap-[0.5rem] items-center py-[15px] px-[12px] rounded-2xl w-[250px] h-[69px]">
        <p className="font-bold text-[#626262]">Create New Assignment  </p>
        <FaPlusCircle color="#FFC107" className="text-[25px]"/>
        </button>

         <GivenAssignment/>

  </div>
      </div>
    )
  }