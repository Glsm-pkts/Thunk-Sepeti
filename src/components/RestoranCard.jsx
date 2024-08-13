import React from 'react';
import { FaClock, FaStar } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';
import { Link } from 'react-router-dom';

const RestoranCard = ({data}) => {
  
  return (
    <Link to={`/restaurant/${data.id}`} className='shadow rounded-lg overflow-hidden hover:bg-gray-200 hover:shadow-lg cursor-pointer transition-all'>
     <img className='w-full object-contain' src={data.photo} alt="" /> 
     <div className='p-3'>
        <div className='flex justify-between'>
            <h3 className='text-xl font-semibold'>{data.name}</h3>
            <p> <FaStar className='text-red-500'/> 
            {data.rating}
            </p>
        </div>
        <p className='flex gap-4 text-sm my-2 text-gray-500 '>
            <span>{data.minPrice}</span>
            <span>kategori</span>
        </p>

        <div className=''>
          <p className='flex items-center gap-2 text-sm font-semibold'>  
          <FaClock/>
          <span>{data.estimatedDelivery}</span>
          </p>
{data.isDeliveryFree && (
  <p className='flex gap-2 items-center text-red-500 font-bold text-sm'> 
  <MdDeliveryDining/>
  Ücretsiz
  </p>
)}
      
        </div>
     </div>
    </Link>
  );
}

export default RestoranCard;
