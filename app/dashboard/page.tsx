import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { GiShadowFollower } from "react-icons/gi";
import { FaRegNewspaper } from "react-icons/fa6";

const Dashboard = () => {
  const navItem = [
    {
      id: 1,
      label: "Home",
      icons: <TiHomeOutline />,
    },
    {
      id: 2,
      label: "Profile",
      icons: <CgProfile />,
    },
    {
      id: 3,
      label: "Followers",
      icons: <GiShadowFollower />,
    },
    {
      id: 4,
      label: "News",
      icons: <FaRegNewspaper />,
    },
  ];

  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-black items-center gap-1 min-h-[1000px] ">
    //   <div className="flex justify-center items-center h-full bg-slate-300 sm:grid-cols-2">1</div>
    //   <div className="flex justify-center items-center h-full bg-pink-600 sm:grid-cols-2">2</div>
    //   <div className="flex justify-center items-center h-full bg-red-500 sm:grid-cols-2">3</div>
    //   <div className="flex justify-center items-center h-full bg-cyan-500 sm:grid-cols-2">4</div>
    //   <div className="flex justify-center items-center h-full bg-cyan-200 sm:grid-cols-2">5</div>
    //   <div className="flex justify-center items-center h-full bg-rose-800 sm:grid-cols-2">6</div>
    // </div>

    // <div className="grid gap-1 sm:grid-cols-2 grid-cols-2 text-center ">
    //   <div className="min-h-[100px] rounded-md  bg-orange-500 shadow">1</div>
    //   <div className="min-h-[100px] rounded-md bg-teal-500 shadow">2</div>
    // </div>

    // <div className="grid gap-1 sm:grid-cols-3  text-center grid-cols-2 md:grid-cols-4 ">
    //   <div className="min-h-[100px] rounded-md  bg-orange-500 shadow">1</div>
    //   <div className="min-h-[100px] rounded-md bg-teal-500 shadow">2</div>
    //   <div className="min-h-[100px] rounded-md bg-cyan-200 shadow">3</div>
    //   <div className="min-h-[100px] rounded-md bg-purple-800 shadow">4</div>
    // </div>

    //   <div className="grid gap-1 sm:grid-cols-12  grid-cols-1">

    //   <div className="min-h-[100px] rounded-md  bg-orange-500 shadow sm:col-span-2 md:col-span-4 lg:col-span-5">1</div>
    //   <div className="min-h-[100px] rounded-md bg-teal-500 shadow sm:col-span-10 md:col-span-8 lg:col-span-7">2</div>
    // </div>

    //   <div className="grid gap-1 grid-cols-3 sm:grid-cols-12">
    //   <div className="min-h-[100px] rounded-md  bg-orange-500 shadow sm:col-span-2 md:col-span-3">1</div>
    //   <div className="min-h-[100px] rounded-md bg-teal-500 shadow sm:col-span-8 md:col-span-9 lg:col-span-6">2</div>
    //   <div className="min-h-[100px] rounded-md bg-purple-800 shadow  sm:col-span-2 md:col-span-3 sm:block md:hidden hidden">3</div>
    // </div>

    <div className="grid gap-x-1 gap-1 grid-cols-12">
      <div className="min-h-[1000px] rounded-md  bg-orange-500  shadow sm:col-span-3  md:col-span-4 xl:col-span-2 hidden md:block">
        1
      </div>
      <div className="min-h-[1000px] rounded-md bg-teal-500 md:col-span-8 xl:col-span-8 col-span-12 p-2 ">
        <ul className="flex space-x-2 justify-between">
          <li className="flex flex-col items-center space-y-1 ">
            <div className="bg-yellow-500 p-1 roundef-full">

            <a href="#" className="bg-white p-1 block  rounded-full">
              <img className="sm:h-30 sm:w-30 h-15 w-15 md:h-30 md:w-30  rounded-full " src="https://placekitten.com/200/200" alt="kitten" />
            </a>
            </div>
            <a href="kitten">Kitten</a>
          </li>
          <li className="flex flex-col items-center space-y-1 ">
            <div className="bg-yellow-500 p-1 roundef-full">

            <a href="#" className="bg-white p-1 block  rounded-full">
              <img className="sm:h-30 sm:w-30 h-15 w-15 md:h-30 md:w-30  rounded-full " src="https://placekitten.com/200/200" alt="kitten" />
            </a>
            </div>
            <a href="kitten">Kitten</a>
          </li>
          <li className="flex flex-col items-center space-y-1 ">
            <div className="bg-yellow-500 p-1 roundef-full">

            <a href="#" className="bg-white p-1 block  rounded-full">
              <img className="sm:h-30 sm:w-30 h-15 w-15 md:h-30 md:w-30  rounded-full " src="https://placekitten.com/200/200" alt="kitten" />
            </a>
            </div>
            <a href="kitten">Kitten</a>
          </li>
          <li className="flex flex-col items-center space-y-1 ">
            <div className="bg-yellow-500 p-1 roundef-full">

            <a href="#" className="bg-white p-1 block  rounded-full">
              <img className="sm:h-30 sm:w-30 h-15 w-15 md:h-30 md:w-30  rounded-full " src="https://placekitten.com/200/200" alt="kitten" />
            </a>
            </div>
            <a href="kitten">Kitten</a>
          </li>
        </ul>
      </div>
      <div className="min-h-[1000px] rounded-md bg-purple-800 col-span-2 hidden xl:block sm:hidden xl:col-span-2">
        3
      </div>
    </div>
  );
};

export default Dashboard;
