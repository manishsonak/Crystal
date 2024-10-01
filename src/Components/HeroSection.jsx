import mainpic from '../assets/home_main_icon.png'
import mouse from '../assets/mouse.png'
import right from '../assets/right.png'
import left from '../assets/left.png'
import { useState } from 'react'
function HeroSection() {


  const image=[
    mainpic,mainpic,mainpic,mainpic,mainpic,mainpic,mainpic
  ]

    const [currentstate, setcurrentstate] = useState(0)

    const leftclick=()=>{
      if (currentstate>0) {
        setcurrentstate(currentstate-1)
        
      }
    }
    const rightclick=()=>{

      if (currentstate<image.length-1) {
        setcurrentstate(currentstate+1)
      }
    }

  return (
    <>
    <div className="w-full  h-[90vh] flex z-50 flex-col lg:flex-row  ">
        <div className="left lg:w-[55vw] w-full  flex justify-center lg:items-start  items-center flex-col text-white lg:pl-12">
         
          <h3 className="text-4xl">Welcome to</h3>
          <h1 className="mt-3 text-3xl font-semibold lg:mt-0 lg:text-6xl">Pop Rock Crystal Shop!</h1>

          <p className="lg:w-[440px] text-center lg:text-start my-10 text-gray-600 text-md">Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
          </p>

          <div className="flex flex-col gap-2 button lg:flex-row">
            <button className="bg-white hover:bg-[#317189] hover:text-white text-[#317189]  py-4 font-semibold   px-10 rounded-2xl">SHOP NOW</button>
            <button className=" hover:bg-[#317189] hover:text-white text-[#317189]  py-4  font-normal  px-10 rounded-2xl">about us</button>
          </div>
    
        </div>
        <div className="right lg:w-[45vw] w-full flex-col  flex justify-center  items-center ">
            <div className="bg-white lg:w-[569px] lg:h-[554px] mt-12 flex justify-center rounded-[50px] lg:shadow-lg shadow-2xl items-center relative">
            <p className="absolute top-16 px-5 text-white  py-2 bg-[#8A93E5] rounded-r-lg left-0">New lot</p>
                <img src={image[currentstate] && mainpic} alt="" />
            </div>

            <div className='flex items-center justify-center gap-3 mt-10'>
            <button className='mx-2' onClick={leftclick}><img src={left} alt="" /></button>
    {
      image.map((item, index) => (
        <h1 key={index} className={`w-[14px] h-[14px] rounded-full ${currentstate===index?"bg-[#8A93E5]":"bg-[#D7DBFF]"}`}></h1>
      ))
    }
            <button className='mx-2' onClick={rightclick}><img src={right} alt="" /></button>
            </div>

        </div>

        
    </div>
    <div className='items-center justify-center hidden gap-2 lg:flex '>
    <img src={mouse} alt="scrole" />
    <p className='text-[#317189] font-semibold'>sroll down</p>
  </div>
  </>
  )
}

export default HeroSection