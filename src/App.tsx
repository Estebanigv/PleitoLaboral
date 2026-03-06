import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Award,
  FileText,
  Scale,
  ShieldCheck,
  Stethoscope,
  UserX,
  ArrowUpRight,
  Handshake,
  ClipboardCheck,
  Linkedin,
  Instagram,
  Facebook,
  Send,
  ChevronRight,
  Clock,
  Menu,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/* ── Componente reutilizable de título de sección ── */
const SectionLabel = ({ text, dark = false }: { text: string; dark?: boolean }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className={`h-px w-8 ${dark ? 'bg-[#D4AF37]' : 'bg-[#3b82f6]'}`} />
    <span className={`text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full border ${
      dark
        ? 'text-[#D4AF37] border-[#D4AF37]/30 bg-[#D4AF37]/10'
        : 'text-[#3b82f6] border-[#3b82f6]/20 bg-[#3b82f6]/5'
    }`}>
      {text}
    </span>
    <div className={`h-px w-4 ${dark ? 'bg-[#D4AF37]/40' : 'bg-[#3b82f6]/20'}`} />
  </div>
);

/* ─────────────────────────────────────────────────────────── NAVBAR ── */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Trabajadores', href: '#trabajadores' },
    { label: 'Empresas', href: '#empresas' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 320);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={scrolled ? '/logo/isotipo pleito laboral - azul.svg' : '/logo/isotipo pleito laboral - blanco.svg'}
              alt="Isotipo Pleito Laboral"
              className="h-8 sm:h-11 w-auto object-contain"
            />
            <div className="flex flex-col">
              <h2 className={`text-sm sm:text-xl font-black leading-none tracking-tighter uppercase ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                Pleito Laboral
              </h2>
              <span className={`flex justify-between text-[10px] sm:text-[13px] font-black uppercase ${scrolled ? 'text-[#3b82f6]' : 'text-[#D4AF37]'}`}>
                {'ABOGADOS'.split('').map((l, i) => <span key={i}>{l}</span>)}
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:opacity-70 ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+56994712414"
              className={`hidden md:flex items-center gap-2 text-xs font-bold ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              <Phone size={14} className="text-[#D4AF37]" />
              +56 9 9471 2414
            </a>
            <div className="hidden md:block w-px h-5 bg-white/20" />
            <a
              href="#contacto"
              className="hidden sm:block bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-[11px] font-black uppercase tracking-widest shadow-xl shadow-blue-500/20 transition-all active:scale-95"
            >
              Consulta Express
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}
              aria-label="Abrir menú"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/70 z-[200] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
              className="fixed top-0 right-0 h-full w-[300px] z-[210] lg:hidden flex flex-col overflow-hidden"
              style={{ background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 100%)' }}
            >
              {/* Decoración fondo */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#3b82f6]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

              {/* Header */}
              <div className="relative flex justify-between items-center px-6 pt-6 pb-5">
                <div className="flex items-center gap-3">
                  <img src="/logo/isotipo pleito laboral - blanco.svg" alt="Logo" className="h-8 w-auto" />
                  <div>
                    <p className="text-white font-black uppercase tracking-tighter text-sm leading-none">Pleito Laboral</p>
                    <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-[0.2em]">Abogados</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Línea decorativa dorada */}
              <div className="mx-6 h-px bg-gradient-to-r from-[#D4AF37]/60 via-[#D4AF37]/20 to-transparent mb-6" />

              {/* Nav links */}
              <nav className="relative flex flex-col px-4 gap-1 flex-1">
                {links.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className="group flex items-center justify-between px-4 py-4 rounded-2xl text-white/50 hover:text-white hover:bg-white/8 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                      <span className="font-black uppercase tracking-widest text-xs">{item.label}</span>
                    </div>
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#3b82f6]" />
                  </motion.a>
                ))}
              </nav>

              {/* Footer */}
              <div className="relative px-6 py-6">
                <div className="mb-4 h-px bg-white/8" />
                <a
                  href="tel:+56994712414"
                  className="flex items-center gap-2 text-white/30 hover:text-white/70 text-xs mb-4 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <Phone size={12} className="text-[#D4AF37]" />
                  </div>
                  +56 9 9471 2414
                </a>
                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contacto'); }}
                  className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white text-center rounded-2xl py-4 font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  Solicitar Consulta <ChevronRight size={13} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

/* ──────────────────────────────────────────────────────────── HERO ── */
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950" id="inicio">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
          alt="Tribunales de Justicia"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 flex items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full max-w-4xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6 md:mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[#D4AF37] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
              Excelencia Jurídica en Chile
            </span>
          </div>

          {/* Título */}
          <h1 className="font-serif text-white text-[2.4rem] sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-5 md:mb-8 tracking-tighter">
            Resultados Sólidos
            <span className="block">para <span className="text-[#D4AF37]">Trabajadores</span></span>
            <span className="block text-[#D4AF37]">y Empresas</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-slate-300 text-sm sm:text-base md:text-xl font-light leading-relaxed max-w-xl mb-8 md:mb-10">
            Defensa jurídica de alto impacto con honorarios contra resultados.
            Ubicados en Vitacura, Santiago.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <a
              href="#contacto"
              className="group bg-white text-slate-950 rounded-full px-7 py-4 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:bg-[#D4AF37] hover:text-white"
            >
              Solicitar Consulta Gratuita
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/56994712414?text=Hola%2C%20me%20gustar%C3%ADa%20una%20consulta%20laboral%20gratuita."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-full px-7 py-4 font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle size={15} className="shrink-0" />
              Habla con un Abogado
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Badge — solo en pantallas XL para evitar colisión con WhatsApp */}
      <div className="absolute bottom-12 right-36 hidden xl:block">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center gap-4">
          <div className="bg-[#D4AF37] p-3 rounded-xl">
            <Award className="text-white" size={28} />
          </div>
          <div>
            <p className="text-white font-black text-xl leading-none">98%</p>
            <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest mt-1">Éxito en Juicios</p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ────────────────────────────────────────────────────────── TRUSTBAR ── */
const useCountUp = (target: number, duration = 1800, active = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
};

const StatItem = ({ label, value, suffix, idx }: { label: string; value: number; suffix: string; idx: number }) => {
  const [active, setActive] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 1800, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const display = suffix === 'k' ? (count >= value ? '1k' : count) : String(count).padStart(2, '0');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.15 }}
      className="flex flex-col items-center text-center gap-3 px-4 md:px-8 relative"
    >
      {/* Número */}
      <div className="flex items-end gap-1">
        <span className="text-white text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none">
          {display}
        </span>
        <span className="text-[#D4AF37] text-3xl md:text-4xl font-black leading-none mb-1">+</span>
      </div>
      {/* Línea decorativa */}
      <div className="w-8 h-[2px] bg-[#D4AF37]/40 rounded-full" />
      <p className="text-white/50 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em]">{label}</p>
    </motion.div>
  );
};

const TrustBar = () => {
  const stats = [
    { label: 'Años de Trayectoria', value: 16, suffix: '' },
    { label: 'Procesos Liderados', value: 1, suffix: 'k' },
    { label: 'Abogados Senior', value: 8, suffix: '' },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Título sección */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">Nuestra Trayectoria</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-3 divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <StatItem key={idx} idx={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────── SERVICES ── */
type Service = { title: string; icon: React.ReactElement; desc: string; full: string };

const ServiceModal = ({ service, onClose }: { service: Service; onClose: () => void }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl p-8 md:p-10 max-w-xl w-full shadow-2xl relative max-h-[85vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
          <X size={16} className="text-slate-600" />
        </button>
        <div className="w-14 h-14 bg-[#3b82f6]/10 rounded-2xl flex items-center justify-center text-[#3b82f6] mb-6">
          {React.cloneElement(service.icon, { size: 28 })}
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{service.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-8">{service.full}</p>
        <a
          href="#contacto"
          onClick={onClose}
          className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-black uppercase tracking-widest text-xs py-4 px-8 rounded-2xl transition-all active:scale-95 inline-flex items-center gap-2"
        >
          Consultar este Caso <ChevronRight size={14} />
        </a>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const ServicesGrid = () => {
  const [activeTab, setActiveTab] = useState<'workers' | 'companies'>('workers');
  const [selected, setSelected] = useState<Service | null>(null);

  const workerServices: Service[] = [
    {
      title: 'Despido Injustificado',
      icon: <UserX />,
      desc: 'Representación ante la Inspección del Trabajo o Tribunales de Justicia.',
      full: 'Si tu empleador te despidió sin cumplir con las formalidades legales, o invocando una causal improcedente, tienes derecho a las indemnizaciones de tu finiquito, más un recargo legal del 30% al 100% según la causal invocada. Te podemos representar para exigirlas ante la Inspección del Trabajo o a través de una demanda en los Tribunales de Justicia.',
    },
    {
      title: 'Despido Indirecto (Autodespido)',
      icon: <ArrowUpRight />,
      desc: 'Gestión de autodespido por incumplimientos graves del empleador.',
      full: 'Si tu empleador ha incumplido gravemente las obligaciones del contrato (como el no pago de cotizaciones y/o remuneraciones) tienes el derecho de poner término al vínculo laboral y demandar el pago de tus indemnizaciones como si hubieses sido despedido. Te guiamos en la redacción de la carta de autodespido y en la demanda posterior para exigir las indemnizaciones que correspondan.',
    },
    {
      title: 'Nulidad del Despido',
      icon: <FileText />,
      desc: 'Demanda por no pago de cotizaciones previsionales al momento del despido.',
      full: 'Si al momento de tu despido no tienes tus cotizaciones previsionales, de salud o seguro de cesantía pagadas al día, el despido es nulo. Esto obliga al empleador a pagarte todas las remuneraciones desde la fecha del despido hasta que se convalide legalmente el pago de las deudas.',
    },
    {
      title: 'Tutela de Derechos Fundamentales',
      icon: <ShieldCheck />,
      desc: 'Protección constitucional ante acoso laboral, discriminación y vulneraciones.',
      full: 'Protegemos tus derechos fundamentales garantizados por la Constitución. Interponemos demandas de tutela frente a casos de acoso laboral, vulneración de la intimidad o actos discriminatorios, entre otros. Nuestro objetivo es obtener la indemnización especial que establece la ley (de 6 a 11 remuneraciones) adicional a tus años de servicio, para una reparación íntegra del daño causado.',
    },
    {
      title: 'Accidentes y Enfermedades Laborales',
      icon: <Stethoscope />,
      desc: 'Indemnizaciones por daño moral, daño emergente y lucro cesante.',
      full: 'Si sufriste un accidente debido a la falta de medidas de seguridad en tu empresa, o una enfermedad derivada de tu trabajo, tienes derecho a una indemnización por daños y perjuicios (daño moral, daño emergente y lucro cesante). Te representamos para demandar la responsabilidad del empleador para que recibas la compensación que tu salud y futuro requieren.',
    },
    {
      title: 'Fueros Laborales',
      icon: <ShieldCheck />,
      desc: '¿Tienes fuero maternal o sindical y fuiste despedido? Te protegemos.',
      full: '¿Cuentas con fuero y fuiste despedido? Protegemos tu estabilidad laboral. Si gozas de fuero maternal o sindical, tu empleador no puede desvincularte sin una autorización judicial previa. Nuestro equipo se encarga de impugnar cualquier medida arbitraria y buscar una adecuada restitución de tus derechos.',
    },
    {
      title: 'Defensa en Sumarios Administrativos',
      icon: <ClipboardCheck />,
      desc: 'Representación técnica en procesos disciplinarios en el sector público.',
      full: 'Un proceso disciplinario pone en riesgo más que su empleo: afecta su prestigio y carrera funcionaria. En el mundo público, la rigurosidad en los plazos y el cumplimiento del debido proceso son críticos. No permita que errores de forma sepulten su defensa; aseguramos una representación técnica ante la institución, la Contraloría General de la República y Tribunales Laborales para proteger su integridad profesional.',
    },
    {
      title: 'Asesoría Sindical',
      icon: <Handshake />,
      desc: 'Acompañamiento integral en toda la vida del sindicato.',
      full: 'Podemos acompañarle en toda la vida de su sindicato. Primero, asesorando la constitución del mismo para el adecuado cumplimiento de los requisitos legales. Segundo, acompañando los procesos de negociación colectiva desde una perspectiva formal y estratégica. Tercero, protegiéndoles ante cualquier práctica antisindical que su empleador pueda llegar a adoptar, por las vías administrativas o judiciales que correspondan.',
    },
  ];

  const companyServices: Service[] = [
    {
      title: 'Litigación Laboral de Alta Complejidad',
      icon: <Scale />,
      desc: 'Defensa y representación en juicios de alta cuantía ante tribunales laborales.',
      full: 'Defensa y representación técnica en juicios de alta cuantía y complejidad, incluyendo despidos injustificados, tutela de derechos fundamentales, accidentes del trabajo y enfermedades profesionales.',
    },
    {
      title: 'Gestión ante la Inspección del Trabajo',
      icon: <ClipboardCheck />,
      desc: 'Asistencia en comparendos y respuestas técnicas ante la Dirección del Trabajo.',
      full: 'Asistencia experta en comparendos de conciliación y elaboración de respuestas técnicas ante la Dirección del Trabajo y la Seremi de Salud, asegurando una postura sólida desde la primera instancia.',
    },
    {
      title: 'Reclamo contra Multas Laborales',
      icon: <FileText />,
      desc: 'Estrategias de reconsideración y reclamación judicial de multas desproporcionadas.',
      full: 'Diseño de estrategias de reconsideración administrativa y reclamación judicial de multas. Optimizamos su flujo de caja mediante la anulación o rebaja de sanciones pecuniarias desproporcionadas.',
    },
    {
      title: 'Procesos de Desafuero',
      icon: <UserX />,
      desc: 'Gestión judicial de desafuero maternal y sindical con rigurosidad técnica.',
      full: 'Gestión judicial rigurosa de procesos de desafuero maternal y sindical, permitiendo una administración de personal eficiente y ajustada a los estándares legales vigentes.',
    },
    {
      title: 'Conflictos Colectivos y Relaciones Sindicales',
      icon: <Handshake />,
      desc: 'Defensa ante prácticas antisindicales y asesoría en Negociación Colectiva.',
      full: 'Defensa especializada frente a denuncias por prácticas antisindicales y asesoría estratégica en procesos de Negociación Colectiva, orientada a mantener la paz y la operatividad al interior de tu empresa.',
    },
    {
      title: 'Asesoría Preventiva',
      icon: <ShieldCheck />,
      desc: 'Auditoría permanente para prevenir contingencias laborales antes de que ocurran.',
      full: 'Auditoría y comunicación permanente para alinear la operación corporativa con la normativa laboral vigente, mitigando riesgos y previniendo contingencias judiciales antes de que ocurran. Dentro de estos servicios se incluyen: consultas laborales, contrataciones, despidos, redacción de Reglamentos y protocolos, capacitaciones, Investigaciones por Ley Karin, entre otros.',
    },
  ];

  const currentServices = activeTab === 'workers' ? workerServices : companyServices;
  const workerTitle = 'Protegemos tu Trabajo y tu Futuro';
  const workerSubtitle = 'Costo $0 inicial, honorarios contra resultados.';
  const workerDesc = 'En caso de que sus derechos hayan sido afectados, nuestro equipo asumirá su defensa legal con determinación ante tribunales laborales.';
  const companyTitle = 'Soluciones Legales Estratégicas para su Empresa';
  const companyDesc = 'Brindamos asesoría integral para prevenir conflictos y representar sus intereses ante instituciones del Estado y tribunales laborales.';

  return (
    <>
      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}

      <section className="py-20 md:py-32 bg-slate-50 overflow-hidden" id="trabajadores">
        <div id="empresas" className="absolute -top-24" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          {/* Tab toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
            <div />
            <div className="flex bg-white p-1.5 rounded-full border border-slate-200 shadow-sm self-start sm:self-auto">
              <button
                onClick={() => setActiveTab('workers')}
                className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'workers' ? 'bg-[#3b82f6] text-white shadow-lg shadow-blue-500/20' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Trabajadores
              </button>
              <button
                onClick={() => setActiveTab('companies')}
                className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'companies' ? 'bg-[#3b82f6] text-white shadow-lg shadow-blue-500/20' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Empresas
              </button>
            </div>
          </div>

          {/* Header dinámico */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-12 md:mb-16"
            >
              <SectionLabel text={activeTab === 'workers' ? 'Servicios para el Trabajador' : 'Servicios para la Empresa'} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-2">
                {activeTab === 'workers' ? workerTitle : companyTitle}
              </h2>
              {activeTab === 'workers' && (
                <p className="text-[#D4AF37] font-black text-sm mb-3">{workerSubtitle}</p>
              )}
              <p className="text-slate-500 text-sm md:text-base font-light max-w-2xl">
                {activeTab === 'workers' ? workerDesc : companyDesc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            <AnimatePresence mode="wait">
              {currentServices.map((service, idx) => (
                <motion.div
                  key={`${activeTab}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.07 }}
                  onClick={() => setSelected(service)}
                  className="group bg-white p-7 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 hover:border-[#3b82f6]/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#3b82f6] mb-5 group-hover:bg-[#3b82f6] group-hover:text-white transition-all duration-300">
                    {React.cloneElement(service.icon, { size: 22 })}
                  </div>
                  <h3 className="text-base md:text-lg font-black text-slate-900 mb-3 tracking-tight leading-snug">{service.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-5 font-light">{service.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#3b82f6] group-hover:gap-3 transition-all">
                    Ver más <ChevronRight size={13} />
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

/* ─────────────────────────────────────────────────── OFFICE SHOWCASE ── */
const OfficeShowcase = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Fotos */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4">
                <img src="/fotos_videos/1.jpg" alt="Oficina" className="rounded-xl md:rounded-2xl w-full h-44 sm:h-56 md:h-64 object-cover shadow-lg" />
                <img src="/fotos_videos/2.jpg" alt="Sala de Reuniones" className="rounded-xl md:rounded-2xl w-full h-52 sm:h-64 md:h-80 object-cover shadow-lg" />
              </div>
              <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
                <img src="/fotos_videos/3.jpg" alt="Espacio de Trabajo" className="rounded-xl md:rounded-2xl w-full h-52 sm:h-64 md:h-80 object-cover shadow-lg" />
                <img src="/fotos_videos/4.jpg" alt="Detalle Oficina" className="rounded-xl md:rounded-2xl w-full h-44 sm:h-56 md:h-64 object-cover shadow-lg" />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-6 md:gap-8">
            <SectionLabel text="Infraestructura" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">
              Entorno Profesional <br /> para su <span className="text-[#3b82f6]">Tranquilidad</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed">
              Nuestras oficinas en Vitacura están diseñadas para ofrecer máxima confidencialidad y comodidad. Contamos con sala de reuniones, estacionamiento subterráneo y tecnología para litigación remota.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {[
                'Ubicación estratégica en Av. Kennedy, Vitacura.',
                'Salas de reuniones privadas y seguras.',
                'Estacionamiento subterráneo disponible.',
                'Atención personalizada en un entorno ejecutivo.',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 md:gap-4 text-sm font-bold text-slate-700">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] shrink-0">
                    <CheckCircle2 size={13} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────── TEAM ── */
const Team = () => {
  const members = [
    {
      name: 'Cristian Fernández Abdala',
      role: 'Socio Fundador',
      image: '/fotos_videos/Foto C. Fernandez 2026.jpeg',
      bio: 'Abogado de la Universidad de Concepción con Máster en Derecho de la Empresa (U. de los Andes). Premio al Mejor Alumno del Diplomado en Derecho del Trabajo PUC. Especialista en defensas corporativas y juicios de alta cuantía.',
    },
    {
      name: 'Ariel Fritz Cáceres',
      role: 'Asociado',
      image: '/fotos_videos/Foto A. Fritz 2026.jpeg',
      bio: 'Abogado de la Pontificia Universidad Católica de Chile. Diplomado en Negociación con mención en Negociación Estratégica Avanzada y Mediación (PUC). Experto en Tutela Laboral y despidos injustificados.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-950 text-white overflow-hidden" id="equipo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center text-center mb-14 md:mb-24">
          <SectionLabel text="Nuestro Equipo" dark />
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-8 mt-2">
            Nuestro <span className="text-white/30">Equipo</span>
          </h2>
          <div className="h-1 w-20 bg-[#3b82f6] rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/10"
            >
              {/* ── MOBILE: foto full-width con overlay ── */}
              <div className="relative sm:hidden h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ objectPosition: 'center 20%' }}
                />
                {/* Gradiente overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                {/* Nombre sobre la foto */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-black tracking-tight leading-tight">{member.name}</h3>
                  <p className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest mt-1">{member.role}</p>
                </div>
              </div>

              {/* ── MOBILE: bio + botones ── */}
              <div className="px-6 py-5 sm:hidden">
                <p className="text-white/60 text-sm leading-relaxed font-light mb-5">{member.bio}</p>
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
                    <Linkedin size={15} />
                  </a>
                  <a href="mailto:cfernandez@pleitolaboral.cl" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
                    <Mail size={15} />
                  </a>
                </div>
              </div>

              {/* ── SM+: layout horizontal ── */}
              <div className="hidden sm:flex items-stretch">
                <div className="w-2/5 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 min-h-[300px]"
                  />
                </div>
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <div className="mb-5">
                    <h3 className="text-xl md:text-2xl font-black mb-1 tracking-tight">{member.name}</h3>
                    <p className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">{member.role}</p>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed font-light mb-7">{member.bio}</p>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
                      <Linkedin size={15} />
                    </a>
                    <a href="mailto:cfernandez@pleitolaboral.cl" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
                      <Mail size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────── CONTACT ── */
const Contact = () => {
  return (
    <section className="py-20 md:py-32 bg-white" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="bg-slate-50 rounded-3xl md:rounded-[60px] p-6 sm:p-10 md:p-20 border border-slate-100 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3b82f6]/5 -skew-x-12 translate-x-1/4" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            {/* Info */}
            <div>
              <SectionLabel text="Contacto Directo" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-8 md:mb-10">
                Inicie su <br /> <span className="text-slate-400">Consulta</span> Legal
              </h2>

              {/* Imagen edificio */}
              <div className="rounded-2xl overflow-hidden h-44 md:h-52 w-full mb-2">
                <img src="/fotos_videos/5.jpeg" alt="Edificio Pleito Laboral" className="w-full h-full object-cover" />
              </div>

              <div className="space-y-6 md:space-y-10">
                <div className="flex gap-4 md:gap-6">
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#3b82f6] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Ubicación</p>
                    <p className="text-slate-900 font-bold text-sm md:text-base">Av. Presidente Kennedy #7440, Of. 402, Vitacura.</p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#3b82f6] shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Teléfonos</p>
                    <p className="text-slate-900 font-bold text-sm md:text-base">+56 9 9471 2414 // +56 2 2436 5793</p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#3b82f6] shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email</p>
                    <a href="mailto:cfernandez@pleitolaboral.cl" className="text-slate-900 font-bold text-sm md:text-base hover:text-[#3b82f6] transition-colors">
                      cfernandez@pleitolaboral.cl
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#3b82f6] shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Horario</p>
                    <p className="text-slate-900 font-bold text-sm md:text-base">Lunes a Viernes: 09:00 – 18:30 hrs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <form className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[40px] shadow-xl border border-slate-100 grid grid-cols-1 gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Nombre Completo <span className="text-red-400">*</span>
                  </label>
                  <input required className="bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 text-sm focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all outline-none" placeholder="Juan Pérez" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input required className="bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 text-sm focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all outline-none" placeholder="juan@email.com" type="email" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Teléfono <span className="text-red-400">*</span>
                </label>
                <input required className="bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 text-sm focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all outline-none" placeholder="+56 9 ..." type="tel" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">¿Posee carta de despido?</label>
                  <select className="bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 text-sm focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all outline-none">
                    <option value="">Seleccionar</option>
                    <option>Sí</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Causal de Despido</label>
                  <select className="bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 text-sm focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all outline-none">
                    <option value="">Seleccionar</option>
                    <option>Despido Verbal</option>
                    <option>Necesidades de la Empresa</option>
                    <option>Artículo 160 (Incumplimiento)</option>
                    <option>Otra Causal</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Antigüedad Laboral</label>
                <select className="bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 text-sm focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all outline-none">
                  <option value="">Seleccionar</option>
                  <option>Menos de 1 año</option>
                  <option>1 a 3 años</option>
                  <option>4 a 6 años</option>
                  <option>Más de 6 años</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Cuéntenos su Caso <span className="text-red-400">*</span>
                </label>
                <textarea required className="bg-slate-50 border border-slate-200 rounded-xl p-3 md:p-4 text-sm focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent transition-all outline-none" placeholder="Describa brevemente su situación..." rows={4} />
              </div>

              <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-black uppercase tracking-[0.2em] text-xs py-4 md:py-5 rounded-xl md:rounded-2xl shadow-xl shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center gap-3">
                Enviar Mensaje <Send size={16} />
              </button>
            </form>
          </div>

          {/* Mapa */}
          <div className="relative z-10 mt-10 md:mt-14 rounded-2xl md:rounded-3xl overflow-hidden h-64 md:h-80 border border-slate-100 shadow-lg">
            <iframe
              title="Ubicación Pleito Laboral"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8!2d-70.5975!3d-33.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf4b6e6b6b6b%3A0x0!2sAv.%20Presidente%20Kennedy%207440%2C%20Vitacura%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────── FOOTER ── */
const Footer = () => {
  const [alertEmail, setAlertEmail] = React.useState('');

  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">

          {/* Logo + redes */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="bg-[#3b82f6] p-2 rounded-lg text-white">
                <Scale size={20} />
              </div>
              <div>
                <h2 className="text-white text-base font-black uppercase tracking-tighter leading-none">Pleito Laboral</h2>
                <span className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-[0.2em]">Abogados</span>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed font-light">
              Defensa jurídica laboral de alto impacto para trabajadores y empresas en todo Chile.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all">
                <Linkedin size={15} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all">
                <Instagram size={15} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all">
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Navegación</h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Servicios Trabajadores', href: '#trabajadores' },
                { label: 'Servicios Empresas', href: '#empresas' },
                { label: 'Nuestro Equipo', href: '#equipo' },
                { label: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-white text-xs font-medium transition-colors flex items-center gap-2 group">
                    <ChevronRight size={12} className="text-[#3b82f6] group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Contacto</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#3b82f6] mt-0.5 shrink-0" />
                <span className="text-white/40 text-xs leading-relaxed">Av. Pdte. Kennedy #7440, Of. 402, Vitacura.</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#3b82f6] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+56994712414" className="text-white/40 hover:text-white text-xs transition-colors">+56 9 9471 2414</a>
                  <a href="tel:+56224365793" className="text-white/40 hover:text-white text-xs transition-colors">+56 2 2436 5793</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#3b82f6] shrink-0" />
                <a href="mailto:cfernandez@pleitolaboral.cl" className="text-white/40 hover:text-white text-xs transition-colors break-all">
                  cfernandez@pleitolaboral.cl
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={14} className="text-[#3b82f6] shrink-0" />
                <span className="text-white/40 text-xs">Lun–Vie: 09:00 – 18:30</span>
              </li>
            </ul>
          </div>

          {/* Alertas */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Alertas Legales</h3>
            <p className="text-white/40 text-xs leading-relaxed">
              Suscríbete y recibe alertas legales y judiciales directo en tu correo.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                value={alertEmail}
                onChange={(e) => setAlertEmail(e.target.value)}
                placeholder="tu@correo.cl"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
              <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                Suscribirse <Send size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-white/20 text-[10px] font-medium uppercase tracking-wider">
            <Award size={12} className="text-[#D4AF37] shrink-0" />
            <span>Colegio de Abogados de Chile · Soc. Chilena de Derecho del Trabajo</span>
          </div>
          <p className="text-white/20 text-[10px] font-medium uppercase tracking-widest whitespace-nowrap">
            © {new Date().getFullYear()} Pleito Laboral Abogados
          </p>
        </div>
      </div>
    </footer>
  );
};

/* ──────────────────────────────────────────────── FLOATING WHATSAPP ── */
const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/56994712414?text=Hola%2C%20me%20gustar%C3%ADa%20una%20consulta%20laboral%20gratuita."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] group flex items-center gap-3"
    >
      {/* Etiqueta hover — oculta en mobile para no salirse de pantalla */}
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none relative">
        <div className="bg-slate-900 text-white text-xs font-black uppercase tracking-widest px-4 py-3 rounded-2xl shadow-2xl whitespace-nowrap">
          Consulta Gratis
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-slate-900 border-y-[5px] border-y-transparent" />
        </div>
      </div>

      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <span className="absolute inset-[-8px] rounded-full bg-[#25D366] opacity-10 animate-pulse" />
        <div className="relative bg-[#25D366] hover:bg-[#1ebe5d] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl shadow-green-500/40 transition-all duration-300 group-hover:scale-110 active:scale-95 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 sm:w-8 sm:h-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-white rounded-full border-2 border-[#25D366] flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
          </span>
        </div>
      </div>
    </a>
  );
};

/* ──────────────────────────────────────────────────────────── APP ── */
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#3b82f6] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <OfficeShowcase />
        <Team />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
