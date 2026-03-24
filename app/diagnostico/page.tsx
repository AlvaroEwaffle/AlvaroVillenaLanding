import type { Metadata } from 'next';
import ViloDiagnosisPage from '@/components/ViloDiagnosisPage';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Diagnostico de Operaciones con IA | Álvaro Villena',
  description:
    'Evalúa si tiene sentido abrir una reunión de diagnóstico con Álvaro Villena. Diagnóstico, match design y siguiente paso claro para negocios que quieren operar mejor con IA.',
  alternates: { canonical: `${siteUrl}/diagnostico` },
  openGraph: {
    title: 'Diagnostico de Operaciones con IA | Álvaro Villena',
    description:
      'Diagnóstico y match design para detectar si tu negocio necesita IA, mejor sistema o ambas.',
    url: `${siteUrl}/diagnostico`,
  },
};

export default function DiagnosticoPage() {
  return <ViloDiagnosisPage />;
}
