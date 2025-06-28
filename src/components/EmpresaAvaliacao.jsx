import React, { useState } from "react";
import { FaStar, FaRegStar, FaInfoCircle, FaStar as FaStarFull, FaExclamationCircle } from "react-icons/fa";
import Header from "./Header";
import "./empresa-card.css";

const empresas = [
  {
    nome: 'Michelin',
    ramo: 'Indústria de Pneus',
    site: 'https://www.michelin.com.br',
    notas: [5, 4, 5, 4, 5, 4, 4, 5, 5, 4, 5, 3, 4, 5, 4, 5, 5, 4, 5, 4, 3, 2, 1],
    comentarios: [
      { funcionario: 'Ana Silva', nota: 5, comentario: 'Ótimo ambiente e respeito à diversidade.' },
      { funcionario: 'Carlos Souza', nota: 4, comentario: 'Boa empresa, mas pode melhorar benefícios.' },
      { funcionario: 'Maria Oliveira', nota: 5, comentario: 'Inclusiva e inovadora.' },
      { funcionario: 'João Santos', nota: 4, comentario: 'Gestão eficiente.' },
      { funcionario: 'Lia Prado', nota: 5, comentario: 'Excelente para pessoas LGBTQIA+.' },
    ],
    insights: [
      { tipo: 'info', titulo: 'Comunicação Interna', texto: '76% dos colaboradores sugerem melhorias na comunicação entre departamentos da Michelin.' },
      { tipo: 'star', titulo: 'Pontos Fortes', texto: 'Benefícios, estabilidade e compromisso com segurança são os aspectos mais elogiados da Michelin.' },
      { tipo: 'warning', titulo: 'Oportunidades de Melhoria', texto: 'Plano de carreira mais claro e processos de feedback mais frequentes são as principais demandas dos colaboradores da Michelin.' },
    ]
  },
  {
    nome: 'Natura',
    ramo: 'Cosméticos',
    site: 'https://www.natura.com.br',
    notas: [5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5],
    comentarios: [
      { funcionario: 'Ana Silva', nota: 5, comentario: 'Empresa muito humana.' },
      { funcionario: 'Carlos Souza', nota: 5, comentario: 'Valorização da diversidade.' },
      { funcionario: 'Maria Oliveira', nota: 4, comentario: 'Ambiente colaborativo.' },
      { funcionario: 'Lia Prado', nota: 5, comentario: 'Políticas inclusivas reais.' },
    ],
    insights: [
      { tipo: 'info', titulo: 'Comunicação', texto: 'Colaboradores elogiam a comunicação transparente e aberta.' },
      { tipo: 'star', titulo: 'Pontos Fortes', texto: 'Ambiente colaborativo e valorização da diversidade.' },
      { tipo: 'warning', titulo: 'Oportunidades de Melhoria', texto: 'Mais oportunidades de crescimento interno.' },
    ]
  },
  {
    nome: 'MAN Latin America',
    ramo: 'Montadora de Caminhões',
    site: 'https://www.vwco.com.br',
    notas: [5, 4, 4, 5, 4, 3, 4, 5, 4, 4, 5, 4, 3, 4, 5, 4, 4, 5, 4, 3],
    comentarios: [
      { funcionario: 'Paulo Lima', nota: 5, comentario: 'Ambiente industrial seguro e inclusivo.' },
      { funcionario: 'Fernanda Souza', nota: 4, comentario: 'Boas oportunidades de crescimento.' },
      { funcionario: 'Lucas Silva', nota: 4, comentario: 'Processos bem definidos.' },
      { funcionario: 'Juliana Alves', nota: 3, comentario: 'Pode melhorar a comunicação interna.' },
    ],
    insights: [
      { tipo: 'info', titulo: 'Segurança', texto: '95% dos colaboradores elogiam as práticas de segurança.' },
      { tipo: 'star', titulo: 'Pontos Fortes', texto: 'Ambiente seguro e oportunidades de carreira.' },
      { tipo: 'warning', titulo: 'Oportunidades de Melhoria', texto: 'Comunicação entre setores pode ser aprimorada.' },
    ]
  },
  {
    nome: 'Nissan',
    ramo: 'Montadora de Automóveis',
    site: 'https://www.nissan.com.br',
    notas: [5, 5, 4, 4, 5, 4, 5, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5],
    comentarios: [
      { funcionario: 'Rafael Costa', nota: 5, comentario: 'Empresa inovadora e com respeito à diversidade.' },
      { funcionario: 'Marina Dias', nota: 4, comentario: 'Ótimos benefícios e ambiente moderno.' },
      { funcionario: 'Tiago Ramos', nota: 5, comentario: 'Valorização do colaborador.' },
      { funcionario: 'Aline Souza', nota: 4, comentario: 'Processos bem organizados.' },
    ],
    insights: [
      { tipo: 'info', titulo: 'Inovação', texto: 'Colaboradores destacam o investimento em tecnologia e inovação.' },
      { tipo: 'star', titulo: 'Pontos Fortes', texto: 'Ambiente moderno e benefícios competitivos.' },
      { tipo: 'warning', titulo: 'Oportunidades de Melhoria', texto: 'Sugestão de mais programas de integração.' },
    ]
  },
];

function calcularMedia(notas) {
  if (!notas.length) return 0;
  return (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(1);
}

function calcularDistribuicao(notas) {
  const total = notas.length;
  const dist = [0, 0, 0, 0, 0];
  notas.forEach(n => { if (n >= 1 && n <= 5) dist[5 - n]++; });
  return dist.map(qtd => Math.round((qtd / total) * 100));
}

const estrelas = (nota) => {
  const full = Math.floor(nota);
  const half = nota % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return [
    ...Array(full).fill(<FaStarFull color="#ffe066" size={28} aria-label="estrela cheia" />),
    ...(half ? [<FaStarFull color="#ffe066" size={28} style={{ opacity: 0.5 }} aria-label="meia estrela" />] : []),
    ...Array(empty).fill(<FaRegStar color="#ffe066" size={28} aria-label="estrela vazia" />),
  ];
};

export default function EmpresaAvaliacao() {
  const [empresaIdx, setEmpresaIdx] = useState(0);
  const empresa = empresas[empresaIdx];
  const media = parseFloat(calcularMedia(empresa.notas));
  const dist = calcularDistribuicao(empresa.notas);
  const [showComentarios, setShowComentarios] = useState(false);

  return (
    <>
      <Header borderRadius={22} />
      <Header bgColor="transparent" borderRadius={22} />
      <div className="empresa-card" style={{ position: 'relative', maxWidth: 1200, margin: '32px auto 48px auto', borderRadius: 24, boxShadow: '0 4px 18px 0 rgba(0,0,0,0.08)', border: '1px solid #e0e6ed', background: document.body.classList.contains('theme-dark') ? 'rgba(40, 44, 52, 0.92)' : 'linear-gradient(120deg, #fff 70%, #6a8cff 100%)', color: document.body.classList.contains('theme-dark') ? '#fff' : '#18191c', fontWeight: 600, padding: 32, minHeight: 420, display: 'flex', flexDirection: 'row', gap: 28, alignItems: 'flex-start' }}>
        <div className="empresa-avaliacao-left" style={{flex: 2, color: '#1976d2', minWidth: 320, maxWidth: 700, position: 'relative', zIndex: 1}}>
          <h2 style={{ color: '#1976d2', fontWeight: 700, fontSize: 22, marginBottom: 12 }}>Resultados Gerais - {empresa.nome}</h2>
          <div className="empresa-avaliacao-nota">
            <span className="nota-num" style={{ color: document.body.classList.contains('theme-dark') ? '#ffe066' : '#222831', fontWeight: 800, fontSize: 28 }}>{media}</span>
            <span className="nota-estrelas" style={{ fontSize: 18 }}>{estrelas(media)}</span>
            <span className="nota-total" style={{ color: document.body.classList.contains('theme-dark') ? '#bdbdbd' : '#444', fontSize: 14 }}>({empresa.notas.length} avaliações)</span>
          </div>
          <div className="empresa-avaliacao-barras" style={{marginTop: 10}}>
            {[5,4,3,2,1].map((estrela, i) => (
              <div className="barra-item" key={estrela} style={{fontSize: 13}}>
                <span className="barra-label" style={{ color: '#1976d2' }}>{estrela} estrela{estrela > 1 ? 's' : ''}</span>
                <div className="barra-externa" style={{height: 10}}>
                  <div className="barra-interna" style={{ width: `${dist[5-estrela]}%`, height: 10 }}></div>
                </div>
                <span className="barra-percent" style={{ color: '#1976d2', fontWeight: 700 }}>{dist[5-estrela]}%</span>
              </div>
            ))}
          </div>
          <div style={{marginTop: 18, display: 'flex', gap: 12, flexWrap: 'wrap'}}>
            {empresas.map((e, idx) => (
              <button
                key={e.nome}
                className={`empresa-btn${idx === empresaIdx ? ' selecionada' : ''}`}
                onClick={() => { setEmpresaIdx(idx); setShowComentarios(false); }}
                aria-label={`Ver avaliação de ${e.nome}`}
                style={{
                  minWidth: 180,
                  width: 'auto',
                  height: 56,
                  fontSize: 20,
                  borderRadius: 16,
                  padding: '0 32px',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 8px 0 rgba(25, 118, 210, 0.10)',
                  background: idx === empresaIdx ? '#1976d2' : '#fff',
                  color: idx === empresaIdx ? '#fff' : '#1976d2',
                  border: idx === empresaIdx ? '2px solid #1976d2' : '2px solid #1976d2',
                  transition: 'all 0.2s',
                  marginBottom: 8
                }}
              >
                {e.nome}
              </button>
            ))}
          </div>
          <button
            className="ver-comentarios-btn"
            onClick={() => setShowComentarios(v => !v)}
            aria-expanded={showComentarios}
            style={{ width: 220, height: 44, fontSize: 16, borderRadius: 12, marginTop: 12 }}
          >
            {showComentarios ? 'Ocultar comentários' : 'Ver comentários e reviews'}
          </button>
          {showComentarios && (
            <div className="comentarios-lista">
              <h4 style={{color:'#ffe066', margin:'16px 0 8px'}}>Comentários e Reviews</h4>
              {empresa.comentarios.map((c, i) => (
                <div className="comentario-item" key={i}>
                  <span className="comentario-nome">{c.funcionario}</span>
                  <span className="comentario-estrelas">{estrelas(c.nota)}</span>
                  <span className="comentario-texto">{c.comentario}</span>
                </div>
              ))}
            </div>
          )}
          <a
            className="relatorio-btn"
            href={empresa.site}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              width: 260,
              minWidth: 180,
              minHeight: 48,
              fontSize: 16,
              borderRadius: 12,
              background: '#1976d2',
              color: '#fff',
              fontWeight: 700,
              marginTop: 24,
              textDecoration: 'none',
              boxShadow: '0 2px 8px 0 rgba(21,101,192,0.10)',
              transition: 'background 0.2s',
              border: 'none',
              cursor: 'pointer',
              outline: 'none',
              paddingLeft: 16,
              paddingRight: 16,
              alignSelf: 'flex-start',
            }}
          >
            <img src="/robo-logo.svg" alt="Relatório" style={{width: 28, height: 28, marginRight: 6, flexShrink: 0, zIndex: 2}} />
            <span style={{
              position: 'absolute',
              left: 0,
              right: 0,
              margin: 'auto',
              textAlign: 'center',
              width: '100%',
              display: 'block',
              whiteSpace: 'normal',
              wordBreak: 'break-word',
              pointerEvents: 'none',
              zIndex: 1
            }}>
              Ver relatório completo da {empresa.nome}
            </span>
          </a>
        </div>
        <div style={{
          flex: 1,
          minWidth: 180,
          marginLeft: 32,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          position: 'relative',
          top: 0,
          right: 0,
          zIndex: 2,
          width: 200,
          maxWidth: '18vw',
          background: 'rgba(255,255,255,0.97)',
          borderRadius: 14,
          boxShadow: '0 2px 8px 0 rgba(21,101,192,0.08)',
          padding: '18px 12px 12px 12px',
        }}>
          <h3 style={{color: '#1976d2'}}>Principais Insights</h3>
          {empresa.insights.slice(0,2).map((insight, idx) => (
            <div
              key={idx}
              className={`insight-card ${insight.tipo}`}
              style={{
                background: '#1976d2',
                color: '#fff',
                borderRadius: 16,
                padding: '18px 18px 14px 18px',
                marginBottom: 0,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                boxShadow: '0 2px 12px 0 rgba(25, 118, 210, 0.10)',
                minHeight: 80
              }}
            >
              {insight.tipo === 'info' && <FaInfoCircle size={22} color="#fff" style={{marginTop: 2}} />}
              {insight.tipo === 'star' && <FaStarFull size={22} color="#fff" style={{marginTop: 2}} />}
              {insight.tipo === 'warning' && <FaExclamationCircle size={22} color="#fff" style={{marginTop: 2}} />}
              <div>
                <strong style={{color:'#fff'}}>{insight.titulo}</strong>
                <p style={{color:'#fff', margin: 0}}>{insight.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
