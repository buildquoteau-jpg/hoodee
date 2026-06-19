import Link from 'next/link';
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Window Hood FAQs | Aluminium Window Hoods — Hoodee',
  description:
    'Answers to common questions about Hoodee aluminium window hoods — cost, sizing, installation, powder coat colours, heat reduction, delivery and maintenance.',
  alternates: { canonical: '/window-hood-faqs' },
};

const faqs = [
  {
    category: 'The Product',
    items: [
      {
        q: 'What is an aluminium window hood?',
        a: 'An aluminium window hood is a precision-fabricated shroud that sits above a window or door opening. It projects outward from the wall to provide solar shading, rain deflection and a distinctive architectural detail. Hoodee hoods are made from marine-grade aluminium sheet and finished in powder coat.',
      },
      {
        q: 'What is the difference between a window hood, a window awning and a sun hood?',
        a: 'These terms are often used interchangeably. A window hood (or sun hood, window shroud) typically refers to a rigid aluminium or metal product fixed above a window opening. A window awning may refer to a fabric or louvred product. Hoodee manufactures rigid aluminium window hoods.',
      },
      {
        q: 'What materials are Hoodee window hoods made from?',
        a: 'All Hoodee window hoods are fabricated from marine-grade aluminium alloy (AA3003 or equivalent) in 1.6mm or 2.0mm sheet. The aluminium is then powder coated in a thermosetting polyester finish.',
      },
      {
        q: 'Do window hoods actually reduce heat?',
        a: 'Yes. A correctly proportioned hood blocks direct solar radiation from reaching the glass on north and west-facing windows — particularly during summer when the sun angle is higher. This can meaningfully reduce internal temperatures and lower cooling costs. The depth of the projection determines how much sun is blocked at different times of year.',
      },
    ],
  },
  {
    category: 'Sizing & Custom Options',
    items: [
      {
        q: 'Can I get a custom size window hood?',
        a: 'Yes — every Hoodee window hood is made to order. We fabricate to your specified width, projection and face height. There are no standard off-the-shelf sizes.',
      },
      {
        q: 'What information do I need to order?',
        a: 'You need to provide: window width (or overall hood width), required projection (how far it extends from the wall), face height, profile selection (U/L/J/B/R), powder coat colour and quantity. A drawing or window schedule helps for larger orders.',
      },
      {
        q: 'What is the minimum and maximum width?',
        a: 'Minimum width is approximately 200mm. Maximum width is determined by structural and transport considerations — very wide hoods may require on-site assembly. Contact us for oversized requirements.',
      },
      {
        q: 'Can I mix profiles on the same project?',
        a: 'Yes. Many projects use different profiles on different windows — for example U-Hoods on standard windows and B-Hoods on feature windows. We can quote multiple profiles in a single order.',
      },
    ],
  },
  {
    category: 'Powder Coat & Colour',
    items: [
      {
        q: 'What powder coat colours are available?',
        a: 'The full Dulux Powdertech range and the Interpon range are available. This includes popular architectural colours such as Surfmist, Shale Grey, Monument, Ironstone, Woodland Grey and many more. Gloss, satin and matte sheen options are available.',
      },
      {
        q: 'Can I get a colour-matched powder coat?',
        a: 'Custom colour matching is available on larger orders. Contact us to discuss your requirements.',
      },
      {
        q: 'How durable is the powder coat finish?',
        a: 'Thermosetting polyester powder coat is highly durable. It resists UV degradation, impact, salt air and weathering. With normal care, the finish should maintain its appearance for many years in Australian conditions.',
      },
      {
        q: 'How do I clean and maintain the powder coat?',
        a: 'Regular cleaning with water and a mild detergent is sufficient. Avoid abrasive cleaners or harsh chemicals. Coastal installations should be cleaned more frequently to remove salt build-up.',
      },
    ],
  },
  {
    category: 'Installation',
    items: [
      {
        q: 'Can I install a window hood myself?',
        a: 'Smaller residential hoods can often be installed by a competent handyperson, particularly on timber-framed construction. For masonry, heavier hoods or large commercial projects, we recommend a licensed builder. Appropriate fixing hardware is supplied with the hood.',
      },
      {
        q: 'How is a window hood fixed to the wall?',
        a: 'Most Hoodee hoods are fixed via a concealed bracket system at the top of the hood, which connects to the building structure above the window head. Exposed bracket fixing is also available for structural applications. The appropriate method depends on your wall type and hood size.',
      },
      {
        q: 'Can window hoods be retrofitted over existing windows?',
        a: 'Yes. Retrofitting a window hood above an existing window is one of the most common applications. The window itself does not need to be removed or disturbed.',
      },
    ],
  },
  {
    category: 'Pricing & Delivery',
    items: [
      {
        q: 'How much do Hoodee window hoods cost?',
        a: 'Price depends on the profile, size, quantity and finish. Because every hood is custom-made, we provide a fixed quote once we have your requirements. Submit a quote request with your window sizes and we will respond promptly.',
      },
      {
        q: 'Do you deliver to Perth?',
        a: 'Yes. We are based in Perth and supply to the Perth metro area. Delivery and pickup are both available.',
      },
      {
        q: 'Do you deliver outside of Perth?',
        a: 'Yes. We supply window hoods across Western Australia and Australia-wide. Interstate orders are packed and freight from Perth. Freight cost is included in the quote.',
      },
      {
        q: 'How long does it take to get my order?',
        a: 'Lead time depends on current production schedule and order volume. Typically 2–4 weeks from order confirmation for most residential orders. Larger commercial orders may have longer lead times. We confirm lead time at the time of quote.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>FAQs</span>
            </nav>
            <span className="section-label">Frequently Asked Questions</span>
            <h1>Window Hood FAQs</h1>
            <p className="page-hero__lead">
              Common questions about Hoodee aluminium window hoods — product, sizing, colours,
              installation, pricing and delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
            {faqs.map(({ category, items }) => (
              <div key={category}>
                <h2 style={{ marginBottom: 'var(--space-8)', fontSize: 'var(--text-2xl)' }}>
                  {category}
                </h2>
                <div className="faq-list">
                  {items.map(({ q, a }) => (
                    <div key={q} className="faq-item">
                      <div style={{ padding: 'var(--space-5) 0', borderBottom: '1px solid var(--color-light)' }}>
                        <h3
                          style={{
                            fontSize: 'var(--text-base)',
                            fontWeight: 700,
                            marginBottom: 'var(--space-2)',
                            color: 'var(--color-charcoal)',
                          }}
                        >
                          {q}
                        </h3>
                        <p
                          className="faq-item__answer"
                          style={{ fontSize: 'var(--text-sm)', color: '#5C5350', lineHeight: 1.7, maxWidth: '70ch' }}
                        >
                          {a}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid-3">
            <Link href="/aluminium-window-hoods" className="link-card">
              <h3>About Aluminium Window Hoods</h3>
              <p>Learn more about the product, materials and benefits.</p>
              <span className="link-card__arrow">→</span>
            </Link>
            <Link href="/window-hood-range" className="link-card">
              <h3>Product Range</h3>
              <p>Browse all five Hoodee profiles.</p>
              <span className="link-card__arrow">→</span>
            </Link>
            <Link href="/technical-specifications" className="link-card">
              <h3>Technical Specifications</h3>
              <p>Detailed material, dimension and fixing information.</p>
              <span className="link-card__arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        heading="Still Have a Question?"
        body="Can't find what you're looking for? Get in touch and we'll answer any question about Hoodee window hoods, sizing, colour or pricing."
        cta="Contact Us"
        href="/request-a-quote"
      />
    </>
  );
}
