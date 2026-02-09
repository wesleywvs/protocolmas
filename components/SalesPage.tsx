
import React, { useEffect, useState, useRef } from 'react';
import { Play, CheckCircle, Gift, Lock, ShieldCheck, HelpCircle, ArrowRight, Zap, Timer, Loader2, Activity, Clock, BookOpen, Heart, Star, Sparkles, Flame, RotateCcw, Award } from 'lucide-react';

const SalesPage: React.FC = () => {
  const [hasStartedVideo, setHasStartedVideo] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartVideo = () => {
    if (hasStartedVideo) return;
    setHasStartedVideo(true);
  };

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleCheckout = () => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout');
    }
    window.open('https://pay.cakto.com.br/39nsz8g_421258', '_blank');
  };

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-100 flex flex-col overflow-x-hidden">
      
      {/* VSL Section */}
      <section className="w-full bg-black pt-12 pb-16 px-6 text-center border-b border-zinc-900">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-[1.1] max-w-sm mx-auto tracking-tight">
          A Descoberta que Devolveu o Controle a 14.329 Homens Comuns
        </h2>
        
        {!hasStartedVideo && (
          <p className="text-zinc-400 text-sm font-bold mb-6 italic">
            Após apertar o play, talvez seja necessário clicar no ícone de som para ouvir.
          </p>
        )}

        {/* VSL Player */}
        <div 
          className="relative w-full aspect-[9/16] max-w-[280px] sm:max-w-[340px] mx-auto bg-zinc-900 rounded-[3rem] overflow-hidden shadow-[0_25px_100px_rgba(37,99,235,0.25)] border border-zinc-800 group mb-12 transition-all duration-500 hover:scale-[1.02]"
        >
           {hasStartedVideo ? (
             <iframe
               className="absolute inset-0 w-full h-full"
               src="https://player.vimeo.com/video/1163088449?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&dnt=1&playsinline=1"
               title="PDN - Protocolo Neural - Aula gratuita"
               frameBorder="0"
               allow="autoplay; fullscreen; picture-in-picture"
               allowFullScreen
             ></iframe>
           ) : (
             <div onClick={handleStartVideo} className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer p-8">
               <div className="absolute inset-0 z-0">
                 <img 
                   src="https://i.imgur.com/gK2R0mR.png" 
                   alt="Video Thumbnail" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-black/50"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent"></div>
               </div>
               
               <div className="relative z-10 flex flex-col items-center justify-center text-center">
                 {/* New Play Button */}
                 <div className="w-16 h-16 bg-black/50 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10 group-hover:scale-110 group-hover:bg-black/80 transition-all duration-300">
                   <Play className="text-white fill-current ml-1" size={32} />
                 </div>
             
                 {/* New Text Overlay */}
                 <h3 
                   className="text-4xl sm:text-5xl font-black text-red-600 leading-tight tracking-tighter"
                   style={{
                     textShadow: "-1.5px -1.5px 0 #fff, 1.5px -1.5px 0 #fff, -1.5px 1.5px 0 #fff, 1.5px 1.5px 0 #fff, 3px 3px 6px rgba(0,0,0,0.5)"
                   }}
                 >
                   PARE AGORA<br/>E ME DÊ<br/>3 MINUTOS
                 </h3>
               </div>
             </div>
           )}
        </div>

        <button 
          onClick={scrollToPricing}
          className="w-full max-w-sm mx-auto py-6 px-8 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-black text-xl rounded-2xl shadow-[0_15px_40px_rgba(37,99,235,0.4)] transition-all transform hover:scale-105 active:scale-95 animate-pulse-soft flex items-center justify-center gap-3"
        >
          QUERO MINHA POTÊNCIA AGORA
        </button>
      </section>

      {/* Main Copy Body */}
      <main className="px-6 py-20 space-y-20 max-w-lg mx-auto">
        
        {/* Intro Section */}
        <div className="space-y-10">
          <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight italic">"Mas... será que isso vai funcionar para mim?"</h3>
          
          <div className="space-y-8 text-zinc-300 text-lg sm:text-xl leading-[1.6]">
            <p>
              Se você chegou até aqui, é porque uma parte de você sabe que ignorar o problema não é mais uma opção.
            </p>
            <p>
              Você viu no vídeo acima que a culpa não é da sua ansiedade. Você entendeu que existe uma falha mecânica — o <span className="text-blue-500 font-bold underline decoration-blue-500/50 underline-offset-8">Curto-Circuito Neural</span> — que está sabotando sua virilidade.
            </p>
            <p className="text-white font-black text-xl sm:text-2xl pt-2">
              "Isso é diferente de tudo o que eu já tentei?"
            </p>
            
            <div className="p-8 bg-zinc-900 border-l-4 border-blue-600 shadow-2xl rounded-r-3xl">
               <p className="text-white font-black text-xl sm:text-2xl leading-tight">A resposta é: Sim. Porque nós não atacamos o sintoma, nós consertamos a máquina.</p>
            </div>
            
            <p>
              Enquanto sprays tiram sua sensibilidade e pílulas te tornam dependente... o <span className="text-white font-bold">Protocolo PDN</span> devolve o comando do seu próprio corpo para você.
            </p>
          </div>
        </div>

        {/* Modules Section */}
        <div className="space-y-12">
           <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">O Que Você Vai Receber Hoje?</h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              <p className="text-zinc-500 text-base font-bold italic">(Sistema de recalibragem biológica garantido.)</p>
           </div>

           <div className="grid grid-cols-1 gap-8">
              {[
                { 
                  icon: <Zap size={24} />, 
                  title: "Módulo 1: Protocolo \"Hidráulica Pélvica\"", 
                  text: "Chega de \"meia-bomba\". Aprenda a sequência de força bruta que elimina a Fibrose Silenciosa e \"desdobra a mangueira\". Em 30 dias, conquiste uma ereção de aço que surge sob comando e se mantém rígida até o final, sem falhas.",
                  res: "Resultado: Ereção de aço e rígida até o final."
                },
                { 
                  icon: <RotateCcw size={24} />, 
                  title: "Módulo 2: O Reset do \"Curto-Circuito\"", 
                  text: "Desligue o alarme de urgência do cérebro. Domine a \"Masturbação Tática\" e 8 técnicas de elite (como o \"Interruptor Morto\") para nunca mais disparar sem querer. Aprenda também a hackear seu descanso e estar pronto para o 2º round em minutos.",
                  res: "Resultado: Controle total sobre a ejaculação."
                },
                { 
                  icon: <Flame size={24} />, 
                  title: "Módulo 3: Combustível da Testosterona", 
                  text: "Blinde sua potência contra a idade. Descubra os alimentos baratos de mercado que agem como \"Viagra Natural\", aumentando sua Testosterona e Óxido Nítrico. Recupere a energia vital e o desejo explosivo dos seus 18 anos.",
                  res: "Resultado: Testosterona e libido explosivos."
                }
              ].map((mod, i) => (
                <div key={i} className="group bg-zinc-900/60 p-8 rounded-[2rem] border-2 border-zinc-800 hover:border-blue-500/30 transition-all space-y-5">
                   <div className="flex items-center gap-4 text-blue-500 font-black text-lg uppercase tracking-widest">
                      <div className="p-3 bg-blue-600/10 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">{mod.icon}</div>
                      {mod.title}
                   </div>
                   <p className="text-zinc-300 text-lg leading-relaxed">
                      {mod.text}
                   </p>
                   <div className="flex items-start gap-3 text-green-500 text-base font-black bg-green-500/5 p-4 rounded-2xl border border-green-500/10 italic">
                      <CheckCircle size={20} className="shrink-0 mt-1" /> 
                      <span>{mod.res}</span>
                   </div>
                </div>
              ))}
              
              {/* Extra Guide Section */}
              <div className="group bg-gradient-to-br from-blue-900/20 to-zinc-900/60 p-8 rounded-[2rem] border-2 border-blue-600/30 hover:border-blue-500 transition-all space-y-5 shadow-[0_10px_40px_rgba(37,99,235,0.1)]">
                 <div className="flex items-center gap-4 text-blue-400 font-black text-lg uppercase tracking-widest">
                    <div className="p-3 bg-blue-600/20 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all"><BookOpen size={28} /></div>
                    Guia Extra: Mapeamento da "Base de Aço"
                 </div>
                 <p className="text-zinc-300 text-lg leading-relaxed">
                    O manual visual de bolso para execução perfeita. Inclui Raio-X Anatômico e um Cronograma à Prova de Falhas (Iniciante ao Avançado). Apenas marque um "X" a cada dia vencido e garanta que está ativando os músculos certos, sem erros.
                 </p>
                 <div className="flex items-start gap-3 text-blue-400 text-base font-black bg-blue-500/5 p-4 rounded-2xl border border-blue-500/10 italic">
                    <CheckCircle size={20} className="shrink-0 mt-1" /> 
                    <span>Garantia de execução perfeita dos exercícios.</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Bonuses Section */}
        <div className="space-y-12 bg-zinc-900/40 p-10 rounded-[3rem] border-2 border-blue-500/10 shadow-[0_20px_60px_rgba(37,99,235,0.05)]">
           <div className="text-center">
              <span className="inline-block px-5 py-2 bg-blue-600 text-white font-black uppercase text-xs tracking-[0.3em] rounded-full mb-6 shadow-lg shadow-blue-500/20">
                 Presentes Inclusos
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white italic leading-tight">Grátis somente para quem entrar HOJE:</h3>
           </div>

           <div className="space-y-8">
              {[
                { 
                  title: "BÔNUS: O Gatilho da Libido Feminina", 
                  desc: "Descubra como hackear a mente dela e acender um desejo incontrolável antes mesmo de tirar a roupa. Aprenda as palavras e toques exatos que a deixam pronta e implorando por você. Torne-se o vício dela.", 
                  val: "197,00" 
                },
                { 
                  title: "BÔNUS: Dominando o Prazer Dela", 
                  desc: "Agora que você dura mais, saiba o que fazer com esse tempo. O mapa dos 3 pontos secretos que geram orgasmos intensos e múltiplos. Faça ela tremer, revirar os olhos e se gabar de você para as amigas.", 
                  val: "297,00" 
                },
                { 
                  title: "BÔNUS: Apimentando a Relação", 
                  desc: "Saia da rotina e surpreenda. Um guia prático sobre os melhores brinquedos, óleos e acessórios para reacender a chama. Descubra como introduzir novidades na cama sem tabus e levar o prazer do casal a um novo nível.", 
                  val: "147,00" 
                }
              ].map((bonus, i) => (
                <div key={i} className="group flex flex-col sm:flex-row gap-6 p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800 items-start sm:items-center hover:border-blue-500/40 transition-all shadow-xl">
                   <div className="p-5 bg-blue-600/10 rounded-2xl text-blue-500 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                      <Gift size={36} />
                   </div>
                   <div className="space-y-2 flex-1">
                      <h5 className="font-black text-white text-lg leading-tight uppercase tracking-tight">{bonus.title}</h5>
                      <p className="text-zinc-400 text-sm leading-relaxed">{bonus.desc}</p>
                      <div className="flex items-center gap-4 pt-3">
                        <span className="text-xs font-bold text-zinc-600 line-through">R$ {bonus.val}</span>
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                           <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                           <span className="text-[10px] font-black text-green-500 uppercase tracking-widest italic">GRÁTIS HOJE</span>
                        </div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Pricing Section */}
        <div ref={pricingRef} className="relative bg-zinc-900 p-10 sm:p-14 rounded-[3rem] border-2 border-blue-500/30 text-center space-y-10 shadow-[0_30px_60px_rgba(37,99,235,0.15)] overflow-hidden">
           <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700"></div>
           
           <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 bg-red-600/10 border border-red-600/20 py-2 px-4 rounded-full w-fit mx-auto animate-pulse">
                <Clock size={16} className="text-red-500" />
                <span className="text-red-500 text-xs font-black uppercase tracking-widest">A oferta expira em: {formatTime(timeLeft)}</span>
              </div>
              <h3 className="text-blue-500 text-sm font-black uppercase tracking-[0.4em]">OFERTA VÁLIDA AGORA</h3>
              <p className="text-zinc-100 text-lg font-bold">Investimento Único de:</p>
           </div>
           
           <div className="space-y-2">
              <div className="text-zinc-600 text-lg line-through font-bold">De R$ 97,00</div>
              <div className="text-8xl sm:text-9xl font-black text-white tracking-tighter flex items-start justify-center drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <span className="text-3xl mt-6 mr-1 font-bold">R$</span>
                <span>27</span>
              </div>
              <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest pt-4">
                Ou apenas 3x de <span className="text-zinc-400">R$ 9,00</span>
              </div>
           </div>

           <button 
             onClick={handleCheckout}
             className="w-full py-7 px-6 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-black text-2xl rounded-2xl shadow-[0_20px_50px_rgba(34,197,94,0.4)] transition-all transform hover:scale-105 active:scale-95 animate-pulse-soft flex flex-col items-center gap-1"
           >
              <span>LIBERAR MEU ACESSO AGORA</span>
              <span className="text-[10px] opacity-80 uppercase font-black tracking-[0.3em]">Ambiente 100% Criptografado</span>
           </button>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 opacity-60">
              <div className="flex items-center gap-2 text-xs font-black text-zinc-400 uppercase tracking-widest">
                <Lock size={14} /> PRIVACIDADE TOTAL
              </div>
              <div className="flex items-center gap-2 text-xs font-black text-zinc-400 uppercase tracking-widest">
                <ShieldCheck size={14} /> SITE BLINDADO
              </div>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-10">
           <div className="flex items-center gap-4 justify-center">
              <div className="p-3 bg-blue-600/10 rounded-2xl text-blue-500"><HelpCircle size={32} /></div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Dúvidas Frequentes</h3>
           </div>
           
           <div className="space-y-5">
              {[
                { q: "O nome aparece na fatura?", a: "Não. Aparecerá apenas 'PAG*COMPRA DIGITAL'. Sua privacidade é nossa maior prioridade." },
                { q: "Tenho mais de 50 anos, funciona?", a: "Absolutamente. O método foca na biologia pélvica básica que todos os homens possuem, independente da idade." },
                { q: "Preciso comprar algo mais?", a: "Não. O método é completo e não exige pílulas, aparelhos ou bombas. Apenas seu corpo e as técnicas." }
              ].map((faq, i) => (
                <div key={i} className="bg-zinc-900/40 p-6 sm:p-8 rounded-3xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                   <h5 className="text-white font-black text-lg sm:text-xl mb-3 leading-tight">{faq.q}</h5>
                   <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Guarantee Section */}
        <div className="bg-zinc-900/60 p-10 sm:p-14 rounded-[3rem] border-2 border-zinc-800 text-center space-y-8 max-w-lg mx-auto shadow-2xl">
           <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
              <Award size={48} className="text-blue-500" />
           </div>
           <div className="space-y-4">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Garantia Blindada de 7 Dias</h3>
              <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>
           </div>
           <p className="text-zinc-400 text-lg leading-relaxed italic font-medium">
              "Sua satisfação é minha prioridade número um. Você tem 7 dias para testar o protocolo sem risco algum. Se sentir que não é para você, por qualquer motivo, basta clicar em um botão na própria plataforma e o reembolso é automático. Devolvo 100% do seu investimento imediatamente. Sem e-mails, sem perguntas, sem burocracia e continuamos amigos."
           </p>
           <div className="flex items-center justify-center gap-3 pt-4 opacity-70">
              <ShieldCheck size={20} className="text-blue-500" />
              <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">Risco Zero Garantido</span>
           </div>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-12 pt-12 pb-16 border-t border-zinc-900">
           <p className="text-white font-black uppercase text-xl sm:text-2xl tracking-widest leading-[1.2]">
              SUA PARCEIRA ESPERA QUE VOCÊ FAÇA A ESCOLHA CERTA HOJE.
           </p>

           <button 
             onClick={handleCheckout}
             className="w-full py-7 px-8 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-black text-2xl rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.4)] transition-all transform hover:scale-105 active:scale-95 animate-pulse-soft"
           >
              RECUPERAR MINHA VIRILIDADE
           </button>
           
           <p className="text-zinc-600 text-xs font-bold uppercase tracking-[0.2em] max-w-xs mx-auto">
             Acesso imediato enviado para o seu e-mail após a confirmação.
           </p>
        </div>

      </main>

      {/* Footer Branding */}
      <footer className="py-16 bg-black border-t border-zinc-900 px-8 text-center space-y-8">
         <p className="text-xs text-zinc-600 font-bold leading-relaxed max-w-sm mx-auto uppercase tracking-tighter">Este site não faz parte do Facebook ou Facebook Inc. Além disso, este site NÃO é endorsado pelo Facebook de forma alguma.</p>
         <div className="flex justify-center gap-6 text-xs text-zinc-700 font-black uppercase tracking-widest">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-400 transition-colors">Termos</a>
         </div>
         <p className="text-xs text-zinc-800 font-black tracking-[0.3em]">© 2024 PDN PROTOCOLO MASCULINO</p>
      </footer>
    </div>
  );
};

export default SalesPage;
