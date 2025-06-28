import React, { useState } from 'react';
import Header from './Header';

const vagas = [
  {
    titulo: 'Desenvolvedor(a) Front-end',
    empresa: 'Magazine Luiza',
    local: 'Remoto',
    competencias: ['React', 'Acessibilidade', 'UX'],
    link: 'https://carreiras.magazineluiza.com.br/vagas/frontend',
  },
  {
    titulo: 'Analista de Diversidade e Inclusão',
    empresa: 'Natura',
    local: 'São Paulo, SP',
    competencias: ['Diversidade', 'Comunicação', 'Inclusão'],
    link: 'https://www.natura.com.br/carreiras',
  },
  {
    titulo: 'Engenheiro(a) de Machine Learning',
    empresa: 'Michelin',
    local: 'Campinas, SP',
    competencias: ['Python', 'Machine Learning'],
    link: 'https://trabalheconosco.michelin.com.br/vagas/ml',
  },
  {
    titulo: 'Designer Gráfico',
    empresa: 'Natura',
    local: 'Remoto',
    competencias: ['Design', 'Photoshop', 'UX'],
    link: 'https://www.natura.com.br/carreiras',
  },
  {
    titulo: 'Analista Financeiro',
    empresa: 'Magazine Luiza',
    local: 'São Paulo, SP',
    competencias: ['Finanças', 'Excel', 'Auditoria'],
    link: 'https://carreiras.magazineluiza.com.br/vagas/financeiro',
  },
];

const funcionarios = [
  {
    nome: 'Ana Silva',
    competencias: ['React', 'Node.js', 'Acessibilidade', 'Liderança'],
  },
  {
    nome: 'Carlos Souza',
    competencias: ['Recrutamento', 'Diversidade', 'Comunicação'],
  },
  {
    nome: 'Maria Oliveira',
    competencias: ['Design', 'UX', 'Photoshop'],
  },
  {
    nome: 'João Santos',
    competencias: ['Auditoria', 'Excel', 'Finanças'],
  },
  {
    nome: 'Lia Prado',
    competencias: ['Python', 'Machine Learning', 'Inclusão'],
  },
];

export default function VagasPorFuncionario() {
  const [funcSelecionado, setFuncSelecionado] = useState(funcionarios[0]);

  const vagasFiltradas = vagas.filter(vaga =>
    vaga.competencias.some(comp => funcSelecionado.competencias.includes(comp))
  );

  return (
    <div style={{ padding: 32, maxWidth: 900, margin: '0 auto' }}>
      <Header />
      <h2 style={{ textAlign: 'center', marginBottom: 32 }}>Vagas de Emprego por Competências</h2>
      <div style={{ display: 'flex', gap: 16, marginBottom: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
        {funcionarios.map(f => (
          <button
            key={f.nome}
            onClick={() => setFuncSelecionado(f)}
            style={{
              background: funcSelecionado.nome === f.nome ? '#4f8cff' : '#fff',
              color: funcSelecionado.nome === f.nome ? '#fff' : '#4f8cff',
              border: '2px solid #4f8cff',
              borderRadius: 8,
              padding: '8px 18px',
              fontWeight: 700,
              cursor: 'pointer',
              marginBottom: 8,
            }}
          >
            {f.nome}
          </button>
        ))}
      </div>
      <h3 style={{ textAlign: 'center', marginBottom: 18 }}>Vagas para: {funcSelecionado.nome}</h3>
      {vagasFiltradas.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888' }}>Nenhuma vaga encontrada para as competências deste funcionário.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {vagasFiltradas.map((vaga, i) => (
            <li key={i} style={{ background: 'var(--card)', borderRadius: 16, boxShadow: 'var(--shadow)', marginBottom: 18, padding: 24 }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#4f8cff' }}>{vaga.titulo}</div>
              <div style={{ fontSize: 16, color: '#222', margin: '6px 0' }}>{vaga.empresa} - {vaga.local}</div>
              <div style={{ fontSize: 15, color: '#888', marginBottom: 8 }}>Competências: {vaga.competencias.join(', ')}</div>
              <a href={vaga.link} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', background: '#4f8cff', borderRadius: 8, padding: '6px 18px', textDecoration: 'none', fontWeight: 600 }}>Ver vaga</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
