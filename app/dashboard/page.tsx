import React from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";
import { TbPremiumRights } from "react-icons/tb";
export const item = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
    link: "/",
  },
  {
    title: "Explore",
    icon: <BiHash />,
    link: "/",
  },
  {
    title: "Notifications",
    icon: <BsBell />,
    link: "/",
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
    link: "/",
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
    link: "/",
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
    link: "/",
  },
  {
    title: "Prenium",
    icon: <TbPremiumRights />,
    link: "/",
  },
  {
    title: "Profile",
    icon: <BiUser />,
    link: `/`,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
    link: `/`,
  },
  {
    title: "Logout",
    icon: <CiLogout />,
    link: `/`,
  },
];

const TwitterPage = () => {
  return (
    <div className="flex text-white bg-[#000000] flex-row h-screen w-screen ">
      <div className=" w-full justify-end  sm:pr-6 hidden sm:flex ">
        <div className="mt-1">
          <div>
          <svg viewBox="0 0 24 24" aria-hidden="true" className="invert  hover:invert-0 sm:w-16 w-14 px-4 py-3 hover:bg-[#191919] rounded-full  mb-4 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
          </div>
        {item.map((item) => (
          <>
            <div className="flex ">
              <div className="flex gap-1 lg:w-full md:w-[65px] hover:bg-[#181818] rounded-full justify-start items-center">
                <p className="text-[28px] py-3 px-4">{item.icon}</p>
                <p className="text-xl lg:block hidden ">{item.title}</p>
              </div>
            </div>
          </>
        ))}
        <button className="bg-[#1A8CD8] w-full rounded-full h-14 text-2xl mt-7 hidden lg:block ">
          Post
        </button>
        </div>
      </div>
      <div className="flex justify-center border-l-[1px] border-r-[1px] border-neutral-700">
        <div className="flex-shrink-0 w-[700px]">Feed Card</div>
      </div>
      <div className="  w-full justify-start hidden sm:flex">Follow Bar</div>
    </div>
  );
};

export default TwitterPage;
