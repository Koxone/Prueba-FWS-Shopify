import '@/app/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import OptimizedProviders from '@/providers/optimized/OptimizedProviders';
import OptimizedPageTransition from '@/components/optimized/OptimizedPageTransition';
import {
  MemoizedHeader,
  MemoizedFooter,
  MemoizedBottomNav,
  MemoizedCart,
} from '@/components/optimized/MemoizedComponents';
import { Analytics } from '@vercel/analytics/next';
import SplashScreen from '@/components/PWA/Splash';
import GoogleAnalytics from '@/components/Analytics/GoogleAnalytics';
import UTMTracker from '@/components/Analytics/UTMTracker';

export const metadata = {
  title: {
    default: 'FitWorld Shop',
    template: '%s | FitWorld Shop',
  },
  description:
    'Tienda en línea moderna y responsiva especializada en vitaminas, suplementos y ropa deportiva. Descubre productos de calidad para tu salud, rendimiento y estilo de vida activo en FitWorld Shop.',
  keywords: [
    'vitaminas',
    'suplementos',
    'ropa deportiva',
    'ropa de gimnasio',
    'creatina',
    'proteína',
    'quemadores de grasa',
    'tienda fitness',
    'tienda online',
    'ecommerce méxico',
    'shopify méxico',
    'next.js tienda',
    'tailwind css ecommerce',
    'ropa activa para hombre y mujer',
  ],
  metadataBase: new URL('https://fitworldshop.koxland.dev'),
  openGraph: {
    title: 'FitWorld Shop',
    description:
      'Explora vitaminas, suplementos de alto rendimiento y ropa deportiva en FitWorld Shop. Vive una experiencia moderna, rápida y enfocada en tu bienestar.',
    url: 'https://fitworldshop.koxland.dev',
    siteName: 'FitWorld Shop',
    images: [
      {
        url: 'https://fitworldshop.koxland.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FitWorld Shop - Vitaminas, suplementos y ropa deportiva premium',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: 'large',
      maxSnippet: -1,
    },
  },
  authors: [{ name: 'Kox', url: 'https://github.com/Koxone' }],
  creator: 'Kox',
  publisher: 'FitWorld Shop',
  alternates: {
    canonical: 'https://fitworldshop.koxland.dev',
    languages: {
      'es-MX': 'https://fitworldshop.koxland.dev',
      'en-US': 'https://fitworldshop.koxland.dev/en',
    },
  },
  category: 'ecommerce',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body>
        <UTMTracker />
        <GoogleAnalytics />
        <SplashScreen />
        <OptimizedProviders>
          <MemoizedHeader />
          <OptimizedPageTransition>{children}</OptimizedPageTransition>
          <MemoizedFooter />
          <MemoizedBottomNav />
          <MemoizedCart />
        </OptimizedProviders>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
