import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Privacidad',
  description: 'Política de privacidad de alvarovillena.cl.',
  alternates: { canonical: `${siteUrl}/privacidad` },
};

export default function PrivacidadPage() {
  return (
    <SiteShell>
      <main>
        <section className="section">
          <div className="container max-w-4xl">
            <h1 className="serif text-5xl font-bold">Política de privacidad</h1>
            <p className="mt-3 text-sm text-muted">Última actualización: 19 de abril de 2026</p>
            <div className="mt-10 space-y-8 text-muted">
              <section>
                <h2 className="text-xl font-bold text-foreground">1. Responsable</h2>
                <p className="mt-2">El responsable del tratamiento es Álvaro Villena, operando desde Santiago, Chile. Contacto: hola@alvarovillena.cl.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">2. Datos que recopilamos</h2>
                <p className="mt-2">Al agendar una llamada podemos recibir nombre, email, teléfono, empresa, motivo de reunión y datos de atribución como GCLID, UTM, referrer y página de origen.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">3. Finalidad</h2>
                <p className="mt-2">Usamos estos datos para coordinar la llamada, preparar la conversación, medir conversiones de campañas y dar seguimiento comercial si corresponde.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">4. Servicios de terceros</h2>
                <p className="mt-2">El sitio usa Cloudflare Pages, Google Tag Manager/Analytics y Capu para agenda. Cada proveedor procesa datos bajo sus propias políticas y configuraciones.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">5. Tus derechos</h2>
                <p className="mt-2">Puedes solicitar acceso, rectificación o eliminación de tus datos escribiendo a hola@alvarovillena.cl.</p>
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
