import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Window Hood Projects | Gallery — Hoodee',
  description:
    'See Hoodee aluminium window hoods installed on residential homes, commercial buildings and architectural projects across Perth and Western Australia.',
  alternates: { canonical: '/projects' },
};

const projects = [
  {
    src: '/images/commercial_hood.avif',
    alt: 'Powder-coated aluminium window hoods on a commercial office building in Perth WA',
    caption: 'Commercial Office — Perth CBD',
    profile: 'U-Hood',
    type: 'Commercial',
  },
  {
    src: '/images/commercial_hood1.avif',
    alt: 'Architectural window hoods on a multi-storey commercial development in Western Australia',
    caption: 'Multi-Storey Commercial — Perth WA',
    profile: 'B-Hood',
    type: 'Commercial',
  },
  {
    src: '/images/commercial_hood2.avif',
    alt: 'Custom aluminium window hoods on a contemporary commercial building facade',
    caption: 'Contemporary Commercial Facade',
    profile: 'U-Hood',
    type: 'Commercial',
  },
  {
    src: '/images/uhood shed house.avif',
    alt: 'Aluminium U-Hood window hoods on a residential shed-style home in Western Australia',
    caption: 'Residential Shed House — WA',
    profile: 'U-Hood',
    type: 'Residential',
  },
  {
    src: '/images/lhood perforated.avif',
    alt: 'Perforated L-Hood aluminium window hood — architectural facade detail',
    caption: 'Perforated L-Hood — Residential',
    profile: 'L-Hood (Perforated)',
    type: 'Residential',
  },
  {
    src: '/images/jhood.avif',
    alt: 'J-Hood aluminium window hood with deep bottom return installed on a building',
    caption: 'J-Hood Installation',
    profile: 'J-Hood',
    type: 'Residential',
  },
  {
    src: '/images/b_hood.avif',
    alt: 'B-Hood full box aluminium window hood on a building facade',
    caption: 'B-Hood Feature Window',
    profile: 'B-Hood',
    type: 'Architectural',
  },
  {
    src: '/images/r hood.avif',
    alt: 'R-Hood radius aluminium window hood — curved front face architectural detail',
    caption: 'R-Hood — Curved Facade Detail',
    profile: 'R-Hood',
    type: 'Residential',
  },
  {
    src: '/images/custom_hood.avif',
    alt: 'Custom powder-coated aluminium window hood fabricated to bespoke specification',
    caption: 'Custom Fabrication Project',
    profile: 'Custom',
    type: 'Architectural',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Projects</span>
            </nav>
            <span className="section-label">Completed Installations</span>
            <h1>Hoodee Projects</h1>
            <p className="page-hero__lead">
              Aluminium window hoods installed across residential homes, commercial buildings
              and architectural projects in Perth and Western Australia.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {projects.map((p) => (
              <div key={p.src} className="gallery-item">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={640}
                  height={480}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="gallery-item__caption">{p.caption}</div>
                <div
                  style={{
                    position: 'absolute',
                    top: 'var(--space-3)',
                    left: 'var(--space-3)',
                    background: 'rgba(28,25,24,0.75)',
                    color: 'var(--color-white)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    padding: '2px var(--space-2)',
                    borderRadius: 2,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {p.profile}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-16)', alignItems: 'center' }}>
            <div>
              <span className="section-label">Project Types</span>
              <h2>We Supply All Project Types</h2>
              <p>
                Hoodee window hoods have been installed on single residential homes through to
                large multi-storey commercial developments. If your project needs a window hood,
                we can fabricate it.
              </p>
              <ul className="icon-list mt-6">
                <li>Residential new builds and renovations</li>
                <li>Multi-residential apartments and townhouses</li>
                <li>Commercial office and retail buildings</li>
                <li>Architectural statement facades</li>
                <li>Industrial and warehouse buildings</li>
                <li>Educational and institutional projects</li>
              </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <Link href="/aluminium-window-hoods" className="link-card">
                <h3>Aluminium Window Hoods</h3>
                <p>Learn about the product, materials and benefits.</p>
                <span className="link-card__arrow">→</span>
              </Link>
              <Link href="/window-hood-range" className="link-card">
                <h3>Product Range</h3>
                <p>Browse all five Hoodee profiles.</p>
                <span className="link-card__arrow">→</span>
              </Link>
              <Link href="/technical-specifications" className="link-card">
                <h3>Technical Specifications</h3>
                <p>Materials, dimensions and fixing details.</p>
                <span className="link-card__arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Start Your Hoodee Project"
        body="Tell us about your project and we'll prepare a custom quote. Residential, commercial and architectural enquiries welcome."
        cta="Request a Quote"
        href="/request-a-quote"
        secondary="View Product Range"
        secondaryHref="/window-hood-range"
      />
    </>
  );
}
