
import React, { useState, useEffect } from 'react';
import { AppState, ProfileType } from './types';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Loading from './components/Loading';
import Result from './components/Result';
import Disqualified from './components/Disqualified';
import SalesPage from './components/SalesPage';

// Adicione esta interface global para o TypeScript reconhecer o fbq
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

// Função auxiliar para ler cookies (necessária para CAPI)
function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.HOME);
  const [profile, setProfile] = useState<ProfileType>(ProfileType.NONE);
  const [showResultContent, setShowResultContent] = useState(false);
  const [showSalesContent, setShowSalesContent] = useState(false);

  // useEffect para capturar UTMs (roda uma vez)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utms = {
      source: urlParams.get('utm_source'),
      medium: urlParams.get('utm_medium'),
      campaign: urlParams.get('utm_campaign'),
      content: urlParams.get('utm_content'),
      term: urlParams.get('utm_term'),
    };
    // Armazena para usar depois na CAPI
    sessionStorage.setItem('utm_params', JSON.stringify(utms));
  }, []);

  // useEffect para rastrear PageViews virtuais na SPA
  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [appState]);


  const handleStartQuiz = () => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', { content_name: 'Quiz Start' });
    }
    setAppState(AppState.QUIZ);
  };

  const handleFinishQuiz = (selectedProfile: ProfileType) => {
    // Muda o estado da UI imediatamente para a tela de carregamento para uma melhor experiência do usuário.
    setProfile(selectedProfile);
    setAppState(AppState.LOADING);

    // Dispara os eventos de rastreamento em segundo plano sem bloquear a UI.
    const trackConversion = async () => {
      const eventId = crypto.randomUUID(); // ID único para deduplicação

      // 1. Dispara o Pixel do browser
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'CompleteRegistration', {
          content_name: 'Quiz Finished',
          status: true,
          profile: selectedProfile
        }, { eventID: eventId });
      }
      
      // 2. Prepara dados e envia para a CAPI (nossa função serverless)
      const utmData = JSON.parse(sessionStorage.getItem('utm_params') || '{}');
      const capiPayload = {
        eventName: 'CompleteRegistration',
        eventId: eventId,
        utms: utmData,
        fbp: getCookie('_fbp'),
        fbc: getCookie('_fbc'),
        eventData: {
          content_name: 'Quiz Finished',
          status: true,
          profile: selectedProfile
        }
      };
      
      try {
        // Este fetch é "fire-and-forget". Não bloqueia a UI.
        await fetch('/api/track-event', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(capiPayload)
        });
      } catch (error) {
        console.error('Falha ao enviar evento para CAPI:', error);
      }
    };

    trackConversion();
  };

  const handleDisqualify = () => {
    setAppState(AppState.DISQUALIFIED);
  };

  const handleGoToSales = () => {
    setAppState(AppState.SALES);
    setTimeout(() => setShowSalesContent(true), 50);
  };

  useEffect(() => {
    if (appState === AppState.LOADING) {
      const timer = setTimeout(() => {
        setAppState(AppState.RESULT);
        setTimeout(() => setShowResultContent(true), 50);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [appState]);

  return (
    <div className="min-h-screen max-w-md mx-auto flex flex-col items-center justify-start p-0">
      {appState === AppState.HOME && (
        <Home onStart={handleStartQuiz} />
      )}
      
      {appState === AppState.QUIZ && (
        <Quiz onFinish={handleFinishQuiz} onDisqualify={handleDisqualify} />
      )}
      
      {appState === AppState.DISQUALIFIED && <Disqualified />}
      
      {appState === AppState.LOADING && <Loading />}
      
      {appState === AppState.RESULT && (
        <div className={`w-full transition-opacity duration-1000 ${showResultContent ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}>
          <Result profile={profile} onGoToSales={handleGoToSales} />
        </div>
      )}

      {appState === AppState.SALES && (
        <div className={`w-full transition-opacity duration-1000 ${showSalesContent ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}>
          <SalesPage />
        </div>
      )}
    </div>
  );
};

export default App;