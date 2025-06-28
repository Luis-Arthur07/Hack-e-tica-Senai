import React from 'react';

export default function RoboLogo({ size = 120 }) {
  return (
    <div
      style={{
        width: size,
        height: (size * 201) / 211, // proporção da imagem
        background: `url('/robo-sem-fundo.png') center/contain no-repeat`,
        display: 'block',
      }}
      aria-label="Logo Robo"
      role="img"
    />
  );
}
