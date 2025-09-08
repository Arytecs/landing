import React from "react";
import Head from "next/head";
import Image from "next/image";

// Landing — Araceli Teruel (versión simplificada sin estilos inline que rompen SSR/hidratación)

export default function LandingAraceli() {
  const heroImage = "/hero.png"; // public/hero.png
  const calendlyUrl = "https://calendly.com/araceliteruel/new-meeting";

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contacto");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Head>
        <title>Araceli Teruel · Optimización de procesos con IA y automatización</title>
        <meta
          name="description"
          content="Consultoría en procesos inteligentes, humanos y eficientes. Ayudo a pymes a optimizar sus operaciones con IA y automatización práctica."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#B8C2B0] to-[#EAD3CB]" />
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold tracking-tight">Araceli Teruel</div>
              <div className="text-xs text-neutral-600">Procesos inteligentes, humanos y eficientes</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:opacity-80">Servicios</a>
            <a href="#quien-soy" className="hover:opacity-80">Quién soy</a>
            <a href="#contacto" onClick={scrollToContact} className="hover:opacity-80">Contacto</a>
          </nav>
          <a href="#contacto" onClick={scrollToContact} className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm border border-neutral-200 hover:shadow transition bg-[#EAD3CB]">Reserva tu hueco</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 order-1 lg:order-2 flex justify-center">
            <Image
              src={heroImage}
              alt="Retrato de Araceli Teruel, consultora en IA y procesos"
              width={520}
              height={600}
              className="w-full max-w-md lg:max-w-lg rounded-2xl object-cover shadow-md lg:shadow-xl border border-neutral-200"
              priority
            />
          </div>

          <div className="flex-1 order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 text-xs rounded-full px-3 py-1 border border-neutral-300 bg-white/70">
              <span className="h-2 w-2 rounded-full bg-[#B8C2B0]"></span>
              Diagnóstico y automatización sin complicaciones
            </span>
            <h1 className="mt-4 font-display text-4xl/tight sm:text-5xl font-bold text-[#0F172A]">
              Procesos más ágiles, humanos y rentables con IA
            </h1>
            <p className="mt-4 font-body text-lg text-neutral-700 max-w-xl">
              Trabajo contigo para identificar qué procesos te frenan y cómo mejorarlos con automatización práctica y resultados medibles.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contacto" onClick={scrollToContact} className="inline-flex justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-md transition bg-[#0F172A]">Reserva tu llamada</a>
              <a href="#servicios" className="inline-flex justify-center rounded-xl px-5 py-3 text-sm font-semibold border border-neutral-300 bg-white/80 hover:bg-white transition">Ver cómo trabajo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto con Calendly embed (simplificado) */}
      <section id="contacto" className="py-16 bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Contacto</h2>
            <p className="mt-3 text-neutral-700">Elige directamente en mi calendario el momento que mejor te vaya. Así de fácil.</p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li><strong>Email:</strong> hola@araceliteruel.com</li>
              <li><strong>LinkedIn:</strong> <a className="underline" href="https://www.linkedin.com/in/araceliteruel">/in/araceliteruel</a></li>
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
    </div>
  );
}
