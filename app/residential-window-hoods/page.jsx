import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Residential Aluminium Window Hoods | Homes & Renovations — Hoodee',
  description:
    'Custom aluminium window hoods for homes and renovations in Perth and WA. Reduce heat, protect glazing and lift the look of your facade. Request a quote from Hoodee.',
  alternates: { canonical: '/residential-window-hoods' },
};

export default function ResidentialWindowHoodsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Residential Window Hoods</span>
            </nav>
            <span className="section-label">Residential</span>
            <h1>Residential Aluminium Window Hoods</h1>
            <p className="page-hero__lead">
              Upgrade your home with a precision-made aluminium window hood. Reduce heat, protect
              your windows and add a clean architectural detail to your facade — all in one product.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split">
            <div className="content-split__text">
              <span className="section-label">For Your Home</span>
              <h2>Window Hoods for Homes and Renovations</h2>
              <p>
                Whether you&apos;re building new, extending or renovating, a Hoodee window hood
                adds real functional and aesthetic value to your home. In the Western Australian
                climate, direct sun through unshaded glazing is a major source of internal heat
                gain — a well-sized hood can dramatically reduce this.
              </p>
              <p>
                Hoodee residential hoods are the same quality as our commercial product —
                marine-grade aluminium, powder coated in your chosen colour, fabricated to
                your exact window dimensions.
              </p>
              <ul className="icon-list mt-6">
                <li>Reduces solar heat gain — lower cooling costs</li>
                <li>Protects windows from rain and debris</li>
                <li>Adds a clean, architectural finish to any facade</li>
                <li>Available in any Dulux or Interpon powder coat colour</li>
                <li>Custom-sized to your windows — no standard sizing compromises</li>
                <li>Suitable for new builds and retrofit over existing windows</li>
              </ul>
              <Link href="/request-a-quote" className="btn btn-primary mt-8">
                Get a Residential Quote
              </Link>
            </div>
            <div className="content-split__image">
              <Image
                src="/images/uhood shed house.avif"
                alt="Aluminium window hoods installed on a residential home in Western Australia"
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
            <span className="section-label">Why Homeowners Choose Hoodee</span>
            <h2>What a Window Hood Does for Your Home</h2>
          </div>
          <div className="grid-3">
            {[
              {
                icon: '🌡️',
                title: 'Reduce Internal Heat',
                desc: 'Direct sun through unshaded glazing is one of the biggest sources of summer heat in Perth homes. A hood blocks that direct radiation before it reaches the glass.',
              },
              {
                icon: '🌧️',
                title: 'Protect Your Windows',
                desc: 'Rain deflected away from windows means cleaner glass, less mould around frames and longer-lasting seals. Particularly valuable in south-west WA where rain is wind-driven.',
              },
              {
                icon: '🏠',
                title: 'Lift Your Curb Appeal',
                desc: 'A powder-coated aluminium hood in the right colour adds a deliberate architectural detail that makes a home look designed rather than plain.',
              },
              {
                icon: '🛠️',
                title: 'Retrofit Friendly',
                desc: 'Hoodee hoods can be retrofitted above existing windows without disrupting the window or internal linings. A builder or competent handyperson can install them.',
              },
              {
                icon: '🎨',
                title: 'Match Your Palette',
                desc: 'From classic Surfmist to deep Ironstone, your hood colour can match your roof, fascia, joinery or cladding — any Dulux or Interpon colour available.',
              },
              {
                icon: '📐',
                title: 'Made to Your Windows',
                desc: 'Every hood is fabricated to your exact window width and the projection you specify. No standard sizes that almost fit.',
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
              <span className="section-label">Getting Started</span>
              <h2>How to Order for Your Home</h2>
              <p>Ordering residential hoods is straightforward:</p>
              <ol
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                  marginTop: 'var(--space-6)',
                  paddingLeft: 'var(--space-4)',
                  listStyle: 'decimal',
                  color: '#3D3633',
                }}
              >
                <li>Measure your window widths (outside edge to outside edge).</li>
                <li>Decide on your required projection (how far the hood extends from the wall).</li>
                <li>Choose your profile — U, L, J, B or R.</li>
                <li>Select a powder coat colour from the Dulux or Interpon range.</li>
                <li>Submit a quote request and we&apos;ll come back to you with a price.</li>
              </ol>
              <Link href="/window-hood-faqs" className="btn btn-secondary mt-8">
                Read Our FAQs
              </Link>
            </div>
            <div>
              <span className="section-label">Not Sure Which Profile?</span>
              <h2>Profile Guide</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
                {[
                  { p: 'U-Hood', rec: 'Most homes — clean box, suits any window' },
                  { p: 'L-Hood', rec: 'Minimal look — top and front face only' },
                  { p: 'J-Hood', rec: 'Extra rain protection — deeper bottom return' },
                  { p: 'B-Hood', rec: 'Feature window — full enclosed box' },
                  { p: 'R-Hood', rec: 'Curved detail — heritage or coastal styles' },
                ].map(({ p, rec }) => (
                  <div
                    key={p}
                    style={{
                      display: 'flex',
                      gap: 'var(--space-4)',
                      alignItems: 'center',
                      padding: 'var(--space-3) var(--space-4)',
                      background: 'var(--color-off-white)',
                      borderRadius: 3,
                    }}
                  >
                    <Link
                      href={`/window-hood-range/${p.toLowerCase().replace('-h', '-h')}`}
                      style={{ fontWeight: 700, minWidth: 70, color: 'var(--color-rust)' }}
                    >
                      {p}
                    </Link>
                    <span style={{ fontSize: 'var(--text-sm)', color: '#5C5350' }}>{rec}</span>
                  </div>
                ))}
              </div>
              <Link href="/window-hood-range" className="btn btn-secondary mt-6">
                View Full Range
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Get a Quote for Your Home"
        body="Measure your windows, pick your profile and we'll fabricate hoods to fit. Perth homeowners welcome — supply WA and Australia-wide."
        cta="Request a Quote"
        href="/request-a-quote"
        secondary="Browse Profiles"
        secondaryHref="/window-hood-range"
      />
    </>
  );
}
