"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const navbarRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (navbar) {
        if (window.scrollY > 40) {
          navbar.classList.add('bg-black/80', 'border-b', 'border-cyan-900/40', 'shadow-lg');
        } else {
          navbar.classList.remove('bg-black/80', 'border-b', 'border-cyan-900/40', 'shadow-lg');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/home', label: 'Home' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/certifications', label: 'Certifications' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header
      ref={navbarRef}
      className="w-full flex items-center justify-between px-8 py-4 transition-all duration-300 sticky top-0 z-50"
    >
      {/* Logo/Name */}
      <Link href="/home" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
        <Image
          src="/logo.png"
          alt="Usman Shehzad Logo"
          width={48}
          height={48}
          className="rounded-full"
        />
        <span className="relative text-2xl font-bold text-cyan-400 tracking-wide">
          Usman Shehzad
        </span>
      </Link>

      {/* Nav links */}
      <nav className="flex gap-4">
        {navLinks.map(link => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative group font-mono font-semibold text-base px-4 py-2 rounded-full transition-all duration-300 overflow-hidden hover:text-white hover:scale-105 ${
                isActive ? 'text-white' : 'text-zinc-100'
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              <span
                className={`absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 transition-all duration-300 ${
                  isActive ? 'opacity-100 scale-105' : 'opacity-0 group-hover:opacity-100 group-hover:scale-105'
                }`}
              ></span>
            </Link>
          );
        })}
      </nav>

      {/* CTA Button */}
      <Link
        href="/contact"
        className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-bold shadow-lg hover:scale-105 transition"
      >
        Let's Talk
      </Link>
    </header>
  );
}
