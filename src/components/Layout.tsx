import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-600 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-50" />
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-200/20 blur-[120px] rounded-full animate-flow pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100/30 blur-[150px] rounded-full animate-flow pointer-events-none -z-10" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
