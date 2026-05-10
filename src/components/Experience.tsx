export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-3 block">
            Trayectoria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Experiencia Profesional
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Empresa principal */}
          <div className="relative pl-8 md:pl-0">
            <div className="md:grid md:grid-cols-12 gap-8">
              {/* Timeline */}
              <div className="hidden md:flex md:col-span-4 flex-col items-end text-right pr-8 relative">
                <div className="text-sm font-semibold text-blue-600">Agosto 2025 — Actualidad</div>
                <div className="text-sm text-slate-500 mt-1">Málaga, España</div>
              </div>
              <div className="md:col-span-8 relative">
                {/* Dot and line */}
                <div className="absolute left-[-33px] top-1.5 w-3 h-3 rounded-full bg-blue-600 border-4 border-slate-50" />
                <div className="absolute left-[-29px] top-5 w-0.5 h-full bg-slate-200" />

                <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Ingeniero Ferroviario</h3>
                      <p className="text-blue-600 font-medium">COX ABG Group SA</p>
                      {/* Mobile date */}
                      <p className="text-sm text-slate-500 mt-1 md:hidden">Agosto 2025 — Actualidad · Málaga</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        Ingeniería Ferroviaria, Licitaciones y Control de Obra
                      </h4>
                      <ul className="space-y-2 text-slate-600 text-sm leading-relaxed pl-4">
                        <li className="flex gap-2">
                          <span className="text-slate-400 mt-1">›</span>
                          <span><strong className="text-slate-800">Gestión de Licitaciones:</strong> Redacción de memorias técnicas, preparación de ofertas y generación de documentación para concursos públicos (Adif) y clientes privados.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-slate-400 mt-1">›</span>
                          <span><strong className="text-slate-800">Cálculo e Ingeniería de Detalle:</strong> Cálculos estructurales y mecánicos para infraestructura ferroviaria, incluyendo postes, cimentaciones y tensiones de catenaria.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-slate-400 mt-1">›</span>
                          <span><strong className="text-slate-800">Preparación y Control de Obra:</strong> Generación de libretas de trabajo, planos de replanteo y mapas cartográficos. Supervisión presencial en obra.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-slate-400 mt-1">›</span>
                          <span><strong className="text-slate-800">Control de Materiales y Logística:</strong> Listados de control en Excel para recuento de piezas y negociación técnica con proveedores.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        Modelado de Infraestructuras y Sistemas de Peaje
                      </h4>
                      <ul className="space-y-2 text-slate-600 text-sm leading-relaxed pl-4">
                        <li className="flex gap-2">
                          <span className="text-slate-400 mt-1">›</span>
                          <span><strong className="text-slate-800">Diseño CAD 3D:</strong> Modelado integral de estructuras y equipos de peaje utilizando Solid Edge.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-slate-400 mt-1">›</span>
                          <span><strong className="text-slate-800">Generación de Planimetría:</strong> Creación de archivos de pieza, planos de conjunto y documentación de planos electrónicos para manufactura.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-slate-400 mt-1">›</span>
                          <span><strong className="text-slate-800">Mantenimiento de Bases de Datos Técnicas:</strong> Actualización de información y modelos, depuración de geometría y aseguramiento de la documentación final.</span>
                        </li>
                      </ul>
                    </div>
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
