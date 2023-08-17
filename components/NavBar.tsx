import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfileDropDown from "./ProfileDropDown";

function NavBar() {
  return (
    <div className="bg-opacity-70 bg-magenta-500 py-2 px-4 flex items-center justify-between relative">
      <div className="flex items-center pl-4 pt-2">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="w-10 h-10 rounded-half"
          />
        </Link>
      </div>
      <div className="absolute inset-x-40 flex justify-center pt-2">
        <div className="bg-violet-800 text-white rounded-lg py-2 px-4 w-full flex space-x-4 justify-center">
          <Link href="/" className="flex items-center hover:underline">
            <div className="px-2">
              <Image src="/home.svg" alt="Rent" width={20} height={20} />
            </div>
            <span className="text-center">Home</span>
          </Link>
          <a href="/#top" className="flex items-center hover:underline">
            <div className="px-2">
              <Image src="/top.svg" alt="Top" width={20} height={20} />
            </div>
            <span className="text-center">Top</span>
          </a>
          <a href="/#price" className="flex items-center hover:underline">
            <div className="px-2">
              <Image src="/price.svg" alt="Top" width={20} height={20} />
            </div>
            <span className="text-center">Price Calculator</span>
          </a>
          <a href="#" className="flex items-center hover:underline">
            <div className="px-2">
              <Image src="/rent.svg" alt="Rent" width={20} height={20} />
            </div>
            <span className="text-center">Rent</span>
          </a>

          <Link href="/cars" className="flex items-center hover:underline">
            <div className="px-2">
              <Image src="/car.svg" alt="Cars" width={20} height={20} />
            </div>
            <span className="text-center">Cars</span>
          </Link>

          <a href="/locations" className="flex items-center hover:underline">
            <div className="px-2">
              <Image
                src="/location.svg"
                alt="Locations"
                width={20}
                height={20}
              />
            </div>
            <span className="text-center">Locations</span>
          </a>
        </div>
      </div>
      <div className="flex items-center pr-4 pt-4">
        <ProfileDropDown />
      </div>
    </div>
  );
}

export default NavBar;
