import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle2, ArrowRight, Send } from 'lucide-react';

const services = [
  'Limpieza y prevención',
  'Ortodoncia',
  'Estética dental',
  'Implantes dentales',
  'Restauraciones',
  'Urgencia dental',
  'No lo sé aún',
];

const timeSlots = [
  'Mañana (9:00 – 13:00)',
  'Tarde (13:00 – 17:00)',
  'Noche (17:00 – 19:00)',
  'Sábados (9:00 – 14:00)',
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  time: string;
  message: string;
}

export default function Contacto() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    time: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="bg-white">
      <div className="bg-hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Agendar cita
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Da el primer paso
              <br />
              <span className="text-gradient-blue">hoy mismo</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Completa el formulario o contáctanos directamente. Te respondemos en menos de 2 horas.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={32} className="text-emerald-600" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-slate-900 mb-3">
                    ¡Solicitud enviada!
                  </h2>
                  <p className="text-slate-600 mb-2">
                    Recibimos tu información, <strong>{form.name}</strong>.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto mb-8">
                    Un miembro de nuestro equipo te contactará en menos de 2 horas para confirmar tu cita. También puedes escribirnos directamente por WhatsApp para agilizar el proceso.
                  </p>
                  <a
                    href={`https://wa.me/1234567890?text=Hola,%20acabo%20de%20enviar%20un%20formulario.%20Mi%20nombre%20es%20${encodeURIComponent(form.name)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-xl transition-all"
                  >
                    <MessageCircle size={18} />
                    Confirmar por WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-slate-900 mb-1">
                      Agenda tu evaluación
                    </h2>
                    <p className="text-slate-500 text-sm">Sin compromiso. Solo 30 minutos que pueden cambiar tu sonrisa.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 text-sm font-medium mb-1.5">
                        Nombre completo <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre completo"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 text-sm font-medium mb-1.5">
                        Teléfono / WhatsApp <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="(55) 1234-5678"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-1.5">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      ¿Qué tratamiento te interesa?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setForm({ ...form, service: s })}
                          className={`text-left text-sm px-3 py-2.5 rounded-xl border transition-all ${
                            form.service === s
                              ? 'border-cyan-500 bg-cyan-50 text-cyan-700 font-medium'
                              : 'border-slate-200 text-slate-600 hover:border-cyan-300 hover:bg-cyan-50/50'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Horario preferido
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm({ ...form, time: t })}
                          className={`text-xs px-3 py-2.5 rounded-xl border transition-all ${
                            form.time === t
                              ? 'border-cyan-500 bg-cyan-50 text-cyan-700 font-medium'
                              : 'border-slate-200 text-slate-600 hover:border-cyan-300 hover:bg-cyan-50/50'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-1.5">
                      ¿Algo más que debamos saber?
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Puedes mencionar si tienes alguna condición especial, miedo al dentista, urgencia, etc."
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !form.name || !form.phone}
                    className="btn-primary text-white font-bold px-8 py-4 rounded-2xl w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Agenda mi cita ahora
                      </>
                    )}
                  </button>

                  <p className="text-slate-400 text-xs text-center">
                    Sin compromiso. Nos pondremos en contacto en menos de 2 horas.
                  </p>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                <h3 className="font-display text-slate-900 font-bold mb-5">Información de contacto</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-cyan-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-slate-800 text-sm font-medium">Dirección</p>
                      <p className="text-slate-500 text-sm">Av. Principal 123, Col. Centro<br />Ciudad de México, CDMX</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-cyan-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-slate-800 text-sm font-medium">Teléfono</p>
                      <a href="tel:+1234567890" className="text-cyan-600 text-sm hover:text-cyan-500 transition-colors">(123) 456-7890</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-cyan-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-slate-800 text-sm font-medium">Correo</p>
                      <a href="mailto:hola@luminadental.mx" className="text-cyan-600 text-sm hover:text-cyan-500 transition-colors">hola@luminadental.mx</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-cyan-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-slate-800 text-sm font-medium">Horarios</p>
                      <p className="text-slate-500 text-sm">Lun – Vie: 9:00 – 19:00</p>
                      <p className="text-slate-500 text-sm">Sábados: 9:00 – 14:00</p>
                    </div>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/1234567890?text=Hola,%20me%20gustaría%20agendar%20una%20cita."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-5 py-4 rounded-2xl transition-all w-full"
              >
                <MessageCircle size={22} />
                <div>
                  <p className="font-bold text-sm">Agendar por WhatsApp</p>
                  <p className="text-emerald-100 text-xs">Respuesta inmediata</p>
                </div>
              </a>

              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5">
                <h4 className="text-slate-800 font-semibold text-sm mb-3 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-500" />
                  Al agendar, puedes esperar:
                </h4>
                <ul className="space-y-2">
                  {[
                    'Respuesta en menos de 2 horas',
                    'Sin formularios complicados',
                    'Sin pago por adelantado',
                    'Confirmación por WhatsApp o email',
                    'Recordatorio el día anterior',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-500 text-xs">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 h-48">
                <img
                  src="https://images.pexels.com/photos/3881193/pexels-photo-3881193.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Nuestra clínica"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
