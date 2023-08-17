"use client";
import React, { useState } from "react";

const ProfileDropDown: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative z-50">
      <button onClick={toggleDropdown}>
        <img src="pp.jpg" alt="Icon" className="w-10 h-10 rounded-full" />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-1 mt-2 w-40">
          <ul className="border-violet-400 border-2 bg-gray-900 shadow-md py-2 rounded-lg">
            <li className="flex items-center px-4 py-2">
              <img src="/user.svg" className="w-8 h-8" />
              <a href="#" className="block px-4 py-2 text-white">
                Account
              </a>
            </li>

            <li className="flex items-center px-4 py-2">
              <img src="/rent.svg" className="w-8 h-8" />
              <a href="#" className="block px-4 py-2 text-white">
                Rentals
              </a>
            </li>

            <li className="flex items-center px-4 py-2">
              <img src="/settings.svg" className="w-8 h-8" />
              <a href="#" className="block px-4 py-2 text-white">
                Settings
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
