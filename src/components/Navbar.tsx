import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, Brain } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre Nós', path: '/sobre-nos' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Contato', path: '/contato' },
  ];

  const products = [
    { name: 'Ethereon Agro', path: '/produtos/agro' },
    { name: 'Ethereon Sentinela', path: '/produtos/sentinela' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 py-4 shadow-sm" : "bg-transparent py-8"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/ethereon-brain.png" 
            alt="Logo"
            className="w-8 h-8 object-contain group-hover:opacity-80 transition-opacity" 
          />
          <span className="serif text-2xl font-light tracking-tight text-slate-900 group-hover:text-brand-blue transition-colors">
            Ethereon <span className="font-bold">Tech</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.slice(0, 2).map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={cn(
                "nav-link",
                location.pathname === link.path ? "text-brand-blue" : ""
              )}
            >
              {link.name}
            </Link>
          ))}

          {/* Products Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className={cn(
              "nav-link flex items-center gap-1",
              location.pathname.startsWith('/produtos') ? "text-brand-blue pointer-events-none" : "" 
            )}>
              Produtos
              <ChevronDown className={cn("w-3 h-3 transition-transform", productsOpen && "rotate-180")} />
            </button>
            
            <AnimatePresence>
              {productsOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-4 w-64 glass-card p-2 shadow-xl z-50 border-slate-200"
                >
                  {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="block px-4 py-3 rounded-xl transition-all hover:bg-sky-50 group/item"
                      onClick={() => setProductsOpen(false)}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-semibold text-brand-blue group-hover/item:text-sky-600 transition-all">{product.name}</span>
                        <span className="product-badge">{product.name.includes('Agro') ? 'BioTech' : 'Security'}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-tight">
                        {product.name.includes('Agro') ? 'Gestão agrícola georreferenciada para alta performance.' : 'Vigilância inteligente e preditiva baseada em visão.'}
                      </p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={cn(
                "nav-link",
                location.pathname === link.path ? "text-brand-blue" : ""
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="serif text-3xl text-slate-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-slate-100">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-300 font-bold mb-6">Nossos Produtos</p>
                {products.map((product) => (
                  <Link 
                    key={product.path} 
                    to={product.path} 
                    className="block serif text-2xl text-brand-blue mb-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
