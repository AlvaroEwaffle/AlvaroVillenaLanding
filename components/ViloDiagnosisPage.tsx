'use client';

import Link from 'next/link';
import { Play, ShieldCheck, Workflow, ArrowRight } from 'lucide-react';
import ViloQualificationForm from './ViloQualificationForm';

const VSL_URL = process.env.NEXT_PUBLIC_VILO_VSL_URL ?? '';

function VslBlock() {
  if (VSL_URL) {
    return (
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
        <div className="aspect-video w-full">
          <iframe
            src={VSL_URL}
            title="AI operations diagnosis video"
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
        <Play className="h-6 w-6" />
      </div>
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.22em] text-accent/80 font-semibold">
          Video pendiente de grabar
        </p>
        <h2 className="text-2xl font-semibold text-white">Video de introducción que deberías grabar</h2>
        <p className="max-w-2xl text-white/65 leading-relaxed">
          Aquí debería ir un video corto, directo y personal. La idea no es vender “IA” en abstracto, sino explicar
          para quién es este diagnóstico, qué problema resuelve y por qué primero filtras antes de abrir una reunión.
        </p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
          <p className="text-sm font-semibold text-white">Cómo grabarlo</p>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li>Duración ideal: 60 a 90 segundos.</li>
            <li>Formato: horizontal 16:9, cámara fija, plano medio, fondo limpio.</li>
            <li>Tono: cercano, sobrio, sin hype ni lenguaje técnico innecesario.</li>
            <li>Objetivo: que la persona entienda si vale la pena llenar el formulario.</li>
            <li>Cierre: invitar a completar el diagnóstico, no a agendar directo.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
          <p className="text-sm font-semibold text-white">Guion sugerido</p>
          <div className="mt-4 space-y-4 text-sm text-white/65 leading-relaxed">
            <p>
              “Hola, soy Álvaro Villena. Trabajo en gestión de producto hace más de 10 años y en los últimos años he
              estado ayudando a empresas y emprendedores a ordenar mejor sus operaciones con IA.”
            </p>
            <p>
              “Este diagnóstico es para negocios que sienten que algo se está trabando: llegan leads pero no se
              mueven, el follow-up se enfría, las propuestas salen tarde, o la operación depende demasiado de
              personas y de WhatsApp.”
            </p>
            <p>
              “No siempre la respuesta es meter más tecnología. A veces el problema es de proceso, otras veces sí
              conviene automatizar, y muchas veces es una mezcla de ambas. Por eso primero hago esta revisión
              inicial.”
            </p>
            <p>
              “Si veo que hay buen encaje, te abro una reunión para aterrizar por dónde partir y qué no conviene
              construir todavía. Si no, igual te queda más claro cuál es el siguiente paso correcto.”
            </p>
            <p>
              “Si te hace sentido, completa el formulario de abajo y veo personalmente si esta conversación puede
              ayudarte de verdad.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ViloDiagnosisPage() {
  return (
    <main className="min-h-screen px-5 sm:px-6">
      <div className="mx-auto max-w-4xl py-12 sm:py-20">
        <div className="space-y-10">
          <section className="space-y-8">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.22em] text-accent/80 font-semibold">
                Diagnostico de Operaciones con IA
              </p>
              <h1 className="max-w-3xl text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.05]">
                Descubre si tu negocio necesita IA, mejor sistema, o ambas.
              </h1>
              <p className="max-w-3xl text-lg text-white/60 leading-relaxed">
                Esta no es una llamada genérica. Primero evaluamos fit. Si lo hay, abrimos una reunión donde aterrizo
                el punto de partida: qué cambiar, qué automatizar y qué todavía no conviene tocar.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <p className="mt-3 text-sm font-semibold text-white">Sin humo</p>
                <p className="mt-2 text-sm text-white/55">
                  Si no veo fit real, no abro la agenda y te lo digo directo.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <Workflow className="h-5 w-5 text-accent" />
                <p className="mt-3 text-sm font-semibold text-white">Diagnóstico accionable</p>
                <p className="mt-2 text-sm text-white/55">
                  Salimos con una hipótesis clara de dónde partir, no con ideas sueltas.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <ArrowRight className="h-5 w-5 text-accent" />
                <p className="mt-3 text-sm font-semibold text-white">Siguiente paso definido</p>
                <p className="mt-2 text-sm text-white/55">
                  Match design y recomendación concreta para 30 días.
                </p>
              </div>
            </div>
          </section>

          <VslBlock />

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-sm font-semibold text-white">Qué obtienes si calificas</p>
            <ul className="mt-4 space-y-3 text-white/65">
              <li>Un diagnóstico enfocado en leads, follow-up, propuestas y operación.</li>
              <li>Un match design inicial: dónde partir y qué no construir todavía.</li>
              <li>Una recomendación de primer sistema o sprint con impacto real.</li>
            </ul>
          </div>

          <section id="formulario-diagnostico">
            <ViloQualificationForm />
          </section>
        </div>

        <footer className="mt-14 border-t border-white/10 pt-8 text-sm text-white/35">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span>&copy; 2026 Álvaro Villena</span>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/" className="transition-colors hover:text-white/65">
                Inicio
              </Link>
              <Link href="/privacidad" className="transition-colors hover:text-white/65">
                Privacidad
              </Link>
              <Link href="/terminos" className="transition-colors hover:text-white/65">
                Términos
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
