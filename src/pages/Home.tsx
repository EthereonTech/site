import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Brain, Shield, Sprout, Zap, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative overflow-visible">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1200px] bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1),transparent_70%)] -z-10" />
      
      {/* Hero Section */}
      <section className="pt-56 pb-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="serif text-7xl md:text-9xl leading-[0.95] mb-10 text-slate-900">
              <span className="italic block mb-2 opacity-50">Inteligência</span>
              que transcende o <br />
              <span className="text-brand-blue relative">
                visível.
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
                  className="absolute bottom-4 left-0 w-full h-1 bg-sky-100 -z-10 origin-left"
                />
              </span>
            </h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-md font-light">
              Desenhamos sistemas de IA que fluem organicamente no tecido da sua organização, trazendo clareza e propósito.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/servicos" 
                className="px-10 py-5 bg-black text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex items-center gap-2 group"
              >
                Nossos Serviços
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contato" 
                className="px-10 py-5 glass-card font-bold border-white/80 text-brand-blue hover:scale-105 transition-all text-sm tracking-widest uppercase"
              >
                Falar com Especialista
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative"
          >
             <div className="relative aspect-[4/5] max-w-lg mx-auto">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-sky-100 rounded-full -m-10 opacity-50 pointer-events-none" 
                />
                <div className="w-full h-full glass-card p-2 border-white overflow-hidden shadow-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1280&h=1600" 
                    alt="Ethereal Flow" 
                    className="w-full h-full object-cover rounded-[30px] contrast-125 brightness-110 grayscale transition-all duration-1000 hover:grayscale-0"
                    referrerPolicy="no-referrer"
                   />
                </div>
                
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 -left-10 p-8 glass-card border-brand-light-blue/30 backdrop-blur-3xl shadow-xl z-20"
                >
                   <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-brand-blue rounded-full animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Fluxo Ativo</span>
                   </div>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-slate-300 mb-16">Parceiros em Inovação</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-40">
             <span className="text-2xl font-display font-medium tracking-tighter text-slate-400">TECHCORE</span>
             <span className="text-2xl font-display font-medium tracking-tighter text-slate-400">VIRTUALIS</span>
             <span className="text-2xl font-display font-medium tracking-tighter text-slate-400">NEURALGRID</span>
             <span className="text-2xl font-display font-medium tracking-tighter text-slate-400">SENTINEL</span>
             <span className="text-2xl font-display font-medium tracking-tighter text-slate-400">AXON</span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="order-2 lg:order-1 relative">
                <div className="aspect-[4/5] glass-card p-1 overflow-hidden border-slate-200">
                   <img 
                    src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=1280&h=1600" 
                    alt="Ethereal Teal Flow" 
                    className="w-full h-full object-cover rounded-[22px] brightness-110 opacity-90 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
                    referrerPolicy="no-referrer"
                   />
                </div>
                <div className="absolute -bottom-10 -right-10 p-10 glass-card bg-white/90 backdrop-blur-3xl border-slate-200 shadow-2xl">
                   <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="serif text-6xl font-bold text-brand-blue tracking-tighter"
                   >
                    80%
                   </motion.span>
                   <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 mt-2">Redução de Ruído</p>
                </div>
             </div>
             <div className="order-1 lg:order-2">
                <span className="product-badge mb-8">Nossa Essência</span>
                <h2 className="serif text-6xl md:text-7xl text-slate-900 mb-10 leading-[1.1]">Inteligência que flui como <span className="italic text-brand-blue">éter.</span></h2>
                <div className="space-y-12">
                   <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-8 group"
                   >
                      <div className="w-16 h-16 glass-card flex items-center justify-center shrink-0 group-hover:bg-brand-blue/5 transition-all duration-500 border-slate-200">
                         <Brain className="w-8 h-8 text-brand-blue" />
                      </div>
                      <div>
                         <h4 className="serif text-2xl mb-2 text-slate-900">Simplicidade Fluida</h4>
                         <p className="text-slate-400 leading-relaxed font-light">Eliminamos as barreiras entre os dados e a ação. Nossas interfaces são pensadas para a intuição imediata.</p>
                      </div>
                   </motion.div>
                   <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-8 group"
                   >
                      <div className="w-16 h-16 glass-card flex items-center justify-center shrink-0 group-hover:bg-brand-blue/5 transition-all duration-500 border-slate-200">
                         <Globe className="w-8 h-8 text-brand-blue" />
                      </div>
                      <div>
                         <h4 className="serif text-2xl mb-2 text-slate-900">Presença Etérea</h4>
                         <p className="text-slate-400 leading-relaxed font-light">Tecnologia que está presente em todos os lugares, mas que não sobrecarrega a sua equipe.</p>
                      </div>
                   </motion.div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6">
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass-card p-24 text-center relative overflow-hidden border-slate-200"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue/5 blur-[120px] -z-10" />
            <h2 className="serif text-6xl text-slate-900 mb-10 leading-[1.1]">
                O seu futuro é <span className="italic">inadiável.</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 max-w-lg mx-auto leading-relaxed">
                Abra as portas para uma nova era de inteligência e clareza em seus negócios.
            </p>
            <Link to="/contato" className="inline-flex px-14 py-6 bg-brand-blue text-white rounded-full font-bold text-lg hover:bg-sky-500 transition-all shadow-[0_15px_40px_rgba(14,165,233,0.3)] uppercase tracking-widest text-[12px]">
                Agendar Consultoria
            </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
