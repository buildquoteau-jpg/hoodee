import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../../components/CTASection';

export const metadata = {
  title: 'J-Hood | Deep Return Aluminium Window Hood — Hoodee',
  description:
    'The Hoodee J-Hood is a three-sided aluminium window hood with a deeper bottom return. Enhanced rain protection and strong shadow lines. Custom sizes, powder coat finishes.',
  alternates: { canonical: '/window-hood-range/j-hood' },
};

export default function JHoodPage() {
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
              <span>J-Hood</span>
            </nav>
            <span className="section-label">Profile</span>
            <h1>J-Hood — Deep Return Aluminium Window Hood</h1>
            <p className="page-hero__lead">
              Three faces — top, front and a deep bottom return — for enhanced rain protection,
              stronger shadow lines and a deliberately weighted architectural detail.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split content-split--wide-left">
            <div className="content-split__image">
              <Image
                src="/images/jhood.avif"
                alt="Hoodee J-Hood aluminium window hood with deep bottom return installed on a building"
                width={800}
                height={600}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="content-split__text">
              <span className="section-label">J-Hood Profile</span>
              <h2>Three Faces with a Deeper Bottom Return</h2>
              <p>
                The J-Hood is similar in form to the U-Hood but features a deeper bottom return
                face. The increased depth of the lower face adds a secondary shadow line and
                provides improved rain shedding, directing water further away from the window head
                detail.
              </p>
              <p>
                The J-Hood is a popular choice on exposed elevations, coastal sites and buildings
                where rain-shedding performance is a priority alongside aesthetic outcome.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="badge badge--rust">Coastal Sites</span>
                <span className="badge badge--rust">Exposed Elevations</span>
                <span className="badge badge--rust">Rain Protection</span>
                <span className="badge badge--rust">Architectural Detail</span>
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
                <li>Coastal and exposed elevations requiring maximum rain deflection</li>
                <li>Facades where a heavier bottom detail is architecturally desirable</li>
                <li>Windows directly above entry areas or outdoor living spaces</li>
                <li>Projects where the underside of the hood will be visible from below</li>
                <li>Commercial buildings requiring strong horizontal banding</li>
              </ul>
            </div>
            <div>
              <h2>Sizes & Specifications</h2>
              <div style={{ overflowX: 'auto', marginTop: 'var(--space-6)' }}>
                <table className="spec-table">
                  <tbody>
                    <tr><td><strong>Width</strong></td><td>Custom</td></tr>
                    <tr><td><strong>Projection</strong></td><td>Custom</td></tr>
                    <tr><td><strong>Front face height</strong></td><td>Custom</td></tr>
                    <tr><td><strong>Bottom return depth</strong></td><td>Custom — deeper than U-Hood standard</td></tr>
                    <tr><td><strong>Material</strong></td><td>Marine-grade aluminium — 1.6mm or 2.0mm</td></tr>
                    <tr><td><strong>Finish</strong></td><td>Powder coat — Dulux or Interpon</td></tr>
                    <tr><td><strong>Faces</strong></td><td>Top, Front, Deep bottom return</td></tr>
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
            <span className="section-label">Other Profiles</span>
            <h2>Also Consider</h2>
          </div>
          <div className="grid-4">
            {[
              { name: 'U-Hood', href: '/window-hood-range/u-hood', desc: 'Classic three-sided box.' },
              { name: 'L-Hood', href: '/window-hood-range/l-hood', desc: 'Two-sided, minimal profile.' },
              { name: 'B-Hood', href: '/window-hood-range/b-hood', desc: 'Full perimeter return.' },
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

      <CTASection heading="Request a Quote for the J-Hood" body="Tell us your window sizes and required projection. We'll fabricate J-Hoods to your exact specification." cta="Get a Quote" href="/request-a-quote" />
    </>
  );
}
