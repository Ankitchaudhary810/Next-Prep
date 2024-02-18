
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import {CiLogout} from "react-icons/ci"
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
    icon: < TbPremiumRights/>,
    link: "/",
  },
  {
    title: "Profile",
    icon: <BiUser />,
    link: `/`,
  },
  {
    title: "Logout",
    icon: <CiLogout />,
    link: `/`,
  },

]