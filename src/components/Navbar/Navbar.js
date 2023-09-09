export default function Navbar() {
  return (
    <>
      <nav class="bg-gray-800 p-4 px-5">
        <div class="container mx-auto flex justify-between items-center">
          <a href="/" class="text-white text-2xl font-semibold ">
            PortFolio
          </a>
          <div class="space-x-10 text-2xl">
            <a href="/" class="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="/project" class="text-gray-300 hover:text-white">
              Project
            </a>
            <a href="/about" class="text-gray-300 hover:text-white">
              About
            </a>
            <a href="/skills" class="text-gray-300 hover:text-white">
              Skills
            </a>
            <a href="/contact" class="text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
