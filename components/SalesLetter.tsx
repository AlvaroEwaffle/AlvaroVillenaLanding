'use client';

import { useState, useCallback, useEffect, Fragment } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import ToptalBadge from './ToptalBadge';
import EmailCaptureForm, { trackEvent } from './EmailCaptureForm';
import CalendlyButton from './CalendlyButton';
import { getLenis } from '@/lib/lenis';

/* ─── Animation variants ─── */
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
    transition: { staggerChildren: 0.15 },
  },
};

/* ─── Typewriter Headline ─── */
const HEADLINE_SEGMENTS = [
  { text: 'Soy Álvaro Villena.', lineBreak: true },
  { text: 'PM, emprendedor,', lineBreak: true },
  { text: 'y te ayudo a operar tu negocio con ' },
  { text: 'IA', accent: true },
  { text: '.' },
];

const HEADLINE_CHARS = (() => {
  const result: { char: string; accent?: boolean; lineBreakBefore?: boolean }[] = [];
  let prevHadBreak = false;
  for (const seg of HEADLINE_SEGMENTS) {
    for (let i = 0; i < seg.text.length; i++) {
      result.push({
        char: seg.text[i],
        accent: seg.accent,
        lineBreakBefore: i === 0 && prevHadBreak,
      });
    }
    prevHadBreak = !!seg.lineBreak;
  }
  return result;
})();

const HEADLINE_FULL_TEXT = 'Soy Álvaro Villena. PM, emprendedor, y te ayudo a operar tu negocio con IA.';

function TypewriterHeadline({ onComplete }: { onComplete: () => void }) {
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(reducedMotion ? HEADLINE_CHARS.length : 0);
  const [cursorVisible, setCursorVisible] = useState(!reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      onComplete();
      return;
    }

    if (count >= HEADLINE_CHARS.length) {
      const t = setTimeout(() => {
        setCursorVisible(false);
        onComplete();
      }, 400);
      return () => clearTimeout(t);
    }

    const c = HEADLINE_CHARS[count];
    let delay = 35;
    if (c.char === '.') delay = 200;
    else if (c.lineBreakBefore) delay = 250;
    else if (c.accent) delay = 55;

    const timer = setTimeout(() => setCount((n) => n + 1), delay);
    return () => clearTimeout(timer);
  }, [count, reducedMotion, onComplete]);

  return (
    <h1 className="text-headline-mobile sm:text-headline text-white mb-6">
      {/* Full text for SEO crawlers — always in DOM */}
      <span className="sr-only">{HEADLINE_FULL_TEXT}</span>
      {/* Visual typewriter version */}
      <span aria-hidden="true">
        {HEADLINE_CHARS.slice(0, count).map((c, i) => (
          <Fragment key={i}>
            {c.lineBreakBefore && <br />}
            {c.accent ? (
              <span className="text-accent">{c.char}</span>
            ) : (
              c.char
            )}
          </Fragment>
        ))}
        {cursorVisible && (
          <span className="inline-block w-[3px] h-[0.85em] bg-accent ml-0.5 align-baseline animate-pulse" />
        )}
      </span>
    </h1>
  );
}

/* ─── Scroll-to-CTA button ─── */
function ScrollToCta() {
  const handleClick = () => {
    const el = document.getElementById('cta-section');
    if (!el) return;
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(el, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex items-center gap-2 text-accent hover:text-accent-hover transition-colors mt-6 group"
    >
      <span className="text-base font-medium">Quiero saber más</span>
      <ChevronDown className="w-5 h-5 animate-bounce" />
    </button>
  );
}

/* ─── Scroll Depth Tracking ─── */
function useScrollDepthTracking() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const milestones = [25, 50, 75, 90];
    const fired = new Set<number>();

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const pct = Math.round((window.scrollY / scrollHeight) * 100);
      for (const m of milestones) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          trackEvent('scroll_depth', { depth: m });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

/* ─── Main SalesLetter Component ─── */
export default function SalesLetter() {
  const [typewriterDone, setTypewriterDone] = useState(false);
  const handleTypewriterComplete = useCallback(() => setTypewriterDone(true), []);

  useScrollDepthTracking();

  return (
    <main className="w-full px-5 sm:px-6">
      {/* noscript: ensure all content visible without JS */}
      <noscript>
        <style>{`.js-content-reveal { opacity: 1 !important; }`}</style>
      </noscript>

      <div className="max-w-letter mx-auto py-12 sm:py-20">
        {/* ═══════════════════════════════════════════
            BLOCK 1 — THE HOOK (typewriter)
        ═══════════════════════════════════════════ */}
        <section className="mb-section-mobile sm:mb-section">
          <TypewriterHeadline onComplete={handleTypewriterComplete} />

          <p
            className={`text-white/60 text-lg sm:text-xl leading-relaxed transition-opacity duration-500 ease-out ${typewriterDone ? 'opacity-100' : 'opacity-0'}`}
          >
            Llevo más de 10 años en gestión de producto.
            <br />
            Tengo 2 negocios corriendo (Ewaffle y Fidelidapp), además de compartir aprendizajes a través de mis asesorías.
            <br />
            Y lo que encontré: las empresas no necesitan más tecnología,
            <br />
            necesitan mejores sistemas para usarla.
          </p>

          <div className={`transition-opacity duration-500 ease-out ${typewriterDone ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mt-6">
              <CalendlyButton
                text="Agendar una conversación"
                className="inline-flex items-center gap-2 py-3 px-6 bg-accent hover:bg-accent-hover text-white font-semibold text-base rounded-lg transition-colors"
              />
            </div>
          </div>
        </section>

        {/* All content below — always in DOM, revealed via opacity after typewriter */}
        <div
          className={`js-content-reveal transition-opacity duration-700 ease-out ${typewriterDone ? 'opacity-100' : 'opacity-0'}`}
        >

        {/* ═══════════════════════════════════════════
            BLOCK 2 — THE AGITATION
        ═══════════════════════════════════════════ */}
        <motion.section
          className="mb-section-mobile sm:mb-section space-y-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <motion.h2
            className="text-subheadline text-white"
            variants={fadeUp}
          >
            Cómo llegué acá
          </motion.h2>

          <motion.p className="text-white/80" variants={fadeUp}>
            Estudié ingeniería industrial en la Universidad de Concepción. Empecé en empresas grandes: PepsiCo, LATAM Airlines. Ahí aprendí que los sistemas que funcionan no son los más sofisticados, son los más claros.
          </motion.p>

          <motion.p className="text-white/80" variants={fadeUp}>
            En 2019 empecé a trabajar con Toptal, la red de freelancers más importante a nivel global. Caché algo que no esperaba: los problemas de producto en Silicon Valley son casi idénticos a los de una startup chilena que quiere crecer.
          </motion.p>

          <motion.p className="text-white/80" variants={fadeUp}>
            Mientras tanto, construí mis propios negocios. Hoy tengo Ewaffle (e-learning B2B) y Fidelidapp (SaaS de fidelización), además de compartir lo que aprendo a través de mis asesorías.
          </motion.p>

          <motion.p className="font-semibold text-white" variants={fadeUp}>
            Lo que aprendí construyendo productos y negocios propios: el problema no es la falta de ideas. Es la falta de sistemas para ejecutarlas.
          </motion.p>

          <motion.p className="text-white/80" variants={fadeUp}>
            Y la IA, bien usada, es el mejor sistema que existe hoy para hacer más con menos.
          </motion.p>

          {/* Photo + credentials */}
          <motion.div
            className="flex flex-col items-center gap-4 my-8"
            variants={fadeUp}
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-accent/30">
              <Image
                src="/gallery/StandingLookingAtCamera.JPG"
                alt="Álvaro Villena — PM Top 3% Toptal · Fundador VilleLab"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 192px, 224px"
                priority
              />
            </div>
            <p className="text-white/50 text-sm text-center">
              Álvaro Villena · PM Top 3% Toptal · Fundador VilleLab
            </p>
            <a
              href="https://www.toptal.com/project-managers/resume/alvaro-villena#B3Zxo1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent/70 hover:text-accent text-sm transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 21 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.11 0L14.82 6.7C14.87 6.75 14.91 6.8 14.97 6.85L20.82 12.7L11.31 22.16L15.66 26.52L12.75 29.41L6.09 22.75C6.01 22.68 5.93 22.6 5.85 22.52L0 16.68L9.48 7.25L5.16 2.94L8.11 0ZM12.36 10.5C12.27 10.48 12.18 10.48 12.1 10.5C12.01 10.53 11.94 10.57 11.78 10.72L6.37 16.11C6.21 16.27 6.17 16.34 6.15 16.42C6.12 16.51 6.12 16.6 6.15 16.68C6.17 16.77 6.22 16.85 6.37 17L8.09 18.72C8.24 18.87 8.31 18.91 8.4 18.94C8.49 18.96 8.57 18.96 8.66 18.94C8.75 18.91 8.82 18.87 8.97 18.72L14.38 13.33C14.54 13.18 14.58 13.1 14.61 13.02C14.63 12.93 14.63 12.85 14.61 12.76C14.59 12.67 14.54 12.6 14.39 12.45L12.67 10.73C12.52 10.57 12.44 10.53 12.36 10.5Z" />
              </svg>
              Top 3% Talent — Toptal
            </a>
          </motion.div>
        </motion.section>

        {/* ═══════════════════════════════════════════
            BLOCK 3 — THE PERSPECTIVE
        ═══════════════════════════════════════════ */}
        <motion.section
          className="mb-section-mobile sm:mb-section space-y-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <motion.h2
            className="text-subheadline text-white"
            variants={fadeUp}
          >
            Y aquí te lo cuento sin maquillaje
          </motion.h2>

          <motion.p className="text-white/80" variants={fadeUp}>
            Llevo más de 10 años construyendo software y gestionando productos digitales. Esa es la base. El desarrollo de software y la gestión de producto son lo que hace que las cosas funcionen de verdad. La IA llegó después — y es una herramienta brutal, pero solo si ya tienes los fundamentos claros.
          </motion.p>

          <motion.div className="space-y-4 pl-1" variants={fadeUp}>
            <div className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl mt-0.5 shrink-0">
                &rarr;
              </span>
              <p className="text-white/80">
                Sin un proceso de producto claro, ninguna herramienta te salva — ni la IA más cara del mercado
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl mt-0.5 shrink-0">
                &rarr;
              </span>
              <p className="text-white/80">
                El 80% de los equipos compra tecnología antes de tener claridad en su proceso. Primero el sistema, después la herramienta
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl mt-0.5 shrink-0">
                &rarr;
              </span>
              <p className="text-white/80">
                Las empresas de LATAM que escalan rápido no tienen más presupuesto ni más gente — tienen mejor estructura de producto y ciclos de desarrollo más cortos
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl mt-0.5 shrink-0">
                &rarr;
              </span>
              <p className="text-white/80">
                La IA es la evolución natural de todo esto. Si ya sabes construir y gestionar productos, la IA te hace 10x más efectivo. Si no, solo automatiza el desorden
              </p>
            </div>
          </motion.div>

          <motion.p className="text-white/80" variants={fadeUp}>
            Estas son las conversaciones que tengo cada semana con emprendedores y equipos de producto en toda la región.
          </motion.p>
        </motion.section>

        {/* ═══════════════════════════════════════════
            BLOCK 4 — THE CASES
        ═══════════════════════════════════════════ */}
        <motion.section
          className="mb-section-mobile sm:mb-section space-y-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <motion.h2
            className="text-subheadline text-white"
            variants={fadeUp}
          >
            Proyectos reales. En primera persona.
          </motion.h2>

          <motion.p className="text-white/80" variants={fadeUp}>
            No te voy a contar casos en tercera persona como si fueran de otra empresa. Estos son proyectos donde estuve adentro, liderando equipos y sacando producto:
          </motion.p>

          <motion.div className="border-l-4 border-accent pl-5 py-2 space-y-2 mb-6" variants={fadeUp}>
            <h3 className="text-white font-semibold">LATAM Airlines — Sistema de Revenue</h3>
            <p className="text-white/80 text-sm">MVP en 4 meses más releases mensuales de features. Lideré un equipo de 9 devs + BA + PO usando Scrum, Kanban y XP. Stack: Google Cloud, Kubernetes, Angular, microservicios Spring Boot. Fuimos pioneros en infraestructura cloud, pipelines CI/CD y microservicios dentro de la organización.</p>
            <p className="text-accent text-sm font-medium">MVP en 4 meses · equipo de 12 · pioneros en cloud y microservicios</p>
          </motion.div>

          <motion.div className="border-l-4 border-accent pl-5 py-2 space-y-2 mb-6" variants={fadeUp}>
            <h3 className="text-white font-semibold">Pepsico — Sistemas Comerciales SAFe</h3>
            <p className="text-white/80 text-sm">Mejoramos el tiempo de desarrollo en un 50% en el Departamento de Innovación. Implementé una estructura de gestión de programa basada en SAFe con múltiples equipos. Hicimos visible el trabajo cross-team y mejoramos la gestión de dependencias y riesgos.</p>
            <p className="text-accent text-sm font-medium">-50% tiempo de desarrollo · SAFe multi-equipo · gestión de dependencias</p>
          </motion.div>

          <motion.div className="border-l-4 border-accent pl-5 py-2 space-y-2 mb-6" variants={fadeUp}>
            <h3 className="text-white font-semibold">Conexión Industrial — Universidad de Concepción</h3>
            <p className="text-white/80 text-sm">Plataforma B2B a medida para el Centro para la Industria 4.0 (C4i) de la Universidad de Concepción. Marketplace digital que conecta 124+ empresas en 35 sectores industriales de la región del Biobío. Perfiles verificados, matching automatizado y tracking de certificaciones.</p>
            <p className="text-accent text-sm font-medium">124+ empresas · 35 sectores · marketplace B2B industrial</p>
          </motion.div>
        </motion.section>

        {/* ═══════════════════════════════════════════
            BLOCK 5 — DOUBLE CTA
        ═══════════════════════════════════════════ */}
        <motion.section
          className="mb-section-mobile sm:mb-section"
          id="cta-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-2">
              Trabajemos juntos
            </h3>
            <p className="text-white/50 text-center text-sm mb-8">
              Elige cómo prefieres conectar.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Left: Email capture */}
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-accent font-semibold mb-3">Newsletter semanal</p>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  Una táctica práctica de IA o PM cada semana. Sin spam. Para emprendedores y equipos que quieren operar mejor.
                </p>
                <EmailCaptureForm id="email-capture" ctaText="Suscribirme gratis" />
              </div>
              {/* Right: Calendly */}
              <div className="sm:border-l sm:border-white/10 sm:pl-8">
                <p className="text-xs uppercase tracking-[0.15em] text-accent font-semibold mb-3">Conversación directa</p>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  30 minutos. Conversamos sobre tu negocio, tus operaciones y vemos si hay algo concreto donde puedo ayudarte.
                </p>
                <CalendlyButton text="Agendar conversación con Álvaro" />
                <p className="text-sm text-white/40 mt-3 text-center">
                  Sin compromiso. Sin letra chica.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════
            BLOCK 6 — SOCIAL PROOF
        ═══════════════════════════════════════════ */}
        <motion.section
          className="mb-section-mobile sm:mb-section space-y-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <motion.h2
            className="text-subheadline text-white"
            variants={fadeUp}
          >
            Lo que dicen quienes ya trabajaron conmigo
          </motion.h2>

          {/* Testimonials */}
          <div className="space-y-8">
            <Testimonial
              quote="Trabajar con Álvaro en nuestra plataforma de vehículos conectados fue un cambio total. Trajo estructura a nuestro proceso de producto y nos ayudó a lanzar más rápido sin sacrificar calidad."
              author="Jooycar"
              role="Insurtech & Vehículos Conectados"
            />
            <Testimonial
              quote="Álvaro nos ayudó a repensar cómo estaba estructurada nuestra plataforma IoT desde el punto de vista de producto. Su enfoque en priorización y ciclos de desarrollo hizo que nuestro equipo de ingeniería fuera mucho más efectivo."
              author="We Techs"
              role="Plataforma IoT & Gestión de Agua"
            />
            <Testimonial
              quote="Necesitábamos a alguien que entendiera tanto el lado técnico como el de negocio del desarrollo de productos digitales. Álvaro entregó una hoja de ruta clara que aceleró el lanzamiento de nuestra plataforma."
              author="Progreso"
              role="Servicios Financieros & Plataforma Digital"
            />
          </div>

          {/* Client logos */}
          <motion.div variants={fadeUp}>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 py-6 border-t border-b border-white/10">
              {[
                'LATAM Airlines',
                'Pepsico',
                'Jooycar',
                'We Techs',
                'Progreso',
              ].map((name) => (
                <span
                  key={name}
                  className="text-white/25 font-medium text-sm tracking-wide uppercase"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.p
            className="text-center text-white/50 font-medium"
            variants={fadeUp}
          >
            +50 empresas han confiado en este proceso
          </motion.p>

          {/* Toptal badge */}
          <motion.div className="flex justify-center" variants={fadeUp}>
            <ToptalBadge />
          </motion.div>

          <motion.p className="text-center text-white/40 text-sm mt-4" variants={fadeUp}>
            Top 3% Toptal · SAFe Certified · PSM I · 10+ años en gestión de producto
          </motion.p>
        </motion.section>

        {/* ═══════════════════════════════════════════
            BLOCK 6b — SECOND EMAIL CAPTURE
        ═══════════════════════════════════════════ */}
        <motion.section
          className="mb-section-mobile sm:mb-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-2">
              ¿Quieres seguir la conversación?
            </h3>
            <p className="text-white/50 text-center mb-6">
              Newsletter semanal. Una táctica práctica de IA o PM. Sin spam.
            </p>
            <EmailCaptureForm id="email-capture-2" ctaText="Suscribirme al newsletter" />
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════
            BLOCK 7 — THE PS
        ═══════════════════════════════════════════ */}
        <motion.section
          className="mb-12 sm:mb-16 space-y-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <motion.h2 className="font-semibold text-lg text-white" variants={fadeUp}>
            PD: Si prefieres ir directo al grano...
          </motion.h2>
          <motion.p className="text-white/80" variants={fadeUp}>
            Hago calls de descubrimiento para entender tu contexto y ver si hay algo concreto donde puedo ayudarte. Solo trabajo con proyectos donde sé que puedo crear valor real. Si eso te describe, agenda acá.
          </motion.p>
          <motion.div variants={fadeUp}>
            <CalendlyButton />
          </motion.div>
          <motion.p className="text-white/40 text-sm" variants={fadeUp}>
            Sin compromiso. 30 minutos.
          </motion.p>
          <motion.p className="text-white/40 text-sm mt-2" variants={fadeUp}>
            Mi firma:{' '}
            <a
              href="https://villelab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/60 hover:text-accent transition-colors"
            >
              villelab.com
            </a>
          </motion.p>
        </motion.section>

        {/* ═══════════════════════════════════════════
            MINIMAL FOOTER
        ═══════════════════════════════════════════ */}
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

        {/* Close the content reveal wrapper */}
        </div>
      </div>
    </main>
  );
}

/* ─── Testimonial Sub-component ─── */
function Testimonial({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <motion.blockquote
      className="border-l-4 border-accent pl-5 py-1"
      variants={fadeUp}
    >
      <p className="italic text-white/80 mb-2">&ldquo;{quote}&rdquo;</p>
      <cite className="text-white/40 text-sm not-italic font-medium">
        &mdash; {author}
        <span className="text-white/25">, {role}</span>
      </cite>
    </motion.blockquote>
  );
}
