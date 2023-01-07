import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="shadow border-b sticky top-0 bg-violet-200 z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* Left */}
        <div className=" h-24 w-24 space-x-28 relative">
          <Image
            src="https://media.licdn.com/dms/image/D4D03AQFCbGuqUohg5w/profile-displayphoto-shrink_800_800/0/1671976917166?e=2147483647&v=beta&t=jqC4evYtmj4UJRpJosBclfifHwWjCLWKzyyDoiWFkuE"
            alt="Özgenur Özkara"
            fill
            className="max-w-24 max-h-24 rounded-3xl object-cover cursor-pointer"
          />
          <div className="w-20 flex justify-center mt-8">
            <span className="font-bold text-white">Özgenur</span>
          </div>
        </div>
        {/* Right */}
        <nav className="flex-1 flex items-center justify-end space-x-8">
          <a
            className="inline-flex items-center space-x-2 transition text-white"
            href="#"
          >
            <span className="whitespace-nowrap">Home</span>
          </a>
          <a
            className="inline-flex items-center space-x-2 transition text-white"
            href="#"
          >
            <span className="whitespace-nowrap">About Me</span>
          </a>
          <a
            className="inline-flex items-center space-x-2 transition text-white"
            href="#"
          >
            <span className="whitespace-nowrap">Blog</span>
          </a>
          <a
            className="inline-flex items-center space-x-2 transition text-white"
            href="#"
          >
            <span className="whitespace-nowrap">Experience</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
