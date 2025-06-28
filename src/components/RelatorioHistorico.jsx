import React from 'react';

export default function RelatorioHistorico({ colaborador }) {
  if (!colaborador) return null;
  return (
    <div className="relatorio" style={{ border: '1px solid var(--border)', background: 'var(--card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', padding: 24, marginTop: 32 }}>
      <h3 style={{ marginTop: 0 }}>Relatório de Histórico Profissional</h3>
      <p><strong>Nome:</strong> {colaborador.nome}</p>
      {colaborador.nomeSocial && <p><strong>Nome social:</strong> {colaborador.nomeSocial}</p>}
      {colaborador.pronomes && <p><strong>Pronomes:</strong> {colaborador.pronomes}</p>}
      <p><strong>Área:</strong> {colaborador.area}</p>
      <p><strong>Função:</strong> {colaborador.funcao}</p>
      {colaborador.historico && <p><strong>Histórico:</strong> {colaborador.historico}</p>}
      {colaborador.observacoes && <p><strong>Observações:</strong> {colaborador.observacoes}</p>}
    </div>
  );
}
