import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../../components/CTASection';

export const metadata = {
  title: 'R-Hood | Radius Aluminium Window Hood — Hoodee',
  description:
    'The Hoodee R-Hood is an aluminium window hood with a curved radius front face. Softened architectural detail, custom sizes and powder coat colours.',
  alternates: { canonical: '/window-hood-range/r-hood' },
};

export default function RHoodPage() {
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
              <span>R-Hood</span>
            </nav>
            <span className="section-label">Profile</span>
            <h1>R-Hood — Radius Aluminium Window Hood</h1>
            <p className="page-hero__lead">
              A softened curved front face sets the R-Hood apart. For projects where a radius form
              is specified in place of sharp right-angle folds.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split content-split--wide-left">
            <div className="content-split__image">
              <Image
                src="/images/r hood.avif"
                alt="Hoodee R-Hood aluminium window hood with radius curved front face installed on facade"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="content-split__text">
              <span className="section-label">R-Hood Profile</span>
              <h2>Curved Front Face — Softened Architectural Form</h2>
              <p>
                The R-Hood replaces the sharp front fold of standard profiles with a curved radius
                transition. The result is a hood that feels softer and more considered — well suited
                to architectural styles that avoid hard-edged industrial detailing.
              </p>
              <p>
                The R-Hood is available in the same custom sizing and powder coat options as all
                other Hoodee profiles. It is particularly popular on residential projects with
                Art Deco or heritage-adjacent styling, and on contemporary projects seeking a
                contrast to sharp angular cladding.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="badge badge--rust">Curved Facade Detail</span>
                <span className="badge badge--rust">Heritage Styling</span>
                <span className="badge badge--rust">Contemporary</span>
                <span className="badge badge--rust">Residential</span>
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
                <li>Residential homes with Art Deco or heritage design references</li>
                <li>Contemporary projects specifying curved facade elements</li>
                <li>Renovations where softened details are preferred over hard angular profiles</li>
                <li>Feature windows requiring a distinctive hood form</li>
                <li>Coastal homes where softer profiles suit the context</li>
              </ul>
            </div>
            <div>
              <h2>Sizes & Specifications</h2>
              <div style={{ overflowX: 'auto', marginTop: 'var(--space-6)' }}>
                <table className="spec-table">
                  <tbody>
                    <tr><td><strong>Width</strong></td><td>Custom</td></tr>
                    <tr><td><strong>Projection</strong></td><td>Custom</td></tr>
                    <tr><td><strong>Radius</strong></td><td>Custom — specify or request standard radius</td></tr>
                    <tr><td><strong>Material</strong></td><td>Marine-grade aluminium — 1.6mm or 2.0mm</td></tr>
                    <tr><td><strong>Finish</strong></td><td>Powder coat — Dulux or Interpon</td></tr>
                    <tr><td><strong>Faces</strong></td><td>Top, Curved front face</td></tr>
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
              { name: 'B-Hood', href: '/window-hood-range/b-hood', desc: 'Full perimeter return.' },
            ].map(({ name, href, desc }) => (
              <Link key={name} href={href} className="link-card">
                <h3>{name}</h3><p>{desc}</p>
                <span className="link-card__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Request a Quote for the R-Hood" body="Specify your radius and window dimensions. We'll fabricate to your exact requirements." cta="Get a Quote" href="/request-a-quote" />
    </>
  );
}
