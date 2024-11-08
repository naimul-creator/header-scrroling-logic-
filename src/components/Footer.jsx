import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">MyStore</h2>
            <p className="text-gray-400 mt-2">
              Your one-stop shop for everything awesome.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="/shop" className="hover:text-gray-400">
              Shop
            </Link>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
