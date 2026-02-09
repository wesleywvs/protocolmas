
import React, { useState } from 'react';
import { Users, PlayCircle, ShieldCheck, Activity, Loader2 } from 'lucide-react';
import { ProfileType } from '../types';

interface ResultProps {
  profile: ProfileType;
  onGoToSales: () => void;
}

const Result: React.FC<ResultProps> = ({ profile, onGoToSales }) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const getProfileTitle = () => {
    switch (profile) {
      case ProfileType.COELHO: return "HIPERSENSÍVEL (COELHO)";
      case ProfileType.MEIA_BOMBA: return "FLUXO RESTRITO (MEIA-BOMBA)";
      case ProfileType.ANSIOSO: return "BLOQUEIO PSICOLÓGICO (ANSIOSO)";
      case ProfileType.PERFORMANCE: return "POTENCIAL REPRIMIDO (PERFORMANCE)";
      default: return "PERFIL EM ANÁLISE";
    }
  };

  const getExplanation = () => {
     return "Suas respostas indicam que você sofre de Hipersensibilidade do Sistema Simpático. Isso significa que seu cérebro envia sinais de 'conclusão' muito antes do necessário, ignorando sua vontade consciente. Isso cria o que chamamos de Curto-Circuito Neural, onde o prazer se torna gatilho de interrupção em vez de sustentação.";
  };

  const handleCTAClick = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      onGoToSales();
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen bg-zinc-950 flex flex-col pb-24 relative overflow-x-hidden">
      {/* Feedback Overlay */}
      {isRedirecting && (
        <div className="fixed inset-0 bg-black/95 z-[300] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
          <Loader2 className="w-16 h-16 text-blue-500 animate-spin mb-8" />
          <h3 className="text-white text-2xl font-black mb-3">Preparando sua Apresentação...</h3>
          <p className="text-zinc-400 text-lg max-w-[280px]">Otimizando vídeo para sua conexão e perfil personalizado.</p>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-blue-600 text-white py-3 px-6 text-center font-black text-xs sm:text-sm uppercase tracking-[0.25em]">
        Diagnóstico Gerado com Sucesso
      </div>

      {/* Header Result */}
      <header className="px-6 pt-12 pb-10 text-center bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Activity size={18} className="text-blue-500" />
          <h2 className="text-zinc-400 text-sm font-black uppercase tracking-[0.2em]">Seu Perfil É:</h2>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tighter leading-tight">
          {getProfileTitle()}
        </h1>
        <div className="bg-red-600/10 border-2 border-red-600/20 px-6 py-4 rounded-2xl inline-block max-w-sm">
          <p className="text-red-500 font-black text-base sm:text-lg leading-tight">
            ALERTA: Seu 'Termostato Neural' está descalibrado em nível Crítico.
          </p>
        </div>
      </header>

      {/* Scientific Section */}
      <section className="px-6 py-10 space-y-8">
        <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-[2rem] shadow-xl">
          <h3 className="text-2xl font-black text-white mb-6 flex items-start gap-3">
            <ShieldCheck className="text-blue-500 shrink-0 mt-1" size={28} />
            <span>Por que isso acontece com você (não é sua culpa)</span>
          </h3>
          <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed mb-10">
            {getExplanation()}
          </p>

          {/* Visual Chart Area */}
          <div className="bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 space-y-16">
             <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                <div className="space-y-1">
                   <span className="text-xs text-zinc-500 font-black uppercase tracking-widest">Nível de Excitação</span>
                   <div className="text-sm text-zinc-400 font-bold">Pico de Curto-Circuito</div>
                </div>
                <span className="text-blue-500 text-sm font-black italic tracking-wider">SEU CASO</span>
             </div>
             
             <div className="h-48 w-full flex items-end gap-8 px-4">
                <div className="flex-1 flex flex-col items-center gap-3">
                   <div className="w-full bg-zinc-800 rounded-t-xl h-20 shadow-inner"></div>
                   <span className="text-[10px] sm:text-xs text-zinc-500 font-black text-center uppercase leading-tight">Homem Comum<br/>(Estável)</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-3 relative">
                   {/* Ajustado posicionamento para não colidir com o cabeçalho do gráfico */}
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-red-500 animate-bounce bg-red-500/10 px-2 py-1 rounded border border-red-500/20 whitespace-nowrap z-10">
                     PICO CRÍTICO
                   </div>
                   <div className="w-full bg-gradient-to-t from-blue-700 via-blue-500 to-red-600 rounded-t-xl h-40 shadow-[0_0_30px_rgba(59,130,246,0.4)]"></div>
                   <span className="text-[10px] sm:text-xs text-blue-500 font-black text-center uppercase leading-tight">Seu Perfil<br/>(Hipersensível)</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-10 bg-zinc-900/20">
        <div className="flex items-center gap-3 mb-8">
           <Users className="text-zinc-600" size={24} />
           <h3 className="text-zinc-500 text-sm font-black uppercase tracking-[0.2em]">Depoimentos Reais</h3>
        </div>
        <div className="space-y-6">
           {[
             { name: "Carlos, 34 anos", text: "Ontem durei 25 minutos sem nem suar. Finalmente me sinto no controle.", img: "1" },
             { name: "Roberto, 52 anos", text: "Devolveu a rigidez dos meus 20 anos. Minha esposa ficou impressionada.", img: "2" }
           ].map((item, i) => (
             <div key={i} className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl flex gap-5 items-start">
                <img src={`https://picsum.photos/100/100?random=${item.img}`} className="w-14 h-14 rounded-full grayscale border-2 border-zinc-700" alt="Avatar" />
                <div className="space-y-2">
                  <div className="flex gap-1">
                     {[...Array(5)].map((_, j) => <div key={j} className="w-2.5 h-2.5 bg-amber-500 rounded-full"></div>)}
                  </div>
                  <p className="text-zinc-200 text-lg font-medium leading-snug italic">"{item.text}"</p>
                  <span className="text-zinc-500 text-xs font-black uppercase tracking-widest">{item.name}</span>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 bg-blue-600/5 mt-auto border-t border-zinc-900">
        <div className="text-center space-y-8 max-w-sm mx-auto">
           <div className="inline-block p-4 rounded-full bg-blue-500/10 text-blue-500 mb-2 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
              <PlayCircle size={64} className="animate-pulse" />
           </div>
           <h2 className="text-3xl font-black text-white leading-[1.1] tracking-tight">
              Existe uma maneira de consertar isso sem remédios.
           </h2>
           <p className="text-zinc-400 text-lg leading-relaxed">
             Preparamos um vídeo curto explicando o <strong className="text-white">Protocolo de Dessensibilização Neural</strong> que reverte esse quadro em 21 dias.
           </p>
           
           <button 
             onClick={handleCTAClick}
             disabled={isRedirecting}
             className="w-full py-7 px-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-black text-xl rounded-2xl shadow-[0_15px_45px_rgba(34,197,94,0.4)] transition-all transform hover:scale-105 active:scale-95 animate-pulse-soft flex flex-col items-center gap-1"
           >
              <span>ASSISTIR APRESENTAÇÃO</span>
              <span className="text-xs opacity-80 uppercase tracking-widest font-bold">Protocolo PDN Personalizado</span>
           </button>

           <div className="flex items-center justify-center gap-2 text-zinc-600 font-bold uppercase text-[10px] tracking-widest">
              <ShieldCheck size={16} />
              <span>Acesso Seguro & 100% Privado</span>
           </div>
        </div>
      </section>

      {/* Sticky footer info */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-900 py-5 px-6 flex justify-between items-center z-50">
         <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,1)]"></div>
            <span className="text-xs text-zinc-400 font-black uppercase tracking-tight">412 Homens assistindo</span>
         </div>
         <button className="text-xs text-blue-500 font-black underline uppercase tracking-[0.1em]">
            Acesso Restrito
         </button>
      </div>
    </div>
  );
};

export default Result;
