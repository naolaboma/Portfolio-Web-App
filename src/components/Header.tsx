import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur border-b border-white/5 text-textLight">
      <nav className="container mx-auto px-4 flex justify-between items-center py-3" aria-label="Main Navigation">
        <div className="text-xl sm:text-2xl font-extrabold font-display tracking-tight">
          <Link href="/">My Portfolio</Link>
        </div>
        <ul className="flex items-center gap-4 text-sm sm:text-base">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <Link href="/CVF-Naol_A.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-teal-600/90 px-3 py-1.5 text-white hover:bg-teal-500 transition">CV</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;