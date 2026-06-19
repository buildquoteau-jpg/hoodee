import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../components/CTASection';
import ProductCard from '../components/ProductCard';

export const metadata = {
  title: 'Hoodee | Aluminium Window Hoods Australia — Perth Manufacturer',
  description:
    'Hoodee manufactures custom aluminium window hoods and architectural window hoods in Perth, Western Australia. Powder coated, built to spec. Request a quote today.',
  alternates: { canonical: '/' },
};

const profiles = [
  {
    label: 'Profile',
    title: 'U-Hood',
    description: 'The classic three-sided box profile. Clean, geometric and suited to most residential and commercial windows.',
    href: '/window-hood-range/u-hood',
    imageSrc: '/images/Uhood.avif',
    imageAlt: 'Hoodee U-Hood aluminium window hood — three-sided box profile',
  },
  {
    label: 'Profile',
    title: 'L-Hood',
    description: 'A two-sided angle profile with a top and front face. Ideal for subtle shading and facade articulation.',
    href: '/window-hood-range/l-hood',
    imageSrc: '/images/l_hood.avif',
    imageAlt: 'Hoodee L-Hood aluminium window hood — two-sided angle profile',
  },
  {
    label: 'Profile',
    title: 'J-Hood',
    description: 'A three-sided profile with a deeper bottom return, adding a shadow line and bottom coverage.',
    href: '/window-hood-range/j-hood',
    imageSrc: '/images/jhood.avif',
    imageAlt: 'Hoodee J-Hood aluminium window hood — deep bottom return profile',
  },
  {
    label: 'Profile',
    title: 'B-Hood',
    description: 'The box hood with a full perimeter return — maximum coverage and a bold architectural presence.',
    href: '/window-hood-range/b-hood',
    imageSrc: '/images/b_hood.avif',
    imageAlt: 'Hoodee B-Hood aluminium window hood — full box profile',
  },
  {
    label: 'Profile',
    title: 'R-Hood',
    description: 'A radius-front profile for projects requiring curved or softened architectural detail.',
    href: '/window-hood-range/r-hood',
    imageSrc: '/images/r hood.avif',
    imageAlt: 'Hoodee R-Hood aluminium window hood — radius front profile',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container">
          <div className="hero__content">
            <span className="hero__eyebrow">Manufactured in Western Australia</span>
            <h1>Aluminium Window Hoods, Built to Last</h1>
            <p className="hero__lead">
              Hoodee supplies custom powder-coated aluminium window hoods to architects, builders,
              designers and homeowners across Australia. Every hood is fabricated to your exact
              specifications.
            </p>
            <div className="hero__actions">
              <Link href="/request-a-quote" className="btn btn-primary btn-lg">
                Request a Quote
              </Link>
              <Link href="/window-hood-range" className="btn btn-outline-light btn-lg">
                View Product Range
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro strip ── */}
      <section className="section section--light">
        <div className="container">
          <div className="grid-4" style={{ gap: 'var(--space-8)' }}>
            <div className="stat-block">
              <span className="stat-block__value">5</span>
              <span className="stat-block__label">Hood profiles</span>
            </div>
            <div className="stat-block">
              <span className="stat-block__value">Any</span>
              <span className="stat-block__label">Custom size or projection</span>
            </div>
            <div className="stat-block">
              <span className="stat-block__value">WA</span>
              <span className="stat-block__label">Manufactured locally</span>
            </div>
            <div className="stat-block">
              <span className="stat-block__value">AU</span>
              <span className="stat-block__label">Supply Australia-wide</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What is a window hood ── */}
      <section className="section">
        <div className="container">
          <div className="content-split content-split--wide">
            <div className="content-split__text">
              <span className="section-label">The Product</span>
              <h2>What Is an Aluminium Window Hood?</h2>
              <p>
                A window hood is a projecting shroud fitted above a window or door opening. It
                provides shade, reduces glare, deflects rain and creates strong shadow lines that
                define a facade. Hoodee hoods are fabricated from marine-grade aluminium and
                finished in a powder-coat colour of your choice.
              </p>
              <p>
                From contemporary residential builds to large-scale commercial developments, Hoodee
                window hoods deliver both function and form — protecting your glazing while adding
                a precision architectural detail.
              </p>
              <ul className="icon-list mt-6">
                <li>Reduces solar heat gain through windows</li>
                <li>Protects glazing from rain, debris and birds</li>
                <li>Creates strong shadow lines and facade depth</li>
                <li>Available in any Dulux or Interpon powder coat colour</li>
                <li>Custom widths, heights and projections to suit any window</li>
                <li>Suits new builds, extensions and renovations</li>
              </ul>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/aluminium-window-hoods" className="btn btn-primary">
                  Learn More
                </Link>
                <Link href="/technical-specifications" className="btn btn-secondary">
                  Technical Specs
                </Link>
              </div>
            </div>
            <div className="content-split__image">
              <Image
                src="/images/commercial_hood1.avif"
                alt="Aluminium window hoods installed on a commercial building facade in Perth, Western Australia"
                width={800}
                height={600}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Product range ── */}
      <section className="section section--light">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Product Range</span>
            <h2>Choose Your Hood Profile</h2>
            <p>
              Five standard profiles, all available in custom sizes and powder-coat colours.
              Each profile suits different architectural applications and shading requirements.
            </p>
          </div>
          <div className="grid-5">
            {profiles.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/window-hood-range" className="btn btn-secondary btn-lg">
              View Full Product Range
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who we serve ── */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Applications</span>
            <h2>Built for Every Project Type</h2>
          </div>
          <div className="grid-3">
            <Link href="/architectural-window-hoods" className="link-card">
              <div
                style={{
                  width: '100%',
                  height: 180,
                  overflow: 'hidden',
                  borderRadius: 3,
                  marginBottom: 'var(--space-4)',
                }}
              >
                <Image
                  src="/images/commercial_hood2.avif"
                  alt="Architectural window hoods on a contemporary building"
                  width={480}
                  height={360}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span className="product-card__label">Architects & Designers</span>
              <h3>Architectural Window Hoods</h3>
              <p>
                Clean profiles, custom projections and comprehensive documentation to support
                your specification.
              </p>
              <span className="link-card__arrow">Explore →</span>
            </Link>

            <Link href="/commercial-window-hoods" className="link-card">
              <div
                style={{
                  width: '100%',
                  height: 180,
                  overflow: 'hidden',
                  borderRadius: 3,
                  marginBottom: 'var(--space-4)',
                }}
              >
                <Image
                  src="/images/commercial_hood.avif"
                  alt="Commercial aluminium window hoods on a multi-storey development"
                  width={480}
                  height={360}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span className="product-card__label">Builders & Developers</span>
              <h3>Commercial Window Hoods</h3>
              <p>
                High-volume supply, consistent quality and efficient lead times for multi-residential
                and commercial projects.
              </p>
              <span className="link-card__arrow">Explore →</span>
            </Link>

            <Link href="/residential-window-hoods" className="link-card">
              <div
                style={{
                  width: '100%',
                  height: 180,
                  overflow: 'hidden',
                  borderRadius: 3,
                  marginBottom: 'var(--space-4)',
                }}
              >
                <Image
                  src="/images/uhood shed house.avif"
                  alt="Residential aluminium window hoods on a Perth home"
                  width={480}
                  height={360}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span className="product-card__label">Homeowners & Renovators</span>
              <h3>Residential Window Hoods</h3>
              <p>
                Upgrade the look of your home, reduce heat and protect your windows with a
                precision-made aluminium hood.
              </p>
              <span className="link-card__arrow">Explore →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Custom section ── */}
      <section className="section section--dark">
        <div className="container">
          <div className="content-split">
            <div className="content-split__image">
              <Image
                src="/images/custom_hood.avif"
                alt="Custom powder-coated aluminium window hood fabricated to bespoke size"
                width={800}
                height={600}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 4 }}
              />
            </div>
            <div className="content-split__text">
              <span className="section-label" style={{ color: 'var(--color-concrete)' }}>
                Custom Fabrication
              </span>
              <h2>Every Hood Is Made to Order</h2>
              <p>
                No two projects are the same, so no two hoods should be either. Hoodee fabricates
                every window hood to your specified width, height and projection. Choose from five
                base profiles, then dial in your size, colour and fixings.
              </p>
              <ul className="icon-list mt-4" style={{ color: 'var(--color-concrete)' }}>
                <li>Any width and projection — standard or non-standard</li>
                <li>Choice of Dulux or Interpon powder coat colours</li>
                <li>Multiple fold and return options across profiles</li>
                <li>Concealed or exposed fixing systems</li>
                <li>Suitable for new builds and retrofits</li>
              </ul>
              <div className="mt-8">
                <Link href="/custom-window-hoods" className="btn btn-primary btn-lg">
                  Custom Window Hoods
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects preview ── */}
      <section className="section section--light">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Recent Work</span>
            <h2>Hoodee in the Field</h2>
            <p>
              From single-home retrofits to large commercial facades, Hoodee window hoods are
              built to perform and designed to impress.
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <Image
                src="/images/commercial_hood1.avif"
                alt="Powder-coated aluminium window hoods on a commercial facade in Perth WA"
                width={640}
                height={480}
              />
              <div className="gallery-item__caption">Commercial — Perth WA</div>
            </div>
            <div className="gallery-item">
              <Image
                src="/images/uhood shed house.avif"
                alt="U-Hood aluminium window hoods on a residential home"
                width={640}
                height={480}
              />
              <div className="gallery-item__caption">Residential — U-Hood</div>
            </div>
            <div className="gallery-item">
              <Image
                src="/images/lhood perforated.avif"
                alt="Perforated L-Hood aluminium window hood architectural detail"
                width={640}
                height={480}
              />
              <div className="gallery-item__caption">L-Hood Perforated</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/projects" className="btn btn-secondary btn-lg">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── Location strip ── */}
      <section className="section section--taupe">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-12)' }}>
            <div>
              <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Where We Are
              </span>
              <h2>Perth-Made. Australia-Wide.</h2>
              <p>
                Hoodee is based in Perth, Western Australia. We manufacture all hoods locally and
                supply projects across WA and Australia-wide. Whether you&apos;re specifying for a
                Perth home or a development in Melbourne, Hoodee can deliver.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/aluminium-window-hoods-perth" className="btn btn-outline-light">
                  Window Hoods Perth
                </Link>
                <Link href="/australia-wide-window-hood-supply" className="btn btn-outline-light">
                  Australia-Wide Supply
                </Link>
              </div>
            </div>
            <div>
              <div className="grid-2" style={{ gap: 'var(--space-4)' }}>
                {['Perth Metro', 'South West WA', 'Regional WA', 'Australia-Wide'].map((loc) => (
                  <div
                    key={loc}
                    style={{
                      padding: 'var(--space-4)',
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: 3,
                      fontSize: 'var(--text-sm)',
                      fontWeight: 600,
                      color: 'var(--color-white)',
                    }}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ teaser ── */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start', gap: 'var(--space-16)' }}>
            <div>
              <span className="section-label">Common Questions</span>
              <h2>Frequently Asked Questions</h2>
              <p>
                Everything you need to know about Hoodee window hoods — from materials and sizing
                to installation and powder coating.
              </p>
              <Link href="/window-hood-faqs" className="btn btn-primary mt-8">
                View All FAQs
              </Link>
            </div>
            <div className="faq-list">
              {[
                {
                  q: 'What material are Hoodee window hoods made from?',
                  a: 'Hoodee window hoods are fabricated from marine-grade aluminium sheet, chosen for its durability, corrosion resistance and light weight.',
                },
                {
                  q: 'Can I get a custom size?',
                  a: 'Yes — every Hoodee hood is made to order. Supply your window width, required projection and profile, and we fabricate to your exact spec.',
                },
                {
                  q: 'What powder coat colours are available?',
                  a: 'We can match any Dulux or Interpon powder coat colour. Custom colours are available on request.',
                },
                {
                  q: 'Do you supply outside of Perth?',
                  a: 'Yes. Hoodee supplies window hoods across Western Australia and Australia-wide.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="faq-item">
                  <div style={{ padding: 'var(--space-5) 0', borderBottom: '1px solid var(--color-light)' }}>
                    <p style={{ fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--color-charcoal)', maxWidth: 'none' }}>
                      {q}
                    </p>
                    <p style={{ fontSize: 'var(--text-sm)', color: '#5C5350' }}>{a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Request a Quote for Your Project"
        body="Tell us about your windows and we'll come back to you with a custom price. Residential, commercial and architectural enquiries welcome."
        cta="Get a Quote"
        href="/request-a-quote"
        secondary="View Product Range"
        secondaryHref="/window-hood-range"
      />
    </>
  );
}
