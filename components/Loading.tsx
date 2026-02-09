
import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const MESSAGES = [
  "Iniciando análise de dados...",
  "Analisando seu perfil metabólico...",
  "Calculando disparos neurais...",
  "Cruzando informações genéticas...",
  "Finalizando diagnóstico personalizado..."
];

const Loading: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev < MESSAGES.length - 1 ? prev + 1 : prev));
    }, 700);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center p-8 z-[100]">
      <div className="relative mb-8">
        <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />
        <div className="absolute inset-0 blur-xl bg-blue-500/20 rounded-full animate-pulse"></div>
      </div>
      
      <h3 className="text-xl font-bold mb-6 text-zinc-100 h-8 flex items-center justify-center text-center">
        {MESSAGES[messageIndex]}
      </h3>

      <div className="w-full max-w-xs space-y-2">
        <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
          <div 
            className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-end">
           <span className="text-blue-500 text-[10px] font-bold tabular-nums">{progress}%</span>
        </div>
      </div>

      <p className="mt-12 text-zinc-500 text-sm text-center font-medium max-w-xs leading-relaxed">
        Não feche esta página. Estamos processando as respostas baseadas em +2.500 casos clínicos.
      </p>
    </div>
  );
};

export default Loading;
