const categories = [
  {
    title: 'Software de diseño',
    items: ['SolidEdge', 'AutoCAD 3D', 'CYPE', 'SketchUp'],
  },
  {
    title: 'Competencias profesionales',
    items: ['Resolución de problemas', 'Informes técnicos', 'Trabajo en equipo'],
  },
  {
    title: 'Idiomas',
    items: ['Inglés — B2 Cambridge'],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-3 block">
            Competencias
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Herramientas y competencias desarrolladas a lo largo de mi formación académica y proyectos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((category) => (
            <div key={category.title} className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-5 pb-3 border-b border-slate-100">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
