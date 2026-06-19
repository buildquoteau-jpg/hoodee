import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Aluminium Window Hoods Perth | Local WA Manufacturer — Hoodee',
  description:
    'Looking for aluminium window hoods in Perth? Hoodee manufactures custom powder-coated window hoods locally in Perth, WA. Fast turnaround, any size. Get a quote.',
  alternates: { canonical: '/aluminium-window-hoods-perth' },
};

export default function PerthPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Window Hoods Perth</span>
            </nav>
            <span className="section-label">Perth, Western Australia</span>
            <h1>Aluminium Window Hoods Perth</h1>
            <p className="page-hero__lead">
              Perth&apos;s local manufacturer of custom aluminium window hoods. Fabricated in WA,
              delivered to your site — metro and regional Perth.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split">
            <div className="content-split__text">
              <span className="section-label">Local Manufacturer</span>
              <h2>Window Hoods Made in Perth</h2>
              <p>
                Hoodee is a Perth-based manufacturer of custom aluminium window hoods. We fabricate
                every hood locally, which means shorter lead times, direct communication and no
                freight delays from interstate suppliers.
              </p>
              <p>
                Whether you&apos;re a Perth homeowner looking to shade a north-facing window,
                a builder working on a multi-unit development in the northern suburbs, or an
                architect specifying for a commercial project in the CBD — Hoodee can supply.
              </p>
              <ul className="icon-list mt-6">
                <li>Perth metro delivery available</li>
                <li>Regional WA delivery by arrangement</li>
                <li>Faster lead times than interstate suppliers</li>
                <li>Local fabrication — talk directly with the manufacturer</li>
                <li>All profiles available: U, L, J, B and R</li>
                <li>Any Dulux or Interpon powder coat colour</li>
              </ul>
              <Link href="/request-a-quote" className="btn btn-primary mt-8">
                Get a Perth Quote
              </Link>
            </div>
            <div className="content-split__image">
              <Image
                src="/images/commercial_hood1.avif"
                alt="Aluminium window hoods manufactured in Perth, Western Australia"
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
            <span className="section-label">Perth Applications</span>
            <h2>Why Perth Homes and Buildings Need Window Hoods</h2>
          </div>
          <div className="grid-3">
            {[
              {
                title: 'Perth Sun Angles',
                desc: 'Perth receives some of the highest solar radiation of any capital city. North and west-facing windows without shading are a primary source of summer heat gain.',
              },
              {
                title: 'Perth Summers',
                desc: 'Extended summers with sustained high temperatures make passive solar shading critical for thermal comfort and energy efficiency.',
              },
              {
                title: 'Coastal Conditions',
                desc: 'Coastal Perth properties face salt-laden air and wind-driven rain. Marine-grade aluminium powder coat holds up where timber and cheaper metals fail.',
              },
              {
                title: 'Building Standards',
                desc: 'NatHERS and Section J energy requirements are increasingly demanding shading as a compliance measure in WA residential and commercial construction.',
              },
              {
                title: 'Facade Design',
                desc: 'Contemporary Perth residential architecture frequently uses window hoods as a primary facade element — especially on rendered homes.',
              },
              {
                title: 'Renovation Demand',
                desc: 'Many older Perth homes are being renovated and updated. A window hood retrofit is one of the most cost-effective upgrades for comfort and appearance.',
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
          <div className="grid-2" style={{ gap: 'var(--space-16)' }}>
            <div>
              <span className="section-label">Perth Service Area</span>
              <h2>We Supply Across Perth</h2>
              <ul className="icon-list mt-6">
                <li>Perth CBD and inner suburbs</li>
                <li>Northern suburbs — Joondalup, Wanneroo, Ellenbrook</li>
                <li>Southern suburbs — Fremantle, Cockburn, Mandurah</li>
                <li>Eastern suburbs — Midland, Kalamunda, Armadale</li>
                <li>Western suburbs — Cottesloe, Nedlands, Subiaco</li>
                <li>Regional WA — by arrangement</li>
              </ul>
            </div>
            <div>
              <span className="section-label">Related Pages</span>
              <h2>More Information</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
                <Link href="/window-hoods-western-australia" className="link-card">
                  <h3>Window Hoods Western Australia</h3>
                  <p>Supply across all of WA — metro and regional.</p>
                  <span className="link-card__arrow">→</span>
                </Link>
                <Link href="/australia-wide-window-hood-supply" className="link-card">
                  <h3>Australia-Wide Supply</h3>
                  <p>Supplying projects outside WA? We freight Australia-wide.</p>
                  <span className="link-card__arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Get a Quote from Perth's Window Hood Manufacturer"
        body="Local fabrication, direct communication, fast lead times. Tell us your requirements and we'll price your Perth project."
        cta="Request a Quote"
        href="/request-a-quote"
      />
    </>
  );
}
