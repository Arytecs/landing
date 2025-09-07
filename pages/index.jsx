import React from "react";
import Head from "next/head";
import Image from "next/image";

/**
 * Landing — Araceli Teruel
 *
 * 🔧 Fix de build: eliminado el uso de `fs`/`path` y `getStaticProps` en esta página
 * para evitar errores en entornos sin Node (sandbox/canvas). Mantén `robots.txt`
 * y `sitemap.xml` como archivos estáticos en `public/` o genera esos ficheros
 * en otro script del proyecto (por ejemplo con `next-sitemap`).
 *  - public/robots.txt
 *    User-agent: *\nAllow: /\n\nSitemap: https://araceliteruel.com/sitemap.xml
 *  - public/sitemap.xml (ver ejemplo que te pasé)
 */

export default function LandingAraceli() {
  const heroImage = "/hero.png"; // coloca tu imagen en public/hero.png
  const calendlyUrl = "https://calendly.com/araceliteruel/new-meeting";

  // Scroll suave hasta la sección de contacto (Calendly)
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contacto");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const schemaPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Araceli Teruel",
    jobTitle: "Consultora en IA y optimización de procesos",
    url: "https://araceliteruel.com",
    image: heroImage,
    description:
      "Consultoría en procesos inteligentes, humanos y eficientes. Ayudo a pymes a optimizar sus operaciones con IA y automatización práctica.",
    sameAs: ["https://www.linkedin.com/in/araceliteruel"],
  };

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Araceli Teruel · Consultoría en IA y procesos",
    url: "https://araceliteruel.com",
    logo: heroImage,
    description:
      "Consultoría especializada en optimización de procesos empresariales con Inteligencia Artificial y automatización.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hola@araceliteruel.com",
        url: "https://araceliteruel.com/contacto",
      },
    ],
    sameAs: ["https://www.linkedin.com/in/araceliteruel"],
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Brand tokens + fuentes */}
      <style>{`
        :root{
          --brand-sage:#B8C2B0;
          --brand-rose:#EAD3CB;
          --brand-ink:#0F172A;
        }
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Roboto:wght@300;400;500&display=swap');
        .font-display{font-family:'Montserrat',system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}
        .font-body{font-family:'Roboto',system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}
      `}</style>

      <Head>
        <title>Araceli Teruel · Optimización de procesos con IA y automatización</title>
        <meta
          name="description"
          content="Consultoría en procesos inteligentes, humanos y eficientes. Ayudo a pymes a optimizar sus operaciones con IA y automatización práctica."
        />
        <meta
          property="og:title"
          content="Araceli Teruel · Optimización de procesos con IA y automatización"
        />
        <meta
          property="og:description"
          content="Procesos más ágiles, humanos y rentables. Consultoría en automatización e IA aplicada a pymes."
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Araceli Teruel · Procesos inteligentes, humanos y eficientes"
        />
        <meta
          name="twitter:description"
          content="Optimización de procesos con IA y automatización práctica."
        />
        <meta name="twitter:image" content={heroImage} />
        <script type="application/ld+json">{JSON.stringify(schemaPerson)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="h-8 w-8 rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, var(--brand-sage), var(--brand-rose))",
              }}
            />
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold tracking-tight">
                Araceli Teruel
              </div>
              <div className="text-xs text-neutral-600">
                Procesos inteligentes, humanos y eficientes
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:opacity-80">
              Servicios
            </a>
            <a href="#quien-soy" className="hover:opacity-80">
              Quién soy
            </a>
            <a href="#contacto" onClick={scrollToContact} className="hover:opacity-80">
              Contacto
            </a>
          </nav>
          <a
            href="#contacto"
            onClick={scrollToContact}
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm border border-neutral-200 hover:shadow transition"
            style={{ background: "var(--brand-rose)" }}
          >
            Reserva tu hueco
          </a>
        </div>
      </header>

      {/* HERO: imagen primero en móvil, texto primero en desktop */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div
            className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30"
            style={{ background: "var(--brand-rose)" }}
          />
          <div
            className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-30"
            style={{ background: "var(--brand-sage)" }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-10">
          {/* Imagen primero en mobile */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center">
            <figure className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src={heroImage}
                alt="Retrato de Araceli Teruel, consultora en IA y procesos"
                width={520}
                height={600}
                className="w-full rounded-2xl object-cover shadow-md lg:shadow-xl border border-neutral-200"
                priority
              />
              <figcaption className="sr-only">Araceli Teruel</figcaption>
              <div className="absolute -bottom-2 -right-2 h-8 w-8 lg:h-10 lg:w-10 rounded-full border border-neutral-200 bg-white/80 backdrop-blur" />
            </figure>
          </div>

          {/* Texto a la izquierda en desktop */}
          <div className="flex-1 order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 text-xs rounded-full px-3 py-1 border border-neutral-300 bg-white/70">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--brand-sage)" }}
              ></span>
              Diagnóstico y automatización sin complicaciones
            </span>
            <h1 className="mt-4 font-display text-4xl/tight sm:text-5xl font-bold text-[var(--brand-ink)]">
              Procesos más ágiles, humanos y rentables con IA
            </h1>
            <p className="mt-4 font-body text-lg text-neutral-700 max-w-xl">
              Trabajo contigo para identificar qué procesos te frenan y cómo
              mejorarlos con automatización práctica y resultados medibles.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contacto"
                onClick={scrollToContact}
                className="inline-flex justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-md transition"
                style={{ background: "var(--brand-ink)" }}
              >
                Reserva tu llamada
              </a>
              <a
                href="#servicios"
                className="inline-flex justify-center rounded-xl px-5 py-3 text-sm font-semibold border border-neutral-300 bg-white/80 hover:bg-white transition"
              >
                Ver cómo trabajo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">Mi forma de trabajar</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                h: "Diagnóstico claro",
                p: "Hacemos una radiografía de tus procesos y priorizamos dónde vas a ganar más con IA y automatización.",
              },
              {
                h: "Piloto rápido",
                p: "Implementamos un caso real en pocas semanas. Nada de eternas consultorías, sino resultados tangibles.",
              },
              {
                h: "Escalado acompañado",
                p: "Si el piloto funciona, creamos un plan para escalar y formar al equipo, con indicadores claros.",
              },
            ].map((b, i) => (
              <article
                key={i}
                className="rounded-2xl p-6 bg-white border border-neutral-200 hover:shadow-sm transition"
              >
                <div
                  className="h-10 w-10 rounded-xl mb-4"
                  style={{
                    background:
                      i === 0
                        ? "var(--brand-sage)"
                        : i === 1
                        ? "var(--brand-rose)"
                        : "#D4D4D8",
                  }}
                />
                <h3 className="font-display font-semibold">{b.h}</h3>
                <p className="mt-1 text-sm text-neutral-700">{b.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quién soy */}
      <section id="quien-soy" className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Quién soy</h2>
            <p className="mt-4 font-body text-neutral-700">
              Soy Araceli Teruel, matemática y desarrolladora. He pasado más de
              10 años ayudando a equipos a organizarse mejor y a que la
              tecnología trabaje a su favor. Mi estilo es sencillo: claridad,
              empatía y resultados.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-800">
              <li>• Automatización con IA que ahorra tiempo sin complicar a tu equipo.</li>
              <li>• Integraciones API y flujos serverless, explicados sin tecnicismos innecesarios.</li>
              <li>• Acompañamiento humano: procesos claros y formación práctica.</li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm">
              <div className="text-sm text-neutral-500">Disponibilidad</div>
              <div className="mt-1 font-display font-semibold">
                1–2 proyectos nuevos de diagnóstico
              </div>
              <p className="mt-3 text-sm text-neutral-700">
                ¿Te encaja? Empezamos por un diagnóstico sencillo, sin
                compromisos y con valor inmediato.
              </p>
              <a
                href="#contacto"
                onClick={scrollToContact}
                className="mt-4 inline-flex justify-center rounded-xl px-4 py-2 text-sm font-semibold border border-neutral-300 bg-white hover:bg-neutral-50"
              >
                Reserva tu hueco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA bar */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="font-display font-semibold">
                ¿Damos el primer paso?
              </div>
              <div className="text-sm text-neutral-700">
                Una llamada de 20–30 minutos para conocernos y ver dónde tiene
                sentido empezar.
              </div>
            </div>
            <a
              href="#contacto"
              onClick={scrollToContact}
              className="inline-flex justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-md transition"
              style={{ background: "var(--brand-ink)" }}
            >
              Hablemos
            </a>
          </div>
        </div>
      </section>

      {/* Contacto con Calendly embed */}
      <section id="contacto" className="py-16 bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Contacto</h2>
            <p className="mt-3 text-neutral-700">
              Elige directamente en mi calendario el momento que mejor te vaya.
              Así de fácil.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li>
                <strong>Email:</strong> hola@araceliteruel.com
              </li>
              <li>
                <strong>LinkedIn:</strong> <a className="underline" href="#">/in/araceliteruel</a>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
            <iframe
              src={`${calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1`}
              width="100%"
              height="600"
              frameBorder="0"
              className="rounded-xl"
              title="Calendly Araceli Teruel"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Araceli Teruel — Procesos inteligentes,
            humanos y eficientes
          </div>
          <div className="text-sm">
            <a href="#" className="underline">
              Política de privacidad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
