export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-white mb-1">Iván Cañas Jiménez</p>
            <p className="text-sm">Estudiante de Ingeniería Mecánica · Universidad de Málaga</p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#inicio"
              className="text-sm hover:text-white transition-colors"
            >
              Inicio
            </a>
            <a
              href="#sobre-mi"
              className="text-sm hover:text-white transition-colors"
            >
              Sobre mí
            </a>
            <a
              href="#servicios"
              className="text-sm hover:text-white transition-colors"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="text-sm hover:text-white transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm">
          <p> {currentYear} Iván Cañas Jiménez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
