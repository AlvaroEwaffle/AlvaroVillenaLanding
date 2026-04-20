import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';

export const metadata: Metadata = {
  title: 'Diagnóstico',
  robots: { index: false, follow: true },
};

export default function DiagnosticoCompatPage() {
  return (
    <SiteShell>
      <main>
        <section className="section">
          <div className="container max-w-3xl">
            <p className="eyebrow">Ruta actualizada</p>
            <h1 className="serif mt-3 text-4xl font-bold">El diagnóstico ahora parte con una llamada breve.</h1>
            <p className="mt-5 text-muted">
              Rehicimos el flujo para cuidar mejor el tiempo: agenda 30 minutos y revisamos si tiene sentido avanzar a un diagnóstico formal.
            </p>
            <Link href="/contacto" className="btn-primary mt-8">
              Ir a contacto
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
