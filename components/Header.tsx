"use client";

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">BleuKei</Link>

        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/still-curious">Still Curious?</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          Book Free Consultation
        </button>
      </div>
    </header>
  );
};

export default Header;