import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../../components/CTASection';

export const metadata = {
  title: 'U-Hood | Aluminium Box Window Hood — Hoodee',
  description:
    'The Hoodee U-Hood is a three-sided aluminium box window hood. Custom widths and projections. Powder coat finishes. Ideal for residential and commercial windows.',
  alternates: { canonical: '/window-hood-range/u-hood' },
};

export default function UHoodPage() {
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
              <span>U-Hood</span>
            </nav>
            <span className="section-label">Profile</span>
            <h1>U-Hood — Aluminium Box Window Hood</h1>
            <p className="page-hero__lead">
              The classic three-sided box profile. A top, front and bottom face in a clean
              U-section. The most popular Hoodee profile for residential and commercial windows.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split content-split--wide-left">
            <div className="content-split__image">
              <Image
                src="/images/Uhood.avif"
                alt="Hoodee U-Hood aluminium window hood installed above a residential window"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="content-split__text">
              <span className="section-label">U-Hood Profile</span>
              <h2>Three-Sided Box Profile</h2>
              <p>
                The U-Hood features a top face, a front face and a bottom return — forming a clean
                three-sided box that sits above the window. It provides top, front and partial
                underside coverage in a geometrically simple profile that works across a wide range
                of architectural contexts.
              </p>
              <p>
                The U-Hood is the most widely used profile in the Hoodee range due to its
                versatility — it suits both contemporary and traditional facades and can be
                proportioned to be discreet or deliberately bold.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="badge badge--rust">Residential</span>
                <span className="badge badge--rust">Commercial</span>
                <span className="badge badge--rust">Renovation</span>
                <span className="badge badge--rust">New Build</span>
              </div>
              <Link href="/request-a-quote" className="btn btn-primary mt-8">Request a Quote</Link>
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
                <li>Residential windows — single and double storey</li>
                <li>Renovation retrofits over existing windows</li>
                <li>Contemporary rendered facades</li>
                <li>Brick veneer homes requiring a strong horizontal element</li>
                <li>Commercial windows where a clean box detail is specified</li>
                <li>Multi-residential balcony and window hoods</li>
              </ul>
            </div>
            <div>
              <h2>Sizes & Options</h2>
              <div style={{ overflowX: 'auto', marginTop: 'var(--space-6)' }}>
                <table className="spec-table">
                  <tbody>
                    <tr><td><strong>Width</strong></td><td>Custom — to suit your window width</td></tr>
                    <tr><td><strong>Projection</strong></td><td>Custom — specify required depth</td></tr>
                    <tr><td><strong>Face height</strong></td><td>Custom — specify front face height</td></tr>
                    <tr><td><strong>Material</strong></td><td>Marine-grade aluminium — 1.6mm or 2.0mm</td></tr>
                    <tr><td><strong>Finish</strong></td><td>Powder coat — Dulux or Interpon range</td></tr>
                    <tr><td><strong>Fixing</strong></td><td>Concealed or exposed</td></tr>
                    <tr><td><strong>Faces</strong></td><td>Top, Front, Bottom</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split">
            <div>
              <span className="section-label">Variation</span>
              <h2>Custom Shed House U-Hood</h2>
              <p>
                The U-Hood is also available with a deeper projection and taller front face for
                shed-style homes, outbuildings and industrial applications where a more dominant
                hood element is required.
              </p>
            </div>
            <div className="content-split__image">
              <Image
                src="/images/uhood shed house.avif"
                alt="U-Hood aluminium window hood on a shed-style residential home"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="text-center mb-8">
            <span className="section-label">Other Profiles</span>
            <h2>Also Consider</h2>
          </div>
          <div className="grid-4">
            {[
              { name: 'L-Hood', href: '/window-hood-range/l-hood', desc: 'Two-sided. Top and front only.' },
              { name: 'J-Hood', href: '/window-hood-range/j-hood', desc: 'Deep bottom return for extra shadow.' },
              { name: 'B-Hood', href: '/window-hood-range/b-hood', desc: 'Full perimeter box profile.' },
              { name: 'R-Hood', href: '/window-hood-range/r-hood', desc: 'Radius curved front face.' },
            ].map(({ name, href, desc }) => (
              <Link key={name} href={href} className="link-card">
                <h3>{name}</h3>
                <p>{desc}</p>
                <span className="link-card__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Request a Quote for the U-Hood"
        body="Supply your window dimensions and we'll fabricate U-Hoods to fit. Available in any colour, any size."
        cta="Get a Quote"
        href="/request-a-quote"
      />
    </>
  );
}
