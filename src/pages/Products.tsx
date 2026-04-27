import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';

const Products = () => {
  const { productId } = useParams<{ productId: string }>();

  const agroContent = {
    title: 'Ethereon Agro',
    subtitle: 'Ecossistema Visual de Precisão',
    description: 'O Ethereon Agro transcende a gestão rural tradicional. Desenvolvida para transformar a rotina do produtor, a plataforma centraliza talhões, insumos e monitoramento NDVI em uma interface etérea e intuitiva.',
    features: [
      { title: 'Monitoramento Preditivo', text: 'Identificação antecipada de pragas e anomalias hídricas.' },
      { title: 'Visão Georreferenciada', text: 'Navegação imersiva pelas camadas de dados da sua fazenda.' },
      { title: 'Automação de Insumos', text: 'Cálculos de precisão que eliminam o desperdício de recursos.' }
    ],
    bgImage: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1920&h=1080'
  };

  const sentinelaContent = {
    title: 'Ethereon Sentinela',
    subtitle: 'Vigilância Ativa Transcendental',
    description: 'A segurança do futuro não apenas observa, ela compreende. O Sentinela utiliza deep learning para detectar comportamentos anormais, garantindo proteção total sem o ruído de alertas irrelevantes.',
    features: [
      { title: 'Detecção Comportamental', text: 'IA que diferencia movimentos rotineiros de ameaças reais.' },
      { title: 'Resposta em Milisegundos', text: 'Processamento local (Edge AI) para intervenção imediata.' },
      { title: 'Privacidade Blindada', text: 'Criptografia de ponta a ponta em todos os fluxos de vídeo.' }
    ],
    bgImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1920&h=1080'
  };

  const currentContent = productId === 'agro' ? agroContent : sentinelaContent;

  if (productId !== 'agro' && productId !== 'sentinela') {
     return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
            <img 
                src={currentContent.bgImage} 
                alt={currentContent.title} 
                className="w-full h-full object-cover grayscale opacity-30"
                referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-sky-50/20 to-white" />
        </div>
        
        <div className="relative z-10 text-center px-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="product-badge mb-8 mx-auto"
            >
              {currentContent.subtitle}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="serif text-7xl md:text-9xl text-slate-900 mb-10 tracking-tight"
            >
              {currentContent.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
            >
              {currentContent.description}
            </motion.p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {currentContent.features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-12 group hover:bg-white transition-all border-slate-100"
              >
                <div className="serif text-5xl text-brand-blue/10 italic mb-8">0{i+1}</div>
                <h3 className="serif text-3xl text-slate-900 mb-4">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Block */}
      <section className="py-40 px-6 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
                <h2 className="serif text-5xl text-slate-900 mb-10 leading-tight">Implementação Sem Atrito</h2>
                <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                    Nossas plataformas são entregues como um serviço completo. Cuidamos desde a ingestão inicial dos dados até o treinamento da sua equipe, garantindo que o impacto seja imediato e mensurável com total clareza.
                </p>
                <button className="px-12 py-5 bg-brand-blue text-white rounded-full font-bold uppercase tracking-widest hover:bg-sky-500 transition-all shadow-[0_10px_30px_rgba(14,165,233,0.2)]">
                    Solicitar Demo
                </button>
            </div>
            <div className="glass-card aspect-video relative overflow-hidden group border-slate-100 shadow-xl">
                 <img 
                    src={productId === 'agro' ? "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=1280&h=720" : "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1280&h=720"} 
                    alt="Interface preview" 
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />
            </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
