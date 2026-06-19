import Link from 'next/link';
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Window Hoods Western Australia | WA Manufacturer — Hoodee',
  description:
    'Custom aluminium window hoods for Western Australia. Perth-based manufacturer supplying metro and regional WA. Request a quote from Hoodee.',
  alternates: { canonical: '/window-hoods-western-australia' },
};

export default function WAPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Window Hoods Western Australia</span>
            </nav>
            <span className="section-label">Western Australia</span>
            <h1>Window Hoods Western Australia</h1>
            <p className="page-hero__lead">
              Hoodee is Western Australia&apos;s manufacturer of custom aluminium window hoods.
              We supply Perth metro and regional WA — from Geraldton to Albany, Esperance to
              the Pilbara.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split">
            <div className="content-split__text">
              <span className="section-label">WA Manufacturing</span>
              <h2>Made in Western Australia</h2>
              <p>
                Hoodee fabricates all window hoods from our Perth facility. Manufacturing locally
                in WA means we understand the climate conditions your product will face — intense
                UV, salt air on the coast, high summer temperatures and winter rainfall in the
                south-west.
              </p>
              <p>
                Every hood leaves our facility in marine-grade aluminium with a durable
                thermosetting powder coat finish — specified and tested for WA conditions.
              </p>
              <ul className="icon-list mt-6">
                <li>Perth-based fabrication — the only WA window hood manufacturer</li>
                <li>Marine-grade aluminium suited to coastal WA conditions</li>
                <li>Powder coat UV-rated for WA sun exposure</li>
                <li>Supply to Perth metro, regional and remote WA</li>
                <li>Freight coordinated from Perth to all WA locations</li>
              </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div style={{ padding: 'var(--space-6)', background: 'var(--color-off-white)', borderRadius: 4 }}>
                <h3 style={{ marginBottom: 'var(--space-3)' }}>Perth Metro</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: '#5C5350' }}>
                  Same-week fabrication available for smaller orders. Delivery and pickup options.
                </p>
              </div>
              <div style={{ padding: 'var(--space-6)', background: 'var(--color-off-white)', borderRadius: 4 }}>
                <h3 style={{ marginBottom: 'var(--space-3)' }}>Regional WA</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: '#5C5350' }}>
                  Mandurah, Bunbury, Albany, Geraldton, Kalgoorlie, Port Hedland and all regional centres.
                  Freight arranged from Perth.
                </p>
              </div>
              <div style={{ padding: 'var(--space-6)', background: 'var(--color-off-white)', borderRadius: 4 }}>
                <h3 style={{ marginBottom: 'var(--space-3)' }}>Remote WA</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: '#5C5350' }}>
                  Remote and mining-area projects supplied by arrangement. Contact us for
                  freight cost estimates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="text-center mb-8">
            <span className="section-label">Related</span>
            <h2>Explore More</h2>
          </div>
          <div className="grid-3">
            <Link href="/aluminium-window-hoods-perth" className="link-card">
              <h3>Window Hoods Perth</h3>
              <p>Perth metro orders, local delivery and collection.</p>
              <span className="link-card__arrow">→</span>
            </Link>
            <Link href="/australia-wide-window-hood-supply" className="link-card">
              <h3>Australia-Wide Supply</h3>
              <p>Supplying projects interstate? We freight Australia-wide.</p>
              <span className="link-card__arrow">→</span>
            </Link>
            <Link href="/about" className="link-card">
              <h3>About Hoodee</h3>
              <p>Our story, manufacturing background and WA location.</p>
              <span className="link-card__arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        heading="Supply Your WA Project with Hoodee"
        body="Perth metro or regional WA — we fabricate and deliver your aluminium window hoods. Request a quote today."
        cta="Request a Quote"
        href="/request-a-quote"
      />
    </>
  );
}
