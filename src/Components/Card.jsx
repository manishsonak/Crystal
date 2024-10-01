/* eslint-disable react/prop-types */
import defaultImage from '../assets/item.png'
function Card({image,price,name}) {
  return (
    <div className="w-[322px] h-[412px] bg-white shadow-lg border border-gray-100 rounded-[30px] flex justify-center flex-col items-center ">
     <img src={image && defaultImage}  alt="" />
     <h2 className='text-xl text-center text-gray-700 uppercase'>{name}</h2>
     <h3 className='text-xl font-semibold text-[#317189]'>{price}</h3>
     <button className="my-4  w-[180px] h-[56px] rounded-2xl  font-semibold hover:shadow-xl  hover:text-white   border-2 border-[#75CCEB] text-[#75CCEB] hover:bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] py-2 px-4 transition duration-300">BUY NOW</button>
    </div>
  )
}

export default Card