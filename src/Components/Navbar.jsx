import logo from '../assets/logo.png';
import no from '../assets/no.png';
import basket from '../assets/basket.png';

function Navbar() {
  return (
    <div className="z-50 flex items-center justify-between h-20 min-w-full px-4 mb-8 text-white lg:mb-0 lg:px-10">
      
      <div className="flex items-center w-[40vw] gap-2">
        <img className="w-8" src={logo} alt="logo" />
        <h2 className="text-xl">Pop Rock Crystal</h2>
      </div>

      
      <div className="hidden lg:block">
        <ul className="flex items-center gap-10 text-md">
          <li className="hover:text-[#317189] cursor-pointer">Home</li>
          <li className="hover:text-[#317189] cursor-pointer">Shop</li>
          <li className="hover:text-[#317189] cursor-pointer">About Us</li>
          <li className="hover:text-[#317189] cursor-pointer">Help</li>
        </ul>
      </div>

      
      <div className="flex items-center gap-3">
        <img className="w-4" src={no} alt="notification icon" />
        <img className="w-8" src={basket} alt="basket icon" />
      </div>

      
      <div className="flex items-center lg:hidden">
        <button className="focus:outline-none">
          
          <span className="text-xl">☰</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
