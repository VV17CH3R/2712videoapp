"use client";

import Link from "next/link";
import Logo from "../public/Endless.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "@/app/components/UserNav";

interface linksProps {
  name: string;
  href: string;
}

const links: linksProps[] = [
  {
    name: "Главная",
    href: "/home",
  },
  {
    name: "Тренинги",
    href: "/home/tranings",
  },
  {
    name: "Фильмы",
    href: "/home/movies",
  },
  {
    name: "Новинки",
    href: "/home/news",
  },
  {
    name: "Избранное",
    href: "/home/user/list",
  },
];

export default function NavBar() {
  const pathName = usePathname();

  return (
    <div className="w-full max-w-7xl mx-auto items-center py-2 justify-between px-5 sm:px-6 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="md:w-16 w-8">
          <Image src={Logo} alt="logo" priority />
        </Link>
        <ul className="lg:flex mb-16 gap-x-4 ml-14 hidden">
          {links.map((linkEl, idx) => (
            <div key={idx}>
              {pathName === linkEl.href ? (
                <li>
                  <Link
                    className="text-white font-semibold underline"
                    href={linkEl.href}
                  >
                    {linkEl.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link className="text-gray-300 text-sm" href={linkEl.href}>
                    {linkEl.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8 ">
        <Search className="w-7 h-7 text-gray-300 lg:mb-16 cursor-pointer" />
        <Bell className="w-7 h-7 text-gray-300 lg:mb-16 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  );
}
