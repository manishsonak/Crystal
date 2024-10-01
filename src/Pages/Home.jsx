import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import wave from '../assets/wave.png'

function Home() {
  return (
    <div className=" background relative lg:min-h-[115vh] min-h-[140vh] w-full overflow-hidden">
    <div className="absolute z-10">
      <Navbar />
      <HeroSection />
    </div>
  
    <img 
      className="absolute bottom-0 left-0 right-0 z-0 w-full h-auto" 
      src={wave} 
      alt="wave background"
    />
  </div>
  
  )
}

export default Home