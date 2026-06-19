import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Commercial Aluminium Window Hoods | Builders & Developers — Hoodee',
  description:
    'Aluminium window hoods for commercial buildings, multi-residential developments and large-scale projects. High-volume fabrication, consistent quality. Perth WA.',
  alternates: { canonical: '/commercial-window-hoods' },
};

export default function CommercialWindowHoodsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Commercial Window Hoods</span>
            </nav>
            <span className="section-label">Commercial Projects</span>
            <h1>Commercial Aluminium Window Hoods</h1>
            <p className="page-hero__lead">
              High-volume aluminium window hoods for builders, developers and commercial project
              teams. Consistent quality, reliable lead times and a product built to handle
              demanding installation schedules.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split">
            <div className="content-split__text">
              <span className="section-label">Built for Volume</span>
              <h2>Window Hoods for Commercial Projects</h2>
              <p>
                Multi-residential developments, apartment buildings, offices, retail and
                institutional projects all require window hoods that are consistent in size,
                finish and quality — across every unit and every elevation. Hoodee delivers this
                consistency because every hood is fabricated in a controlled manufacturing
                environment to fixed specifications.
              </p>
              <p>
                We work with builders, project managers and procurement teams to understand
                project schedules and supply accordingly. Where a project requires staged delivery,
                we can plan fabrication and dispatch to suit.
              </p>
              <ul className="icon-list mt-6">
                <li>Consistent finish and dimension across large quantities</li>
                <li>Staged delivery available to suit construction program</li>
                <li>Single contact for quoting, ordering and delivery</li>
                <li>Perth fabrication — competitive lead times within WA</li>
                <li>Australia-wide freight available</li>
                <li>Any Dulux or Interpon powder coat colour</li>
              </ul>
            </div>
            <div className="content-split__image">
              <Image
                src="/images/commercial_hood.avif"
                alt="Commercial aluminium window hoods on a multi-storey building in Perth WA"
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
            <span className="section-label">Project Types</span>
            <h2>Suitable Commercial Applications</h2>
          </div>
          <div className="grid-3">
            {[
              { title: 'Multi-Residential', desc: 'Apartments, townhouses and villas. Consistent hoods across all windows for a unified facade.' },
              { title: 'Commercial Office', desc: 'Corporate facades where a clean, precise product is expected.' },
              { title: 'Retail & Mixed Use', desc: 'Ground floor retail frontages and mixed-use developments with varied window types.' },
              { title: 'Hospitality', desc: 'Hotels, serviced apartments and hospitality venues where facade quality is non-negotiable.' },
              { title: 'Education', desc: 'Schools, TAFEs and university buildings requiring durable, low-maintenance facade elements.' },
              { title: 'Industrial & Warehouse', desc: 'Tilt-slab and industrial buildings with large windows requiring sun and rain protection.' },
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
          <div className="content-split">
            <div>
              <span className="section-label">Gallery</span>
              <h2>Commercial Installations</h2>
              <p>
                Hoodee window hoods have been installed on commercial and multi-residential
                projects across Western Australia. Below are examples of completed installations.
              </p>
              <Link href="/projects" className="btn btn-secondary mt-6">
                View All Projects
              </Link>
            </div>
            <div style={{ display: 'grid', gap: 'var(--space-4)', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div style={{ borderRadius: 4, overflow: 'hidden', aspectRatio: '4/3' }}>
                <Image
                  src="/images/commercial_hood1.avif"
                  alt="Powder-coated aluminium window hoods on a commercial facade"
                  width={480}
                  height={360}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ borderRadius: 4, overflow: 'hidden', aspectRatio: '4/3' }}>
                <Image
                  src="/images/commercial_hood2.avif"
                  alt="Architectural aluminium window hoods on a multi-storey commercial development"
                  width={480}
                  height={360}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="text-center mb-8">
            <h2>Related Information</h2>
          </div>
          <div className="grid-3">
            <Link href="/architectural-window-hoods" className="link-card">
              <h3>Architectural Specification</h3>
              <p>Technical detail and specification support for architects and designers.</p>
              <span className="link-card__arrow">→</span>
            </Link>
            <Link href="/technical-specifications" className="link-card">
              <h3>Technical Specifications</h3>
              <p>Materials, dimensions, fixing methods and compliance information.</p>
              <span className="link-card__arrow">→</span>
            </Link>
            <Link href="/australia-wide-window-hood-supply" className="link-card">
              <h3>Australia-Wide Supply</h3>
              <p>Supply chain, freight and logistics for projects outside Perth.</p>
              <span className="link-card__arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        heading="Quote Your Commercial Project"
        body="Send us your window schedule or drawings and we'll prepare a commercial quote. We work with builders, project managers and procurement teams."
        cta="Request a Quote"
        href="/request-a-quote"
      />
    </>
  );
}
