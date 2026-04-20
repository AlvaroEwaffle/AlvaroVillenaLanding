import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Historia profesional de Álvaro Villena: producto, tecnología, Toptal, LATAM, PepsiCo y Villelabs.',
  alternates: { canonical: `${siteUrl}/sobre-mi` },
};

const sections = [
  {
    title: 'El camino corporativo',
    text: [
      'En LATAM Airlines trabajé en producto y agilidad para una herramienta interna de revenue optimization. Ahí aprendí que la tecnología solo funciona cuando entiende la operación real.',
      'Luego, vía Toptal, fui Program Manager en un proyecto de inteligencia artificial para PepsiCo, coordinando equipos distribuidos y decisiones con impacto global.',
    ],
  },
  {
    title: 'El camino emprendedor',
    text: [
      'Fundé Villelabs para construir productos digitales con una mirada más cercana a negocio. En ese camino entregué proyectos para empresas como Jooycar, We Techs, Progreso y decenas de pymes chilenas.',
      'Esa experiencia me mostró el mismo patrón una y otra vez: muchas empresas no fallan por falta de tecnología, sino por falta de criterio para priorizar, implementar y sostener el cambio.',
    ],
  },
  {
    title: 'Por qué empresas familiares chilenas',
    text: [
      'Después de alternar entre corporates globales y emprendimientos, me di cuenta de que mi valor está en el cruce. Entiendo cómo piensa una multinacional, pero sigo trabajando con contexto local chileno.',
      'Las empresas medianas tradicionales no necesitan consultores de moda ni agencias que solo venden código. Necesitan alguien que pueda hablar con el dueño, la segunda generación, operaciones y tecnología sin perder el hilo del negocio.',
    ],
  },
  {
    title: 'Cómo trabajo hoy',
    text: [
      'Trabajo con clientes internacionales vía Toptal, clientes chilenos de forma directa y algunos procesos de coaching para profesionales técnicos.',
      'Mi foco es simple: ayudar a empresas serias a ordenar su operación, decidir mejor en tecnología y ejecutar cambios que la gente realmente use.',
    ],
  },
];

export default function SobreMiPage() {
  return (
    <SiteShell>
      <main>
        <section className="section section-blue">
          <div className="container">
            <p className="eyebrow">Sobre mí</p>
            <h1 className="serif mt-3 max-w-4xl text-5xl font-bold leading-tight">
              Entre multinacionales globales y empresas familiares chilenas.
            </h1>
            <div className="relative mt-10 aspect-[16/7] overflow-hidden rounded-lg">
              <Image
                src="/gallery/StandingLookingAtCamera.JPG"
                alt="Álvaro Villena"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container max-w-4xl">
            <div className="space-y-12">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="serif text-3xl font-bold">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-lg text-muted">
                    {section.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 border-t border-border pt-10">
              <h2 className="serif text-3xl font-bold">¿Te hace sentido conversar?</h2>
              <p className="mt-3 text-muted">
                Agenda una llamada de 30 minutos y revisamos tu situación sin pitch ni compromiso.
              </p>
              <Link href="/contacto" className="btn-primary mt-6">
                Agenda una llamada
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
