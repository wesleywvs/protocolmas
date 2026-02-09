
import React, { useState } from 'react';
import { ChevronLeft, ShieldCheck, Zap } from 'lucide-react';
import { QUESTIONS } from '../constants';
import { ProfileType } from '../types';

interface QuizProps {
  onFinish: (profile: ProfileType) => void;
  onDisqualify: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish, onDisqualify }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profileChoice, setProfileChoice] = useState<ProfileType>(ProfileType.NONE);
  const [isExiting, setIsExiting] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;

  const getPhaseDisplayLabel = () => {
    switch (currentQuestion.fase) {
      case "Segmentação":
        return "Fase 1 de 5: Seu Perfil Inicial";
      case "Diagnóstico":
        return "Fase 2 de 5: Mapeamento dos Sintomas";
      case "Micro-Comprometimento":
        return "Fase 3 de 5: Análise de Tentativas Anteriores";
      case "Ouro (Define o Resultado)":
        return "Fase 4 de 5: Definição do Padrão Neural";
      case "Fechamento":
        return "Fase 5 de 5: Diagnóstico Final";
      default:
        return currentQuestion.fase;
    }
  };

  const performTransition = (nextAction: () => void) => {
    setIsExiting(true);
    // Pequeno atraso para a animação de saída antes de trocar a pergunta
    setTimeout(() => {
      nextAction();
      setIsExiting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 250);
  };

  const handleOptionSelect = (option: string) => {
    // Lógica de perfilamento na pergunta 12 (index 11)
    if (currentIndex === 11) {
      if (option.includes("Eu fico duro, mas gozo muito rápido")) setProfileChoice(ProfileType.COELHO);
      else if (option.includes("Eu demoro para ficar duro")) setProfileChoice(ProfileType.MEIA_BOMBA);
      else if (option.includes("Eu fico nervoso")) setProfileChoice(ProfileType.ANSIOSO);
      else setProfileChoice(ProfileType.PERFORMANCE);
    }

    if (currentIndex < QUESTIONS.length - 1) {
      performTransition(() => {
        setCurrentIndex(prev => prev + 1);
      });
    } else {
      setIsExiting(true);
      setTimeout(() => {
        onFinish(profileChoice);
      }, 300);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0 && !isExiting) {
      performTransition(() => {
        setCurrentIndex(prev => prev - 1);
      });
    }
  };

  return (
    <div className="w-full flex flex-col min-h-screen bg-zinc-950">
      {/* Header & Progress */}
      <div className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md pt-6 pb-4 px-6 space-y-4 border-b border-zinc-900">
        <div className="flex items-center justify-between">
          <button 
            onClick={handleBack}
            className={`p-3 rounded-full bg-zinc-900 text-zinc-400 hover:text-white transition-colors ${currentIndex === 0 ? 'invisible' : 'visible'}`}
            disabled={isExiting}
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center gap-1.5 text-blue-500 font-black text-xs sm:text-sm tracking-[0.2em]">
            <ShieldCheck size={18} />
            <span>PROTOCOLO MASCULINO</span>
          </div>
          <div className="w-10"></div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-zinc-400 font-bold uppercase tracking-tight">
            <span>Pergunta {currentIndex + 1} de {QUESTIONS.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(37,99,235,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question Content - Key única por índice garante que o React recrie os elementos e limpe estados de hover residuais */}
      <div 
        key={currentIndex}
        className={`flex-1 px-6 pt-10 pb-12 flex flex-col transition-all duration-300 ease-in-out ${isExiting ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-2'}`}
      >
        <div className="mb-4">
          <span className="text-blue-500 text-[10px] sm:text-xs font-black uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full">
            {getPhaseDisplayLabel()}
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-black leading-[1.1] mb-10 text-white tracking-tight">
          {currentQuestion.text}
        </h2>

        {currentQuestion.type === 'scale' ? (
          <div className="space-y-8">
            <div className="flex justify-between gap-1 sm:gap-2 items-end">
              {currentQuestion.options.map((option, idx) => {
                const hue = 60 - (idx * 6); 
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(option)}
                    disabled={isExiting}
                    className="flex-1 group relative transition-all duration-300"
                  >
                    <div 
                      className="w-full aspect-[2/3] sm:h-16 rounded-lg flex items-center justify-center font-black text-sm sm:text-xl text-white shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-2 active:scale-95 hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                      style={{ 
                        backgroundColor: `hsl(${hue}, 85%, 45%)`,
                        boxShadow: `0 0 15px -5px hsl(${hue}, 85%, 40%)`
                      }}
                    >
                      {option}
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between px-1 text-[10px] sm:text-xs font-black text-zinc-500 uppercase tracking-[0.2em] italic">
              <span>0 - Posso esperar</span>
              <span>10 - Urgente / Agora</span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option)}
                disabled={isExiting}
                className={`w-full text-left p-5 sm:p-6 rounded-2xl border-2 transition-all duration-200 group active:scale-[0.98] flex items-center justify-between ${
                  currentQuestion.type === 'cta'
                    ? 'bg-blue-600 border-blue-500 text-white font-black shadow-[0_15px_30px_rgba(37,99,235,0.3)]'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-100 hover:border-blue-500 hover:bg-blue-500/5'
                }`}
              >
                <span className="text-lg sm:text-xl font-bold pr-4 leading-tight">{option}</span>
                {currentQuestion.type === 'cta' ? (
                   <Zap size={24} fill="currentColor" className="shrink-0" />
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-zinc-700 group-hover:border-blue-500 flex items-center justify-center shrink-0">
                    {/* Removido o group-hover:scale-100 para evitar que a opção pareça selecionada por acidente no hover persistente */}
                    <div className="w-3 h-3 rounded-full bg-blue-500 scale-0 transition-transform duration-200" />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="py-8 flex justify-center items-center gap-3 opacity-40 grayscale pointer-events-none mt-auto">
        <div className="h-[1px] w-12 bg-zinc-700"></div>
        <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 text-center">CIENTIFICAMENTE EMBASADO</span>
        <div className="h-[1px] w-12 bg-zinc-700"></div>
      </div>
    </div>
  );
};

export default Quiz;
