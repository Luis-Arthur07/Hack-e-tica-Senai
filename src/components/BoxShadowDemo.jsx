import React from 'react';

export default function BoxShadowDemo() {
  return (
    <div
      tabIndex={0}
      style={{
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(80,80,120,0.04)',
        padding: '40px 32px',
        minWidth: 320,
        maxWidth: 400,
        width: '100%',
        outline: 'none',
        transition: 'transform 0.22s cubic-bezier(.4,1.6,.4,1), box-shadow 0.22s cubic-bezier(.4,1.6,.4,1)',
        cursor: 'pointer',
        margin: '32px auto',
        minHeight: 180,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: '#222',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.06)';
        e.currentTarget.style.boxShadow = '0 16px 40px 0 rgba(60,60,60,0.22)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(80,80,120,0.04)';
      }}
      onFocus={e => {
        e.currentTarget.style.transform = 'scale(1.06)';
        e.currentTarget.style.boxShadow = '0 16px 40px 0 rgba(60,60,60,0.22)';
      }}
      onBlur={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(80,80,120,0.04)';
      }}
    >
      <h2 style={{ color: '#222', fontWeight: 700, fontSize: 22, marginBottom: 12 }}>Box com Box-Shadow</h2>
      <p style={{ color: '#444', fontSize: 16 }}>
        Este é um exemplo de box com efeito de box-shadow cinza maior no hover/focus, ideal para tema claro.
      </p>
    </div>
  );
}
