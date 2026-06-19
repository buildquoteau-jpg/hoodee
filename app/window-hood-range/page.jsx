import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../components/CTASection';
import ProductCard from '../../components/ProductCard';

export const metadata = {
  title: 'Window Hood Range | All Profiles — Hoodee',
  description:
    'Browse the full Hoodee aluminium window hood range. Five profiles — U-Hood, L-Hood, J-Hood, B-Hood, R-Hood — all available in custom sizes and powder coat colours.',
  alternates: { canonical: '/window-hood-range' },
};

const profiles = [
  {
    label: 'Profile',
    title: 'U-Hood',
    description:
      'The classic three-sided box profile. A top, front and bottom face in a clean U-section. The most popular choice for residential and commercial windows.',
    href: '/window-hood-range/u-hood',
    imageSrc: '/images/Uhood.avif',
    imageAlt: 'Hoodee U-Hood aluminium window hood — three-sided box profile installed on building',
  },
  {
    label: 'Profile',
    title: 'L-Hood',
    description:
      'A two-sided angle profile with a top and front face. Subtle, light and well suited to contemporary facades where minimal projection is preferred.',
    href: '/window-hood-range/l-hood',
    imageSrc: '/images/l_hood.avif',
    imageAlt: 'Hoodee L-Hood aluminium window hood — two-sided angle profile',
  },
  {
    label: 'Profile',
    title: 'J-Hood',
    description:
      'Three-sided with a deeper bottom return than the U-Hood. Adds an additional shadow line and provides bottom coverage for greater rain protection.',
    href: '/window-hood-range/j-hood',
    imageSrc: '/images/jhood.avif',
    imageAlt: 'Hoodee J-Hood aluminium window hood — deep bottom return profile',
  },
  {
    label: 'Profile',
    title: 'B-Hood',
    description:
      'The box hood with a full perimeter return — four visible faces for maximum coverage and a strong, deliberate architectural presence.',
    href: '/window-hood-range/b-hood',
    imageSrc: '/images/b_hood.avif',
    imageAlt: 'Hoodee B-Hood aluminium window hood — full box with perimeter return',
  },
  {
    label: 'Profile',
    title: 'R-Hood',
    description:
      'A radius-front profile for projects requiring a curved or softened form. Suits contemporary architectural work where sharp angles are avoided.',
    href: '/window-hood-range/r-hood',
    imageSrc: '/images/r hood.avif',
    imageAlt: 'Hoodee R-Hood aluminium window hood — radius curved front profile',
  },
];

export default function WindowHoodRangePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Window Hood Range</span>
            </nav>
            <span className="section-label">Product Range</span>
            <h1>Hoodee Window Hood Range</h1>
            <p className="page-hero__lead">
              Five aluminium window hood profiles, each available in custom sizes and any
              powder-coat colour. Select your profile and we fabricate to your dimensions.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Choose Your Profile</span>
            <h2>All Hood Profiles</h2>
            <p>
              Each profile offers a different combination of faces, shadow lines and coverage.
              All are available in any width, projection and Dulux or Interpon powder coat colour.
            </p>
          </div>
          <div className="grid-3">
            {profiles.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Comparison</span>
            <h2>Profile Comparison</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Faces</th>
                  <th>Best For</th>
                  <th>Shadow Lines</th>
                  <th>Custom Size</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { p: 'U-Hood', f: 'Top, Front, Bottom', best: 'Most windows — residential & commercial', s: 'Top + bottom', c: 'Yes' },
                  { p: 'L-Hood', f: 'Top, Front', best: 'Contemporary, minimal projection', s: 'Top only', c: 'Yes' },
                  { p: 'J-Hood', f: 'Top, Front, Deep bottom', best: 'Rain exposure, shadow emphasis', s: 'Top + deep bottom', c: 'Yes' },
                  { p: 'B-Hood', f: 'Full perimeter', best: 'Bold architectural statement', s: 'Full perimeter', c: 'Yes' },
                  { p: 'R-Hood', f: 'Top, Curved front', best: 'Curved / softened facade detail', s: 'Radius', c: 'Yes' },
                ].map(({ p, f, best, s, c }) => (
                  <tr key={p}>
                    <td><strong><Link href={`/window-hood-range/${p.toLowerCase().replace('-', '-')}`}>{p}</Link></strong></td>
                    <td>{f}</td>
                    <td>{best}</td>
                    <td>{s}</td>
                    <td>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-16)', alignItems: 'center' }}>
            <div>
              <span className="section-label">All Profiles Share</span>
              <h2>Common Specifications</h2>
              <ul className="icon-list mt-6">
                <li>Marine-grade aluminium substrate (1.6mm or 2.0mm)</li>
                <li>Thermosetting powder coat finish</li>
                <li>Any Dulux or Interpon colour</li>
                <li>Custom width, projection and face height</li>
                <li>Concealed or exposed fixing options</li>
                <li>Supplied flat-packed or pre-assembled</li>
                <li>Available with perforated face panels (selected profiles)</li>
              </ul>
              <Link href="/technical-specifications" className="btn btn-secondary mt-8">
                Full Technical Specifications
              </Link>
            </div>
            <div className="content-split__image">
              <Image
                src="/images/hood_install.avif"
                alt="Aluminium window hood installation — fixing to building structure above window head"
                width={800}
                height={600}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 4 }}
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Choose Your Profile and Request a Quote"
        body="Select any profile from the Hoodee range and send us your window sizes. We'll prepare a custom quote for your project."
        cta="Request a Quote"
        href="/request-a-quote"
        secondary="Custom Window Hoods"
        secondaryHref="/custom-window-hoods"
      />
    </>
  );
}
