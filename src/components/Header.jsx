"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    const maxScrollY =
      document.documentElement.scrollHeight - window.innerHeight;

    // If scrolled down more than 300px, hide header
    if (currentScrollY > 300) {
      setShow(false);
    } else {
      setShow(true);
    }

    // If user is scrolling up and more than 200px from the bottom, show header
    if (currentScrollY < lastScrollY && currentScrollY < maxScrollY - 200) {
      setShow(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full bg-blue-600 text-white py-4 shadow-md fixed top-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          MyStore
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link href="/shop" className="hover:text-gray-200">
            Shop
          </Link>
          <Link href="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </nav>

        {/* Cart Icon */}
        <Link href="/cart" className="relative hover:text-gray-200">
          <FaShoppingCart size={24} />
          <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-1 text-xs">
            3
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
