import Link from 'next/link';

export default function CTASection({
  heading = 'Ready to Specify Hoodee for Your Project?',
  body = 'Get a custom quote for your window hood requirements. Our team works with architects, builders and homeowners across Australia.',
  cta = 'Request a Quote',
  href = '/request-a-quote',
  secondary,
  secondaryHref,
}) {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner__inner">
          <div>
            <h2>{heading}</h2>
            <p>{body}</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', flexShrink: 0 }}>
            <Link href={href} className="btn-white">
              {cta}
            </Link>
            {secondary && secondaryHref && (
              <Link href={secondaryHref} className="btn btn-outline-light">
                {secondary}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
