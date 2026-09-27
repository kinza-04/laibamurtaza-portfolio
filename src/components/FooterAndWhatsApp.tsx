import { config } from '@/src/data/config';
import { MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-black text-center border-t border-white/10">
      <img src="/logo.png" alt="LM Logo" className="h-16 w-auto mx-auto mb-4" />
      <h2 className="text-xl font-bold text-white mb-2">{config.name}</h2>
      <p className="text-white/60 mb-6">Designing responsive digital experiences with WordPress.</p>
      <div className="text-white/40 text-sm">© 2026 {config.name}. All rights reserved.</div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a href={config.whatsapp} target="_blank" className="fixed bottom-6 right-6 p-4 bg-[#25D366] text-white rounded-full shadow-lg z-50 hover:scale-110 transition-transform">
      <MessageCircle size={24} />
    </a>
  );
}
