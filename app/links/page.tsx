import type { Metadata } from 'next';
import Image from 'next/image';
import LinksList from '@/components/LinksList';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Links',
  description: 'Cursos de IA, agenda y Villelab: los enlaces de Álvaro Villena (@alvarovillena.ia).',
  alternates: { canonical: `${siteUrl}/links` },
};

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f8] px-4 py-10">
      <div className="mx-auto flex w-full max-w-md flex-col items-center">
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-md">
          <Image
            src="/gallery/alvaro-retrato.jpg"
            alt="Álvaro Villena"
            fill
            sizes="112px"
            className="object-cover object-[50%_28%]"
            priority
          />
        </div>
        <h1 className="serif mt-4 text-3xl font-bold">Álvaro Villena</h1>
        <p className="mt-2 text-center text-base leading-snug text-muted">
          Te muestro cómo usar la IA y los agentes en tu trabajo, en simple.
        </p>
        <div className="mt-8 w-full">
          <LinksList />
        </div>
        <a href="/" className="mt-10 flex min-h-[44px] items-center text-sm font-semibold text-muted hover:text-accent">
          alvarovillena.cl
        </a>
      </div>
    </main>
  );
}
