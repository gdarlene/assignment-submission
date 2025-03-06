import Sidenav from "../components/sidenav";
import Language from "../../public/language-solid 1(1).png"; 
import {FaChevronDown,FaBell,FaPlusCircle} from "react-icons/fa"; 
import GivenAssignment from "../components/givenAssignment";
import Timeline from "../components/Timeline";
import ClassA from "../components/ClassA";
import ClassB from "../components/ClassB";
import ClassC from "../components/ClassC";
import ClassD from "../components/ClassD";
import {useState} from "react"
import CreateAssignment from "./CreateAssignment";
import Dropdown from "../components/dropdown"


export default function Assignments(){
  
    const[isOpen,setIsOpen]= useState(false); 
    const[selected, setSelected] = useState("Filter")
    const[Component, setComponent] = useState(GivenAssignment)
    const[title,setTitle] = useState("Given Assignment")
 
    const options =[
        {Label:"Course assignments" , Content:GivenAssignment, buttonTitle:"Course"},
        {label:"This week", Content:Timeline , buttonTitle:"Timeline"}, 
        {label:"Class A", Content:ClassA, buttonTitle:"Class A"},
        {label:"Class B", Content:ClassB, buttonTitle:"Class B"},
        {label:"Class C", Content:ClassC, buttonTitle:"Class C"}, 
        {label:"Class D", Content:ClassD ,buttonTitle:"Class D"},
    ]

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
    
              <Dropdown/>
               
            </div>

           <CreateAssignment/>
        
           <div className="flex justify-between items-center ">
             <h1 className="font-bold text-[24px] text-[#626262]">{title}</h1>

               <div className="relative ">
                  <button className="bg-[#e6e6e64D]  px-4 py-2 w-auto  rounded-full flex  items-center gap-[0.5rem]   " 
                  onClick={()=>setIsOpen(!isOpen)}
                  >
                   {selected}
                   <FaChevronDown/>
                  </button>
              
               {isOpen && (
                <ul className='absolute   border border-[#e6e6e64D] bg-[#e6e6e6] '>
                {options.map((options)=>(
               <li 
               key={options.buttonTitle}
               onClick={()=>(
                setSelected(options.buttonTitle),
                setTitle(options.label),
                setComponent(options.Content),
                setIsOpen(false)
               )}
               className='cursor-pointer p-2 hover:bg-gray-300 text-[#636363] font-medium mx-auto'>
             {options.buttonTitle}
               </li>
    
                ))}
               
               <div></div>
    
             </ul> 
               )}
     </div>
            
    
           </div>


           <div>
           {Component}
           </div>

  </div>
      </div>
    )
  }