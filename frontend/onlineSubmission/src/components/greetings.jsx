
import HomeAvatar from '../../public/undraw_dev-productivity_5wps 1.png'

export default  function Greetings(){

    return (
 
        <div className="bg-[#2C7BE570] flex  gap-[5rem] w-[950px] h-[239px] justify-between items-center pl-[30px] p-[10px]  rounded-xl ">
            <div className="flex flex-col ">
            <h1 className="text-[50px] font-bold ">Hi, Louis</h1>
            <p className='text-[15px]'>ready to catch up with your work  or submit any due assignment?</p>
            </div>
            <img className='w-[280px] h-[220px] object-fill mr-[50px]' src={HomeAvatar} />
        </div>


    )

}