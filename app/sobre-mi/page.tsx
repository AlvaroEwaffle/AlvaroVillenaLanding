import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Sobre mi',
  description: 'Historia profesional de Alvaro Villena: producto, tecnologia, Toptal, LATAM, PepsiCo y Villelabs.',
  alternates: { canonical: `${siteUrl}/sobre-mi` },
};

const sections = [
  {
    title: 'El camino corporativo',
    text: [
      'En LATAM Airlines trabaje en producto y agilidad para una herramienta interna de revenue optimization. Ahi aprendi que la tecnologia solo funciona cuando entiende la operacion real.',
      'Luego, via Toptal, fui Program Manager en un proyecto de inteligencia artificial para PepsiCo, coordinando equipos distribuidos y decisiones con impacto global.',
    ],
  },
  {
    title: 'El camino emprendedor',
    text: [
      'Funde Villelabs para construir productos digitales con una mirada mas cercana a negocio. En ese camino entregue proyectos para empresas como Jooycar, We Techs, Progreso y decenas de pymes chilenas.',
      'Esa experiencia me mostro el mismo patron una y otra vez: muchas empresas no fallan por falta de tecnologia, sino por falta de criterio para priorizar, implementar y sostener el cambio.',
    ],
  },
  {
    title: 'Por que empresas familiares chilenas',
    text: [
      'Despues de alternar entre corporates globales y emprendimientos, me di cuenta de que mi valor esta en el cruce. Entiendo como piensa una multinacional, pero sigo trabajando con contexto local chileno.',
      'Las empresas medianas tradicionales no necesitan consultores de moda ni agencias que solo venden codigo. Necesitan alguien que pueda hablar con el dueno, la segunda generacion, operaciones y tecnologia sin perder el hilo del negocio.',
    ],
  },
  {
    title: 'Como trabajo hoy',
    text: [
      'Trabajo con clientes internacionales via Toptal, clientes chilenos de forma directa y algunos procesos de coaching para profesionales tecnicos.',
      'Mi foco es simple: ayudar a empresas serias a ordenar su operacion, decidir mejor en tecnologia y ejecutar cambios que la gente realmente use.',
    ],
  },
];

export default function SobreMiPage() {
  return (
    <SiteShell>
      <main>
        <section className="section bg-[#f6f8f8]">
          <div className="container">
            <p className="eyebrow">Sobre mi</p>
            <h1 className="serif mt-3 max-w-4xl text-5xl font-bold leading-tight">
              Entre multinacionales globales y empresas familiares chilenas.
            </h1>
            <div className="relative mt-10 aspect-[16/7] overflow-hidden rounded-lg">
              <Image
                src="/gallery/StandingLookingAtCamera.JPG"
                alt="Alvaro Villena"
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
                Agenda una llamada de 30 minutos y revisamos tu situacion sin pitch ni compromiso.
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
