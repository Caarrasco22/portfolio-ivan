import { useState } from 'react';

const services = [
  {
    title: 'Diseño 3D',
    description: 'Modelado y diseño de piezas y ensamblajes en 3D utilizando SolidEdge, AutoCAD 3D y SketchUp para proyectos de ingeniería.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Dibujo Técnico',
    description: 'Elaboración de planos técnicos detallados, vistas auxiliares y documentación de fabricación conforme a normas.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    title: 'Cálculo Estructural',
    description: 'Análisis y cálculo de estructuras utilizando CYPE para verificación de elementos resistentes y optimización.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Informes Técnicos',
    description: 'Redacción de documentación técnica, memorias descriptivas y especificaciones para proyectos de ingeniería.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-3 block">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Qué puedo ofrecer
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Servicios de ingeniería mecánica con enfoque profesional y atención al detalle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`p-6 rounded-xl border transition-all duration-300 cursor-default ${
                hoveredIndex === index
                  ? 'border-blue-200 bg-blue-50 shadow-lg shadow-blue-100 -translate-y-1'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                hoveredIndex === index ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
