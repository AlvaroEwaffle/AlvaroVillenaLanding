import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import CapuSchedulerEmbed from '@/components/CapuSchedulerEmbed';
import { CONTACT_EMAIL, LINKEDIN_URL } from '@/lib/vilo';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Agenda una llamada de 30 minutos con Alvaro Villena.',
  alternates: { canonical: `${siteUrl}/contacto` },
};

const expectations = [
  ['Minutos 0 a 5', 'Me cuentas que hace tu empresa y que te trae a buscar asesoria externa.'],
  ['Minutos 5 a 20', 'Te hago preguntas especificas sobre operacion, tecnologia, intentos pasados, presupuesto y urgencia real.'],
  ['Minutos 20 a 25', 'Te digo directo si te puedo ayudar o no, y que modalidad podria calzar.'],
  ['Minutos 25 a 30', 'Definimos proximos pasos concretos si hay interes mutuo. Sin presion.'],
];

export default function ContactoPage() {
  return (
    <SiteShell>
      <main>
        <section className="section bg-[#f6f8f8]">
          <div className="container">
            <p className="eyebrow">Contacto</p>
            <h1 className="serif mt-3 max-w-3xl text-5xl font-bold leading-tight">Conversemos.</h1>
            <p className="mt-5 max-w-3xl text-xl text-muted">
              Una llamada de 30 minutos. Sin presentacion de ventas, sin pitch, sin compromiso. Solo una conversacion para entender tu situacion.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <CapuSchedulerEmbed />
            </div>
            <aside className="space-y-6">
              <div className="card p-6">
                <h2 className="serif text-2xl font-bold">¿Prefieres otro camino?</h2>
                <div className="mt-5 space-y-4 text-muted">
                  <p>
                    Si prefieres contarme por escrito tu situacion antes de agendar, escribeme a{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-accent">{CONTACT_EMAIL}</a>.
                  </p>
                  <p>
                    Si quieres revisar mi trayectoria antes de conversar, puedes verme en{' '}
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-accent">
                      LinkedIn
                    </a>.
                  </p>
                </div>
              </div>
              <div className="card p-6">
                <h2 className="serif text-2xl font-bold">Antes de la llamada</h2>
                <p className="mt-3 text-muted">
                  Piensa brevemente en que quieres resolver, que has intentado antes y que expectativas tienes. Con eso ganamos tiempo.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section bg-[#f6f8f8]">
          <div className="container">
            <h2 className="serif text-4xl font-bold">Que esperar de la primera llamada</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {expectations.map(([time, text]) => (
                <div key={time} className="card p-5">
                  <p className="text-sm font-bold text-accent">{time}</p>
                  <p className="mt-2 text-muted">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/servicios" className="font-bold text-accent">
                Revisar servicios antes de agendar →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
