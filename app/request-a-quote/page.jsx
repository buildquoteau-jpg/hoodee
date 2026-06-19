'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RequestAQuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    productType: '',
    quantity: '',
    windowSizes: '',
    preferredContact: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                width: 64,
                height: 64,
                background: 'rgba(122,64,48,0.12)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-6)',
                fontSize: '1.75rem',
              }}
            >
              ✓
            </div>
            <h1>Enquiry Received</h1>
            <p style={{ marginTop: 'var(--space-4)', maxWidth: '45ch', margin: 'var(--space-4) auto 0' }}>
              Thanks for getting in touch. We&apos;ll review your requirements and get back to you
              shortly with a quote.
            </p>
            <Link href="/" className="btn btn-primary btn-lg mt-8" style={{ display: 'inline-flex', marginTop: 'var(--space-8)' }}>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Request a Quote</span>
            </nav>
            <span className="section-label">Get a Price</span>
            <h1>Request a Quote</h1>
            <p className="page-hero__lead">
              Tell us about your project and we&apos;ll prepare a custom quote. Residential,
              commercial and architectural enquiries welcome.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split content-split--wide" style={{ alignItems: 'start' }}>
            <div>
              <span className="section-label">Enquiry Form</span>
              <h2>Tell Us About Your Project</h2>
              <p style={{ marginBottom: 'var(--space-8)', marginTop: 'var(--space-3)' }}>
                Fill in as much detail as you can. Window sizes and a drawing or photograph will
                help us prepare the most accurate quote possible.
              </p>

              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Name <span>*</span>
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email <span>*</span>
                    </label>
                    <input
                      className="form-input"
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="form-input"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="0400 000 000"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="location">
                      Project Location <span>*</span>
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={form.location}
                      onChange={handleChange}
                      placeholder="e.g. Fremantle WA, Melbourne VIC"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="productType">
                      Hood Profile
                    </label>
                    <select
                      className="form-select"
                      id="productType"
                      name="productType"
                      value={form.productType}
                      onChange={handleChange}
                    >
                      <option value="">Select a profile (or not sure)</option>
                      <option value="U-Hood">U-Hood</option>
                      <option value="L-Hood">L-Hood</option>
                      <option value="J-Hood">J-Hood</option>
                      <option value="B-Hood">B-Hood</option>
                      <option value="R-Hood">R-Hood</option>
                      <option value="Not sure">Not sure — please advise</option>
                      <option value="Multiple">Multiple profiles</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quantity">
                      Approximate Quantity
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 6 hoods, 20 units"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="windowSizes">
                    Window Sizes / Dimensions
                  </label>
                  <textarea
                    className="form-textarea"
                    id="windowSizes"
                    name="windowSizes"
                    value={form.windowSizes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="e.g. 3x hoods at 1200mm wide × 150mm projection, 2x hoods at 900mm wide × 150mm projection. Include powder coat colour if known."
                  />
                  <p className="form-hint">List each size separately. Attach drawings or plans if available.</p>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="preferredContact">
                    Preferred Contact Method
                  </label>
                  <select
                    className="form-select"
                    id="preferredContact"
                    name="preferredContact"
                    value={form.preferredContact}
                    onChange={handleChange}
                  >
                    <option value="">Select preference</option>
                    <option value="Email">Email</option>
                    <option value="Phone">Phone call</option>
                    <option value="Either">Either</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Additional Notes
                  </label>
                  <textarea
                    className="form-textarea"
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project — new build, renovation, commercial development, timeframe, specific requirements…"
                  />
                </div>

                <div
                  style={{
                    padding: 'var(--space-4)',
                    background: 'var(--color-off-white)',
                    borderRadius: 4,
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-taupe)',
                    border: '1px solid var(--color-light)',
                  }}
                >
                  <strong style={{ display: 'block', marginBottom: 'var(--space-1)', color: 'var(--color-charcoal)' }}>
                    Drawings Upload
                  </strong>
                  After submitting, you can send drawings, plans or photographs to our email address
                  and reference your enquiry name. This significantly helps us prepare an accurate quote.
                </div>

                <button type="submit" className="btn btn-primary btn-lg form-submit">
                  Submit Enquiry
                </button>
              </form>
            </div>

            <aside style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', position: 'sticky', top: 'calc(var(--header-height) + var(--space-6))' }}>
              <div
                style={{
                  padding: 'var(--space-6)',
                  background: 'var(--color-off-white)',
                  borderRadius: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                }}
              >
                <h3 style={{ fontSize: 'var(--text-lg)' }}>What Happens Next</h3>
                {[
                  { n: '1', t: 'We review your enquiry', d: 'Usually within 1 business day.' },
                  { n: '2', t: 'We may contact you', d: 'To clarify sizing or project details.' },
                  { n: '3', t: 'You receive a fixed quote', d: 'Price per hood, with freight included.' },
                  { n: '4', t: 'Approve and we fabricate', d: 'Lead time confirmed at quote stage.' },
                ].map(({ n, t, d }) => (
                  <div key={n} style={{ display: 'flex', gap: 'var(--space-3)' }}>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        background: 'var(--color-rust)',
                        color: 'var(--color-white)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {n}
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: 'var(--text-sm)' }}>{t}</strong>
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-taupe)' }}>{d}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  padding: 'var(--space-6)',
                  background: 'var(--color-charcoal)',
                  borderRadius: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                  color: 'rgba(255,255,255,0.75)',
                }}
              >
                <h3 style={{ color: 'var(--color-white)', fontSize: 'var(--text-lg)' }}>
                  Before You Quote
                </h3>
                <ul className="icon-list" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  <li>Browse the <Link href="/window-hood-range" style={{ color: 'var(--color-concrete)', textDecoration: 'underline' }}>product range</Link></li>
                  <li>Read the <Link href="/window-hood-faqs" style={{ color: 'var(--color-concrete)', textDecoration: 'underline' }}>FAQs</Link> for sizing and colour help</li>
                  <li>Review <Link href="/technical-specifications" style={{ color: 'var(--color-concrete)', textDecoration: 'underline' }}>technical specs</Link> if specifying</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
