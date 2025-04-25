"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon
} from '@/components/icons';

const Header = () => {

  return (
    <header className="left-20 top-10 h-screen flex flex-col justify-between items-start px-20 py-28">
      {/* Top section with name and social icons */}
      <div className="space-y-8">
        {/* Name + Title */}
        <div>
          <h1 className="text-5xl font-bold text-slate-200 tracking-tight">
            <Link href="/">Abhishek Sharma</Link>
          </h1>
          
          <h2 className="text-lg mt-4 text-slate-300">Software Engineer</h2>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <a
            href="https://github.com/abhiiee-sharma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com//abhiiee-sharma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          
        </div>
      </div>

      {/* Middle section with navigation */}
      <nav className="py-8 flex flex-col space-y-6 text-slate-300">
        <NavItem href="#about" title="About"/>
        <NavItem href="#projects" title="Projects"  />
        <NavItem href="#contact" title="Contact"  />
      </nav>

      {/* Bottom section with resume button */}
      <div className="mt-6">
        <a 
          href="/document/resume.pdf" 
          download 
          className="inline-flex items-center justify-center px-4 py-2 border border-slate-400 rounded-md text-slate-200 hover:bg-slate-800 hover:border-slate-200 transition-all duration-300"
        >
          Download Resume
        </a>
      </div>
    </header>
  );
};

// Navigation item component with animated line
interface NavItemProps {
  href: string;
  title: string;
}

const NavItem = ({ href, title }: NavItemProps) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleHashChange = () => setActive(window.location.hash === href);
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [href]);

  return (
    <a
      href={href}
      className={`flex items-center space-x-3 text-base ${
        active ? 'text-white' : 'text-slate-300'
      }`}
    >
      <span
        className={`block h-px ${
          active ? 'bg-white w-16' : 'bg-slate-300 w-8'
        } transition-all duration-300`}
      />
      <span>{title}</span>
    </a>
  );
};


export default Header;