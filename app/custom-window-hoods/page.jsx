import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Custom Aluminium Window Hoods | Made to Order — Hoodee',
  description:
    'Custom aluminium window hoods fabricated to your exact width, projection and colour. Any size, any powder coat, five profiles. Request a quote from Hoodee WA.',
  alternates: { canonical: '/custom-window-hoods' },
};

export default function CustomWindowHoodsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/aluminium-window-hoods">Aluminium Window Hoods</Link>
              <span>/</span>
              <span>Custom Window Hoods</span>
            </nav>
            <span className="section-label">Custom Fabrication</span>
            <h1>Custom Aluminium Window Hoods</h1>
            <p className="page-hero__lead">
              No standard sizes, no compromises. Every Hoodee window hood is fabricated to your
              exact dimensions — any width, any projection, any colour.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split">
            <div className="content-split__text">
              <span className="section-label">How It Works</span>
              <h2>Made to Your Measurements</h2>
              <p>
                Hoodee does not sell off-the-shelf window hoods. Every product is made to order,
                which means your hood will fit your window exactly — not approximately. Supply your
                window width, required projection and selected profile, and we take it from there.
              </p>
              <p>
                Custom fabrication allows us to accommodate non-standard window sizes, unusual
                projections, perforated faces, compound folds and project-specific colour
                requirements — all within a consistent manufacturing process.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/request-a-quote" className="btn btn-primary">
                  Get a Custom Quote
                </Link>
                <Link href="/window-hood-range" className="btn btn-secondary">
                  View Profiles
                </Link>
              </div>
            </div>
            <div className="content-split__image">
              <Image
                src="/images/custom_hood.avif"
                alt="Custom aluminium window hood fabricated to bespoke dimensions"
                width={800}
                height={600}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">What We Can Do</span>
            <h2>Custom Options Available</h2>
          </div>
          <div className="grid-3">
            {[
              {
                title: 'Any Width',
                desc: 'From narrow highlight windows to wide ribbon glazing — we cut every hood to your specified overall width with consistent tolerances.',
              },
              {
                title: 'Any Projection',
                desc: 'Specify the depth you need: a shallow 50mm projection or a deep 300mm+ overhang. We calculate the fold and sheet requirements accordingly.',
              },
              {
                title: 'Any Height',
                desc: 'The front face height can be varied to change the visual weight of the hood and the amount of sky view it blocks.',
              },
              {
                title: 'Powder Coat Colour',
                desc: 'Full Dulux and Interpon powder coat range available. Gloss, satin and matte sheen options. Custom colour matching available on large orders.',
              },
              {
                title: 'Perforated Face Options',
                desc: 'Perforated aluminium face panels are available on selected profiles, allowing light filtration while maintaining a solid architectural form.',
              },
              {
                title: 'Compound Profiles',
                desc: 'Multiple folds and returns are available on bespoke orders, allowing more complex hood profiles for architectural feature windows.',
              },
            ].map(({ title, desc }) => (
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
          <div className="text-center mb-12">
            <span className="section-label">The Process</span>
            <h2>How to Order Custom Window Hoods</h2>
          </div>
          <div className="grid-4" style={{ gap: 'var(--space-8)' }}>
            {[
              { step: '01', title: 'Send Your Requirements', desc: 'Supply window sizes, profile choice, projection and powder-coat colour. A drawing or window schedule helps.' },
              { step: '02', title: 'We Prepare a Quote', desc: 'We confirm the specification and provide a fixed price with lead time. No hidden costs.' },
              { step: '03', title: 'Approve & We Fabricate', desc: 'Once you approve, we cut, fold and finish your hoods in our Perth facility.' },
              { step: '04', title: 'Delivery or Collection', desc: 'Hoods are packed and dispatched. We supply across WA and Australia-wide by freight.' },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: 'var(--text-3xl)',
                    color: 'var(--color-light)',
                    lineHeight: 1,
                  }}
                >
                  {step}
                </span>
                <h3 style={{ fontSize: 'var(--text-lg)' }}>{title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: '#5C5350' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-16)' }}>
            <div>
              <span className="section-label">What to Supply</span>
              <h2>Information We Need</h2>
              <p>To prepare an accurate quote, please supply the following:</p>
              <ul className="icon-list mt-6">
                <li>Window width(s) in mm</li>
                <li>Required hood projection in mm</li>
                <li>Hood face height in mm</li>
                <li>Profile selection (U / L / J / B / R)</li>
                <li>Powder coat colour (Dulux or Interpon reference)</li>
                <li>Quantity per size</li>
                <li>Project location and required delivery date</li>
              </ul>
              <Link href="/request-a-quote" className="btn btn-primary mt-8">
                Submit Your Requirements
              </Link>
            </div>
            <div>
              <span className="section-label">Custom Project</span>
              <h2>Need Something Unique?</h2>
              <p>
                If your project has requirements outside our standard custom service — oversized
                hoods, compound profiles, unusual materials or tight tolerances — contact us to
                discuss. We have experience across a wide range of fabrication challenges and prefer
                to talk through complex requirements before quoting.
              </p>
              <div
                style={{
                  marginTop: 'var(--space-8)',
                  padding: 'var(--space-6)',
                  background: 'var(--color-off-white)',
                  borderRadius: 4,
                  borderLeft: '3px solid var(--color-rust)',
                }}
              >
                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-charcoal)', maxWidth: 'none' }}>
                  Architects and designers are welcome to submit preliminary project enquiries at
                  any design stage — we can advise on feasibility and provide indicative pricing
                  before your specification is finalised.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Start Your Custom Quote"
        body="Tell us your window sizes and we'll fabricate hoods to fit exactly. Enquiries welcome from builders, architects, homeowners and developers."
        cta="Request a Quote"
        href="/request-a-quote"
        secondary="View Profiles"
        secondaryHref="/window-hood-range"
      />
    </>
  );
}
