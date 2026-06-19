import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Architectural Window Hoods | Specifier Resource — Hoodee',
  description:
    'Architectural aluminium window hoods for architects, designers and specifiers. Custom projections, clean profiles, powder coat finishes. Perth-manufactured, Australia-wide supply.',
  alternates: { canonical: '/architectural-window-hoods' },
};

export default function ArchitecturalWindowHoodsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Architectural Window Hoods</span>
            </nav>
            <span className="section-label">For Architects & Designers</span>
            <h1>Architectural Window Hoods</h1>
            <p className="page-hero__lead">
              Precision-fabricated aluminium hoods designed to meet the exacting standards of
              architectural specifications. Clean profiles, custom sizing, full documentation support.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split content-split--wide-left">
            <div className="content-split__image">
              <Image
                src="/images/commercial_hood2.avif"
                alt="Architectural aluminium window hoods on a contemporary commercial facade"
                width={800}
                height={600}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="content-split__text">
              <span className="section-label">Design-Led Manufacturing</span>
              <h2>Fabricated to Your Specification</h2>
              <p>
                Hoodee works directly with architects and interior designers to deliver window hoods
                that match your design intent precisely. We understand that a facade detail is not a
                compromise — it needs to look exactly right and perform reliably over the building
                lifecycle.
              </p>
              <p>
                Specify any width, projection and profile. Nominate your powder-coat colour from the
                Dulux or Interpon range. We fabricate and supply to schedule.
              </p>
              <ul className="icon-list mt-6">
                <li>Custom widths and projections — no standard sizing restrictions</li>
                <li>Five profile options: U, L, J, B and R</li>
                <li>Any Dulux or Interpon powder coat colour</li>
                <li>Technical drawings available on request</li>
                <li>Consistent finish across large project volumes</li>
                <li>Perth manufacture — short lead times within WA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Design Value</span>
            <h2>Why Architects Specify Window Hoods</h2>
          </div>
          <div className="grid-3">
            {[
              {
                icon: '📐',
                title: 'Facade Depth & Shadow Lines',
                desc: 'Window hoods project from the facade plane, creating shadow lines that give a building visual weight, depth and texture — particularly important on flat or rendered facades.',
              },
              {
                icon: '🎨',
                title: 'Material Consistency',
                desc: 'Aluminium powder coat is specifiable to any colour, allowing precise coordination with joinery, cladding and other facade elements.',
              },
              {
                icon: '☀️',
                title: 'Passive Solar Performance',
                desc: 'Correctly projecting hoods provide seasonal shading — blocking high summer sun while admitting lower winter light. A passive solar tool that requires no mechanical systems.',
              },
              {
                icon: '🏗️',
                title: 'Structural Compatibility',
                desc: 'Hoodee hoods fix to the building structure above the window head. They can be specified for masonry, framed and curtain wall constructions.',
              },
              {
                icon: '🔒',
                title: 'Privacy & Security',
                desc: 'A deeply projecting hood reduces sight lines into glazed areas from above, adding privacy on multi-storey buildings without sacrificing daylight.',
              },
              {
                icon: '📄',
                title: 'Documentation Support',
                desc: 'We can provide technical details, dimensions and product information to support your drawing set and specification documents.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="feature-item">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-16)' }}>
            <div>
              <span className="section-label">Specification Notes</span>
              <h2>How to Specify Hoodee</h2>
              <p>
                When specifying Hoodee window hoods in your documentation, you will need to nominate:
              </p>
              <div
                style={{
                  marginTop: 'var(--space-6)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                }}
              >
                {[
                  ['Profile', 'U-Hood / L-Hood / J-Hood / B-Hood / R-Hood'],
                  ['Width', 'Overall hood width (mm) — typically window width + reveal overlap'],
                  ['Projection', 'Distance the hood extends from the building face (mm)'],
                  ['Height', 'Overall hood face height (mm)'],
                  ['Colour', 'Powder coat colour — Dulux or Interpon range reference'],
                  ['Fixing', 'Concealed or exposed, substrate type'],
                ].map(([key, val]) => (
                  <div
                    key={key}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '120px 1fr',
                      gap: 'var(--space-4)',
                      padding: 'var(--space-3)',
                      background: 'var(--color-off-white)',
                      borderRadius: 3,
                      fontSize: 'var(--text-sm)',
                    }}
                  >
                    <strong>{key}</strong>
                    <span style={{ color: '#5C5350' }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="section-label">Profile Reference</span>
              <h2>Available Profiles</h2>
              <p>Five standard profiles, each available in custom sizes.</p>
              <div
                style={{
                  marginTop: 'var(--space-6)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                }}
              >
                {[
                  { code: 'U', name: 'U-Hood', use: 'Standard box profile. Top, front and bottom face.' },
                  { code: 'L', name: 'L-Hood', use: 'Two-sided. Top and front face only. Subtle shading.' },
                  { code: 'J', name: 'J-Hood', use: 'Three-sided with deeper bottom return.' },
                  { code: 'B', name: 'B-Hood', use: 'Box with full perimeter return. Bold presence.' },
                  { code: 'R', name: 'R-Hood', use: 'Radius front face. Curved architectural detail.' },
                ].map(({ code, name, use }) => (
                  <Link
                    key={code}
                    href={`/window-hood-range/${code.toLowerCase()}-hood`}
                    className="link-card"
                    style={{
                      display: 'flex',
                      gap: 'var(--space-4)',
                      padding: 'var(--space-4)',
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        background: 'var(--color-charcoal)',
                        color: 'var(--color-white)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: 'var(--text-lg)',
                        borderRadius: 2,
                        flexShrink: 0,
                      }}
                    >
                      {code}
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: 'var(--text-sm)' }}>{name}</strong>
                      <span style={{ fontSize: 'var(--text-xs)', color: '#5C5350' }}>{use}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Related Resources</span>
            <h2>Specifier Information</h2>
          </div>
          <div className="grid-3">
            <Link href="/technical-specifications" className="link-card">
              <h3>Technical Specifications</h3>
              <p>Material data, fixing details, tolerances and dimensional information.</p>
              <span className="link-card__arrow">→</span>
            </Link>
            <Link href="/custom-window-hoods" className="link-card">
              <h3>Custom Fabrication</h3>
              <p>Non-standard sizes, projections, colours and bespoke requirements.</p>
              <span className="link-card__arrow">→</span>
            </Link>
            <Link href="/projects" className="link-card">
              <h3>Completed Projects</h3>
              <p>Reference installations on residential, commercial and mixed-use developments.</p>
              <span className="link-card__arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        heading="Specify Hoodee for Your Next Project"
        body="Send us your window schedule, project drawings or specifications and we'll provide a detailed quote. We work with architects, project managers and builders."
        cta="Request a Quote"
        href="/request-a-quote"
        secondary="Technical Specifications"
        secondaryHref="/technical-specifications"
      />
    </>
  );
}
