
import React from 'react';
import { ShieldAlert } from 'lucide-react';

const Disqualified: React.FC = () => {
  return (
    <div className="flex-1 w-full bg-zinc-950 flex flex-col items-center justify-center p-8 text-center space-y-6">
      <div className="p-4 bg-red-500/10 rounded-full text-red-500 border border-red-500/20 mb-4">
        <ShieldAlert size={64} />
      </div>
      <h2 className="text-3xl font-black text-zinc-100">Acesso Negado</h2>
      <p className="text-zinc-400 text-lg leading-relaxed">
        Desculpe, este teste é baseado em parâmetros bioquímicos exclusivos para a <span className="text-white font-bold">fisiologia masculina</span>.
      </p>
      <div className="pt-8">
        <button 
          onClick={() => window.location.reload()}
          className="px-8 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 text-sm font-bold uppercase tracking-widest hover:text-white hover:border-zinc-700 transition-all"
        >
          Reiniciar Quiz
        </button>
      </div>
    </div>
  );
};

export default Disqualified;
