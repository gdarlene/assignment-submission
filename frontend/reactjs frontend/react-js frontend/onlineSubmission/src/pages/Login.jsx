import Hiking from "../../public/undraw_hiking_9zta 1.png"

export default function Login(){


    return (
    <div className="flex items-center py-[40px] gap-[20rem]  px-[20px] ">
     <img src={Hiking}  className="w-[500px] h-[543px] object-contain"/>

    <div className="flex flex-col">
        <div className="flex gap-[0.1rem] flex-col">
        <h1 className="font-bold">Log in</h1>
          <div className="w-[60px] h-[7px]  bg-[#FFC107] rounded-full"></div>
        </div>
    <form className="flex flex-col gap-[20px] mt-[40px]" >
       
                  <div className="flex flex-col gap-[14px]">
                   <label htmlFor="Course" className="font-semibold text-[15px]">Email</label>
                   <input type="text" typeof="text" placeholder="Text here..."  className="px-4 py-2 w-full rounded-full shadow-lg self-end focus:outline-none placeholder:text-[12px]"/>
                  </div>
          
        
                  <div className="flex flex-col gap-[14px]">
                   <label htmlFor="Course" className="font-semibold text-[15px]"> Password</label>
                   <input type="text" typeof="text" placeholder="Text here..."  className="px-4 py-2 w-full rounded-full shadow-lg self-end focus:outline-none placeholder:text-[12px]"/>
                  </div>
             
          
               <button className=" px-6 py-3  bg-[#2C7BE5] text-white flex min-w-[140px] w-auto  gap-[5px] shadow-md  items-center font-bold    text-[15px]  justify-center rounded-full   hover:bg-[#2365d2]">  
                       Sign in
                       </button> 
             

             </form>
    </div>

    </div>
        
    )
}