import img from '../assets/item.png'
function BestDeals() {
  return (
    <div className="flex flex-col w-full h-screen overflow-y-scroll lg:flex-row">
        <div className="flex flex-col lg:items-end items-center justify-center lg:w-[50vw]  w-full h-full left mt-10 lg:mt-0  ">

                <h3 className="text-[#31546D] lg:text-4xl text-3xl mb-2">BEST PRICE</h3>
                <h1 className="text-[#31546D] lg:text-6xl text-4xl font-semibold text-center">Agate Phone Grip</h1>
                <div className="flex flex-col items-center gap-4 my-5 discount md:flex-row">
                    <p className="text-2xl line-through text-[#41A0B3]">44.50$</p>
                    <h2 className="text-6xl font-bold text-[#E35B3E]">19.50$</h2>
                </div>
                <p className="lg:w-[430px] text-[16px] lg:text-right text-center px-3 lg:px-0 text-[#31546D]" >These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
                </p>
                <button className="my-7  w-[180px] h-[56px] active:scale-95 rounded-2xl text-white font-semibold bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF]">BUY NOW</button>
            
        </div>
        <div className="flex items-center justify-center lg:w-[50vw] w-full h-full right ">
           <div className="bg-white/20 rounded-full circle1 lg:h-[744px] lg:w-[744px] h-[300px] w-[300px] flex justify-center items-center">
            <div className="bg-white shadow-2xl rounded-full cirle2 lg:h-[570px] lg:w-[570px] h-[250px] w-[250px] flex justify-center items-center">
                <div className="bg-white shadow-2xl rounded-full circle3 lg:h-[364px] h-[200px] w-[200px] lg:w-[364px] flex justify-center items-center">
                    <img src={img   } alt="" />
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default BestDeals