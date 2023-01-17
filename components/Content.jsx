import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <div className=" flex flex-grow bg-darkblue-900">
      <div className="mt-60 ml-40 flex flex-col items-center md:space-y-4">
        <h2 className="text-base font-medium tracking-widest uppercase text-gray-400 leading-normal">
          Frontend Developer
        </h2>
        <h1 className="text-4xl md:text-6xl font-black text-center text-gray-50 leading-normal">
          Özgenur Özkara
        </h1>
      </div>
      <div className="w-96 h-96 ml-72 mt-36 rounded-full border-8 border-gray-500 border-opacity-10 absolute" />
      <figure className="max-w-sm ml-80 mt-36">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQFCbGuqUohg5w/profile-displayphoto-shrink_800_800/0/1671976917166?e=2147483647&v=beta&t=jqC4evYtmj4UJRpJosBclfifHwWjCLWKzyyDoiWFkuE"
          alt="Özgenur Özkara"
          className="object-cover rounded-[25%]"
        ></img>
      </figure>
    </div>
  );
};

export default Content;
