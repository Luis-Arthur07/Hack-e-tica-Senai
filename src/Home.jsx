import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(document.body.classList.contains('theme-dark'));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('theme-dark'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Garante que o fundo do body combine com o header para sumir as bordas brancas
    document.body.style.background = isDark ? '#232336' : '#6a8cff';
    return () => {
      document.body.style.background = '';
    };
  }, [isDark]);

  const cards = [
    {
      icon: (
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: '#e7eaff', marginBottom: 24 }}>
          <svg width="32" height="32" fill="none" stroke="#6a5cff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </span>
      ),
      title: '100% Baseado em IA',
      desc: 'Avaliações imparciais e objetivas, sem intervenção humana, eliminando vieses inconscientes no processo de seleção.'
    },
    {
      icon: (
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: '#e7eaff', marginBottom: 24 }}>
          <svg width="32" height="32" fill="none" stroke="#6a5cff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </span>
      ),
      title: 'Inclusão e Diversidade',
      desc: 'Plataforma desenvolvida para valorizar a diversidade e garantir oportunidades iguais para todos os profissionais'
    },
    {
      icon: (
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: '#e7eaff', marginBottom: 24 }}>
          <svg width="32" height="32" fill="none" stroke="#6a5cff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
        </span>
      ),
      title: 'Dados Detalhados',
      desc: 'Histórico completo de desempenho e habilidades, permitindo decisões de contratação baseadas em evidências concretas.'
    }
  ];

  // Função utilitária para cor do card conforme tema
  const getCardBg = () =>
    isDark ? '#232336' : '#6a8cff';

  return (
    <div style={{ minHeight: '100vh', background: 'transparent', display: 'flex', flexDirection: 'column' }}>
      <Header bgColor={isDark ? '#232336' : getCardBg()} />
      {/* Hero Section */}
      <section
        className="talentai-hero"
        style={{
          background: isDark ? '#232336' : getCardBg(),
          color: '#111',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '64px 0 0 0',
          minHeight: 480,
          fontFamily: 'Poppins, Montserrat, Arial, sans-serif',
          width: '100%',
          margin: 0,
        }}
      >
        <div style={{ maxWidth: 1200, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap', padding: '0 24px', boxSizing: 'border-box' }}>
          <div style={{ flex: 1, minWidth: 340, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: isDark ? '#232336' : getCardBg(), borderRadius: 24, padding: '48px 32px', boxShadow: '0 2px 8px rgba(80,80,120,0.04)' }}>
            <h1 style={{ fontSize: 54, fontWeight: 900, marginBottom: 18, lineHeight: 1.1, fontFamily: 'inherit', color: '#fff', textAlign: 'center' }}>Avaliação profissional<br />100% baseada em IA</h1>
            <p style={{ fontSize: 22, marginBottom: 36, color: '#fff', fontWeight: 400, maxWidth: 540, fontFamily: 'inherit', textAlign: 'center' }}>
              Encontre os melhores talentos com base em dados reais de desempenho, sem vieses humanos. Nossa plataforma utiliza inteligência artificial avançada para garantir contratações eficientes e inclusivas.
            </p>
          </div>
        </div>
      </section>
      {/* Por que escolher a TalentAI? */}
      <section style={{ background: 'transparent', padding: '64px 0', fontFamily: 'Poppins, Montserrat, Arial, sans-serif', width: '100%', margin: 0 }}>
        <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: 36, color: '#fff', margin: '0 0 48px 0' }}>
          Por que escolher a TalentAI?
        </h2>
        <div
          className="talentai-cards-row"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: 18,
            flexWrap: 'nowrap',
            maxWidth: 1200,
            margin: '0 auto',
            width: '100%',
            padding: '0 24px',
            boxSizing: 'border-box',
            // Removido o background e borderRadius adicionados anteriormente
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="talentai-card"
              tabIndex={0}
              style={{
                background: isDark ? '#232336' : '#4f7fc7',
                border: 'none',
                borderRadius: 8,
                boxShadow: '0 2px 8px rgba(80,80,120,0.04)',
                padding: i === 0 ? '48px 32px 38px 32px' : '32px 24px 28px 24px',
                minWidth: i === 0 ? 320 : 260,
                maxWidth: i === 0 ? 400 : 340,
                width: '100%',
                flex: '1 1 0',
                outline: 'none',
                margin: '0',
                minHeight: i === 0 ? 380 : 320,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                color: '#fff',
                boxSizing: 'border-box',
              }}
            >
              {card.icon}
              <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8, color: '#fff', textAlign: 'center' }}>{card.title}</h3>
              <p style={{ fontSize: 15, color: '#fff', fontWeight: 400, lineHeight: 1.5, textAlign: 'center' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
