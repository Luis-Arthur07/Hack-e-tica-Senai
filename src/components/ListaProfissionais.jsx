import React, { useState } from 'react';
import Header from './Header';
import RoboLogo from './RoboLogo';

const exemplos = [
  {
    nome: 'Ana Silva',
    nomeSocial: 'Aninha',
    pronomes: 'ela/dela',
    idade: 28,
    avaliacao: 92,
    deficiencia: 'Cadeirante',
    genero: 'Mulher trans',
    formacoes: ['Bacharel em Ciência da Computação - USP'],
    linkedin: 'https://linkedin.com/in/anasilva',
    github: 'https://github.com/anasilva',
    competencias: ['React', 'Node.js', 'Acessibilidade', 'Liderança'],
    avaliacoes: [
      { autor: 'Gestor', nota: 95, comentario: 'Ótima liderança e engajamento.' },
      { autor: 'RH', nota: 90, comentario: 'Muito dedicada e inclusiva.' },
    ],
  },
  {
    nome: 'Carlos Souza',
    nomeSocial: '',
    pronomes: 'ele/dele',
    idade: 35,
    avaliacao: 78,
    deficiencia: '',
    genero: 'Cisgênero',
    formacoes: ['Psicologia - UFRJ'],
    linkedin: 'https://linkedin.com/in/carlossouza',
    github: '',
    competencias: ['Recrutamento', 'Diversidade', 'Comunicação'],
    avaliacoes: [
      { autor: 'RH', nota: 80, comentario: 'Bom trabalho em diversidade.' },
    ],
  },
  {
    nome: 'Maria Oliveira',
    nomeSocial: 'Maju',
    pronomes: 'ela/dela',
    idade: 31,
    avaliacao: 85,
    deficiencia: 'Deficiência auditiva',
    genero: 'Mulher cis',
    formacoes: ['Design Gráfico - SENAC'],
    linkedin: '',
    github: 'https://github.com/majuoliveira',
    competencias: ['Design', 'UX', 'Photoshop'],
    avaliacoes: [
      { autor: 'Gestor', nota: 88, comentario: 'Criativa e detalhista.' },
    ],
  },
  {
    nome: 'João Santos',
    nomeSocial: '',
    pronomes: 'ele/dele',
    idade: 40,
    avaliacao: 88,
    deficiencia: '',
    genero: 'Homem cis',
    formacoes: ['Contabilidade - FGV'],
    linkedin: '',
    github: '',
    competencias: ['Auditoria', 'Excel', 'Finanças'],
    avaliacoes: [
      { autor: 'RH', nota: 87, comentario: 'Ótimo controle financeiro.' },
    ],
  },
  {
    nome: 'Lia Prado',
    nomeSocial: 'Lia',
    pronomes: 'elu/delu',
    idade: 26,
    avaliacao: 90,
    deficiencia: '',
    genero: 'Não-binárie',
    formacoes: ['Engenharia de Software - UFPE'],
    linkedin: 'https://linkedin.com/in/liaprado',
    github: 'https://github.com/liaprado',
    competencias: ['Python', 'Machine Learning', 'Inclusão'],
    avaliacoes: [
      { autor: 'Gestor', nota: 92, comentario: 'Referência em inclusão e tecnologia.' },
    ],
  },
];

export default function ListaProfissionais() {
  const [detalhe, setDetalhe] = useState(null);

  function getEstrelas(nota) {
    const estrelas = Math.round((nota / 100) * 5 * 10) / 10;
    const inteiras = Math.floor(estrelas);
    const dec = estrelas - inteiras >= 0.5 ? 1 : 0;
    return (
      <span style={{ color: '#FFD700', fontSize: 18 }}>
        {'★'.repeat(inteiras)}{dec ? '½' : ''}{'☆'.repeat(5 - inteiras - dec)}
      </span>
    );
  }

  return (
    <div style={{ padding: 32, maxWidth: 1100, margin: '0 auto' }}>
      <Header />
      <h2 style={{ textAlign: 'center', marginBottom: 32 }}>Profissionais disponíveis</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
        {exemplos.map((p, i) => (
          <div
            key={i}
            style={{
              background: 'var(--card)',
              borderRadius: 18,
              boxShadow: 'var(--shadow)',
              padding: 28,
              minWidth: 260,
              maxWidth: 300,
              textAlign: 'left',
              cursor: 'pointer',
              border: '1.5px solid #e0e0e0',
              transition: 'transform 0.18s cubic-bezier(.4,2,.6,1)',
              position: 'relative',
            }}
            className="card-funcionario"
            onClick={() => setDetalhe(p)}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.045)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <RoboLogo size={44} />
              <div>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#222' }}>{p.nome}</div>
                <div style={{ fontSize: 15, color: '#888', fontWeight: 500 }}>{p.pronomes}</div>
              </div>
            </div>
            <div style={{ margin: '8px 0 4px 0' }}>{getEstrelas(p.avaliacao)} <span style={{ fontWeight: 600, color: '#444', fontSize: 15 }}>{(Math.round((p.avaliacao/100)*50)/10).toFixed(1)}/5.0</span></div>
            <div style={{ fontSize: 15, color: '#444', marginBottom: 6 }}><b>Experiência:</b> {p.idade ? Math.max(p.idade-22, 1) : 5} anos</div>
            <div style={{ fontWeight: 700, fontSize: 15, margin: '10px 0 2px 0' }}>Habilidades principais:</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
              {p.competencias.slice(0,3).map((c, idx) => (
                <span key={idx} style={{ background: '#e7eaff', color: '#3a4fcf', borderRadius: 8, padding: '2px 10px', fontSize: 13, fontWeight: 600 }}>{c}</span>
              ))}
              {p.competencias.length > 3 && (
                <span style={{ background: '#e7eaff', color: '#3a4fcf', borderRadius: 8, padding: '2px 10px', fontSize: 13, fontWeight: 600 }}>+{p.competencias.length-3}</span>
              )}
            </div>
            <button
              style={{
                width: '100%',
                background: '#4f4fff',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '10px 0',
                fontWeight: 700,
                fontSize: 16,
                marginTop: 10,
                cursor: 'pointer',
                transition: 'background 0.15s',
              }}
              onClick={e => { e.stopPropagation(); setDetalhe(p); }}
            >Ver perfil completo</button>
          </div>
        ))}
      </div>
      {detalhe && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.25)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setDetalhe(null)}>
          <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 8px 32px #0002', padding: 0, minWidth: 700, maxWidth: 900, display: 'flex', position: 'relative', overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setDetalhe(null)} style={{ position: 'absolute', top: 18, right: 24, background: 'none', border: 'none', fontSize: 28, color: '#888', cursor: 'pointer', zIndex: 2 }}>&times;</button>
            {/* Lado esquerdo: avatar e infos principais */}
            <div style={{ background: 'linear-gradient(135deg,#f6f8ff 60%,#e7eaff 100%)', minWidth: 270, maxWidth: 320, padding: 36, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: '1.5px solid #e0e0e0' }}>
              <RoboLogo size={80} />
              <div style={{ fontSize: 26, fontWeight: 700, margin: '18px 0 2px 0', color: '#222', textAlign: 'center' }}>{detalhe.nome}</div>
              <div style={{ fontSize: 18, color: '#6a6a6a', fontWeight: 500, textAlign: 'center' }}>{detalhe.cargo || 'Profissional'}</div>
              <div style={{ fontSize: 15, color: '#888', marginBottom: 10 }}>{detalhe.pronomes}</div>
              <div style={{ margin: '8px 0 4px 0' }}>{getEstrelas(detalhe.avaliacao)} <span style={{ fontWeight: 600, color: '#444', fontSize: 15 }}>{(Math.round((detalhe.avaliacao/100)*50)/10).toFixed(1)}/5.0</span></div>
              <div style={{ marginTop: 18, width: '100%' }}>
                <div style={{ background: '#f7f7fa', borderRadius: 12, padding: 14, fontSize: 15, color: '#333', marginBottom: 8 }}>
                  <b>Nome de registro:</b> {detalhe.nome}
                  <br /><b>Nome social:</b> {detalhe.nomeSocial || detalhe.nome}
                  <br /><b>Pronomes:</b> {detalhe.pronomes}
                  <br />{detalhe.genero && (<><b>Gênero:</b> {detalhe.genero}<br /></>)}
                  {detalhe.deficiencia && (<><b>Deficiência:</b> {detalhe.deficiencia}<br /></>)}
                  {detalhe.idade && (<><b>Idade:</b> {detalhe.idade}<br /></>)}
                </div>
                {detalhe.linkedin && <a href={detalhe.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#4f8cff', fontWeight: 600, fontSize: 15, marginRight: 12 }}>LinkedIn</a>}
                {detalhe.github && <a href={detalhe.github} target="_blank" rel="noopener noreferrer" style={{ color: '#4f8cff', fontWeight: 600, fontSize: 15 }}>GitHub</a>}
              </div>
            </div>
            {/* Lado direito: habilidades e histórico */}
            <div style={{ flex: 1, padding: '36px 36px 36px 36px', overflowY: 'auto' }}>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>Habilidades:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24 }}>
                {detalhe.competencias && detalhe.competencias.map((c, idx) => (
                  <span key={idx} style={{ background: '#e7eaff', color: '#3a4fcf', borderRadius: 16, padding: '7px 18px', fontSize: 15, fontWeight: 600 }}>{c}</span>
                ))}
              </div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>Formações:</div>
              <ul style={{ marginBottom: 24, paddingLeft: 18 }}>
                {detalhe.formacoes && detalhe.formacoes.map((f, i) => (
                  <li key={i} style={{ fontSize: 15 }}>{f}</li>
                ))}
              </ul>
              {detalhe.avaliacoes && detalhe.avaliacoes.length > 0 && (
                <div>
                  <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>Avaliações:</div>
                  <ul style={{ paddingLeft: 18 }}>
                    {detalhe.avaliacoes.map((a, i) => (
                      <li key={i} style={{ marginBottom: 14, background: '#f7f7fa', borderRadius: 10, padding: 10 }}>
                        <span style={{ color: '#FFD700', fontSize: 16, marginRight: 6 }}>★</span>
                        <b>{(a.nota/20).toFixed(1)}/5.0</b> — <span style={{ color: '#444' }}>{a.autor}</span>
                        <br />
                        <span style={{ color: '#555', fontStyle: 'italic' }}>{a.comentario}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
