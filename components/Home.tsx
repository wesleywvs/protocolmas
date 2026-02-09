
import React from 'react';
import { Target, Fingerprint, Lock, ShieldCheck, Zap, ArrowRight, Activity, Users } from 'lucide-react';

interface HomeProps {
  onStart: () => void;
}

const Home: React.FC<HomeProps> = ({ onStart }) => {
  return (
    <div className="w-full min-h-screen bg-zinc-950 flex flex-col items-center pb-12">
      {/* Header / Logo Area */}
      <div className="w-full pt-8 pb-4 px-6 flex justify-center border-b border-zinc-900/50 bg-zinc-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-1.5 text-blue-500 font-black text-xs sm:text-sm tracking-[0.2em]">
          <ShieldCheck size={18} />
          <span>PROTOCOLO MASCULINO</span>
        </div>
      </div>

      <main className="px-6 pt-12 space-y-10 max-w-md w-full animate-fade-in-up">
        {/* Headline Section */}
        <div className="space-y-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-[1.1] tracking-tight">
            Descubra o que está <span className="text-blue-500">"Travando"</span> sua Virilidade
          </h1>
          <p className="text-zinc-400 text-lg font-medium leading-relaxed">
            Faça o Diagnóstico de Performance Masculina <span className="text-white font-bold">(100% Gratuito)</span>
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
        </div>

        {/* Subtitle / Hook */}
        <div className="bg-zinc-900/40 p-6 rounded-3xl border border-zinc-800/50">
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed text-center italic">
            "Esqueça o 'achismo'. Em apenas 2 minutos, identifique se a causa do seu problema é ansiedade, física ou o perigoso <span className="text-white font-bold italic underline decoration-blue-500 underline-offset-4">Curto-Circuito Neural</span> — e receba o plano exato para retomar o controle total."
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-4">
          {[
            { 
              icon: <Target className="text-blue-500" size={24} />, 
              title: "Identifique a Causa Raiz", 
              text: "Pare de tratar apenas o sintoma. Descubra por que seu corpo dispara rápido demais ou perde a força." 
            },
            { 
              icon: <Fingerprint className="text-blue-500" size={24} />, 
              title: "Perfil Personalizado", 
              text: "Você é um 'Coelho', 'Meia-Bomba' ou 'Ansioso'? Receba uma análise baseada na sua fisiologia específica." 
            },
            { 
              icon: <Lock className="text-blue-500" size={24} />, 
              title: "Sigilo Absoluto e Anonimato", 
              text: "Seus resultados são privados. Ambiente 100% seguro e discreto em conformidade médica." 
            },
            { 
              icon: <Zap className="text-blue-500" size={24} />, 
              title: "Zero Risco", 
              text: "Uma avaliação profissional completa sem precisar ir a um consultório ou gastar com consultas." 
            }
          ].map((benefit, i) => (
            <div key={i} className="flex gap-4 p-5 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 transition-colors group">
              <div className="shrink-0 p-3 bg-blue-600/5 rounded-xl border border-blue-500/10 group-hover:bg-blue-600/10 transition-colors">
                {benefit.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-black text-sm uppercase tracking-wide">{benefit.title}</h4>
                <p className="text-zinc-500 text-xs sm:text-sm leading-snug">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Area */}
        <div className="space-y-6 pt-4">
          <button 
            onClick={onStart}
            className="w-full py-7 px-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-black text-lg sm:text-xl rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.4)] transition-all transform hover:scale-[1.03] active:scale-95 animate-pulse-soft flex items-center justify-center gap-3"
          >
            <span>👉 INICIAR MEU DIAGNÓSTICO GRATUITO AGORA</span>
          </button>

          <div className="text-center space-y-4">
            <p className="text-red-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
              Acesso liberado gratuitamente por tempo limitado.
            </p>
            
            <div className="flex flex-col items-center gap-3 text-zinc-600 text-[10px] leading-relaxed uppercase font-bold tracking-widest max-w-[280px] mx-auto">
              <div className="flex items-center gap-2">
                <Activity size={14} />
                <span>Como funciona:</span>
              </div>
              <p className="normal-case tracking-normal text-zinc-500 text-center italic">
                Ao clicar, você responderá a 18 perguntas rápidas e estratégicas. Ao final, nossa inteligência revelará seu perfil e seu plano de correção instantaneamente.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Proof */}
        <div className="pt-8 flex flex-col items-center gap-6 opacity-40 grayscale pointer-events-none">
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
               <span className="text-2xl font-black text-white">14k+</span>
               <span className="text-[8px] font-bold uppercase tracking-widest">Homens Avaliados</span>
            </div>
            <div className="w-[1px] h-8 bg-zinc-800"></div>
            <div className="flex flex-col items-center">
               <span className="text-2xl font-black text-white">98%</span>
               <span className="text-[8px] font-bold uppercase tracking-widest">Precisão Clínica</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded-full">
            <ShieldCheck size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Protocolo Seguro & Criptografado</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
