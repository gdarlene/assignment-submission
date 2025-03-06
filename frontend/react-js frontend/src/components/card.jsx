
import Bar from '../../public/bars-progress-solid 1.png'; 
import Book from '../../public/book-open-solid (1) 1.png'; 
import Pen from '../../public/marker-solid 2.png'


export default  function Card(){

  const data = [
  {
    icon:'Bar',
    color:'bg-[#FFC107A6]',
    Description:'Completed assignments'
  },
  {
    icon:'Book',
    color:'bg-[#6B397DA6]',
    Description:'Given  Assignments'

  },
  {
    icon:'Pen',
    color:'bg-[#121212A6]',
    Description:'Marked  Assignments'
  }
  ]

  const icon ={
     Bar: <img src={Bar} className='w-[50px]'   />,
     Book:<img src={Book} className='w-[50px]'  />,
     Pen:<img src={Pen} className='w-[50px]' />
  }


    return (
       
        <div className='flex gap-[30px] '>
 {data.map((item)=>(
        <div className={`${item.color} w-[295px] h-[137px]  flex  justify-center gap-[30px] items-center py-[26px] rounded-xl `}>
        <div className='bg-[#FFFFFF4C]  w-[70px] h-[70px] flex items-center justify-center  rounded-xl'>
        {icon[item.icon]}
        </div>
      
        <div className='flex flex-col'>
            <h1 className='font-bold  text-[30px] text-white'>80%</h1>
            <p className=' text-[15px] text-[#fff] '>{item.Description}</p>
        </div>

        </div>

        )
       )}

        </div>
      

    )

}