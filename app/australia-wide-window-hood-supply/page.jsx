import Link from 'next/link';
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Aluminium Window Hoods Australia-Wide Supply — Hoodee',
  description:
    'Hoodee supplies custom aluminium window hoods to builders, architects and homeowners across Australia. Perth-manufactured, freight-packed, delivered nationwide.',
  alternates: { canonical: '/australia-wide-window-hood-supply' },
};

export default function AustraliaWidePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Australia-Wide Supply</span>
            </nav>
            <span className="section-label">National Supply</span>
            <h1>Aluminium Window Hoods — Australia-Wide Supply</h1>
            <p className="page-hero__lead">
              Hoodee manufactures in Perth and supplies custom aluminium window hoods to
              projects across Australia. Well-packed, freight-ready and delivered to your site.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split">
            <div className="content-split__text">
              <span className="section-label">How National Supply Works</span>
              <h2>Perth Fabrication, Nationwide Delivery</h2>
              <p>
                Hoodee fabricates all window hoods from our Perth workshop. For orders destined
                for interstate projects, hoods are packed flat with protective packaging and
                dispatched by road freight. We work with established freight carriers and can
                coordinate delivery to building sites, trade yards or residential addresses
                across Australia.
              </p>
              <p>
                Remote or large project delivery can be staged to match construction programme.
                Talk to us about your timeline and we&apos;ll advise on lead time and freight
                planning.
              </p>
              <ul className="icon-list mt-6">
                <li>Freight-packed for road transport — hoods arrive protected and ready to install</li>
                <li>Supply to NSW, VIC, QLD, SA, TAS, NT and ACT</li>
                <li>Staged delivery available for large commercial projects</li>
                <li>Freight cost quoted at time of order</li>
                <li>Remote area delivery by arrangement</li>
              </ul>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)' }}>
                {[
                  { state: 'WA', note: 'Metro & regional — Perth based' },
                  { state: 'NSW', note: 'Sydney, regional NSW' },
                  { state: 'VIC', note: 'Melbourne, regional VIC' },
                  { state: 'QLD', note: 'Brisbane, regional QLD' },
                  { state: 'SA', note: 'Adelaide, regional SA' },
                  { state: 'NT', note: 'Darwin, Top End' },
                  { state: 'TAS', note: 'Hobart, regional TAS' },
                  { state: 'ACT', note: 'Canberra region' },
                ].map(({ state, note }) => (
                  <div
                    key={state}
                    style={{
                      padding: 'var(--space-4)',
                      background: 'var(--color-off-white)',
                      borderRadius: 4,
                      borderLeft: '3px solid var(--color-rust)',
                    }}
                  >
                    <strong style={{ display: 'block', fontSize: 'var(--text-lg)', color: 'var(--color-charcoal)' }}>
                      {state}
                    </strong>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-taupe)' }}>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-16)' }}>
            <div>
              <span className="section-label">Specifying Remotely</span>
              <h2>Ordering Without Being in Perth</h2>
              <p>
                Many Hoodee orders are placed by interstate architects, builders and homeowners
                who never visit our facility. The quoting and ordering process works entirely
                by email and phone:
              </p>
              <ol style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-6)', paddingLeft: 'var(--space-4)', listStyle: 'decimal', color: '#3D3633' }}>
                <li>Submit your window schedule, drawings or measurements via the quote form.</li>
                <li>We prepare and send a fixed quote with freight cost included.</li>
                <li>On approval, we fabricate and keep you updated on progress.</li>
                <li>Hoods are dispatched and tracked — you receive notification on delivery.</li>
              </ol>
            </div>
            <div>
              <span className="section-label">What to Expect</span>
              <h2>Freight and Delivery Notes</h2>
              <ul className="icon-list mt-6">
                <li>All hoods are packaged flat with foam or cardboard protection</li>
                <li>Larger orders are palletised for safe road freight handling</li>
                <li>Freight costs are calculated based on size, weight and destination</li>
                <li>Estimated delivery timeframes are provided at quote stage</li>
                <li>Authority to leave instructions can be arranged for unattended sites</li>
                <li>Insurance available for high-value orders</li>
              </ul>
              <Link href="/request-a-quote" className="btn btn-primary mt-8">
                Get a Quote with Freight
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Specify Hoodee for Your Interstate Project"
        body="We supply custom aluminium window hoods to builders and architects anywhere in Australia. Tell us your requirements and we'll include freight in the quote."
        cta="Request a Quote"
        href="/request-a-quote"
      />
    </>
  );
}
