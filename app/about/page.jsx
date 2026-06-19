import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'About Hoodee | Perth Window Hood Manufacturer',
  description:
    'Hoodee is a Perth-based manufacturer of custom aluminium window hoods. Learn about our manufacturing background, values and commitment to quality fabrication in Western Australia.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>About</span>
            </nav>
            <span className="section-label">About Hoodee</span>
            <h1>Perth-Made Aluminium Window Hoods</h1>
            <p className="page-hero__lead">
              Hoodee is a Western Australian manufacturer of custom aluminium window hoods.
              We fabricate every product locally and supply to builders, architects and
              homeowners across Australia.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split">
            <div className="content-split__text">
              <span className="section-label">Our Story</span>
              <h2>Built on Fabrication Quality</h2>
              <p>
                Hoodee was established to fill a gap in the Western Australian building product
                market — a locally manufactured, custom aluminium window hood that could meet
                the demands of both residential renovators and large commercial projects alike.
              </p>
              <p>
                Operating from Perth, WA, we fabricate every window hood to order. No standard
                sizes, no imported product compromise — just a precisely made aluminium hood
                built to your specification, finished in powder coat and delivered to your site.
              </p>
              <p>
                Our manufacturing background is in precision aluminium fabrication. We understand
                tolerances, finishes and the practical requirements of product that needs to
                perform reliably in the WA climate — from the UV-intense Perth summer to the
                coastal conditions of Fremantle and beyond.
              </p>
            </div>
            <div className="content-split__image">
              <Image
                src="/images/hoodee.avif"
                alt="Hoodee aluminium window hoods — Perth WA manufacturer"
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
            <span className="section-label">Why Hoodee</span>
            <h2>What Sets Us Apart</h2>
          </div>
          <div className="grid-3">
            {[
              {
                icon: '🏭',
                title: 'Local Manufacturing',
                desc: 'Every hood is fabricated in Perth, WA — not imported. This means tighter tolerances, faster lead times and direct accountability.',
              },
              {
                icon: '📐',
                title: 'Made to Order',
                desc: 'We do not stock standard sizes. Every hood is custom-fabricated to your window dimensions, ensuring a precise fit every time.',
              },
              {
                icon: '🎨',
                title: 'Full Colour Range',
                desc: 'Access to the full Dulux and Interpon powder coat palette, applied in-house to a consistent 60–80 micron finish.',
              },
              {
                icon: '🤝',
                title: 'Direct Communication',
                desc: 'You deal directly with the people who make your product. No sales layers, no overseas supply chain — just straightforward communication.',
              },
              {
                icon: '🏆',
                title: 'Quality Substrate',
                desc: 'Marine-grade aluminium alloy selected for its corrosion resistance and suitability for the WA coastal environment.',
              },
              {
                icon: '🚚',
                title: 'Australia-Wide Supply',
                desc: 'Perth-made and packed for interstate freight. We supply commercial and residential projects across all Australian states.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="feature-item">
                <div className="feature-item__icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-16)', alignItems: 'center' }}>
            <div>
              <span className="section-label">Location</span>
              <h2>Based in Perth, Western Australia</h2>
              <p>
                Hoodee operates from Perth, Western Australia. All fabrication is carried out
                locally. We supply Perth metro directly and ship to regional WA and interstate
                via established freight carriers.
              </p>
              <div style={{ marginTop: 'var(--space-8)', display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link href="/aluminium-window-hoods-perth" className="btn btn-secondary">
                  Window Hoods Perth
                </Link>
                <Link href="/window-hoods-western-australia" className="btn btn-secondary">
                  Window Hoods WA
                </Link>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div className="stat-block">
                <span className="stat-block__value">WA</span>
                <span className="stat-block__label">Manufactured locally in Perth</span>
              </div>
              <div className="stat-block">
                <span className="stat-block__value">5</span>
                <span className="stat-block__label">Profile options, all custom-sized</span>
              </div>
              <div className="stat-block">
                <span className="stat-block__value">AU</span>
                <span className="stat-block__label">Supply across Australia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Work With Hoodee"
        body="Builders, architects, homeowners and developers are welcome. Tell us about your project and we'll provide a detailed quote."
        cta="Request a Quote"
        href="/request-a-quote"
        secondary="View Product Range"
        secondaryHref="/window-hood-range"
      />
    </>
  );
}
