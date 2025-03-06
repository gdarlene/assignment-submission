import {useState} from 'react'; 
import HomeIcon from '../../public/Vector.png';
import AssignmentIcon from "../../public/rectangle-list-solid 1.png";
import SettingsIcon from "../../public/gear-solid (2) 1.png";
import ManagementIcon from "../../public/boxes-packing-solid 1.png"
import Logo from "../../public/logo.png"
import {Link,useLocation} from "react-router-dom"
import {FaPlusCircle} from 'react-icons/fa'
import Premium from '../../public/undraw_online-collaboration_xon8 (1) 1.png'


const data= [
   {
        path:"/dashboard",
        icon:"HomeIcon", 
        label:"Dashboard",
    },
   {
    path:"/assignments",
    icon:"AssignmentIcon",
    label:"Assigment"
    },
    {
    path:"/management", 
    icon:"ManagementIcon",
    label:"Class Management"
    },
    {
        path:"/settings",
        icon:"SettingsIcon",
        label:"Settings"
    }

]

const icons=  {
  HomeIcon : <img src={HomeIcon} />,
  AssignmentIcon: <img src={AssignmentIcon}/>,
  ManagementIcon: <img src={ManagementIcon}/>,
  SettingsIcon:<img src={SettingsIcon}/>
}

 export default function Sidenav(){
   const location =  useLocation();// get current location from router  
   const{activeLink , setActiveLink} = useState(location.pathname); // set initial current link based on path 

   const handleLinkClick = (path) =>{
      setActiveLink(path);
   }

   return (
    <div className="bg-[#fff] w-[304px] h-screen pl-[30px] pt-[15px]">
      <img src={Logo}  />
      
      <div className='bg-[#d9d9d93b] flex gap-[1rem] items-center justify-center mt-[49px] p-[10px] rounded-xl w-[195px] h-[83px]'>
        <div className='flex flex-col'>
        <p className='font-bold'>Create</p>
        <p className='font-bold'>New Category</p>
        </div>
        <FaPlusCircle className='w-[33px] h-[33px]' color='#FFC107'/>
      </div>

     <div className='flex flex-col mt-[50px] gap-[24px] '>
      {data.map((item,index)=> (
      <Link 
      to={item.path}
      key={index}
      onClick={()=> handleLinkClick(item.path)}
      className={` h-[2.65rem] flex  items-center gap-[16px]  text-[13px] text-[#636363] font-bold
            ${
              activeLink===item.path
              ?'bg-[#2C7BE5] text-white '
              :'text-[#636363]'
            }
        `}
      > 
      {icons[item.icon]}
      <span className='hidden md:block'>{item.label}</span>
      
      </Link>

      ))}

      <div className='bg-[#F6F6F6] flex flex-col items-center justify-center gap-[1rem] w-[224px] h-[182px] relative mt-[100px] rounded-xl absolute mb-[0]'>
        <img src={Premium} className='absolute top-[-50px]' />
        <div className='flex flex-col'>
        <p className='text-[12px] text-[#12121263] '>Upgrade to our new </p>
        <p className='text-[12px] text-[#12121263] '>version Scholarity G-plus</p>
        </div>
        <button className='bg-[#2C7BE5] text-white w-[133px] h-[36px] rounded-xl items-center font-semibold flex items-center justify-center'>Upgrade</button>
      </div>
      
      
      </div>   
    </div>
   );
 }