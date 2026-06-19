import Link from 'next/link';
import Image from 'next/image';
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Technical Specifications | Aluminium Window Hoods — Hoodee',
  description:
    'Technical specifications for Hoodee aluminium window hoods. Material data, dimensions, fixing methods, powder coat information and installation notes for specifiers.',
  alternates: { canonical: '/technical-specifications' },
};

export default function TechnicalSpecificationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Technical Specifications</span>
            </nav>
            <span className="section-label">Specifier Information</span>
            <h1>Technical Specifications</h1>
            <p className="page-hero__lead">
              Material data, dimensional information, fixing methods and powder coat specifications
              for architects, engineers and builders specifying Hoodee window hoods.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-16)' }}>
            <div>
              <span className="section-label">Material</span>
              <h2>Substrate Specification</h2>
              <div style={{ overflowX: 'auto', marginTop: 'var(--space-6)' }}>
                <table className="spec-table">
                  <thead>
                    <tr><th>Property</th><th>Specification</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Material</td><td>Aluminium alloy — AA3003 or equivalent</td></tr>
                    <tr><td>Grade</td><td>Marine-grade (H14 temper)</td></tr>
                    <tr><td>Sheet thickness</td><td>1.6mm (standard) / 2.0mm (heavy duty)</td></tr>
                    <tr><td>Density</td><td>2.73 g/cm³</td></tr>
                    <tr><td>Tensile strength</td><td>150–190 MPa</td></tr>
                    <tr><td>Corrosion resistance</td><td>Excellent — suitable for coastal environments</td></tr>
                    <tr><td>Recyclability</td><td>100% recyclable at end of life</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <span className="section-label">Finish</span>
              <h2>Powder Coat Specification</h2>
              <div style={{ overflowX: 'auto', marginTop: 'var(--space-6)' }}>
                <table className="spec-table">
                  <thead>
                    <tr><th>Property</th><th>Specification</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Finish type</td><td>Thermosetting polyester powder coat</td></tr>
                    <tr><td>Application</td><td>Electrostatic spray, oven cured</td></tr>
                    <tr><td>Coat thickness</td><td>60–80 microns (dry film)</td></tr>
                    <tr><td>Colour options</td><td>Full Dulux Powdertech range / Interpon range</td></tr>
                    <tr><td>Sheen options</td><td>Gloss, satin, matte</td></tr>
                    <tr><td>UV resistance</td><td>High — rated for Australian UV exposure</td></tr>
                    <tr><td>Salt spray resistance</td><td>1000+ hours (ASTM B117)</td></tr>
                    <tr><td>Impact resistance</td><td>Excellent — does not chip or peel under normal use</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <span className="section-label">Profiles</span>
          <h2>Profile Dimensions</h2>
          <p style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
            All Hoodee profiles are available in custom widths, projections and face heights.
            The following table describes each profile&apos;s face configuration.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Faces</th>
                  <th>Min Width</th>
                  <th>Max Width</th>
                  <th>Min Projection</th>
                  <th>Max Projection</th>
                  <th>Tolerance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { p: 'U-Hood', f: 'Top, Front, Bottom', min: '200mm', max: 'Custom', minP: '50mm', maxP: 'Custom', t: '±1mm' },
                  { p: 'L-Hood', f: 'Top, Front', min: '200mm', max: 'Custom', minP: '50mm', maxP: 'Custom', t: '±1mm' },
                  { p: 'J-Hood', f: 'Top, Front, Deep bottom', min: '200mm', max: 'Custom', minP: '50mm', maxP: 'Custom', t: '±1mm' },
                  { p: 'B-Hood', f: 'Full perimeter', min: '200mm', max: 'Custom', minP: '100mm', maxP: 'Custom', t: '±1mm' },
                  { p: 'R-Hood', f: 'Top, Curved front', min: '200mm', max: 'Custom', minP: '80mm', maxP: 'Custom', t: '±2mm' },
                ].map(({ p, f, min, max, minP, maxP, t }) => (
                  <tr key={p}>
                    <td><strong><Link href={`/window-hood-range/${p.toLowerCase().replace('-h', '-h')}`}>{p}</Link></strong></td>
                    <td>{f}</td>
                    <td>{min}</td>
                    <td>{max}</td>
                    <td>{minP}</td>
                    <td>{maxP}</td>
                    <td>{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-xs)', color: 'var(--color-taupe)' }}>
            * All dimensions are indicative. Contact Hoodee for specific project requirements that fall outside standard parameters.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-12)' }}>
            <div>
              <span className="section-label">Installation</span>
              <h2>Fixing Methods</h2>
              <p>
                Hoodee window hoods are designed to fix to the building structure above the
                window head. The fixing method depends on the wall substrate and structural
                configuration.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
                {[
                  {
                    method: 'Concealed Top Fix',
                    desc: 'Fixing bracket installed at top of hood, hidden from view. Suitable for most substrates. Most common fixing method.',
                  },
                  {
                    method: 'Exposed Bracket Fix',
                    desc: 'Visible bracket fixed to wall above window. More structural capacity. Suitable for heavy or large projecting hoods.',
                  },
                  {
                    method: 'Direct Fix to Lintel',
                    desc: 'Hood flange fixed directly to structural lintel or beam. Architect and engineer to confirm adequacy.',
                  },
                ].map(({ method, desc }) => (
                  <div
                    key={method}
                    style={{
                      padding: 'var(--space-4)',
                      background: 'var(--color-off-white)',
                      borderRadius: 3,
                      borderLeft: '3px solid var(--color-rust)',
                    }}
                  >
                    <strong style={{ display: 'block', marginBottom: 'var(--space-1)' }}>{method}</strong>
                    <span style={{ fontSize: 'var(--text-sm)', color: '#5C5350' }}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="section-label">Application Notes</span>
              <h2>Installation Notes</h2>
              <ul className="icon-list mt-6">
                <li>Hoods are supplied with fixing hardware appropriate to the specified method</li>
                <li>All fixings should be stainless steel or hot-dipped galvanised to avoid electrolytic corrosion</li>
                <li>Refer to local building codes for structural fixing requirements</li>
                <li>A continuous sealant bead is recommended where the hood meets the wall face</li>
                <li>Hoods on masonry should not be fixed directly into mortar joints</li>
                <li>Installation by a licensed builder or competent tradesperson is recommended</li>
                <li>Hoods should be inspected annually and sealants maintained as required</li>
              </ul>

              <div
                style={{
                  marginTop: 'var(--space-8)',
                  padding: 'var(--space-5)',
                  background: 'var(--color-off-white)',
                  borderRadius: 4,
                  border: '1px solid var(--color-light)',
                }}
              >
                <Image
                  src="/images/hood_install.avif"
                  alt="Aluminium window hood installation — fixing bracket and wall connection detail"
                  width={600}
                  height={400}
                  style={{ width: '100%', borderRadius: 3 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="text-center mb-8">
            <span className="section-label">Downloads</span>
            <h2>Technical Documents</h2>
            <p>
              Detailed technical drawings, specification sheets and product data are available
              on request. Contact Hoodee with your project requirements.
            </p>
          </div>
          <div className="grid-3">
            {[
              { title: 'Product Specification Sheet', desc: 'Materials, finishes and dimensional data for all profiles.' },
              { title: 'Fixing Detail Drawings', desc: 'Concealed and exposed fixing methods — CAD format available on request.' },
              { title: 'Powder Coat Colour Guide', desc: 'Available Dulux and Interpon colours. Custom colour matching enquiries welcome.' },
            ].map(({ title, desc }) => (
              <div
                key={title}
                style={{
                  padding: 'var(--space-6)',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-light)',
                  borderRadius: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                }}
              >
                <h3 style={{ fontSize: 'var(--text-lg)' }}>{title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: '#5C5350' }}>{desc}</p>
                <Link
                  href="/request-a-quote"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-1)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--color-rust)',
                    marginTop: 'var(--space-2)',
                  }}
                >
                  Request Document →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Request Technical Information"
        body="Contact Hoodee for product specifications, fixing details, CAD drawings or any technical question about window hood specification."
        cta="Contact Us"
        href="/request-a-quote"
        secondary="View Product Range"
        secondaryHref="/window-hood-range"
      />
    </>
  );
}
