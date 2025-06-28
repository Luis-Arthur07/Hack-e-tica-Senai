import React from 'react';

export default function Footer() {
  // Detecta o modo escuro do body
  const isDark = typeof document !== 'undefined' && document.body.classList.contains('theme-dark');

  // Cores para cada modo
  const darkColors = {
    background: '#181828',
    text: '#e0e6f0',
    link: '#b3c6e0',
    linkHover: '#fff',
    sectionTitle: '#fff',
    icon: '#b3c6e0',
    copyright: '#b3c6e0',
  };
  const lightColors = {
    background: '#4f7fc7',
    text: '#fff',
    link: '#cfd8e3',
    linkHover: '#fff',
    sectionTitle: '#fff',
    icon: '#cfd8e3',
    copyright: '#cfd8e3',
  };
  const colors = isDark ? darkColors : lightColors;

  // Estilo base dos links
  const baseLinkStyle = {
    color: colors.link,
    textDecoration: 'none',
    fontSize: 16,
    marginBottom: 6,
    display: 'inline-block',
    transition: 'color 0.15s',
  };

  // Função para hover (inline, pois não há CSS externo)
  function handleMouseOver(e) {
    e.target.style.color = colors.linkHover;
  }
  function handleMouseOut(e) {
    e.target.style.color = colors.link;
  }

  return (
    <footer style={{
      background: colors.background,
      color: colors.text,
      padding: '120px 0 72px 0',
      marginTop: 64,
      fontSize: 19,
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      boxSizing: 'border-box',
    }}>
      <div style={{
        maxWidth: 1920,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 48,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '0 48px',
        boxSizing: 'border-box',
      }}>
        <div style={{ minWidth: 220, flex: 1 }}>
          <div style={{ fontWeight: 800, fontSize: 22, marginBottom: 10, color: colors.sectionTitle }}>TalentAI</div>
          <div style={{ color: colors.link, fontSize: 16, maxWidth: 260 }}>
            Transformando o processo de avaliação profissional com inteligência artificial.
          </div>
        </div>
        <div style={{ minWidth: 180, flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10, color: colors.sectionTitle }}>Links Rápidos</div>
          <div><a href="/" style={baseLinkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Início</a></div>
          <div><a href="#sobre" style={baseLinkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Sobre nós</a></div>
          <div><a href="#funciona" style={baseLinkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Como funciona</a></div>
          <div><a href="#contato" style={baseLinkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Contato</a></div>
        </div>
        <div style={{ minWidth: 180, flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10, color: colors.sectionTitle }}>Recursos</div>
          <div><a href="#blog" style={baseLinkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Blog</a></div>
          <div><a href="#faq" style={baseLinkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>FAQ</a></div>
          <div><a href="#privacidade" style={baseLinkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Política de Privacidade</a></div>
          <div><a href="#termos" style={baseLinkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Termos de Uso</a></div>
        </div>
        <div style={{ minWidth: 220, flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10, color: colors.sectionTitle }}>Contato</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: colors.icon, marginBottom: 6 }}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 16V7.83l-7.29 7.29a1 1 0 01-1.42 0L4 7.83V20h16z" fill={colors.icon}/></svg>
            <a href="mailto:contato@talentai.com" style={baseLinkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>contato@talentai.com</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: colors.icon }}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" fill={colors.icon}/></svg>
            <a href="tel:+551143211234" style={baseLinkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>(11) 4321-1234</a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', color: colors.copyright, fontSize: 17, marginTop: 28 }}>
        © 2025 Senai Resende. Todos os direitos reservados.
      </div>
    </footer>
  );
}
