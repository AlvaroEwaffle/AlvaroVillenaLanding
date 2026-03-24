'use client';

import Link from 'next/link';
import { ShieldCheck, Workflow, ArrowRight } from 'lucide-react';
import ViloQualificationForm from './ViloQualificationForm';

const VSL_URL = process.env.NEXT_PUBLIC_VILO_VSL_URL ?? '';

function VslBlock() {
  if (!VSL_URL) return null;

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

          {VSL_URL ? <VslBlock /> : null}

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
