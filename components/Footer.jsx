import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__logo">Hoodee</span>
            <p className="footer__tagline">
              Premium aluminium window hoods, manufactured in Western Australia.
              Custom fabrication for residential, commercial and architectural projects.
            </p>
            <p style={{ fontSize: 'var(--text-xs)', marginTop: 'var(--space-2)' }}>
              Perth, Western Australia
            </p>
          </div>

          <div className="footer__col">
            <h4>Products</h4>
            <ul>
              <li><Link href="/aluminium-window-hoods">Aluminium Window Hoods</Link></li>
              <li><Link href="/architectural-window-hoods">Architectural Window Hoods</Link></li>
              <li><Link href="/custom-window-hoods">Custom Window Hoods</Link></li>
              <li><Link href="/commercial-window-hoods">Commercial Hoods</Link></li>
              <li><Link href="/residential-window-hoods">Residential Hoods</Link></li>
              <li><Link href="/window-hood-range">Full Product Range</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Profiles</h4>
            <ul>
              <li><Link href="/window-hood-range/u-hood">U-Hood</Link></li>
              <li><Link href="/window-hood-range/l-hood">L-Hood</Link></li>
              <li><Link href="/window-hood-range/j-hood">J-Hood</Link></li>
              <li><Link href="/window-hood-range/b-hood">B-Hood</Link></li>
              <li><Link href="/window-hood-range/r-hood">R-Hood</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Information</h4>
            <ul>
              <li><Link href="/technical-specifications">Technical Specifications</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/window-hood-faqs">FAQs</Link></li>
              <li><Link href="/aluminium-window-hoods-perth">Window Hoods Perth</Link></li>
              <li><Link href="/window-hoods-western-australia">Window Hoods WA</Link></li>
              <li><Link href="/australia-wide-window-hood-supply">Australia-Wide Supply</Link></li>
              <li><Link href="/about">About Hoodee</Link></li>
              <li><Link href="/request-a-quote">Request a Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Hoodee. All rights reserved. Manufactured in Western Australia.</p>
          <div className="footer__bottom-links">
            <Link href="/window-hood-faqs">FAQs</Link>
            <Link href="/technical-specifications">Technical Specs</Link>
            <Link href="/request-a-quote">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
