"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-11/12 max-w-8xl bg-gray-100 py-4 px-6 flex items-center justify-between z-50 rounded-lg mt-4 shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/EarthFokus Logo.png"
              alt="Earth Fokus Logo"
              width={160}
              height={55}
            />
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-10">
        <Link href="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link href="/solutions" className="text-gray-700 hover:text-blue-600">
          Solutions
        </Link>
        <Link href="/sectors" className="text-gray-700 hover:text-blue-600">
          Sectors
        </Link>
        <Link
          href="/case-studies"
          className="text-gray-700 hover:text-blue-600"
        >
          Case Studies
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">
          About us
        </Link>
      </div>

      {/* Enquiry Button */}
      <div className="hidden md:block">
        <Link href="/enquiry">
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
            Enquiry Now
          </button>
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-10 shadow-md">
          <div className="flex flex-col p-4 space-y-3">
            <Link href="/" className="text-gray-700 hover:text-blue-600 py-2">
              Home
            </Link>
            <Link
              href="/solutions"
              className="text-gray-700 hover:text-blue-600 py-2"
            >
              Solutions
            </Link>
            <Link
              href="/sectors"
              className="text-gray-700 hover:text-blue-600 py-2"
            >
              Sectors
            </Link>
            <Link
              href="/case-studies"
              className="text-gray-700 hover:text-blue-600 py-2"
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 py-2"
            >
              About us
            </Link>
            <Link href="/enquiry" className="py-2">
              <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 w-full">
                Enquiry Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
