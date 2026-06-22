import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../../components/CTASection';

export const metadata = {
  title: 'L-Hood | Two-Sided Aluminium Window Hood — Hoodee',
  description:
    'The Hoodee L-Hood is a two-sided aluminium window hood with a top and front face. Subtle, architectural and lightweight. Custom sizes and powder coat colours.',
  alternates: { canonical: '/window-hood-range/l-hood' },
};

export default function LHoodPage() {
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
              <span>L-Hood</span>
            </nav>
            <span className="section-label">Profile</span>
            <h1>L-Hood — Two-Sided Aluminium Window Hood</h1>
            <p className="page-hero__lead">
              A clean angle profile with a top and front face. The L-Hood delivers architectural
              shading and a defined upper shadow line without the visual weight of a full box hood.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split content-split--wide-left">
            <div className="content-split__image">
              <Image
                src="/images/l_hood.avif"
                alt="Hoodee L-Hood two-sided aluminium window hood on a building facade"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="content-split__text">
              <span className="section-label">L-Hood Profile</span>
              <h2>Top and Front Face — Minimal and Precise</h2>
              <p>
                The L-Hood is a two-face profile: a horizontal top face and a vertical front face
                meeting at a single fold. It sits above the window, projecting outward to provide
                solar shading and rain deflection while presenting a lean, minimal profile on the
                facade.
              </p>
              <p>
                Without a bottom return, the L-Hood is lighter in appearance than the U-Hood — a
                deliberate choice for architects who want the shadow line of a hood without the
                boxed-out visual mass.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="badge badge--rust">Contemporary Facades</span>
                <span className="badge badge--rust">Minimal Aesthetic</span>
                <span className="badge badge--rust">Residential</span>
                <span className="badge badge--rust">Commercial</span>
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
                <li>Contemporary homes with lean, minimal detailing</li>
                <li>Facades where visual weight must be kept low</li>
                <li>Windows with narrow reveals where a box hood would protrude too far</li>
                <li>Commercial projects specifying a fine horizontal line</li>
                <li>Used in combination with other profiles on the same facade</li>
              </ul>
            </div>
            <div>
              <h2>Sizes & Specifications</h2>
              <div style={{ overflowX: 'auto', marginTop: 'var(--space-6)' }}>
                <table className="spec-table">
                  <tbody>
                    <tr><td><strong>Width</strong></td><td>Custom</td></tr>
                    <tr><td><strong>Projection</strong></td><td>Custom</td></tr>
                    <tr><td><strong>Face height</strong></td><td>Custom</td></tr>
                    <tr><td><strong>Material</strong></td><td>Marine-grade aluminium — 1.6mm or 2.0mm</td></tr>
                    <tr><td><strong>Finish</strong></td><td>Powder coat — Dulux or Interpon</td></tr>
                    <tr><td><strong>Faces</strong></td><td>Top, Front (no bottom return)</td></tr>
                    <tr><td><strong>Variation</strong></td><td>Perforated front face available</td></tr>
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
              <h2>Perforated L-Hood</h2>
              <p>
                The L-Hood is available with a perforated front face panel. Perforations allow
                filtered light to pass through the front face while maintaining the overall hood
                form — a popular choice for facades where solid panels would feel too heavy.
              </p>
              <p style={{ marginTop: 'var(--space-3)' }}>
                Perforation patterns are available in standard options. Custom patterns available
                on enquiry for larger orders.
              </p>
              <Link href="/request-a-quote" className="btn btn-primary mt-6">
                Ask About Perforated Options
              </Link>
            </div>
            <div className="content-split__image">
              <Image
                src="/images/lhood perforated.avif"
                alt="Perforated L-Hood aluminium window hood — perforated front face detail"
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
              { name: 'U-Hood', href: '/window-hood-range/u-hood', desc: 'Classic three-sided box.' },
              { name: 'J-Hood', href: '/window-hood-range/j-hood', desc: 'Deep bottom return.' },
              { name: 'B-Hood', href: '/window-hood-range/b-hood', desc: 'Full perimeter return.' },
              { name: 'R-Hood', href: '/window-hood-range/r-hood', desc: 'Radius curved front.' },
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

      <CTASection heading="Request a Quote for the L-Hood" body="Custom widths, projections and powder coat colours. Submit your window sizes and we'll prepare a price." cta="Get a Quote" href="/request-a-quote" />
    </>
  );
}
