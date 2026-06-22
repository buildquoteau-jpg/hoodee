import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../../components/CTASection';

export const metadata = {
  title: 'B-Hood | Full Box Aluminium Window Hood — Hoodee',
  description:
    'The Hoodee B-Hood is a full box aluminium window hood with a perimeter return. Maximum coverage and a bold architectural presence. Custom sizes and powder coat colours.',
  alternates: { canonical: '/window-hood-range/b-hood' },
};

export default function BHoodPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/window-hood-range">Window Hood Range</Link>
              <span>/</span>
              <span>B-Hood</span>
            </nav>
            <span className="section-label">Profile</span>
            <h1>B-Hood — Full Box Aluminium Window Hood</h1>
            <p className="page-hero__lead">
              Maximum coverage in a full box form — top, front, bottom and returns on all sides
              for a bold, enclosed architectural hood detail.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split content-split--wide-left">
            <div className="content-split__image">
              <Image
                src="/images/b_hood.avif"
                alt="Hoodee B-Hood full box aluminium window hood on a building facade"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="content-split__text">
              <span className="section-label">B-Hood Profile</span>
              <h2>Full Perimeter Box — Maximum Presence</h2>
              <p>
                The B-Hood is the most enclosed profile in the Hoodee range. A full box with a
                perimeter return creates a solid, architecturally dominant hood element that reads
                strongly as a feature detail on any facade.
              </p>
              <p>
                The B-Hood is chosen when the designer wants the window hood to be a deliberate
                statement — not just a functional shroud but a primary facade element in its own
                right.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="badge badge--rust">Architectural Feature</span>
                <span className="badge badge--rust">Maximum Coverage</span>
                <span className="badge badge--rust">Commercial</span>
                <span className="badge badge--rust">Feature Windows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-12)' }}>
            <div>
              <h2>Best Use Cases</h2>
              <ul className="icon-list mt-6">
                <li>Feature windows where the hood is a primary design element</li>
                <li>Commercial and institutional buildings with strong horizontal banding</li>
                <li>High-exposure elevations requiring maximum rain and sun protection</li>
                <li>Entry canopies and highlight window treatments</li>
                <li>Projects requiring a sealed box form for pest or debris exclusion</li>
              </ul>
            </div>
            <div>
              <h2>Sizes & Specifications</h2>
              <div style={{ overflowX: 'auto', marginTop: 'var(--space-6)' }}>
                <table className="spec-table">
                  <tbody>
                    <tr><td><strong>Width</strong></td><td>Custom</td></tr>
                    <tr><td><strong>Projection</strong></td><td>Custom</td></tr>
                    <tr><td><strong>Height</strong></td><td>Custom</td></tr>
                    <tr><td><strong>Material</strong></td><td>Marine-grade aluminium — 1.6mm or 2.0mm</td></tr>
                    <tr><td><strong>Finish</strong></td><td>Powder coat — Dulux or Interpon</td></tr>
                    <tr><td><strong>Faces</strong></td><td>Top, Front, Bottom, Side returns</td></tr>
                    <tr><td><strong>Also known as</strong></td><td>Box hood, window shroud, enclosure hood</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="text-center mb-8">
            <h2>Also Consider</h2>
          </div>
          <div className="grid-4">
            {[
              { name: 'U-Hood', href: '/window-hood-range/u-hood', desc: 'Classic three-sided box.' },
              { name: 'L-Hood', href: '/window-hood-range/l-hood', desc: 'Two-sided, minimal profile.' },
              { name: 'J-Hood', href: '/window-hood-range/j-hood', desc: 'Deep bottom return.' },
              { name: 'R-Hood', href: '/window-hood-range/r-hood', desc: 'Radius curved front.' },
            ].map(({ name, href, desc }) => (
              <Link key={name} href={href} className="link-card">
                <h3>{name}</h3><p>{desc}</p>
                <span className="link-card__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Request a Quote for the B-Hood" body="Specify your window dimensions and we'll fabricate full-box B-Hoods to suit your project." cta="Get a Quote" href="/request-a-quote" />
    </>
  );
}
