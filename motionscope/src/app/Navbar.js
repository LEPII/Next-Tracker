import Link from "next/link";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiListHeart } from "react-icons/pi";
import { ImStatsBars } from "react-icons/im";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const navLinks = [
    { href: "/", icon: <MdOutlineSpaceDashboard className="text-2xl" /> },
    { href: "/program", icon: <PiListHeart className="text-2xl" /> },
    { href: "/stats", icon: <ImStatsBars className="text-2xl" /> },
    { href: "/profile", icon: <CgProfile className="text-2xl" /> },
  ];

  return (
    <nav className="fixed bottom-0 w-screen flex border-b mb-5 px-4 h-16 items-center">
      <Link href="/">
        <GiWeightLiftingUp className="text-5xl" />
      </Link>
      <ul className="flex space-x-12 m-auto">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.icon}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
