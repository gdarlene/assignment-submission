import {useState} from 'react'; 

export default function  Test() {
   

    const [isOpen ,setIsOpened] = useState(false); 
    const [selected, setSelected] = useState("Select an option"); 
    const [bgColor,setBgColor] = useState("white"); 

    const options = [
        {label:"Red", color:"red"},
        {label:"Green", color:"green"}, 
        {label:"Blue" ,color: "blue"}
    ]


    return (
    <div className='h-screen flex items-center justify-center'>

<div className={` w-[200px] h-[200px]`} style={{color:bgColor}}>
<p>kaldkjfaosdjfa;ldj</p>
</div>
          
        <div className='relative'>
              <button onClick={()=>setIsOpened(!isOpen)}  className='border px-4 py-2 bg-gray-200'>
                  {selected}
              </button>
      
              {isOpen && (
                 <ul className='absolute border bg-white'>
                    {options.map((options)=>(
                   <li 
                   key={options.label}
                   onClick={()=>(
                    setSelected(options.label),
                    setBgColor(options.color),
                    setIsOpened(false)
                   )}
                   className='cursor-pointer p-2 hover:bg-gray-300'>
                 {options.label}
                   </li>

                    ))}


                 </ul> 
              )}
        </div>



    </div>
    )
}