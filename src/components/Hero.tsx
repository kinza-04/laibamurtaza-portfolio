import { motion } from 'motion/react';
import { config } from '@/src/data/config';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 bg-[#121212] text-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-[#D4AF37] font-semibold tracking-widest text-sm mb-4 block">WORDPRESS DEVELOPER</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Elegant Websites That Turn Ideas Into <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] to-amber-200">Digital Experiences.</span>
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-lg">{config.about.text}</p>
          <div className="flex gap-4">
            <a href="#projects" className="px-8 py-3 bg-[#D4AF37] text-black rounded-full hover:bg-white transition-all">View My Work</a>
            <a href="#contact" className="px-8 py-3 border border-white/20 rounded-full hover:border-[#D4AF37] transition-all">Let's Work Together</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
          <img src="/src/assets/images/Mypic.png" alt="Laiba Murtaza" className="rounded-3xl shadow-2xl shadow-[#D4AF37]/20 border border-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
