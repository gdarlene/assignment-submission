import DSA from "../../public/download 1.png"
import Math from "../../public/images 1.png"
import {FaChevronRight } from "react-icons/fa"


export default function LargCards(){

  const data = [
  {
    image:DSA,
    Title:"DSA ASSIGNMENT ON STACKS",
    Deadline:"23 March 2025"
  },
  {
    image:Math,
    Title:"Math ASSIGNMENT ON POLYNOMIALS",
    Deadline:"01 April 2025"
  }
]


return (

    <div className=" flex flex-col gap-[37px] ">
    {data.map((item)=>(
    <div className="bg-[#F6F6F6] flex  justify-between  w-[950px] h-[153px] p-[20px]">
    <div className="flex items-center gap-[2rem]">
        <img src={item.image}  className="w-[90] h-[115px]"/>
        <div className="flex  flex-col gap-[4rem]">
            <h1 className="font-semibold text-[#2C7BE5]">{item.Title}</h1>
            <p className="text-[#2C7BE5]">Deadline: {item.Deadline}</p>
        </div>
    </div>

    <div className=" bg-[#2C7BE5] text-white flex w-[176px] h-[56px]  items-center gap-[1rem]  text-[13px]  justify-center rounded-full  self-end">  
        View more 
         <FaChevronRight/>
        </div>

    </div>

    )) }


    </div>

)


}