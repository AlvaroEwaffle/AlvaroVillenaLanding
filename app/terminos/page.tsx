import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Terminos',
  description: 'Terminos de uso de alvarovillena.cl.',
  alternates: { canonical: `${siteUrl}/terminos` },
};

export default function TerminosPage() {
  return (
    <SiteShell>
      <main>
        <section className="section">
          <div className="container max-w-4xl">
            <h1 className="serif text-5xl font-bold">Terminos de uso</h1>
            <p className="mt-3 text-sm text-muted">Ultima actualizacion: 19 de abril de 2026</p>
            <div className="mt-10 space-y-8 text-muted">
              <section>
                <h2 className="text-xl font-bold text-foreground">1. Uso del sitio</h2>
                <p className="mt-2">Este sitio entrega informacion sobre servicios de consultoria senior, tecnologia, producto y coaching. Usarlo implica aceptar estos terminos.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">2. Servicios profesionales</h2>
                <p className="mt-2">Las llamadas iniciales son exploratorias y sin compromiso. Cualquier servicio contratado se formaliza en una propuesta o contrato separado.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">3. Propiedad intelectual</h2>
                <p className="mt-2">Los textos, estructura, contenidos y materiales de este sitio pertenecen a Alvaro Villena o Villelabs, salvo que se indique lo contrario.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">4. Limitacion de responsabilidad</h2>
                <p className="mt-2">La informacion del sitio es orientativa. Los resultados de cualquier proyecto dependen del contexto, decisiones y ejecucion de cada empresa.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">5. Contacto</h2>
                <p className="mt-2">Para dudas sobre estos terminos, escribe a hola@alvarovillena.cl.</p>
              </section>
            </div>
            <Link href="/" className="btn-secondary mt-10">
              Volver al inicio
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
