import React from 'react';
import { MdEmail, MdOutlineLocalPhone, MdOutlineSocialDistance } from "react-icons/md";
import { CardProps } from '../types/types';


const Card:(obj:CardProps)=> React.ReactNode = ({
  
   name,
   phones,
   emails,
   address,
   distance="1.8 Killometers Away",
   imgUrl,
   availability
}) => {
  return (
    <div className="flex flex-row gap-10 w-[900px] rounded-3xl bg-gray-100">
      <div className=''>
         <img src={imgUrl} className='object-fill h-[150px] rounded-3xl' alt=''/>
      </div>
      <div className=" w-full px-4 py-2">
         <div className='flex  justify-between items-center w-full mb-10'>
            <div className=''>

            <h4 className='text-[#7879F1] text-[12px] font-light'>{address}</h4>
            <h1 className='font-bold text-xl'>{name}</h1>
            <div className='flex'>
            <MdOutlineSocialDistance /> <span className='ml-2 mt-[-5px]'>1.8 Killometers Away</span>
            </div>
            </div>
            <button className='bg-[#B8FFB7] rounded-2xl text-gray-500 px-2 py-1
'>{availability}</button>
         </div>
         <div className='flex gap-3'>
            <div className='flex mr-4'>
            <MdOutlineLocalPhone />

               <div className='ml-1 mt-[-5px]'>
                  <ul>
                     {
                        phones.map(phone => <li key={phone}>
                           {phone}
                        </li>)
                     }
                  </ul>
               </div>
            </div>
            <div className='flex'>
            <MdEmail />

               <div className='ml-2 mt-[-5px]'>
                  <ul>
                     {
                        emails.map(email => <li key={email}>{email}</li>)
                     }
                  </ul>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Card