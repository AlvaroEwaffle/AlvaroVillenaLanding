import type { Metadata } from 'next';
import GraciasGuard from '@/components/GraciasGuard';
import GraciasContent from '@/components/GraciasContent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Gracias por suscribirte',
  description:
    'Gracias por suscribirte al newsletter de Álvaro Villena. Si después quieres abrir una reunión, primero pasa por el diagnostico de operaciones con IA.',
  alternates: { canonical: `${siteUrl}/gracias` },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Gracias por suscribirte — Álvaro Villena',
    description:
      'Newsletter confirmado. Si luego quieres abrir una reunión, primero pasa por el diagnostico de operaciones con IA.',
    url: `${siteUrl}/gracias`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function GraciasPage() {
  return (
    <GraciasGuard>
      <GraciasContent />
    </GraciasGuard>
  );
}
