'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link href="/" className="header__logo">
            <span className="header__logo-text">Hoodee</span>
          </Link>

          <nav className="header__nav" aria-label="Primary navigation">
            <Link href="/">Home</Link>

            <div className="header__nav-dropdown">
              <Link href="/aluminium-window-hoods">Window Hoods</Link>
              <div className="header__dropdown-menu">
                <Link href="/aluminium-window-hoods">Aluminium Window Hoods</Link>
                <Link href="/architectural-window-hoods">Architectural Hoods</Link>
                <Link href="/custom-window-hoods">Custom Window Hoods</Link>
                <Link href="/commercial-window-hoods">Commercial</Link>
                <Link href="/residential-window-hoods">Residential</Link>
              </div>
            </div>

            <div className="header__nav-dropdown">
              <Link href="/window-hood-range">Product Range</Link>
              <div className="header__dropdown-menu">
                <Link href="/window-hood-range">All Profiles</Link>
                <Link href="/window-hood-range/u-hood">U-Hood</Link>
                <Link href="/window-hood-range/l-hood">L-Hood</Link>
                <Link href="/window-hood-range/j-hood">J-Hood</Link>
                <Link href="/window-hood-range/b-hood">B-Hood</Link>
                <Link href="/window-hood-range/r-hood">R-Hood</Link>
              </div>
            </div>

            <Link href="/technical-specifications">Technical Specs</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
          </nav>

          <Link href="/request-a-quote" className="btn btn-primary header__cta">
            Request for Quotation
          </Link>

          <button
            className="header__mobile-toggle"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav className={`mobile-nav${mobileOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link href="/aluminium-window-hoods" onClick={() => setMobileOpen(false)}>Aluminium Window Hoods</Link>
        <Link href="/architectural-window-hoods" onClick={() => setMobileOpen(false)}>Architectural Window Hoods</Link>
        <Link href="/custom-window-hoods" onClick={() => setMobileOpen(false)}>Custom Window Hoods</Link>
        <Link href="/window-hood-range" onClick={() => setMobileOpen(false)}>Product Range</Link>
        <Link href="/window-hood-range/u-hood" onClick={() => setMobileOpen(false)}>— U-Hood</Link>
        <Link href="/window-hood-range/l-hood" onClick={() => setMobileOpen(false)}>— L-Hood</Link>
        <Link href="/window-hood-range/j-hood" onClick={() => setMobileOpen(false)}>— J-Hood</Link>
        <Link href="/window-hood-range/b-hood" onClick={() => setMobileOpen(false)}>— B-Hood</Link>
        <Link href="/window-hood-range/r-hood" onClick={() => setMobileOpen(false)}>— R-Hood</Link>
        <Link href="/commercial-window-hoods" onClick={() => setMobileOpen(false)}>Commercial Hoods</Link>
        <Link href="/residential-window-hoods" onClick={() => setMobileOpen(false)}>Residential Hoods</Link>
        <Link href="/technical-specifications" onClick={() => setMobileOpen(false)}>Technical Specifications</Link>
        <Link href="/projects" onClick={() => setMobileOpen(false)}>Projects</Link>
        <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
        <Link href="/request-a-quote" onClick={() => setMobileOpen(false)}>Request for Quotation</Link>
      </nav>
    </>
  );
}
