import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' },
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link href="/" className="serif text-xl font-bold">
            Álvaro Villena
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-accent">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contacto" className="btn-primary text-sm">
            Agenda una llamada
          </Link>
        </div>
      </header>

      {children}

      <footer className="border-t border-border bg-[#f6f8f8]">
        <div className="container grid gap-8 py-12 md:grid-cols-3">
          <div>
            <p className="serif text-xl font-bold">Álvaro Villena</p>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Asesor senior de tecnología y producto. Santiago, Chile. Disponible para proyectos en Chile y LatAm.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">Servicios</p>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              <Link href="/servicios#diagnostico" className="hover:text-accent">Diagnóstico 2 semanas</Link>
              <Link href="/servicios#modernizacion" className="hover:text-accent">Modernización acompañada</Link>
              <Link href="/servicios#asesor" className="hover:text-accent">Asesor de tecnología</Link>
              <Link href="/coaching" className="hover:text-accent">Coaching 1 a 1</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold">Conectar</p>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              <a href="mailto:hola@alvarovillena.cl" className="hover:text-accent">hola@alvarovillena.cl</a>
              <a href="https://www.linkedin.com/in/alvarovillena" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                LinkedIn
              </a>
              <a href="https://villelabs.cl" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Villelabs
              </a>
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-3 border-t border-border py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Álvaro Villena</span>
          <span className="flex gap-4">
            <Link href="/privacidad" className="hover:text-accent">Privacidad</Link>
            <Link href="/terminos" className="hover:text-accent">Términos</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
