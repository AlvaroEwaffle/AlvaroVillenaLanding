import Image from 'next/image';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';

const problems = [
  {
    title: 'Tu operacion funciona, pero esta atrasada tecnologicamente.',
    text: 'No quieres romper lo que ha funcionado por anos. Pero sabes que seguir igual tambien tiene costo.',
  },
  {
    title: 'Ya te vendieron un sistema que nunca termino funcionando.',
    text: 'El equipo lo usa a medias, los reportes siguen en planillas y cada propuesta tecnologica parte con desconfianza.',
  },
  {
    title: 'Necesitas liderazgo senior, no un gerente full-time.',
    text: 'Quieres alguien que pueda evaluar proveedores, priorizar inversiones y traducir tecnologia a negocio.',
  },
  {
    title: 'La nueva generacion quiere modernizar; la anterior quiere estabilidad.',
    text: 'Ambos tienen razon. Falta una mirada externa que ordene la conversacion y lleve el cambio a tierra.',
  },
];

const services = [
  {
    title: 'Diagnostico de 2 semanas',
    price: 'Desde UF 180',
    href: '/servicios#diagnostico',
    text: 'Entrevistas, revision de sistemas y hoja de ruta de 90 dias. Sin venderte software. Sin compromiso de seguir.',
  },
  {
    title: 'Modernizacion acompanada',
    price: 'Desde UF 220 / mes',
    href: '/servicios#modernizacion',
    text: 'Lidero la ejecucion durante un trimestre, superviso proveedores y dejo al equipo operando con ciclos claros.',
  },
  {
    title: 'Asesor de tecnologia y producto',
    price: 'Desde UF 260 / mes',
    href: '/servicios#asesor',
    text: 'Tu director de tecnologia part-time para comite ejecutivo, decisiones criticas y supervision del equipo tecnico.',
  },
];

const workPrinciples = [
  'Te digo la verdad, incluso cuando la respuesta es no invertir todavia.',
  'Trabajo sin jergas innecesarias. El negocio va primero.',
  'Soy independiente de proveedores. No cobro comisiones por recomendar software.',
  'Traigo experiencia global con criterio local chileno.',
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="relative min-h-[720px] overflow-hidden bg-[#0f172a] text-white">
          <div className="absolute inset-y-0 right-0 hidden w-[54%] md:block">
            <Image
              src="/gallery/StandingLookingAtCamera.JPG"
              alt="Alvaro Villena"
              fill
              priority
              className="object-contain object-right-bottom opacity-80"
              sizes="54vw"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, #0f172a 0%, rgba(15,23,42,0.98) 43%, rgba(15,23,42,0.72) 68%, rgba(15,23,42,0.2) 100%)',
            }}
          />
          <div className="container relative z-10 flex min-h-[720px] items-center py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7fc4e4]">
                Consultoria senior para empresas medianas chilenas
              </p>
              <h1 className="serif mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
                Asesor senior de tecnologia y producto para empresas familiares chilenas.
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#c8d3e1]">
                Acompano a empresas medianas a ordenar sus procesos, implementar tecnologia que su equipo si usa y preparar la operacion para la siguiente generacion.
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
                Ex-LATAM Airlines · Ex-PepsiCo via Toptal · +8 anos liderando equipos de producto y transformacion
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow">El problema</p>
            <h2 className="serif mt-3 max-w-3xl text-4xl font-bold leading-tight">
              Tu empresa puede estar sana y aun asi estar perdiendo velocidad.
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {problems.map((item) => (
                <article key={item.title} className="card p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-[#f8fafc]">
          <div className="container">
            <p className="eyebrow">Como te ayudo</p>
            <h2 className="serif mt-3 text-4xl font-bold">Tres formas de trabajar conmigo</h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="card flex flex-col p-6">
                  <p className="text-sm font-bold text-accent">{service.price}</p>
                  <h3 className="mt-3 text-2xl font-bold">{service.title}</h3>
                  <p className="mt-4 flex-1 text-muted">{service.text}</p>
                  <Link href={service.href} className="mt-6 font-bold text-accent">
                    Ver detalles →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/gallery/StandingLookingAtCamera.JPG"
                alt="Alvaro Villena"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </div>
            <div>
              <p className="eyebrow">Sobre mi</p>
              <h2 className="serif mt-3 text-4xl font-bold">
                Trabajo en el cruce entre empresa tradicional, producto digital y ejecucion real.
              </h2>
              <div className="mt-6 space-y-4 text-muted">
                <p>
                  Soy Alvaro Villena. He liderado equipos de producto, tecnologia y transformacion en empresas grandes y medianas.
                </p>
                <p>
                  Fui Program Manager en un proyecto de inteligencia artificial de PepsiCo, Scrum Master en LATAM Airlines y consultor para Jooycar, We Techs y Progreso. Tambien funde Villelabs, mi agencia boutique de desarrollo.
                </p>
                <p>
                  Me enfoco en empresas familiares chilenas porque entiendo tanto la realidad corporativa global como las dinamicas locales donde la confianza, el criterio y la ejecucion importan mas que la moda tecnologica.
                </p>
              </div>
              <Link href="/sobre-mi" className="mt-7 inline-flex font-bold text-accent">
                Ver historia completa →
              </Link>
            </div>
          </div>
        </section>

        <section className="section bg-[#f8fafc]">
          <div className="container">
            <p className="eyebrow">Como trabajo</p>
            <h2 className="serif mt-3 max-w-3xl text-4xl font-bold">Serio, directo y sin venderte humo.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {workPrinciples.map((principle) => (
                <div key={principle} className="border-l-4 border-accent bg-white p-5 text-lg font-semibold">
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="cta-section">
          <div className="container text-center">
            <p className="eyebrow">Partir es simple</p>
            <h2 className="serif mx-auto mt-3 max-w-3xl text-4xl font-bold">
              Una conversacion honesta de 30 minutos.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted">
              Sin presentacion de ventas. Sin compromiso. Solo revisar tu situacion y si tiene sentido que trabajemos juntos.
            </p>
            <div className="mt-8">
              <Link href="/contacto" className="btn-primary">
                Agenda tu llamada
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted">O escribeme directo a hola@alvarovillena.cl</p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
