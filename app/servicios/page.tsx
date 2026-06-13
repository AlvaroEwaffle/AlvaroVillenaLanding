import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Diagnóstico, modernización acompañada y asesoría tecnológica para empresas familiares chilenas.',
  alternates: { canonical: `${siteUrl}/servicios` },
};

const services = [
  {
    id: 'diagnostico',
    title: 'Diagnóstico de tecnología y producto',
    price: 'Desde USD $2,420 · Duración: 2 semanas',
    forWho:
      'Para dueños, gerentes generales o hijos de segunda generación que saben que hay que hacer algo, pero no tienen claro por dónde partir.',
    includes: [
      'Kickoff con el equipo ejecutivo para alinear objetivos y alcance.',
      'Entrevistas con 5 a 8 personas clave.',
      'Revisión de sistemas actuales, procesos críticos, métricas y proveedores.',
      'Síntesis de los 5 a 7 problemas más críticos, priorizados por impacto y esfuerzo.',
    ],
    outcome: [
      'Documento ejecutivo de 15 a 20 páginas.',
      'Presentación de 60 minutos al equipo ejecutivo o directorio.',
      'Hoja de ruta de 90 días con rangos de inversión y forma de medir éxito.',
      'Crédito total aplicable si contratas una modalidad larga dentro de 30 días.',
    ],
  },
  {
    id: 'modernizacion',
    title: 'Modernización acompañada',
    price: 'Desde USD $2,960 / mes · Duración: 3 meses',
    forWho:
      'Para empresas que ya tienen claro que necesitan modernizar y requieren liderazgo senior para ejecutar sin contratar full-time.',
    includes: [
      'Liderazgo de transformación durante un trimestre.',
      '2 a 3 días por semana de dedicación a tu empresa.',
      'Supervisión de proveedores externos y equipo interno.',
      'Trabajo en ciclos cortos, entregas quincenales y métricas visibles.',
    ],
    outcome: [
      'Equipo operando con nueva metodología y prioridades claras.',
      'Proyectos tecnológicos avanzados o entregados, según alcance.',
      'Procesos, decisiones y aprendizajes documentados para continuidad.',
      'Renovación trimestre a trimestre, sin compromiso anual.',
    ],
  },
  {
    id: 'asesor',
    title: 'Asesor de tecnología y producto',
    price: 'Desde USD $3,500 / mes · 6 meses mínimo',
    forWho:
      'Para empresas medianas que necesitan liderazgo senior en tecnología y producto, pero no justifican aún un gerente full-time.',
    includes: [
      'Participación en comité ejecutivo o directorio cada 2 semanas.',
      '2 días por semana de dedicación a tu empresa.',
      'Decisiones sobre qué construir, contratar, postergar o descartar.',
      'Supervisión de equipo técnico interno o externo.',
    ],
    outcome: [
      'Liderazgo senior sin el costo de un full-time.',
      'Tecnología alineada a objetivos de negocio.',
      'Equipo técnico con mejor criterio y menos dependencia externa.',
      'Disponibilidad para emergencias puntuales fuera del horario acordado.',
    ],
  },
];

const faqs = [
  ['¿Por qué publicas precios?', 'Porque respeta tu tiempo y el mío. Si el rango no calza, lo sabes antes de agendar.'],
  ['¿Cómo se define el precio final?', 'Depende del tamaño de la empresa, alcance específico y dedicación semanal acordada.'],
  ['¿Facturas con factura?', 'Sí. Trabajo con factura a través de una Ltda. Estoy exento de IVA, así que los precios no llevan IVA.'],
  ['¿Atiendes fuera de Santiago?', 'Sí. Trabajo con clientes en todo Chile y LatAm, remoto con visitas presenciales cuando se requiere.'],
  ['¿Firmas confidencialidad?', 'Sí. Y los casos públicos solo se comparten con autorización expresa del cliente.'],
  ['¿Qué pasa si no funciona?', 'En retainer puedes terminar al cierre del trimestre sin penalización. En diagnóstico, el documento es tuyo.'],
];

export default function ServiciosPage() {
  return (
    <SiteShell>
      <main>
        <section className="section section-blue">
          <div className="container">
            <p className="eyebrow">Servicios</p>
            <h1 className="serif mt-3 max-w-3xl text-5xl font-bold leading-tight">
              Tres formas de trabajar conmigo.
            </h1>
            <p className="mt-5 max-w-3xl text-xl text-muted">
              Cada empresa está en un momento distinto: por dónde partir, cómo ejecutar, o quién acompaña a largo plazo.
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
                    <h3 className="font-bold">Para quién es</h3>
                    <p className="mt-3 text-muted">{service.forWho}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Qué incluye</h3>
                    <ul className="mt-3 space-y-2 text-muted">
                      {service.includes.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold">Qué te llevas</h3>
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

        <section className="section section-blue">
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
