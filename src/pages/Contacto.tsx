import { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contacto() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
              Selecciona el horario que mejor te va y confirma tu cita al instante.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 flex justify-center">
              <div className="calendly-inline-widget w-full" data-url="https://calendly.com/manuelquintanillatigo2015/15min?hide_event_type_details=1&hide_gdpr_banner=1" style={{ minWidth: '320px', height: '700px', maxWidth: '100%' }} />
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
