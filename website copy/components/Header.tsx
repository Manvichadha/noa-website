'use client';

import Link from 'next/link';

export default function Header() {
  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/still-curious', label: 'Still Curious?' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 lg:px-24 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="cursor-hover text-2xl font-bold tracking-tighter text-white">
        BLEUKEI
      </Link>

      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className="cursor-hover text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link
        href="/contact"
        className="cursor-hover hidden md:inline-flex bg-teal-500 hover:bg-teal-400 text-black text-sm font-bold py-2.5 px-6 rounded-full transition-colors"
      >
        Book Free Consultation
      </Link>
    </header>
  );
}