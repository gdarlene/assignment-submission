import Popup from "reactjs-popup"
import { FaPlusCircle } from "react-icons/fa"
import {FiX} from "react-icons/fi"
import {useRef,useState} from "react"
import Upload from "../../public/undraw_uploading_nu4x 2.png"

const PopupContent=({close})=>{
    const fileInputRef=useRef(null);
    const [fileName,setFileName]= useState(""); 
 
    const handleClick=()=>{
    fileInputRef.current.click();//used to trigger the file input programmatically when the user clicks on  a custom Browse file option 
    };

    const  handleFileChange= (event) => {
    const file= event.target.files[0]; 
    if(file){
        setFileName(file.name)
    }
    }
    return(
     <div className="flex justify-between w-[1100px] h-[600px]  bg-[#fff] py-3">
        <div className="flex flex-col  py-[25px] px-[40px] ">
             <h1 className="font-semibold text-[21px] ">Create an assignment</h1>
     
             <form className="flex flex-col gap-[20px] mt-[40px]" >
               <div className="flex flex-col gap-[14px]">
                <label htmlFor="assignmentname" className="font-semibold text-[15px]">Assignment name</label>
                <input id="assignmentname" type="text" name="assignment" placeholder="Text here..."  className="  px-4 py-2 w-full rounded-full shadow-lg self-end  focus:outline-none placeholder:text-[12px]"  />
               </div>
     
               <div className="flex flex-col gap-[14px]">
                <label htmlFor="Course" className="font-semibold text-[15px]">Course</label>
                <input type="text" typeof="text" placeholder="Text here..."  className="px-4 py-2 w-full rounded-full shadow-lg self-end focus:outline-none placeholder:text-[12px]"/>
               </div>
     
               <div className="flex flex-col gap-[14px]">
                <label htmlFor="deadline" className="font-semibold text-[15px]">Deadline</label>
                <input type="date"   className="px-4 py-2 w-full rounded-full shadow-lg self-end focus:outline-none  text-[12px]"/>
               </div>
                
               <div className="flex flex-col gap-[14px]">
                <label htmlFor="deadline" className="font-semibold text-[15px]">Assignment Description</label>
                <input type="file"  className="hidden" ref={fileInputRef} onChange={handleFileChange}/>
                <div className="px-10 py-10 w-full flex flex-col gap-[1rem]  items-center rounded-2xl shadow-lg self-end focus:outline-none">
                    <h1 className="text-[#636363] font-medium ">Drag your file here</h1>
                     <button onClick={handleClick}  className="px-4 py-2 w-full rounded-full bg-[#FFC107] text-white font-semibold shadow-lg self-end focus:outline-none">
                      Browse
                     </button>
                     {fileName && <div className="mt-2 text-sm text-[#63636337] bg-[#636363]">Selected File: {fileName} </div>}
                </div>
               </div>

             </form>
             
        </div>
       
       <div className="flex flex-col relative items-center justify-center">
       <button className="w-[20px] font-semibold py-[25px] absolute top-[2px] right-[20px]" onClick={close}> <FiX /></button>
       <img className="mx-auto w-[500px] h-[250px] object-contain self-center" src={Upload} />
       </div>

     </div>
    )

}

export default function CreateAssignment(){


    return (
    <Popup
    trigger={
                <button className="bg-[#ECE5E5] flex gap-[0.5rem] items-center py-[15px] px-[12px] rounded-2xl w-[250px] h-[69px]">
                <p className="font-bold text-[#626262]">Create New Assignment  </p>
                <FaPlusCircle color="#FFC107" className="text-[25px]"/>
                </button>}
                
    modal overlayStyle={{background:`#0a0a0a80`}}            
                >
    {(close)=> <PopupContent close={close}/>}

    </Popup>

    )

}