import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Coaching para profesionales tecnicos',
  description: 'Coaching 1 a 1 para profesionales tecnicos que transicionan a liderazgo.',
  alternates: { canonical: `${siteUrl}/coaching` },
};

export default function CoachingPage() {
  return (
    <SiteShell>
      <main>
        <section className="section bg-[#f6f8f8]">
          <div className="container max-w-4xl">
            <p className="eyebrow">Coaching</p>
            <h1 className="serif mt-3 text-5xl font-bold leading-tight">
              Coaching para profesionales tecnicos que transicionan a liderazgo.
            </h1>
            <div className="mt-6 space-y-4 text-xl text-muted">
              <p>
                Si llegaste a esta pagina, probablemente eres ingeniero, desarrollador, product manager o disenador con 5 a 12 anos de carrera.
              </p>
              <p>
                Alguien te dijo: te toca liderar el equipo. Y cambio el juego. Ya no se trata de ser el mejor tecnico, sino de ayudar a otros a hacer mejor su trabajo.
              </p>
              <p>
                Pase por lo mismo. Tambien soy coach ontologico avanzado certificado. Esa combinacion es la que ofrezco aca.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="serif text-4xl font-bold">Como trabajamos</h2>
              <ul className="mt-6 space-y-3 text-muted">
                <li>• 6 sesiones de 90 minutos distribuidas en 3 meses.</li>
                <li>• Por Google Meet, con confidencialidad total.</li>
                <li>• No vendo sesiones sueltas. El proceso requiere compromiso.</li>
                <li>• Cupo limitado a 6 coachees simultaneos.</li>
              </ul>
            </div>
            <div className="card p-6">
              <h2 className="serif text-3xl font-bold">Inversion</h2>
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
              <p className="mt-5 text-sm text-muted">Se factura al inicio del pack. Opcion de pago en 2 cuotas sin interes.</p>
            </div>
          </div>
        </section>

        <section className="section bg-[#f6f8f8]">
          <div className="container grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="serif text-3xl font-bold">Para quien si</h2>
              <ul className="mt-5 space-y-3 text-muted">
                <li>• Profesionales que lideran por primera vez y se sienten perdidos.</li>
                <li>• Personas en transicion grande de rol, empresa, industria o pais.</li>
                <li>• Perfiles tecnicos que quieren liderar sin perder autenticidad.</li>
              </ul>
            </div>
            <div>
              <h2 className="serif text-3xl font-bold">Para quien no</h2>
              <ul className="mt-5 space-y-3 text-muted">
                <li>• Quien busca que le diga exactamente que hacer con su carrera.</li>
                <li>• Quien necesita terapia psicologica. No soy psicologo.</li>
                <li>• Quien quiere sesiones sueltas sin proceso.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section text-center">
          <div className="container">
            <h2 className="serif text-4xl font-bold">Agenda una sesion exploratoria.</h2>
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
