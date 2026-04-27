import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="product-badge mb-8">Conexão Imediata</span>
            <h1 className="serif text-7xl md:text-8xl text-slate-900 mb-10 leading-[1] tracking-tight">
              Vamos materializar <br /> <span className="italic text-brand-blue">o amanhã.</span>
            </h1>
            <p className="text-xl text-slate-500 mb-16 max-w-md leading-relaxed font-light">
              Nossa equipe está preparada para entender seus desafios e transformá-los em inteligência.
            </p>

            <div className="space-y-12">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 glass-card flex items-center justify-center shrink-0 group-hover:bg-brand-blue/5 transition-all border-slate-100">
                  <Mail className="w-8 h-8 text-brand-blue" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-300 mb-1">E-mail Corporativo</p>
                  <p className="text-2xl text-slate-900 serif">hello@ethereon.tech</p>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 glass-card flex items-center justify-center shrink-0 group-hover:bg-brand-blue/5 transition-all border-slate-100">
                  <Phone className="w-8 h-8 text-brand-blue" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-300 mb-1">Central de Atendimento</p>
                  <p className="text-2xl text-slate-900 serif">+55 (11) 9999-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 glass-card flex items-center justify-center shrink-0 group-hover:bg-brand-blue/5 transition-all border-slate-100">
                  <MapPin className="w-8 h-8 text-brand-blue" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-300 mb-1">Headquarter</p>
                  <p className="text-2xl text-slate-900 serif italic">Ethereon Sky Tower, SP</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-14 border-slate-100 relative bg-white/60 backdrop-blur-3xl shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 blur-[100px] -z-10" />
            <h3 className="serif text-4xl text-slate-900 mb-10">Enviar Mensagem</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-slate-300">Seu Nome</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50/50 border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-brand-blue transition-colors font-light"
                    placeholder="Ex: Gabriel Silva"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-slate-300">Seu E-mail</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-50/50 border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-brand-blue transition-colors font-light"
                    placeholder="gabriel@empresa.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold tracking-widest text-slate-300">Mensagem</label>
                <textarea 
                  rows={5}
                  className="w-full bg-slate-50/50 border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-brand-blue transition-colors resize-none font-light"
                  placeholder="Conte-nos sobre seu projeto ou desafio..."
                />
              </div>
              <button className="w-full py-6 bg-brand-blue text-white rounded-full font-bold uppercase tracking-widest hover:bg-sky-500 transition-all shadow-[0_15px_40px_rgba(14,165,233,0.3)] flex items-center justify-center gap-3 group">
                Materializar Agora
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
