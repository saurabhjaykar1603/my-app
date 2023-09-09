import "./Navbar.css"
import {Link }from  "react-router-dom"


export default function Navbar() {
const path  = window.location.pathname;
  return (
    <>
      <nav className="bg-gray-800 p-4 px-5">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className={path === "" ? "active" : "text-gray-300 text-2xl font-semibold  "}>
            PortFolio
          </Link>
          <div class="space-x-10 text-2xl">
            <Link to="/" className={path === "/" ? "active" : "text-gray-300 text-2xl font-semibold  "}>
              Home
            </Link>
            <Link to="/project" className={path === "/project" ? "active" : "text-gray-300 text-2xl font-semibold  "}>
              Project
            </Link>
            <Link to="/about" className={path === "/about" ? "active" : "text-gray-300 text-2xl font-semibold  "}>
              About
            </Link>
            <Link to="/skills" className={path === "/skills" ? "active" : "text-gray-300 text-2xl font-semibold  "}>
              Skills
            </Link>
            <Link to="/contact" className={path === "/contact" ? "active" : "text-gray-300 text-2xl font-semibold "}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
