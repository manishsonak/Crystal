
function Footer() {
  return (
    <footer className="py-10 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-between md:flex-row">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold">Pop Rock Crystal</h2>
            <p className="mt-2 text-gray-400">
              Unique phone accessories, crystals, jewelry, and more.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-[#75CCEB]">Home</a></li>
              <li><a href="/" className="hover:text-[#75CCEB]">Shop</a></li>
              <li><a href="/" className="hover:text-[#75CCEB]">About Us</a></li>
              <li><a href="/" className="hover:text-[#75CCEB]">Help</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="mt-2 text-gray-400">Email: manishsonak9@gmail.com</p>
            <p className="text-gray-400">Phone: +917015286537</p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex mt-2 space-x-4">
              <a href="" className="hover:text-[#75CCEB]">Facebook</a>
              <a href="" className="hover:text-[#75CCEB]">Instagram</a>
              <a href="" className="hover:text-[#75CCEB]">Twitter</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 mt-6 text-center text-gray-400 border-t border-gray-700">
        © {new Date().getFullYear()} Pop Rock Crystal. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer