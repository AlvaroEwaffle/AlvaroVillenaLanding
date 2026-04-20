import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Coaching para profesionales técnicos',
  description: 'Coaching 1 a 1 para profesionales técnicos que transicionan a liderazgo.',
  alternates: { canonical: `${siteUrl}/coaching` },
};

export default function CoachingPage() {
  return (
    <SiteShell>
      <main>
        <section className="section section-blue">
          <div className="container max-w-4xl">
            <p className="eyebrow">Coaching</p>
            <h1 className="serif mt-3 text-5xl font-bold leading-tight">
              Coaching para profesionales técnicos que transicionan a liderazgo.
            </h1>
            <div className="mt-6 space-y-4 text-xl text-muted">
              <p>
                Si llegaste a esta página, probablemente eres ingeniero, desarrollador, product manager o diseñador con 5 a 12 años de carrera.
              </p>
              <p>
                Alguien te dijo: te toca liderar el equipo. Y cambió el juego. Ya no se trata de ser el mejor técnico, sino de ayudar a otros a hacer mejor su trabajo.
              </p>
              <p>
                Pasé por lo mismo. También soy coach ontológico avanzado certificado. Esa combinación es la que ofrezco acá.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="serif text-4xl font-bold">Cómo trabajamos</h2>
              <ul className="mt-6 space-y-3 text-muted">
                <li>• 6 sesiones de 90 minutos distribuidas en 3 meses.</li>
                <li>• Por Google Meet, con confidencialidad total.</li>
                <li>• No vendo sesiones sueltas. El proceso requiere compromiso.</li>
                <li>• Cupo limitado a 6 coachees simultáneos.</li>
              </ul>
            </div>
            <div className="card p-6">
              <h2 className="serif text-3xl font-bold">Inversión</h2>
              <div className="mt-6 grid gap-4">
                <div className="border-b border-border pb-4">
                  <p className="font-bold">Pack 6 sesiones · 3 meses</p>
                  <p className="text-2xl font-bold text-accent">CLP $750.000</p>
                </div>
                <div>
                  <p className="font-bold">Pack 12 sesiones · 6 meses</p>
                  <p className="text-2xl font-bold text-accent">CLP $1.350.000</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted">Se factura al inicio del pack. Opción de pago en 2 cuotas sin interés.</p>
            </div>
          </div>
        </section>

        <section className="section section-blue">
          <div className="container grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="serif text-3xl font-bold">Para quién sí</h2>
              <ul className="mt-5 space-y-3 text-muted">
                <li>• Profesionales que lideran por primera vez y se sienten perdidos.</li>
                <li>• Personas en transición grande de rol, empresa, industria o país.</li>
                <li>• Perfiles técnicos que quieren liderar sin perder autenticidad.</li>
              </ul>
            </div>
            <div>
              <h2 className="serif text-3xl font-bold">Para quién no</h2>
              <ul className="mt-5 space-y-3 text-muted">
                <li>• Quien busca que le diga exactamente qué hacer con su carrera.</li>
                <li>• Quien necesita terapia psicológica. No soy psicólogo.</li>
                <li>• Quien quiere sesiones sueltas sin proceso.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section text-center">
          <div className="container">
            <h2 className="serif text-4xl font-bold">Agenda una sesión exploratoria.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Vemos si hace sentido trabajar juntos antes de comprometer un proceso.
            </p>
            <Link href="/contacto" className="btn-primary mt-8">
              Agenda 30 minutos
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
