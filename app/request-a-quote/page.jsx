import Link from 'next/link';

export const metadata = {
  title: 'Request for Quotation | Aluminium Window Hoods — Hoodee',
  description:
    'Request a quote for custom aluminium window hoods. Tell us your window sizes, profile and colour and we\'ll prepare a fixed price. Residential, commercial and architectural enquiries welcome.',
  alternates: { canonical: '/request-a-quote' },
};

export default function RequestAQuotePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Request for Quotation</span>
            </nav>
            <span className="section-label">Get a Price</span>
            <h1>Request for Quotation</h1>
            <p className="page-hero__lead">
              Tell us about your project and we&apos;ll prepare a custom quote. Residential,
              commercial and architectural enquiries welcome.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <iframe
            src="https://studio.buildquote.com.au/widget/4cd1b67aa26f04d470ac4d1237aa151822417ba41a902b18"
            width="100%"
            height="700"
            style={{ border: 'none', borderRadius: '12px' }}
            loading="lazy"
            title="Hoodee Products"
          />
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid-3">
            <div className="feature-item">
              <h3>Supply Your Dimensions</h3>
              <p>Window width, projection and face height in millimetres. A drawing or window schedule helps for larger orders.</p>
            </div>
            <div className="feature-item">
              <h3>Choose Your Colour</h3>
              <p>Any Dulux Powdertech or Interpon powder coat colour. We&apos;ll confirm availability and provide the exact colour reference.</p>
            </div>
            <div className="feature-item">
              <h3>We Quote with Freight</h3>
              <p>Your quote will include fabrication and delivery to your project location — Perth metro, regional WA or interstate.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
