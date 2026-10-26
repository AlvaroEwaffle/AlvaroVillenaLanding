'use client';

import { CalendarDays, GraduationCap, Bot, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { LINKEDIN_URL, VILO_SCHEDULING_URL } from '@/lib/vilo';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const UTM = 'utm_source=alvarovillena.cl&utm_medium=linkinbio&utm_campaign=links';
const ACADEMIA = 'https://academia.e-waffle.com';

const cursos = [
  { label: 'Delega tu primera tarea a un agente', href: `${ACADEMIA}/curso/conversacion-a-agente?${UTM}&utm_content=conversacion-a-agente` },
  { label: 'Coordina varios agentes trabajando para ti', href: `${ACADEMIA}/curso/agente-a-sistema?${UTM}&utm_content=agente-a-sistema` },
];

function track(link: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'link_in_bio_click', link });
}

const base =
  'flex min-h-[64px] w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md';
const card = `${base} border-border bg-white`;

export default function LinksList() {
  return (
    <div className="flex w-full flex-col gap-3">
      <a href={`${ACADEMIA}/?${UTM}&utm_content=cursos`} target="_blank" rel="noopener noreferrer" onClick={() => track('cursos')} className={card}>
        <GraduationCap className="h-6 w-6 shrink-0 text-accent" aria-hidden />
        <span className="flex-1">
          <span className="block font-bold leading-tight">Mis cursos de IA</span>
          <span className="block text-sm leading-snug text-muted">Academia Ewaffle: aprende a trabajar con agentes</span>
        </span>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted" aria-hidden />
      </a>
      <div className="-mt-1 flex flex-col gap-2 pl-4">
        {cursos.map((c) => (
          <a
            key={c.href}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track(`curso:${c.label}`)}
            className="flex min-h-[44px] items-center gap-2 rounded-xl px-3 text-sm font-semibold text-foreground/80 hover:bg-[#f0f5f8] hover:text-accent"
          >
            <span className="text-accent">→</span> {c.label}
          </a>
        ))}
      </div>

      <a href={VILO_SCHEDULING_URL} target="_blank" rel="noopener noreferrer" onClick={() => track('agenda')} className={`${base} border-accent bg-accent text-white hover:shadow-lg`}>
        <CalendarDays className="h-6 w-6 shrink-0" aria-hidden />
        <span className="flex-1">
          <span className="block font-bold leading-tight">Agenda una llamada conmigo</span>
          <span className="block text-sm leading-snug text-white/85">30 minutos para ver qué puede hacer la IA por tu negocio</span>
        </span>
        <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden />
      </a>

      <a href={`https://villelab.com/?${UTM}&utm_content=villelab`} target="_blank" rel="noopener noreferrer" onClick={() => track('villelab')} className={card}>
        <Bot className="h-6 w-6 shrink-0 text-accent" aria-hidden />
        <span className="flex-1">
          <span className="block font-bold leading-tight">Villelab</span>
          <span className="block text-sm leading-snug text-muted">Agentes de IA para equipos, instalados y funcionando</span>
        </span>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted" aria-hidden />
      </a>

      <div className="mt-4 flex justify-center gap-3">
        <a href="https://www.instagram.com/alvarovillena.ia/" target="_blank" rel="noopener noreferrer" onClick={() => track('instagram')} aria-label="Instagram @alvarovillena.ia" className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-foreground hover:border-accent hover:text-accent">
          <Instagram className="h-5 w-5" aria-hidden />
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" onClick={() => track('linkedin')} aria-label="LinkedIn de Álvaro Villena" className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-foreground hover:border-accent hover:text-accent">
          <Linkedin className="h-5 w-5" aria-hidden />
        </a>
      </div>
    </div>
  );
}
