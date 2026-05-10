export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-3 block">
              Acerca de mí
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ingeniero Ferroviario y de Proyectos
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Soy un Ingeniero Ferroviario y de Proyectos con un perfil altamente versátil, capaz de integrar el trabajo de campo, el cálculo técnico puro y el diseño 3D. A lo largo de mi trayectoria he abarcado el ciclo de vida completo de grandes proyectos de infraestructura, dividiendo mi especialización en dos grandes áreas: la ejecución y licitación de obra ferroviaria (pública y privada) y el modelado técnico avanzado de sistemas de peaje para vías de automóviles.
              </p>
              <p>
                Mi valor añadido reside en mi capacidad para bajar al barro: desde calcular las tensiones de una catenaria o pisar la obra para un replanteo, hasta pelear precios con proveedores y dejar un modelo 3D impecable para producción.
              </p>
              <p>
                Además, poseo un certificado de nivel <strong className="text-slate-900">B2 de inglés por Cambridge</strong>, lo que me capacita para colaborar en equipos internacionales.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {/* Foto de perfil */}
            <div className="flex justify-center">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg ring-1 ring-slate-200">
                <img
                  src="/foto-cv.jpg"
                  alt="Iván Cañas Jiménez"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Información académica</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Grado en Ingeniería Mecánica</h4>
                    <p className="text-sm text-slate-500">Universidad de Málaga · Finalizando quinto año</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Inglés B2 - Cambridge</h4>
                    <p className="text-sm text-slate-500">Nivel intermedio-alto</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Ubicación</h4>
                    <p className="text-sm text-slate-500">Málaga, Andalucía, España</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
