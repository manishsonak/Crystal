import logo from '../assets/logo.png';
import no from '../assets/no.png';
import basket from '../assets/basket.png';

function Navbar() {
  return (
    <div className="z-50 flex items-center justify-between h-20 min-w-full px-4 text-white lg:px-10">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img className="w-8" src={logo} alt="logo" />
        <h2 className="text-xl">Pop Rock Crystal</h2>
      </div>

      {/* Menu Section */}
      <div className="hidden lg:block">
        <ul className="flex items-center gap-8 text-md">
          <li className="hover:text-[#75CCEB] cursor-pointer">Home</li>
          <li className="hover:text-[#75CCEB] cursor-pointer">Shop</li>
          <li className="hover:text-[#75CCEB] cursor-pointer">About Us</li>
          <li className="hover:text-[#75CCEB] cursor-pointer">Help</li>
        </ul>
      </div>

      {/* Cart Section */}
      <div className="flex items-center gap-3">
        <img className="w-4" src={no} alt="notification icon" />
        <img className="w-8" src={basket} alt="basket icon" />
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center lg:hidden">
        <button className="focus:outline-none">
          {/* Mobile Menu Icon (Add an icon here) */}
          <span className="text-xl">☰</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
