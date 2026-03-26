'use client';

import { useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { trackEvent } from './EmailCaptureForm';
import {
  assessViloLead,
  saveViloLead,
  VILO_SCHEDULING_URL,
  type ViloLeadPayload,
} from '@/lib/vilo';

type SubmissionState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'qualified'; scorePercent: number; name: string }
  | { status: 'review'; scorePercent: number; name: string }
  | { status: 'error'; message: string };

const initialLead: ViloLeadPayload = {
  name: '',
  email: '',
  phone: '',
  company: '',
  role: 'other',
  biggestBottleneck: 'otro',
  aiUsageLevel: 'nada',
  urgency: 'explorando',
  context: '',
};

function inputClassName() {
  return 'w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-colors';
}

export default function ViloQualificationForm() {
  const renderStartedAt = useRef(Date.now());
  const [lead, setLead] = useState<ViloLeadPayload>(initialLead);
  const [honeypot, setHoneypot] = useState('');
  const [submission, setSubmission] = useState<SubmissionState>({ status: 'idle' });

  const handleChange = <K extends keyof ViloLeadPayload>(key: K, value: ViloLeadPayload[K]) => {
    setLead((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (honeypot.trim()) {
      setSubmission({ status: 'review', scorePercent: 0, name: lead.name || 'tu negocio' });
      return;
    }

    if (Date.now() - renderStartedAt.current < 3500) {
      setSubmission({
        status: 'error',
        message: 'Espera un momento y vuelve a enviar. Quiero evitar envíos automáticos.',
      });
      return;
    }

    if (lead.context.trim().length < 35) {
      setSubmission({
        status: 'error',
        message: 'Necesito un poco más de contexto en la última respuesta para entender bien el diagnóstico.',
      });
      return;
    }

    setSubmission({ status: 'submitting' });

    const assessment = assessViloLead(lead);
    await saveViloLead(lead, assessment);

    trackEvent('vilo_diagnosis_submit', {
      qualified: assessment.qualified,
      score: assessment.score,
      score_percent: assessment.scorePercent,
      bottleneck: lead.biggestBottleneck,
      ai_usage_level: lead.aiUsageLevel,
      role: lead.role,
      urgency: lead.urgency,
    });

    if (assessment.qualified) {
      setSubmission({ status: 'qualified', scorePercent: assessment.scorePercent, name: lead.name });
      return;
    }

    setSubmission({ status: 'review', scorePercent: assessment.scorePercent, name: lead.name });
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/75 p-6 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
      <div className="mb-6 space-y-3">
        <p className="text-xs uppercase tracking-[0.22em] text-accent/80 font-semibold">
          Revision inicial
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Veamos si tiene sentido abrir una reunión
        </h2>
        <p className="text-white/60 leading-relaxed">
          Este formulario me ayuda a entender rápido si esta conversación puede servirte de verdad. Si veo buen encaje,
          te abro el agendamiento. Si no, te indico el siguiente paso más útil.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website-company">No llenar</label>
          <input
            id="website-company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-white/75">
            <span>Nombre</span>
            <input
              className={inputClassName()}
              value={lead.name}
              onChange={(event) => handleChange('name', event.target.value)}
              placeholder="Como quieres que te llame"
              required
            />
          </label>

          <label className="space-y-2 text-sm text-white/75">
            <span>Email</span>
            <input
              className={inputClassName()}
              type="email"
              value={lead.email}
              onChange={(event) => handleChange('email', event.target.value)}
              placeholder="Email donde deberia responderte"
              required
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-white/75">
            <span>WhatsApp</span>
            <input
              className={inputClassName()}
              type="tel"
              value={lead.phone}
              onChange={(event) => handleChange('phone', event.target.value)}
              placeholder="WhatsApp si abrimos una reunion"
              required
            />
          </label>

          <label className="space-y-2 text-sm text-white/75">
            <span>Empresa o proyecto</span>
            <input
              className={inputClassName()}
              value={lead.company}
              onChange={(event) => handleChange('company', event.target.value)}
              placeholder="Nombre del negocio o proyecto"
              required
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-white/75">
            <span>Tu rol</span>
            <select
              className={inputClassName()}
              value={lead.role}
              onChange={(event) => handleChange('role', event.target.value)}
            >
              <option value="other">Otro / prefiero no decirlo</option>
              <option value="founder-owner">Founder / dueño</option>
              <option value="ceo-gerente">CEO / gerente general</option>
              <option value="director">Director / gerente de área</option>
              <option value="lider-equipo">Líder de área o equipo</option>
              <option value="analista">Analista / coordinación / especialista</option>
            </select>
          </label>

          <label className="space-y-2 text-sm text-white/75">
            <span>Urgencia</span>
            <select
              className={inputClassName()}
              value={lead.urgency}
              onChange={(event) => handleChange('urgency', event.target.value)}
            >
              <option value="explorando">Solo explorando</option>
              <option value="trimestre">Quiero mover esto este trimestre</option>
              <option value="30-dias">Quiero arrancar en 30 días</option>
            </select>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-white/75">
            <span>¿Dónde está hoy el cuello de botella principal?</span>
            <select
              className={inputClassName()}
              value={lead.biggestBottleneck}
              onChange={(event) => handleChange('biggestBottleneck', event.target.value)}
            >
              <option value="otro">Otro / no lo tengo claro</option>
              <option value="operaciones">Operaciones internas</option>
              <option value="leads">Captura y calificación de leads</option>
              <option value="follow-up">Follow-up y cierre comercial</option>
              <option value="propuestas">Propuestas y handoff a delivery</option>
            </select>
          </label>

          <label className="space-y-2 text-sm text-white/75">
            <span>¿Cuál dirías que es el nivel de uso de IA hoy en tu equipo?</span>
            <select
              className={inputClassName()}
              value={lead.aiUsageLevel}
              onChange={(event) => handleChange('aiUsageLevel', event.target.value)}
            >
              <option value="nada">No la usamos hoy</option>
              <option value="pruebas-aisladas">Hay pruebas aisladas</option>
              <option value="uso-equipo">Ya se usa en algunas tareas del equipo</option>
              <option value="procesos-clave">Ya impacta procesos clave</option>
            </select>
          </label>
        </div>

        <label className="space-y-2 text-sm text-white/75">
          <span>Cuéntame brevemente qué se está trabando hoy y qué te gustaría cambiar</span>
          <textarea
            className={`${inputClassName()} min-h-[110px] resize-y`}
            value={lead.context}
            onChange={(event) => handleChange('context', event.target.value)}
            placeholder="Que se esta trabando hoy, que impacto tiene y que te gustaria cambiar primero."
            required
          />
        </label>

        <button
          type="submit"
          disabled={submission.status === 'submitting'}
          className="w-full rounded-xl bg-accent px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submission.status === 'submitting' ? 'Revisando fit...' : 'Revisar si califico'}
        </button>
      </form>

      {submission.status === 'qualified' && (
        <div className="mt-6 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-300 font-semibold">
            Buen encaje inicial
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            {submission.name}, sí hace sentido abrir la reunión
          </h3>
          <p className="mt-2 text-white/70 leading-relaxed">
            Tu score fue {submission.scorePercent}%. La siguiente conversación es para hacer el match design: dónde
            partir, qué no construir todavía y cuál sería el primer sistema con impacto real.
          </p>
          <a
            href={VILO_SCHEDULING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-white/90"
          >
            Abrir agendamiento
          </a>
        </div>
      )}

      {submission.status === 'review' && (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-accent/80 font-semibold">
            Revision manual
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Quedaste guardado para revisión manual
          </h3>
          <p className="mt-2 text-white/65 leading-relaxed">
            Tu score fue {submission.scorePercent}%. Prefiero revisar esto con calma antes de abrir una reunión 1:1.
            Si veo fit, te escribiré con el siguiente paso correcto.
          </p>
          <p className="mt-3 text-sm text-white/45">
            Si quieres seguir mirando, puedes volver al inicio o explorar más sobre cómo trabajo.
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:border-accent/30 hover:text-white"
          >
            Volver al inicio
          </Link>
        </div>
      )}

      {submission.status === 'error' && (
        <div className="mt-6 rounded-2xl border border-amber-500/25 bg-amber-500/10 p-4 text-sm text-amber-100">
          {submission.message}
        </div>
      )}
    </div>
  );
}
