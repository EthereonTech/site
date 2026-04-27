import React from 'react';
import { motion } from 'motion/react';
import { Bot, LineChart, Code2, Cpu, Database, UserCheck, Sparkles, Layers } from 'lucide-react';

const Services = () => {
  const serviceList = [
    {
      icon: Bot,
      title: 'IA Consultiva',
      description: 'Estratégia personalizada para identificar onde a inteligência artificial pode gerar o maior impacto no seu negócio.',
      features: ['Análise de Gaps', 'Roadmap de Implementação', 'Avaliação de ROI']
    },
    {
      icon: Code2,
      title: 'Custom Engine',
      description: 'Criação de modelos de machine learning e visão computacional exclusivos para desafios críticos.',
      features: ['Modelagem Preditiva', 'Neural Networks', 'Visão Computacional']
    },
    {
      icon: Database,
      title: 'Neural Data Hub',
      description: 'Arquitetura de dados resiliente e escalável para suportar o processamento de alta fidelidade.',
      features: ['Data Lakes', 'Pipeline ETL', 'Governança Tech']
    },
    {
      icon: Layers,
      title: 'Seamless Integration',
      description: 'Conexão orgânica com sua infraestrutura, garantindo uma transição tecnológica invisível.',
      features: ['API Modernization', 'Cloud Migration', 'Microserviços']
    }
  ];

  return (
    <div className="pt-48 pb-32">
      {/* Header */}
      <section className="px-6 mb-32 text-center">
        <div className="max-w-4xl mx-auto">
            <span className="product-badge mb-8">Soluções Premium</span>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="serif text-5xl md:text-8xl text-slate-900 mb-12 tracking-tight"
            >
                Engenharia de <br /> <span className="italic text-brand-blue">Impacto.</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-500 max-w-2xl mx-auto font-light"
            >
                Unimos a potência do processamento massivo com a elegância de uma arquitetura limpa e funcional.
            </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceList.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-14 group hover:bg-white transition-all border-slate-100"
              >
                <div className="w-20 h-20 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue mb-10 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                   <service.icon className="w-10 h-10" />
                </div>
                <h3 className="serif text-4xl text-slate-900 mb-6 leading-tight">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-12 text-lg">{service.description}</p>
                <div className="flex flex-wrap gap-4">
                   {service.features.map(feature => (
                     <span key={feature} className="px-5 py-2 glass-card rounded-full text-xs font-bold uppercase tracking-widest text-brand-blue border-sky-100 bg-sky-50/30">
                        {feature}
                     </span>
                   ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Simplified */}
      <section className="py-32 px-6">
         <div className="max-w-4xl mx-auto text-center glass-card p-16 border-slate-100">
            <h2 className="serif text-4xl text-slate-900 mb-8 tracking-tight">Ethereal-Agile Framework</h2>
            <p className="text-slate-400 mb-12">Nossa metodologia proprietária garante entregas robustas com design transcendente.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <span className="serif text-5xl text-brand-blue/20 italic block mb-4">I</span>
                    <h5 className="font-bold text-slate-900 mb-2">Descoberta</h5>
                    <p className="text-xs text-slate-400">Imersão total no seu ecossistema.</p>
                </div>
                <div>
                    <span className="serif text-5xl text-brand-blue/20 italic block mb-4">II</span>
                    <h5 className="font-bold text-slate-900 mb-2">Refinamento</h5>
                    <p className="text-xs text-slate-400">Prototipagem de alta fidelidade.</p>
                </div>
                <div>
                    <span className="serif text-5xl text-brand-blue/20 italic block mb-4">III</span>
                    <h5 className="font-bold text-slate-900 mb-2">Deploy</h5>
                    <p className="text-xs text-slate-400">Escalabilidade com suporte d-0.</p>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Services;
