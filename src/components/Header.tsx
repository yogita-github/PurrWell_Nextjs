const Header = () => (
  <header className="bg-pink-50 py-2">
    <nav className="container mx-auto flex justify-between items-center">
      <img src="/logo.png" className="w-52 h-16" alt="Logo" />
      <ul className="flex space-x-5">
        <li className="relative group">
          <a href="#" className="text-black font-semibold hover:text-orange-600">
            Home<span className="ml-1">&#x25BC;</span>
          </a>
          <ul className="hidden absolute bg-gray-50 mt-1 rounded shadow-lg group-hover:block">
            <li><a href="#" className="block px-4 py-2 hover:bg-orange-500">Home 1</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-orange-500">Home 2</a></li>
          </ul>
        </li>
        <li><a href="#" className="text-black hover:text-orange-600">About</a></li>
        <li><a href="/service.html" className="text-black hover:text-orange-600">Services</a></li>
        <li><a href="#" className="text-black hover:text-orange-600">Blog</a></li>
        <li><a href="#" className="text-black hover:text-orange-600">Contact</a></li>
        <li className="relative group">
          <a href="#" className="text-black hover:text-orange-600">Pages<span className="ml-1">&#x25BC;</span></a>
          <ul className="hidden absolute bg-gray-50 mt-1 rounded shadow-lg group-hover:block">
            <li><a href="#" className="block px-4 py-2 hover:bg-orange-500">Pricing</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-orange-500">Blog Details</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-orange-500">Services</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-orange-500">Team</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-orange-500">Sign Up</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-orange-500">Sign In</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-orange-500">FAQ</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-orange-500">Error Page</a></li>
          </ul>
        </li>
      </ul>
      <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-pink-500">Contact</a>
    </nav>
  </header>
);

export default Header;
