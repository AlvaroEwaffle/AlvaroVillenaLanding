'use client';

import { useEffect, useMemo, useState } from 'react';
import { VILO_SCHEDULING_URL } from '@/lib/vilo';

const ATTRIBUTION_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

function buildSchedulerUrl(): string {
  const target = new URL(process.env.NEXT_PUBLIC_CAPU_SCHEDULING_URL || VILO_SCHEDULING_URL);
  const current = new URLSearchParams(window.location.search);
  const gclid = current.get('gclid') || localStorage.getItem('gclid');

  if (gclid) target.searchParams.set('gclid', gclid);
  for (const key of ATTRIBUTION_KEYS) {
    const value = current.get(key);
    if (value) target.searchParams.set(key, value);
  }

  if (document.referrer) target.searchParams.set('referrer', document.referrer);
  target.searchParams.set('source_url', window.location.href);

  return target.toString();
}

function getSchedulerOrigin(): string {
  return new URL(process.env.NEXT_PUBLIC_CAPU_SCHEDULING_URL || VILO_SCHEDULING_URL).origin;
}

export default function CapuSchedulerEmbed() {
  const [src, setSrc] = useState('');

  useEffect(() => {
    setSrc(buildSchedulerUrl());
    const schedulerOrigin = getSchedulerOrigin();

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== schedulerOrigin) return;

      const data = event.data as { type?: string; redirectUrl?: string };
      if (data?.type === 'capu:booking-confirmed' && data.redirectUrl) {
        window.location.href = data.redirectUrl;
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const fallbackUrl = useMemo(
    () => process.env.NEXT_PUBLIC_CAPU_SCHEDULING_URL || VILO_SCHEDULING_URL,
    []
  );

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-white">
      {src ? (
        <iframe
          title="Agenda una llamada con Álvaro Villena"
          src={src}
          className="h-[760px] w-full"
          loading="lazy"
        />
      ) : (
        <div className="flex h-[360px] items-center justify-center text-sm text-muted">
          Cargando agenda...
        </div>
      )}
      <div className="border-t border-border bg-[#f6f8f8] px-4 py-3 text-center text-sm text-muted">
        Si la agenda no carga, abre el link directo:{' '}
        <a href={src || fallbackUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent">
          agendar llamada
        </a>
      </div>
    </div>
  );
}
