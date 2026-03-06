'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (sectionId) => {
    setIsOpen(false);
    
    // If on home page, scroll to section
    if (pathname === '/' || pathname === '') {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = element.offsetTop - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home with hash and then scroll
      router.push(`/#${sectionId}`);
      // Scroll after a short delay to ensure the page has loaded
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = element.offsetTop - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }, 300);
    }
  };

  const navLinks = [
    { label: 'سرورق', href: 'hero' },
    { label: 'شعبہ جات', href: 'sections' },
    { label: 'تعارف', href: 'about' },
    { label: 'رابطہ', href: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavigation('hero')}>
          <div className="w-12 h-12 relative">
            <Image 
              src="/logo.jpg" 
              alt="دارالایمان والتقویٰ" 
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
          <div className="text-right hidden sm:block">
            <h1 className="text-lg text-gray-900" style={{ fontFamily: 'Mehr', letterSpacing: '0.04em', lineHeight: '1.6' }}>دارالایمان والتقویٰ</h1>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavigation(link.href)}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 text-base cursor-pointer"
                style={{ fontFamily: 'Mehr', letterSpacing: '0.04em' }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-gray-900"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 px-4 py-4">
          <ul className="flex flex-col gap-4" dir="rtl">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavigation(link.href)}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 text-base cursor-pointer w-full text-right"
                  style={{ fontFamily: 'Mehr', letterSpacing: '0.04em' }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
