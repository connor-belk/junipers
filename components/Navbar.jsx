import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-navbar flex flex-col">
        <div className="logo flex flex-row justify-center">
          <Link href="/">
            <Image src="/imgs/logo.webp" width={200} height={150} />
          </Link>
        </div>
      </nav>
      <div
        id="navbar"
        className="bg-navbar border-t border-b border-slate-900 sticky top-0 py-4"
      >
        <ul id="navlist" className="font-serif flex justify-center gap-8">
          <li
            id="nav-item"
            className="hover:text-yellow-700 transition-all duration-150"
          >
            <Link href="/">Home</Link>
          </li>
          <li
            id="nav-item"
            className="hover:text-yellow-700 transition-all duration-150"
          >
            <Link href="/adopt">Adopt</Link>
          </li>
          <li
            id="nav-item"
            className="hover:text-yellow-700 transition-all duration-150"
          >
            <Link href="/events">Events</Link>
          </li>
          <li
            id="nav-item"
            className="hover:text-yellow-700 transition-all duration-150"
          >
            <Link href="/about">About Us</Link>
          </li>
          <li
            id="nav-item"
            className="hover:text-yellow-700 transition-all duration-150"
          >
            <Link href="/donate">Donate</Link>
          </li>
          <li
            id="nav-item"
            className="hover:text-yellow-700 transition-all duration-150"
          >
            <Link href="/action">Take Action</Link>
          </li>
          <li
            id="nav-item"
            className="hover:text-yellow-700 transition-all duration-150"
          >
            <Link href="/events">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
