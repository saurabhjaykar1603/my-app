import {Link }from  "react-router-dom"
export default function Navbar() {
  return (
    <>
      <nav class="bg-gray-800 p-4 px-5">
        <div class="container mx-auto flex justify-between items-center">
          <Link to="/" class="text-white text-2xl font-semibold ">
            PortFolio
          </Link>
          <div class="space-x-10 text-2xl">
            <Link to="/" class="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/project" class="text-gray-300 hover:text-white">
              Project
            </Link>
            <Link to="/about" class="text-gray-300 hover:text-white">
              About
            </Link>
            <Link to="/skills" class="text-gray-300 hover:text-white">
              Skills
            </Link>
            <Link to="/contact" class="text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
