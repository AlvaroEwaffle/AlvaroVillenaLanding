import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import BookingConversionTracker from '@/components/BookingConversionTracker';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Reserva confirmada',
  description: 'Tu llamada está agendada.',
  alternates: { canonical: `${siteUrl}/reserva-confirmada` },
  robots: { index: false, follow: false },
};

export default function ReservaConfirmadaPage() {
  return (
    <SiteShell>
      <BookingConversionTracker />
      <main>
        <section className="section">
          <div className="container max-w-3xl">
            <p className="eyebrow">Reserva confirmada</p>
            <h1 className="serif mt-3 text-5xl font-bold leading-tight">Tu llamada está agendada.</h1>
            <div className="mt-6 space-y-4 text-xl text-muted">
              <p>Te envié un email con los detalles de la reunión y el link de Google Meet. Si no lo ves, revisa spam.</p>
              <p>Antes de la llamada, piensa brevemente en qué te gustaría resolver, qué has intentado antes y qué expectativas tienes.</p>
              <p>Nos vemos.</p>
            </div>
            <p className="mt-8 serif text-2xl font-bold">Álvaro</p>
            <Link href="/" className="btn-secondary mt-10">
              Volver al inicio
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
