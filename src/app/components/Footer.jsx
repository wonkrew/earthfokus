import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <Image
              src="/EarthFokus Logo.png"
              alt="Earth Fokus Logo"
              width={120}
              height={40}
              className="mb-4"
            />
          </div>

          {/* Navigation Links Sections */}
          <div>
            <ul className="space-y-2 text-[#333333]">
              <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
              <li><Link href="/services" className="hover:text-gray-600">Services</Link></li>
              <li><Link href="/blog" className="hover:text-gray-600">Blog</Link></li>
              <li><Link href="/get-in-touch" className="hover:text-gray-600">Get in touch</Link></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-[#333333]">
              <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
              <li><Link href="/services" className="hover:text-gray-600">Services</Link></li>
              <li><Link href="/blog" className="hover:text-gray-600">Blog</Link></li>
              <li><Link href="/get-in-touch" className="hover:text-gray-600">Get in touch</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-medium mb-4 text-[#333333]">Get in touch</h3>
            <ul className="space-y-2 text-[#333333]">
              <li>87894561230</li>
              <li>87894561230</li>
              <li>earthfokus@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-[#333333]">
            <div className="mb-4 md:mb-0">
              <Link href="/terms" className="hover:text-gray-600">Terms and Conditions</Link>
            </div>
            <div className="text-sm">
              2025 Earth Fokus. All rights reserved
            </div>
            <div className="flex items-center">
              Made with <span className="text-red-500 mx-1">❤</span> by Wonkrew
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
