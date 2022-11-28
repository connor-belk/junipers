import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-navbar flex flex-col sticky top-0 z-50">
      <div
        id="navbar"
        className="bg-navbar border-t border-b border-slate-900 py-3"
      >
        <ul
          id="navlist"
          className="font-serif text-lg flex justify-center gap-10"
        >
          <li
            id="nav-item"
            className="hover:text-yellow-700 hover:scale-105 transition-all duration-150"
          >
            <Link href="/">Home</Link>
          </li>
          <li
            id="nav-item"
            className="hover:text-yellow-700 hover:scale-105 transition-all duration-150"
          >
            <Link href="/adopt">Adopt</Link>
          </li>
          <li
            id="nav-item"
            className="hover:text-yellow-700 hover:scale-105 transition-all duration-150"
          >
            <Link href="/events">Events</Link>
          </li>
          <li
            id="nav-item"
            className="hover:text-yellow-700 hover:scale-105 transition-all duration-150"
          >
            <Link href="/about">About Us</Link>
          </li>
          <li
            id="nav-item"
            className="hover:text-yellow-700 hover:scale-105 transition-all duration-150"
          >
            <Link href="/donate">Donate</Link>
          </li>
          <li
            id="nav-item"
            className="hover:text-yellow-700 hover:scale-105 transition-all duration-150"
          >
            <Link href="/action">Take Action</Link>
          </li>
          <li
            id="nav-item"
            className="hover:text-yellow-700 transition-all duration-150"
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
