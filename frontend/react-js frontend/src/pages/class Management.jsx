import Sidenav from "../components/sidenav";
import Dropdown from "../components/dropdown";




export default function Management(){
  
  // const[active,setActive] = useState(""); 

  const Table = [
    { name:"Louis Calton" , assignment:"DSA Assignment on stacks", description:"A text editor implements an \"undo\" feature using a stack. Every time a user types a character, it is pushed onto the stack. ", deadline:"Deadline: 23 March 2025", button1:"Submitted" , button2:"Mark" },
    { name:"Chloe Kampe" , assignment:"DSA Assignment on queues", description:"Implement a Priority Queue using a linked list or heap to handle the following operations efficiently: ", deadline:"Deadline: 23 March 2025", button1:"Not submitted" , button2:"Mark" }, 
    { name:"John Doe" , assignment:"DSA Assignment on queues", description:"Implement a Priority Queue using a linked list or heap to handle the following operations efficiently: ", deadline:"Deadline: 23 March 2025", button1:"Submitted" , button2:"Marked" }, 
    { name:"Kael Johnson" , assignment:"DSA Assignment on stacks", description:"Implement a Priority Queue using a linked list or heap to handle the following operations efficiently: ", deadline:"Deadline: 23 March 2025", button1:"Submitted" , button2:"Marked" },
    { name:"Darcine Waters" , assignment:"DSA Assignment on pointers", description:"Implement a Priority Queue using a linked list or heap to handle the following operations efficiently: ", deadline:"Deadline: 23 March 2025", button1:"Submitted" , button2:"Marked" },
    { name:"Allison Jones" , assignment:"DSA Assignment on pointers", description:"Implement a Priority Queue using a linked list or heap to handle the following operations efficiently: ", deadline:"Deadline: 23 March 2025", button1:"Submitted" , button2:"Marked" },
    { name:"Diana McKinnon" , assignment:"DSA Assignment on queues", description:"Implement a Priority Queue using a linked list or heap to handle the following operations efficiently: ", deadline:"Deadline: 23 March 2025", button1:"Submitted" , button2:"Marked" }
  ]

    return (
      <div className="flex ">
        <Sidenav/>
        
            <div  className="flex flex-col gap-[3rem] mt-[47px] w-full">

                <div className="flex justify-between items-center px-[20px]  ">
                        <div className="flex flex-col gap-[1px]">
                            <h1 className="font-bold text-[15px] text-[#000]">Class Management</h1>
                            <div className="flex  justify-between font-bold text-[#2C7BE5] ">
                                Monday,  <p className=" text-[#CBCBCB] ">03 March 2025</p> 
                            </div>
                        </div>
              
              <Dropdown/>
                      
                    </div>
                    
                   <div className="overflow-x-auto">
                  <table className="min-w-full auto flex flex-col gap-[0.5rem]">
                    <thead className="sticky top-0 z-10">
                  <tr className=" bg-[#D9D9D927] flex w-[950px] gap-[5.5rem] py-2 px-4 rounded-xl">
                  <th className="text-[12px] font-light">Student name</th>
                  <th className="text-[12px] font-light">Assignment name</th>
                  <th className="text-[12px] font-light">Description</th>
                  <th className="text-[12px] font-light">Deadline</th>
                  <th className="text-[12px] font-light">Submission State</th>
                  <th className="text-[12px] font-light">Marking State</th>
                  </tr>
                    </thead>
                    <tbody className=" flex flex-col gap-[0.5rem]">
                    {Table.map((data)=>(
                      <tr key={data.name} className="bg-[#D9D9D927] flex w-[950px] gap-[3.5rem] py-2 px-4 rounded-xl items-center">
                       <td className="text-[12px] font-bold w-[120px] ">{data.name}</td>
                       <td className="text-[10px] font-light w-[120px] text-[#636363]">{data.assignment}</td>
                       <td className="text-[10px] font-light w-[120px] text-[#636363]">{data.description}</td>
                       <td className="text-[10px] font-light w-[120px] text-[#636363]">{data.deadline}</td>
                       <td className="text-[10px] font-light w-[120px] text-[#636363]"><button className={`py-2 px-4 rounded-full w-auto font-bold ${data.button1==="Submitted"? " border-2 border-[#2C7BE5] text-[#2C7BE5]  ":" border-2 border-[#FFC107] text-[#FFC107]" }`}>{data.button1}</button></td>
                       <td className="text-[10px] font-light w-[120px] text-[#636363]"> <button className={`py-2 px-10 rounded-full w-auto font-bold text-[#ffff] ${data.button2==="Mark"? "  bg-[#2C7BE5]   ":"  bg-[#2C7BE54b] " }`}>{data.button2}</button> </td>
                      </tr>
                    ))}

                    </tbody>
                  </table>
                   </div>
                    {/* bg-[#D9D9D927] */}
            </div>
      </div>
    )
  }