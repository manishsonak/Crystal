import BestDeals from "../Components/BestDeals"

import wave2 from '../assets/wave2.png'
function DealPage() {
  return (
    <div className=" background relative lg:min-h-[100vh] min-h-[100vh]  overflow-hidden">
    <div className="absolute z-10">
      <BestDeals/>
    </div>
  
    <img 
      className="absolute top-0 left-0 right-0 z-0 w-full h-[80vh] lg:h-[100vh]" 
      src={wave2} 
      alt="wave background"
    />
  </div>
  )
}

export default DealPage