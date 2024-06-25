"use client";

import Link from "next/link";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { PiListHeart } from "react-icons/pi";
import { PiListHeartBold } from "react-icons/pi";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();

  const navLinks = [
    {
      href: "/",
      icon: <MdOutlineSpaceDashboard className="text-2xl" />,
      activeIcon: <MdSpaceDashboard className="text-2xl" />,
    },
    {
      href: "/program",
      icon: <PiListHeart className="text-2xl" />,
      activeIcon: <PiListHeartBold className="text-2xl" />,
    },
    {
      href: "/stats",
      icon: <IoStatsChartOutline className="text-2xl" />,
      activeIcon: <IoStatsChartSharp className="text-2xl" />,
    },
    {
      href: "/profile",
      icon: <FaRegCircleUser className="text-2xl" />,
      activeIcon: <FaCircleUser className="text-2xl" />,
    },
  ];

  return (
    <nav className="fixed bottom-0 w-screen flex border-b mb-5 px-4 h-16 items-center">
      <Link href="/">
        <GiWeightLiftingUp className="text-5xl" />
      </Link>
      <ul className="flex space-x-12 m-auto">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {currentPath === link.href ? link.activeIcon : link.icon}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
