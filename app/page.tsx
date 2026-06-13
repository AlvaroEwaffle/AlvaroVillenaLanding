import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SiteShell from '@/components/SiteShell';

const problems = [
  {
    title: 'Tu operación funciona, pero está atrasada tecnológicamente.',
    text: 'No quieres romper lo que ha funcionado por años. Pero sabes que seguir igual también tiene costo.',
  },
  {
    title: 'Ya te vendieron un sistema que nunca terminó funcionando.',
    text: 'El equipo lo usa a medias, los reportes siguen en planillas y cada propuesta tecnológica parte con desconfianza.',
  },
  {
    title: 'Necesitas liderazgo senior, no un gerente full-time.',
    text: 'Quieres alguien que pueda evaluar proveedores, priorizar inversiones y traducir tecnología a negocio.',
  },
  {
    title: 'La nueva generación quiere modernizar; la anterior quiere estabilidad.',
    text: 'Ambos tienen razón. Falta una mirada externa que ordene la conversación y lleve el cambio a tierra.',
  },
];

const services = [
  {
    title: 'Diagnóstico de 2 semanas',
    price: 'Desde USD $2,420',
    href: '/servicios#diagnostico',
    text: 'Entrevistas, revisión de sistemas y hoja de ruta de 90 días. Sin venderte software. Sin compromiso de seguir.',
  },
  {
    title: 'Modernización acompañada',
    price: 'Desde USD $2,960 / mes',
    href: '/servicios#modernizacion',
    text: 'Lidero la ejecución durante un trimestre, superviso proveedores y dejo al equipo operando con ciclos claros.',
  },
  {
    title: 'Asesor de tecnología y producto',
    price: 'Desde USD $3,500 / mes',
    href: '/servicios#asesor',
    text: 'Tu director de tecnología part-time para comité ejecutivo, decisiones críticas y supervisión del equipo técnico.',
  },
];

const workPrinciples = [
  'Te digo la verdad, incluso cuando la respuesta es no invertir todavía.',
  'Trabajo sin jergas innecesarias. El negocio va primero.',
  'Soy independiente de proveedores. No cobro comisiones por recomendar software.',
  'Traigo experiencia global con criterio local chileno.',
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="relative min-h-[720px] overflow-hidden bg-[#0f172a] text-white">
          <Reveal className="absolute inset-y-0 right-0 hidden w-[54%] md:block" delay={0.12}>
            <Image
              src="/gallery/StandingLookingAtCamera.JPG"
              alt="Álvaro Villena"
              fill
              priority
              className="object-contain object-right-bottom opacity-80"
              sizes="54vw"
            />
          </Reveal>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, #0f172a 0%, rgba(15,23,42,0.98) 43%, rgba(15,23,42,0.72) 68%, rgba(15,23,42,0.2) 100%)',
            }}
          />
          <div className="container relative z-10 flex min-h-[720px] items-center py-20">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7fc4e4]">
                Consultoría senior para empresas medianas chilenas
              </p>
              <h1 className="serif mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
                Asesor senior de tecnología y producto para empresas familiares chilenas.
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#c8d3e1]">
                Acompaño a empresas medianas a ordenar sus procesos, implementar tecnología que su equipo sí usa y preparar la operación para la siguiente generación.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacto" className="btn-primary">
                  Agenda una llamada de 30 minutos
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-5 font-bold text-white transition hover:border-accent hover:text-[#7fc4e4]"
                >
                  Ver servicios
                </Link>
              </div>
              <p className="mt-5 text-sm font-semibold text-[#9fb0c7]">
                Ex-LATAM Airlines · Ex-PepsiCo vía Toptal · +8 años liderando equipos de producto y transformación
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Reveal>
                <p className="eyebrow">El problema</p>
                <h2 className="serif mt-3 max-w-3xl text-4xl font-bold leading-tight">
                  Tu empresa puede estar sana y aun así estar perdiendo velocidad.
                </h2>
              </Reveal>
              <div className="mt-10 grid gap-4">
                {problems.map((item, index) => (
                  <Reveal key={item.title} className="card p-6" delay={index * 0.05}>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-muted">{item.text}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-lg order-first lg:order-last hidden md:block">
              <Image
                src="/gallery/generated/empresa_transformacion.png"
                alt="Empresa en transformación digital"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </Reveal>
          </div>
        </section>

        <section className="section section-blue">
          <div className="container">
            <Reveal>
              <p className="eyebrow">Cómo te ayudo</p>
              <h2 className="serif mt-3 text-4xl font-bold">Tres formas de trabajar conmigo</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {services.map((service, index) => (
                <Reveal key={service.title} className="card flex flex-col p-6" delay={index * 0.07}>
                  <p className="text-sm font-bold text-accent">{service.price}</p>
                  <h3 className="mt-3 text-2xl font-bold">{service.title}</h3>
                  <p className="mt-4 flex-1 text-muted">{service.text}</p>
                  <Link href={service.href} className="mt-6 font-bold text-accent">
                    Ver detalles →
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/gallery/generated/sesion_estrategia.png"
                alt="Sesión de estrategia tecnológica"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="eyebrow">Sobre mí</p>
              <h2 className="serif mt-3 text-4xl font-bold">
                Trabajo en el cruce entre empresa tradicional, producto digital y ejecución real.
              </h2>
              <div className="mt-6 space-y-4 text-muted">
                <p>
                  Soy Álvaro Villena. He liderado equipos de producto, tecnología y transformación en empresas grandes y medianas.
                </p>
                <p>
                  Fui Program Manager en un proyecto de inteligencia artificial de PepsiCo, Scrum Master en LATAM Airlines y consultor para Jooycar, We Techs y Progreso. También fundé Villelabs, mi agencia boutique de desarrollo.
                </p>
                <p>
                  Me enfoco en empresas familiares chilenas porque entiendo tanto la realidad corporativa global como las dinámicas locales donde la confianza, el criterio y la ejecución importan más que la moda tecnológica.
                </p>
              </div>
              <Link href="/sobre-mi" className="mt-7 inline-flex font-bold text-accent">
                Ver historia completa →
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="section section-navy">
          <div className="container">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7fc4e4]">Cómo trabajo</p>
              <h2 className="serif mt-3 max-w-3xl text-4xl font-bold">Serio, directo y sin venderte humo.</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {workPrinciples.map((principle, index) => (
                <Reveal
                  key={principle}
                  className="border-l-4 border-[#7fc4e4] bg-white/[0.06] p-5 text-lg font-semibold text-white"
                  delay={index * 0.05}
                >
                  {principle}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-accent" id="cta-section">
          <Reveal className="container text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/75">Partir es simple</p>
            <h2 className="serif mx-auto mt-3 max-w-3xl text-4xl font-bold">
              Una conversación honesta de 30 minutos.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/82">
              Sin presentación de ventas. Sin compromiso. Solo revisar tu situación y si tiene sentido que trabajemos juntos.
            </p>
            <div className="mt-8">
              <Link href="/contacto" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 font-bold text-[#0f172a] transition hover:bg-[#eef7fc]">
                Agenda tu llamada
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/75">O escríbeme directo a hola@alvarovillena.cl</p>
          </Reveal>
        </section>
      </main>
    </SiteShell>
  );
}
