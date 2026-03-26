'use client';

import { useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import EmailCaptureForm, { trackEvent } from './EmailCaptureForm';
import { VILO_DIAGNOSIS_ROUTE, VILO_SCHEDULING_URL } from '@/lib/vilo';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const stagger: Variants = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const trustSignals = [
  'LATAM Airlines',
  'PepsiCo',
  'Toptal Top 3%',
  '+50 empresas',
];

const painPoints = [
  'Tu equipo trabaja mucho, pero cada avance cuesta más de lo que debería.',
  'Compraron herramientas nuevas, pero el seguimiento, las prioridades y la ejecución siguen enredados.',
  'La IA promete velocidad, pero hoy convive con procesos débiles y más ruido que claridad.',
  'Hay buenas ideas, pero falta un sistema claro para decidir, avanzar y cerrar mejor.',
];

const cases = [
  {
    company: 'LATAM Airlines',
    description: 'Lideré un sistema de revenue que salió a producción con un MVP claro y ritmo de releases.',
    badge: 'MVP en 4 meses',
  },
  {
    company: 'PepsiCo',
    description: 'Ayudé a ordenar múltiples equipos para reducir fricción y acelerar el desarrollo.',
    badge: '-50% tiempo de desarrollo',
  },
  {
    company: 'Conexión Industrial',
    description: 'Diseñé una plataforma B2B que conectó empresas, oferta y certificaciones en una sola operación.',
    badge: '124+ empresas conectadas',
  },
];

const testimonials = [
  {
    quote:
      'Trabajar con Álvaro en nuestra plataforma de vehículos conectados fue un cambio total. Trajo estructura a nuestro proceso de producto y nos ayudó a lanzar más rápido sin sacrificar calidad.',
    company: 'Jooycar',
    role: 'Insurtech y vehículos conectados',
  },
  {
    quote:
      'Álvaro nos ayudó a repensar cómo estaba estructurada nuestra plataforma IoT desde el punto de vista de producto. Su enfoque en priorización y ciclos de desarrollo hizo que nuestro equipo de ingeniería fuera mucho más efectivo.',
    company: 'We Techs',
    role: 'Plataforma IoT y gestión de agua',
  },
  {
    quote:
      'Necesitábamos a alguien que entendiera tanto el lado técnico como el de negocio del desarrollo de productos digitales. Álvaro entregó una hoja de ruta clara que aceleró el lanzamiento de nuestra plataforma.',
    company: 'Progreso',
    role: 'Servicios financieros y plataforma digital',
  },
];

function useScrollDepthTracking() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const milestones = [25, 50, 75, 90];
    const fired = new Set<number>();

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const pct = Math.round((window.scrollY / scrollHeight) * 100);
      for (const milestone of milestones) {
        if (pct >= milestone && !fired.has(milestone)) {
          fired.add(milestone);
          trackEvent('scroll_depth', { depth: milestone });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

export default function SalesLetter() {
  useScrollDepthTracking();

  return (
    <main className="w-full px-5 sm:px-6">
      <div className="max-w-letter mx-auto py-10 sm:py-16">
        <motion.section
          className="mb-10 sm:mb-14"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10"
            variants={fadeUp}
          >
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/85"
              variants={fadeUp}
            >
              Operaciones, producto e IA para equipos en LATAM
            </motion.p>

            <motion.h1
              className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
              variants={fadeUp}
            >
              Tu equipo tiene herramientas.
              <br />
              Le falta el sistema para usarlas bien.
            </motion.h1>

            <motion.p
              className="mt-5 max-w-3xl text-lg leading-relaxed text-white/65 sm:text-xl"
              variants={fadeUp}
            >
              PM top 3% en Toptal · 10+ años construyendo productos y ordenando equipos · Trabajo con empresas y
              emprendedores de LATAM que sienten que avanzan menos de lo que deberían.
            </motion.p>

            <motion.div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center" variants={fadeUp}>
              <Link
                href={VILO_DIAGNOSIS_ROUTE}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-accent-hover sm:w-auto"
              >
                Responde 9 preguntas y descubre si este sistema te serviría
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-white/45">
                Partimos por diagnóstico. Si hace sentido, recién ahí abrimos una reunión.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-10 sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
        >
          <div className="flex flex-wrap items-center gap-3 border-y border-white/10 py-5 text-sm font-medium uppercase tracking-[0.14em] text-white/45">
            {trustSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
              >
                {signal}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-10 sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 sm:p-8">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/85"
              variants={fadeUp}
            >
              El problema
            </motion.p>
            <motion.h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl" variants={fadeUp}>
              Lo que frena a los equipos que más trabajan
            </motion.h2>
            <motion.div className="mt-6 grid gap-4 sm:grid-cols-2" variants={stagger}>
              {painPoints.map((point) => (
                <motion.div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white/75"
                  variants={fadeUp}
                >
                  {point}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mb-10 sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/85">
              Cómo trabajamos
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              La call debería sentirse como el siguiente paso lógico
            </h2>
          </motion.div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <StepCard
              number="1"
              title="Agendas 30 min"
              description="Reservas un espacio corto para revisar si vale la pena conversar en detalle."
            />
            <StepCard
              number="2"
              title="Entiendo tu contexto"
              description="Veo dónde está el cuello de botella y qué está frenando al equipo hoy."
            />
            <StepCard
              number="3"
              title="Te doy un diagnóstico concreto"
              description="Sales con una lectura clara de por dónde partir y qué no conviene tocar todavía."
            />
          </div>

          <motion.p className="mt-6 max-w-3xl text-white/60" variants={fadeUp}>
            No hay compromiso, ni pitch forzado, ni venta agresiva. Si no veo encaje, te lo digo. Si sí lo veo,
            avanzamos con una recomendación clara.
          </motion.p>

          <motion.div className="mt-6" variants={fadeUp}>
            <a
              href={VILO_SCHEDULING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-6 py-4 text-base font-semibold text-white transition-colors hover:border-accent/30 hover:bg-white/[0.08]"
            >
              Agendar mi call gratuita
            </a>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-10 sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/85">
              Casos reales
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Ha funcionado en contextos distintos
            </h2>
          </motion.div>

          <div className="mt-6 grid gap-4">
            {cases.map((item) => (
              <motion.div
                key={item.company}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between"
                variants={fadeUp}
              >
                <div className="max-w-3xl">
                  <p className="text-lg font-semibold text-white">{item.company}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">{item.description}</p>
                </div>
                <span className="inline-flex w-fit items-center rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                  {item.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-10 sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/85">
              Testimonios
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Lo que dicen quienes ya trabajaron conmigo
            </h2>
          </motion.div>

          {/* TODO(alvaro): reemplazar placeholders por foto y nombre real. Ejemplo: "María Pérez, Head of Product". */}
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.company}
                quote={testimonial.quote}
                company={testimonial.company}
                role={testimonial.role}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-10 sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-center sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/85">
              Cierre
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              ¿Tiene sentido conversar?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Si tu equipo ya tiene gente, herramientas y trabajo en marcha, pero igual sienten que no avanzan lo
              suficiente, probablemente vale la pena revisarlo.
            </p>
            <a
              href={VILO_SCHEDULING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-accent px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Agendar mi call gratuita
            </a>
          </div>
        </motion.section>

        {/* TODO(alvaro): mover cualquier bloque de Onda a una pagina separada en /onda para no distraer la home principal. */}

        <motion.section
          className="mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Si todavía no quieres una call, puedes partir por acá
            </h3>
            <p className="mt-3 max-w-2xl text-white/55">
              Newsletter semanal. Una táctica práctica de IA o producto por semana, sin relleno y sin spam.
            </p>
            <div className="mt-6">
              <EmailCaptureForm id="email-capture-home-footer" ctaText="Suscribirme al newsletter" />
            </div>
          </div>
        </motion.section>

        <footer className="border-t border-white/10 pt-8 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <span>&copy; 2026 Álvaro Villena</span>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/chokovillena"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              @chokovillena
            </a>
            <a
              href="https://villelab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              villelab.com
            </a>
            <Link
              href="/privacidad"
              className="hover:text-white/60 transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="hover:text-white/60 transition-colors"
            >
              Términos
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
      variants={fadeUp}
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-sm font-semibold text-accent">
        {number}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
    </motion.div>
  );
}

function TestimonialCard({
  quote,
  company,
  role,
}: {
  quote: string;
  company: string;
  role: string;
}) {
  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
      variants={fadeUp}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-white/20 bg-white/[0.02] text-[11px] text-white/35">
          Foto
          <br />
          pendiente
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Nombre pendiente</p>
          <p className="text-xs text-white/35">{company}</p>
        </div>
      </div>
      <p className="text-white/80">&ldquo;{quote}&rdquo;</p>
      <p className="mt-4 text-sm text-white/35">{role}</p>
    </motion.div>
  );
}
