import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Users, Award, Code, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-48 pb-32">
      {/* Hero Section */}
      <section className="px-6 mb-40">
        <div className="max-w-4xl mx-auto text-center">
          <span className="product-badge mb-8">Nossa Jornada</span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="serif text-6xl md:text-8xl text-slate-900 mb-12 tracking-tight leading-[1]"
          >
            Redefinindo a <span className="italic">essência digital</span> através da inteligência.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto"
          >
            A Ethereon Tech nasceu do desejo de harmonizar a frieza dos dados com a sensibilidade humana, criando ferramentas que não apenas funcionam, mas inspiram.
          </motion.p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="px-6 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Missão', text: 'Nascemos para democratizar a inteligência de alta fidelidade para todos os setores produtivos.' },
              { icon: Eye, title: 'Visão', text: 'Ser o padrão ouro em design de sistemas preditivos invisíveis e transcendentes.' },
              { icon: Users, title: 'União', text: 'Nossa cultura valoriza a ética e a colaboração como propulsores da inovação real.' }
            ].map((v, i) => (
              <div key={i} className="glass-card p-12 hover:bg-white transition-all group border-slate-100">
                <v.icon className="w-12 h-12 text-brand-blue mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="serif text-3xl text-slate-900 mb-4">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-40 bg-slate-50/50 border-y border-slate-100 backdrop-blur-sm relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1280&h=720" 
              className="w-full h-full object-cover grayscale animate-flow"
              alt="Ethereal Background"
              referrerPolicy="no-referrer"
            />
         </div>
         <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2 className="serif text-5xl text-slate-900 mb-16 tracking-tight italic">O Manifesto Ethereon</h2>
            <div className="space-y-16 text-left">
                {[
                  { num: '01', title: 'Simplicidade Radical', text: 'Menos ruído, mais clareza. Buscamos a linha reta entre o desafio e a solução.' },
                  { num: '02', title: 'Verdade Algorítmica', text: 'IA ética e transparente por design. Seus dados são sua propriedade, sempre.' },
                  { num: '03', title: 'Inovação Inadiável', text: 'Não esperamos o futuro. Nós o codificamos com precisão e propósito.' }
                ].map((m, i) => (
                  <div key={i} className="flex gap-10 items-start">
                    <span className="serif text-7xl font-bold text-brand-blue/10 italic -mt-2 leading-none">{m.num}</span>
                    <div>
                        <h4 className="serif text-2xl text-slate-900 mb-3 tracking-tight">{m.title}</h4>
                        <p className="text-slate-400 text-lg leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
