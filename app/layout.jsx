import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Providers from '../components/Providers';

export const metadata = {
  metadataBase: new URL('https://www.hoodee.com.au'),
  title: {
    default: 'Hoodee | Aluminium Window Hoods Australia',
    template: '%s | Hoodee Window Hoods',
  },
  description:
    'Hoodee manufactures premium custom aluminium window hoods and architectural window hoods in Western Australia. Powder coated, built to last. Supply Australia-wide.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Hoodee',
  },
  icons: {
    icon: '/images/hoodee_logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
