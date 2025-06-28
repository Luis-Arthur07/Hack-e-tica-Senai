import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ bgColor }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [isDark, setIsDark] = useState(document.body.classList.contains('theme-dark'));
  const [talkback, setTalkback] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('theme-dark'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Função para ativar/desativar o Talkback
  const toggleTalkback = () => {
    setTalkback((prev) => !prev);
  };

  // Efeito para ativar/desativar leitura automática
  useEffect(() => {
    if (!talkback) return;
    const handleFocus = (e) => {
      const text = e.target.getAttribute('aria-label') || e.target.innerText || e.target.value || '';
      if (text && window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const utter = new window.SpeechSynthesisUtterance(text);
        utter.lang = 'pt-BR';
        window.speechSynthesis.speak(utter);
      }
    };
    document.addEventListener('focusin', handleFocus, true);
    return () => {
      document.removeEventListener('focusin', handleFocus, true);
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, [talkback]);

  const getHeaderBg = () => (isDark ? '#232336' : '#6a8cff');
  // Lista de páginas existentes
  const pages = [
    { label: 'Ranking de Empresas', path: '/empresas' },
    { label: 'Vagas por Funcionário', path: '/vagas' },
    { label: 'Lista de Profissionais', path: '/profissionais' },
  ];

  // Alterna o tema do body
  const toggleTheme = () => {
    setDark((d) => {
      const newTheme = !d;
      if (newTheme) {
        document.body.classList.add('theme-dark');
      } else {
        document.body.classList.remove('theme-dark');
      }
      return newTheme;
    });
  };

  return (
    <header style={{ background: bgColor || getHeaderBg(), padding: '0 0 0 0', fontFamily: 'Poppins, Montserrat, Arial, sans-serif', position: 'relative' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 36px', height: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontWeight: 800, fontSize: 32, color: '#fff', letterSpacing: 1, fontFamily: 'inherit' }}>TalentAI</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            aria-label={dark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 6,
              outline: 'none',
              marginRight: 8,
            }}
          >
            {dark ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
            )}
          </button>
          <button
            aria-label={talkback ? 'Desativar Talkback' : 'Ativar Talkback'}
            onClick={toggleTalkback}
            style={{
              background: 'none',
              border: talkback ? '2.5px solid #ff3333' : '2px solid transparent',
              cursor: 'pointer',
              padding: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 6,
              outline: 'none',
              marginRight: 8,
              transition: 'border 0.2s',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={talkback ? '#ff3333' : '#fff'} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"/>
              <path d="M8 15l8-8M8 8l8 8"/>
            </svg>
          </button>
          {/* Botão sanduíche */}
          <button
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 6,
              outline: 'none',
            }}
          >
            <span style={{ display: 'inline-block', width: 32, height: 32 }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="7" width="32" height="3.5" rx="1.5" fill="#fff" />
                <rect y="14" width="32" height="3.5" rx="1.5" fill="#fff" />
                <rect y="21" width="32" height="3.5" rx="1.5" fill="#fff" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      {/* Menu sanduíche */}
      {menuOpen && (
        <nav style={{
          background: '#fff',
          boxShadow: '0 4px 24px rgba(80,80,120,0.10)',
          borderRadius: 8,
          position: 'absolute',
          top: 80,
          right: 36,
          zIndex: 100,
          padding: '18px 24px',
          minWidth: 180,
          animation: 'fadeIn 0.2s',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}>
          <Link
            to="/"
            style={{
              background: 'none',
              border: 'none',
              color: '#6a5cff',
              fontWeight: 700,
              fontSize: 18,
              textAlign: 'left',
              padding: '6px 0',
              cursor: 'pointer',
              borderRadius: 0,
              outline: 'none',
              textDecoration: 'none',
              transition: 'color 0.15s',
            }}
            onClick={() => setMenuOpen(false)}
          >
            Início
          </Link>
          {pages.map((page, idx) => (
            <Link
              key={idx}
              to={page.path}
              style={{
                background: 'none',
                border: 'none',
                color: '#6a5cff',
                fontWeight: 600,
                fontSize: 17,
                textAlign: 'left',
                padding: '6px 0',
                cursor: 'pointer',
                borderRadius: 0,
                outline: 'none',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onClick={() => setMenuOpen(false)}
            >
              {page.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
