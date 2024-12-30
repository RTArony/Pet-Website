import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 bg-pink-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
      >
        Menu
      </button>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white shadow-lg z-50">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              X
            </button>
          </div>
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/" className="hover:text-pink-400">
              Home
            </Link>
            <Link to="/donation" className="hover:text-pink-400">
              Donation
            </Link>
            <Link to="/userprofile" className="hover:text-pink-400">
              User Profile
            </Link>
            <Link to="/petlisting" className="hover:text-pink-400">
              Pet Family
            </Link>
            <Link to="/writeblog" className="hover:text-pink-400">
              Blog Writing
            </Link>
            <Link to="/readblog" className="hover:text-pink-400">
              Read Blog
            </Link>
            <Link to="/adoption" className="hover:text-pink-400">
              Adopt A Pet
            </Link>
            <Link to="/searchingpet" className="hover:text-pink-400">
              Posts For Pets
            </Link>
            <Link to="/seeadoption" className="hover:text-pink-400">
              Adoption Post
            </Link>
            <Link to="/giveadoption" className="hover:text-pink-400">
              Give Adoption Form
            </Link>
            <Link to="/lostandfound" className="hover:text-pink-400">
              Lost & Found
            </Link>
            <Link to="/rescueanimal" className="hover:text-pink-400">
              Pet Rescue
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;
