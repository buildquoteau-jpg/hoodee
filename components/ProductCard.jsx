import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ label, title, description, href, imageSrc, imageAlt }) {
  return (
    <Link href={href} className="product-card">
      <div className="product-card__image">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={480}
            height={360}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              minHeight: 220,
              background: 'var(--color-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-taupe)',
              fontSize: 'var(--text-xs)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </div>
        )}
      </div>
      <div className="product-card__body">
        {label && <span className="product-card__label">{label}</span>}
        <h3 className="product-card__title">{title}</h3>
        {description && <p className="product-card__desc">{description}</p>}
        <span className="product-card__link">View Profile →</span>
      </div>
    </Link>
  );
}
