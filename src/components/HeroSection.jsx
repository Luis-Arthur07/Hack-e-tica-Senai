import React from 'react';
import RoboLogo from './RoboLogo';

export default function HeroSection() {
  return (
    <section style={{
      minHeight: '70vh',
      background: 'linear-gradient(120deg, #6a5cff 0%, #4f8cff 100%)',
      color: '#fff',
      borderRadius: 24,
      margin: 16,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <nav style={{ display: 'flex', justifyContent: 'flex-end', gap: 24, padding: 32, fontWeight: 500 }}>
        <span style={{ marginRight: 'auto', display: 'flex', alignItems: 'center', fontWeight: 700, fontSize: 28 }}>
          <RoboLogo size={38} />
          <span style={{ marginLeft: 10, letterSpacing: 1 }}>TalentAI</span>
        </span>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: 18 }}>Início</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: 18 }}>Sobre</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: 18 }}>Contato</a>
        <button style={{ background: '#fff', color: '#4f8cff', border: 'none', borderRadius: 8, padding: '8px 22px', fontWeight: 700, fontSize: 18, marginLeft: 12, cursor: 'pointer' }}>Entrar</button>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1, padding: '0 7vw 0 7vw' }}>
        <div style={{ maxWidth: 540, zIndex: 2 }}>
          <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 18, lineHeight: 1.1 }}>Avaliação profissional<br />100% baseada em IA</h1>
          <p style={{ fontSize: 20, marginBottom: 36, color: '#e0e6ed', fontWeight: 400 }}>
            Encontre os melhores talentos com base em dados reais de desempenho, sem vieses humanos. Nossa plataforma utiliza inteligência artificial avançada para garantir contratações eficientes e inclusivas.
          </p>
          <div style={{ display: 'flex', gap: 18 }}>
            <button style={{ background: '#fff', color: '#4f8cff', border: 'none', borderRadius: 8, padding: '14px 32px', fontWeight: 700, fontSize: 18, cursor: 'pointer' }}>Buscar Profissionais</button>
            <button style={{ background: 'transparent', color: '#fff', border: '2px solid #fff', borderRadius: 8, padding: '14px 32px', fontWeight: 700, fontSize: 18, cursor: 'pointer' }}>Saiba Mais</button>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 220 }}>
          <RoboLogo size={220} />
        </div>
      </div>
    </section>
  );
}
