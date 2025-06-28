import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function MainNav({ minimal }) {
  const navigate = useNavigate();
  const location = useLocation();
  const buttons = [
    { label: 'Início', rota: '/' },
    { label: 'Ranking de Empresas', rota: '/empresas' },
    { label: 'Vagas por Competências', rota: '/vagas' },
    { label: 'Profissionais', rota: '/profissionais' },
  ];
  return (
    <nav
      style={{
        display: 'flex',
        gap: minimal ? 8 : 18,
        justifyContent: minimal ? 'flex-start' : 'center',
        alignItems: 'center',
        margin: minimal ? '0' : '32px 0 24px 0',
        flexWrap: 'wrap',
        zIndex: 10,
        fontFamily: 'Poppins, Montserrat, Arial, sans-serif',
      }}
    >
      {buttons.map((btn, i) => (
        <span
          key={btn.rota}
          onClick={() => navigate(btn.rota)}
          style={{
            color: location.pathname === btn.rota ? '#4f8cff' : '#fff',
            fontWeight: 700,
            fontSize: minimal ? 14 : 18,
            cursor: 'pointer',
            padding: 0,
            marginBottom: minimal ? 0 : 8,
            fontFamily: 'inherit',
            letterSpacing: 0.5,
            border: 'none',
            background: 'none',
            outline: 'none',
            transition: 'color 0.2s',
            borderRadius: 0,
            boxShadow: 'none',
            ...(location.pathname === btn.rota && {
              textDecoration: 'underline',
              textUnderlineOffset: 4,
            }),
          }}
          tabIndex={0}
          role="button"
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') navigate(btn.rota);
          }}
        >
          {btn.label}
        </span>
      ))}
    </nav>
  );
}
