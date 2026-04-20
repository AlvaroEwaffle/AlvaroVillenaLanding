import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Diagnostico, modernizacion acompanada y asesoría tecnologica para empresas familiares chilenas.',
  alternates: { canonical: `${siteUrl}/servicios` },
};

const services = [
  {
    id: 'diagnostico',
    title: 'Diagnostico de tecnologia y producto',
    price: 'Desde UF 180 · Duracion: 2 semanas',
    forWho:
      'Para duenos, gerentes generales o hijos de segunda generacion que saben que hay que hacer algo, pero no tienen claro por donde partir.',
    includes: [
      'Kickoff con el equipo ejecutivo para alinear objetivos y alcance.',
      'Entrevistas con 5 a 8 personas clave.',
      'Revision de sistemas actuales, procesos criticos, metricas y proveedores.',
      'Sintesis de los 5 a 7 problemas mas criticos, priorizados por impacto y esfuerzo.',
    ],
    outcome: [
      'Documento ejecutivo de 15 a 20 paginas.',
      'Presentacion de 60 minutos al equipo ejecutivo o directorio.',
      'Hoja de ruta de 90 dias con rangos de inversion y forma de medir exito.',
      'Credito total aplicable si contratas una modalidad larga dentro de 30 dias.',
    ],
  },
  {
    id: 'modernizacion',
    title: 'Modernizacion acompanada',
    price: 'Desde UF 220 / mes · Duracion: 3 meses',
    forWho:
      'Para empresas que ya tienen claro que necesitan modernizar y requieren liderazgo senior para ejecutar sin contratar full-time.',
    includes: [
      'Liderazgo de transformacion durante un trimestre.',
      '2 a 3 dias por semana de dedicacion a tu empresa.',
      'Supervision de proveedores externos y equipo interno.',
      'Trabajo en ciclos cortos, entregas quincenales y metricas visibles.',
    ],
    outcome: [
      'Equipo operando con nueva metodologia y prioridades claras.',
      'Proyectos tecnologicos avanzados o entregados, segun alcance.',
      'Procesos, decisiones y aprendizajes documentados para continuidad.',
      'Renovacion trimestre a trimestre, sin compromiso anual.',
    ],
  },
  {
    id: 'asesor',
    title: 'Asesor de tecnologia y producto',
    price: 'Desde UF 260 / mes · 6 meses minimo',
    forWho:
      'Para empresas medianas que necesitan liderazgo senior en tecnologia y producto, pero no justifican aun un gerente full-time.',
    includes: [
      'Participacion en comite ejecutivo o directorio cada 2 semanas.',
      '2 dias por semana de dedicacion a tu empresa.',
      'Decisiones sobre que construir, contratar, postergar o descartar.',
      'Supervision de equipo tecnico interno o externo.',
    ],
    outcome: [
      'Liderazgo senior sin el costo de un full-time.',
      'Tecnologia alineada a objetivos de negocio.',
      'Equipo tecnico con mejor criterio y menos dependencia externa.',
      'Disponibilidad para emergencias puntuales fuera del horario acordado.',
    ],
  },
];

const faqs = [
  ['¿Por que publicas precios?', 'Porque respeta tu tiempo y el mio. Si el rango no calza, lo sabes antes de agendar.'],
  ['¿Como se define el precio final?', 'Depende del tamano de la empresa, alcance especifico y dedicacion semanal acordada.'],
  ['¿Facturas con factura?', 'Si. Trabajo con factura a traves de una SpA y los servicios incluyen IVA cuando corresponde.'],
  ['¿Atiendes fuera de Santiago?', 'Si. Trabajo con clientes en todo Chile y LatAm, remoto con visitas presenciales cuando se requiere.'],
  ['¿Firmas confidencialidad?', 'Si. Y los casos publicos solo se comparten con autorizacion expresa del cliente.'],
  ['¿Que pasa si no funciona?', 'En retainer puedes terminar al cierre del trimestre sin penalizacion. En diagnostico, el documento es tuyo.'],
];

export default function ServiciosPage() {
  return (
    <SiteShell>
      <main>
        <section className="section bg-[#f6f8f8]">
          <div className="container">
            <p className="eyebrow">Servicios</p>
            <h1 className="serif mt-3 max-w-3xl text-5xl font-bold leading-tight">
              Tres formas de trabajar conmigo.
            </h1>
            <p className="mt-5 max-w-3xl text-xl text-muted">
              Cada empresa esta en un momento distinto: por donde partir, como ejecutar, o quien acompana a largo plazo.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container space-y-14">
            {services.map((service) => (
              <article key={service.id} id={service.id} className="scroll-mt-24 border-b border-border pb-14 last:border-b-0">
                <p className="text-sm font-bold text-accent">{service.price}</p>
                <h2 className="serif mt-2 text-4xl font-bold">{service.title}</h2>
                <div className="mt-8 grid gap-8 lg:grid-cols-3">
                  <div>
                    <h3 className="font-bold">Para quien es</h3>
                    <p className="mt-3 text-muted">{service.forWho}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Que incluye</h3>
                    <ul className="mt-3 space-y-2 text-muted">
                      {service.includes.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold">Que te llevas</h3>
                    <ul className="mt-3 space-y-2 text-muted">
                      {service.outcome.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                </div>
                <Link href="/contacto" className="btn-primary mt-8">
                  Conversemos si esto te hace sentido
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section bg-[#f6f8f8]">
          <div className="container">
            <h2 className="serif text-4xl font-bold">Preguntas frecuentes</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map(([question, answer]) => (
                <div key={question} className="card p-5">
                  <h3 className="font-bold">{question}</h3>
                  <p className="mt-2 text-muted">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
