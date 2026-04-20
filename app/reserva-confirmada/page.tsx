import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import BookingConversionTracker from '@/components/BookingConversionTracker';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Reserva confirmada',
  description: 'Tu llamada esta agendada.',
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
            <h1 className="serif mt-3 text-5xl font-bold leading-tight">Tu llamada esta agendada.</h1>
            <div className="mt-6 space-y-4 text-xl text-muted">
              <p>Te envie un email con los detalles de la reunion y el link de Google Meet. Si no lo ves, revisa spam.</p>
              <p>Antes de la llamada, piensa brevemente en que te gustaria resolver, que has intentado antes y que expectativas tienes.</p>
              <p>Nos vemos.</p>
            </div>
            <p className="mt-8 serif text-2xl font-bold">Alvaro</p>
            <Link href="/" className="btn-secondary mt-10">
              Volver al inicio
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
