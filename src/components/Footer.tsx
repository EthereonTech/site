import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-32 pb-16 border-t border-slate-100 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-brand-blue/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-10 group">
              <div className="w-10 h-10 flex items-center justify-center transition-all">
                <Brain className="w-8 h-8 text-brand-blue group-hover:text-sky-400 transition-colors" strokeWidth={1.5} />
              </div>
              <span className="serif text-2xl font-light tracking-tight text-slate-900">
                Ethereon <span className="font-bold">Tech</span>
              </span>
            </Link>
            <p className="max-w-sm mb-12 text-lg leading-relaxed font-light text-slate-500">
              Liderando a próxima fronteira da inteligência artificial para criar um futuro onde a tecnologia amplia o potencial humano com elegância e clareza inadiáveis.
            </p>
            <div className="flex gap-6">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all transform hover:-translate-y-1 border-slate-200 text-slate-400">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="serif text-slate-900 text-xl mb-8">Navegação</h4>
            <ul className="space-y-6 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
              <li><Link to="/" className="hover:text-brand-blue transition-colors">Home</Link></li>
              <li><Link to="/sobre-nos" className="hover:text-brand-blue transition-colors">Empresa</Link></li>
              <li><Link to="/servicos" className="hover:text-brand-blue transition-colors">Serviços</Link></li>
              <li><Link to="/produtos/agro" className="hover:text-brand-blue transition-colors">Agro</Link></li>
              <li><Link to="/produtos/sentinela" className="hover:text-brand-blue transition-colors">Sentinela</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="serif text-slate-900 text-xl mb-8">Contato</h4>
            <ul className="space-y-8 text-sm text-slate-500">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0" />
                <span className="leading-relaxed">Ethereon Sky Tower, 45º Andar<br/>São Paulo, Brasil</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-brand-blue shrink-0" />
                <span className="serif italic text-lg text-slate-900">hello@ethereon.tech</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                <span className="serif italic text-lg text-slate-900">+55 (11) 9999-0000</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase font-bold tracking-[0.3em]">
          <p className="text-slate-300">© 2026 Ethereon Technologies. Todos os direitos reservados.</p>
          <div className="flex gap-12 text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
