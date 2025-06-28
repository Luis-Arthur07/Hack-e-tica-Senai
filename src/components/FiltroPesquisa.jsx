import React from 'react';

export default function FiltroPesquisa({ area, funcao, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 12, margin: '24px 0', flexWrap: 'wrap' }}>
      <label style={{ flex: 1, minWidth: 180 }}>
        Área de atuação
        <input
          name="area"
          placeholder="Filtrar por área"
          value={area}
          onChange={e => onChange('area', e.target.value)}
        />
      </label>
      <label style={{ flex: 1, minWidth: 180 }}>
        Função
        <input
          name="funcao"
          placeholder="Filtrar por função"
          value={funcao}
          onChange={e => onChange('funcao', e.target.value)}
        />
      </label>
    </div>
  );
}
