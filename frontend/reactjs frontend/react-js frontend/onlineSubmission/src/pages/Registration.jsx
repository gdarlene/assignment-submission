import Hiking from "../../public/undraw_hiking_9zta 1.png"

export default function Registration(){


    return (
    <div className="flex py-[40px] gap-[20rem]  px-[20px] ">
     <img src={Hiking}  className="w-[500px] h-[543px] object-contain"/>

    <div className="flex flex-col">
        <div className="flex gap-[0.1rem] flex-col">
        <h1 className="font-bold">Registration</h1>
          <div className="w-[60px] h-[7px]  bg-[#FFC107] rounded-full"></div>
        </div>
    <form className="flex flex-col gap-[20px] mt-[40px]" >
               <div className="flex gap-[2rem]">
                  <div className="flex flex-col gap-[14px]">
                   <label htmlFor="assignmentname" className="font-semibold text-[15px]">Username</label>
                   <input id="assignmentname" type="text" name="assignment" placeholder="Text here..."  className="  px-4 py-2 w-full rounded-full shadow-lg self-end  focus:outline-none placeholder:text-[12px]"  />
                  </div>
        
                  <div className="flex flex-col gap-[14px]">
                   <label htmlFor="Course" className="font-semibold text-[15px]">Email</label>
                   <input type="text" typeof="text" placeholder="Text here..."  className="px-4 py-2 w-full rounded-full shadow-lg self-end focus:outline-none placeholder:text-[12px]"/>
                  </div>
               </div>
     
               <div className="flex gap-[2rem]">
                  <div className="flex flex-col gap-[14px]">
                   <label htmlFor="assignmentname" className="font-semibold text-[15px]">Course</label>
                   <input id="assignmentname" type="text" name="assignment" placeholder="Text here..."  className="  px-4 py-2 w-full rounded-full shadow-lg self-end  focus:outline-none placeholder:text-[12px]"  />
                  </div>
        
                  <div className="flex flex-col gap-[14px]">
                   <label htmlFor="Course" className="font-semibold text-[15px]">Phone Number</label>
                   <input type="text" typeof="text" placeholder="Text here..."  className="px-4 py-2 w-full rounded-full shadow-lg self-end focus:outline-none placeholder:text-[12px]"/>
                  </div>
               </div>
     
               <div className="flex gap-[2rem]">
                  <div className="flex flex-col gap-[14px]">
                   <label htmlFor="assignmentname" className="font-semibold text-[15px]">Set Password</label>
                   <input id="assignmentname" type="text" name="assignment" placeholder="Text here..."  className="  px-4 py-2 w-full rounded-full shadow-lg self-end  focus:outline-none placeholder:text-[12px]"  />
                  </div>
        
                  <div className="flex flex-col gap-[14px]">
                   <label htmlFor="Course" className="font-semibold text-[15px]">Confirm Password</label>
                   <input type="text" typeof="text" placeholder="Text here..."  className="px-4 py-2 w-full rounded-full shadow-lg self-end focus:outline-none placeholder:text-[12px]"/>
                  </div>
               </div>
              <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <div className="mt-2 space-x-4 flex items-center">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                 
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  
                  className="form-radio h-4 w-4 text-yellow-400"
                />
                <span className="ml-2">Female</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="rather not say"
                  
                  className="form-radio h-4 w-4 text-gray-600"
                />
                <span className="ml-2">Rather not say</span>
              </label>
            </div>
          </div>
               <button className=" px-6 py-3  bg-[#2C7BE5] text-white flex min-w-[140px] w-auto  gap-[5px] shadow-md  items-center font-bold    text-[15px]  justify-center rounded-full   hover:bg-[#2365d2]">  
                       Sign up 
                       </button> 
             

             </form>
    </div>

    </div>
        
    )
}