# CAMBIOS

## Secciones modificadas

- `Hero`: se reescribio el headline para hablar del dolor del cliente y se dejo el CTA principal visible de inmediato apuntando a `/diagnostico`.
- `Credibilidad rapida`: se agrego una franja corta con señales de confianza visuales: LATAM Airlines, PepsiCo, Toptal Top 3% y +50 empresas.
- `Problema`: se convirtieron los 4 bullets principales en una seccion separada bajo el titulo `Lo que frena a los equipos que mas trabajan`.
- `Como trabajamos`: se creo una seccion de 3 pasos simples con CTA secundario directo a la call.
- `Casos reales`: se compactaron los casos de LATAM, PepsiCo y Conexion Industrial eliminando el detalle tecnico del stack.
- `Testimonios`: se mantuvieron los 3 testimonios y se agrego placeholder visible para foto y nombre pendiente.
- `CTA final`: se reescribio el cierre con una sola decision clara y CTA directo a agendar.
- `Newsletter`: se elimino del flujo medio de la pagina y se dejo un solo bloque antes del footer real.

## Secciones eliminadas o simplificadas

- Se elimino la estructura anterior que mezclaba biografia larga, CTA intermedio redundante y newsletter compitiendo antes de tiempo.
- Se elimino el segundo bloque de newsletter.
- Se removio el detalle tecnico extenso de los casos.
- Se simplifico el hero para evitar que el CTA principal apareciera tarde.

## TODOs dejados en codigo

- `components/SalesLetter.tsx`: TODO para reemplazar placeholders de testimonios por foto y nombre real.
- `components/SalesLetter.tsx`: TODO para mover cualquier bloque de `Onda` a una pagina separada en `/onda`.

## Decisiones de diseno

- Se mantuvo el sistema visual existente basado en Tailwind y los colores actuales.
- El CTA mas prominente de la pagina es el del hero y apunta al diagnostico.
- El CTA secundario y el CTA final apuntan a la call directa.
- Se priorizo lectura rapida, menos friccion y una sola narrativa de conversion.

## Archivo principal intervenido

- `components/SalesLetter.tsx`

## Archivo equivalente de pagina principal

- `app/page.tsx` sigue renderizando `components/SalesLetter.tsx`
