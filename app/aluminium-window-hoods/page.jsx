import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Aluminium Window Hoods | Custom Fabrication — Hoodee',
  description:
    'Premium aluminium window hoods manufactured to order. Powder coated, custom sizes, five profile options. Supplied to builders, architects and homeowners across Australia.',
  alternates: { canonical: '/aluminium-window-hoods' },
};

export default function AluminiumWindowHoodsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Aluminium Window Hoods</span>
            </nav>
            <span className="section-label">The Product</span>
            <h1>Aluminium Window Hoods</h1>
            <p className="page-hero__lead">
              Custom-fabricated aluminium window hoods built to your exact specifications.
              Five profiles, any size, any powder-coat colour — for residential, commercial
              and architectural applications.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split content-split--wide">
            <div className="content-split__text">
              <span className="section-label">About the Product</span>
              <h2>What Are Aluminium Window Hoods?</h2>
              <p>
                An aluminium window hood is a precision-fabricated shroud that sits above a window
                or glazed door opening. Unlike plastic or fibreglass alternatives, aluminium
                provides superior durability, longevity and aesthetic consistency — maintaining its
                finish for decades with minimal maintenance.
              </p>
              <p>
                Hoodee window hoods are fabricated from marine-grade aluminium sheet and finished
                in powder coat. They are available in five profile configurations, each offering
                different coverage depths and aesthetic outcomes.
              </p>
              <h3 className="mt-8">Why Choose Aluminium?</h3>
              <ul className="icon-list mt-4">
                <li>Corrosion-resistant — suitable for coastal and harsh environments</li>
                <li>Lightweight but structurally rigid</li>
                <li>Holds powder-coat finish without peeling, cracking or UV degradation</li>
                <li>100% recyclable material</li>
                <li>Consistent finish across large volumes</li>
                <li>Compatible with architectural glazing systems</li>
              </ul>
            </div>
            <div className="content-split__image">
              <Image
                src="/images/commercial_hood2.avif"
                alt="Aluminium window hoods installed on a commercial building facade"
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
            <span className="section-label">Benefits</span>
            <h2>Why Specify a Window Hood?</h2>
          </div>
          <div className="grid-3">
            {[
              {
                icon: '☀️',
                title: 'Solar Shading',
                desc: 'Reduces direct solar gain through windows, lowering internal temperatures and cutting cooling costs — particularly valuable in the Western Australian climate.',
              },
              {
                icon: '🌧️',
                title: 'Rain & Debris Protection',
                desc: 'Deflects rain away from glazing and frames, reducing water ingress risk and extending the service life of windows and seals.',
              },
              {
                icon: '🏛️',
                title: 'Facade Articulation',
                desc: 'Creates bold shadow lines and depth that define a facade. Window hoods are a key architectural detail in contemporary and industrial building design.',
              },
              {
                icon: '🎨',
                title: 'Any Colour',
                desc: 'Specify any Dulux or Interpon powder coat colour to match your facade palette, anodised joinery or architectural intent.',
              },
              {
                icon: '📐',
                title: 'Fully Custom',
                desc: 'Every Hoodee hood is fabricated to your window width and required projection. No off-the-shelf sizing compromises.',
              },
              {
                icon: '🔧',
                title: 'Straightforward Installation',
                desc: 'Designed for clean, concealed fixing to the building structure above the window head. Supplied with appropriate fixings and installation guidance.',
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
          <div className="text-center mb-12">
            <span className="section-label">Material & Finish</span>
            <h2>Materials and Finishes</h2>
          </div>
          <div className="grid-2">
            <div>
              <h3>Substrate</h3>
              <p style={{ marginTop: 'var(--space-3)' }}>
                Hoodee hoods are fabricated from 1.6mm and 2.0mm marine-grade aluminium sheet
                (AA3003 or equivalent), offering an excellent strength-to-weight ratio and
                outstanding corrosion resistance.
              </p>
              <h3 className="mt-8">Powder Coating</h3>
              <p style={{ marginTop: 'var(--space-3)' }}>
                All hoods are powder coated to your specified colour. We work with Dulux Powdertech
                and Interpon ranges. Thermosetting powder coat is applied electrostatically and
                cured in an oven for a hard, durable finish that resists impact, UV and weathering.
              </p>
            </div>
            <div>
              <h3>Profile Options</h3>
              <p style={{ marginTop: 'var(--space-3)' }}>
                Five base profiles are available — U-Hood, L-Hood, J-Hood, B-Hood and R-Hood.
                Each offers a different combination of faces, coverage and shadow lines.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['U-Hood', 'L-Hood', 'J-Hood', 'B-Hood', 'R-Hood'].map((p) => (
                  <span key={p} className="badge badge--rust">{p}</span>
                ))}
              </div>
              <h3 className="mt-8">Applications</h3>
              <ul className="icon-list mt-3">
                <li>Residential new builds and renovations</li>
                <li>Multi-residential and apartment developments</li>
                <li>Commercial offices and retail</li>
                <li>Industrial and warehouse facades</li>
                <li>Educational and institutional buildings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Related Pages</span>
            <h2>Explore Further</h2>
          </div>
          <div className="grid-3">
            <Link href="/custom-window-hoods" className="link-card">
              <h3>Custom Window Hoods</h3>
              <p>Bespoke sizing, projections, colours and profile combinations for your specific project.</p>
              <span className="link-card__arrow">→</span>
            </Link>
            <Link href="/architectural-window-hoods" className="link-card">
              <h3>Architectural Window Hoods</h3>
              <p>Documentation and technical detail for architects, designers and specifiers.</p>
              <span className="link-card__arrow">→</span>
            </Link>
            <Link href="/technical-specifications" className="link-card">
              <h3>Technical Specifications</h3>
              <p>Dimensions, tolerances, fixing methods, materials and compliance information.</p>
              <span className="link-card__arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
