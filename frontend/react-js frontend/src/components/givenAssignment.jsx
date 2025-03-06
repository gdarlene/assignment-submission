import DSA from "../../public/download 1.png"
import {FaChevronRight} from 'react-icons/fa'

export default function  givenAssignment(){
 
    const data=[
        {
            image:DSA,
            Title:"DSA Assignment on Stacks",
            Description:"A text editor implements an \"undo\" feature using a stack. Every time a user  types a character , it is pushed onto the stack  when  the user presses UNDO  the last entered character  ",
            Deadline:"23 March 2025"
        },
        {
            image:DSA,
            Title:"DSA Assigment on queues", 
            Description:"Implement a Priority Queue using a linked list or heap to handle the following operations efficiently: 1.enqueue(name, type) - Add a customer to the queue.... ", 
            Deadline:"29 March 2025"

        }, 
        {
            image:DSA,
            Title:"DSA Assigment on Linked list", 
            Description:"You are developing a student record management system that stores student names and their IDs using a singly linked list. The system should....... ", 
            Deadline:"30 March 2025"

        },
        {
            image:DSA,
            Title:"DSA Assigment on pointers", 
            Description:"You are given an array of integers, and your task is to implement a function using pointers to reverse the array in-place without using extra memory......... ", 
            Deadline:"1 April 2025"
        }

    ]



    return (
        
            <div className=" flex flex-col gap-[37px] ">
            {data.map((item)=>(
            <div className="bg-[#F6F6F6] flex  justify-between  w-[950px] h-[153px] p-[20px]">
            <div className="flex items-center gap-[2rem]">
                <img src={item.image}  className="w-[90] h-[115px]"/>
                <div className="flex  flex-col gap-[1rem] ">
                    <h1 className="font-semibold text-[#2C7BE5]">{item.Title}</h1>
                    <p className="">{item.Description}</p>
                    <p className="text-[#2C7BE5]">Deadline: {item.Deadline}</p>
                </div>
            </div>
            
            <div className=" px-6 py-3  bg-[#2C7BE5] text-white flex min-w-[140px] w-auto  gap-[5px] shadow-md  items-center   text-[13px]  justify-center rounded-full  self-end hover:bg-[#2365d2]">  
                View more 
                 <FaChevronRight/>
                </div>
        
            </div>
        
            )) }
        
        
            </div>
        


    )
    
}