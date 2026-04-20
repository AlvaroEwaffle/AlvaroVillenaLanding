import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Gracias',
  robots: { index: false, follow: true },
};

export default function GraciasCompatPage() {
  return (
    <SiteShell>
      <main>
        <section className="section">
          <div className="container max-w-3xl">
            <p className="eyebrow">Ruta actualizada</p>
            <h1 className="serif mt-3 text-4xl font-bold">Gracias. El flujo principal ahora es por agenda.</h1>
            <p className="mt-5 text-muted">
              Si quieres conversar sobre tu empresa, tecnología o producto, agenda una llamada de 30 minutos.
            </p>
            <Link href="/contacto" className="btn-primary mt-8">
              Agenda una llamada
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
