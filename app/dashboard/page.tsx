import React from "react";
import { item } from "./SideBarItems";
import { BsTwitter } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
const TwitterPage = () => {
  return (
    <div className="grid grid-cols-12 text-white h-[1000px] bg-[#000000]">
      <div className="col-span-3 flex justify-self-end pr-14  sm:pr-16 m-1  border-r-[1px] border-neutral-700 flex-shrink-0 sm:block  hidden ">
        <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-3 cursor-pointer transition-all mt-11">
          <BsTwitter />
        </div>

        {item.map((item) => (
          <>
            <div className="flex justify-start mt-6 font-thin ">
              <div className="flex justify-start gap-4 px-3 py-2 hover:bg-[#181818] transition rounded-full hover:cursor-pointer">
                <p className="text-[28px] ">{item.icon}</p>
                <p className="text-xl hidden lg:block ">{item.title}</p>
              </div>
            </div>
          </>
        ))}
        <button className="bg-[#1A8CD8] w-full rounded-full h-14 text-2xl mt-7 hidden lg:block ">
          Post
        </button>
      </div>
      <div className="md:col-span-4 ls:col-span-5 flex justify-center  border-r-[1px] border-neutral-700 col-span-7">
        <h1>Feed Card</h1>
      </div>
      <div className="col-span-3 flex justify-end flex-shrink-0 lg:block  hidden p-7">
        <div>
          {/* search section  */}
          <div className="flex bg-[#16181C] justify-start text-neutral-600 py-4 rounded-full px-1">
            <div className="ml-3">
              <CiSearch size={30} />
            </div>

            <p className="ml-4 text-lg">Search</p>
          </div>
          {/* premium */}
          <div className="mt-10 w-full h-[160px] bg-[#16181C] rounded-xl px-4 flex flex-col ">
            <p className=" text-xl font-bold py-4">Subscribe to Premium</p>
            <p className="text-sm  text-neutral-200">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
            <button className="mt-3 bg-[#1A8CD8] w-[140px]  rounded-full h-10 text-sm font-bold">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterPage;
