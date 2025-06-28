import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const colaboradores = [
  {
    nome: 'Ana Silva',
    nomeSocial: 'Aninha',
    pronomes: 'ela/dela',
    area: 'Tecnologia',
    funcao: 'Desenvolvedora',
    desempenho: 92,
    historico: '3 anos como dev front-end, 1 ano como líder de squad.',
    observacoes: 'Necessidade de cadeira ergonômica. Protocolo de pausas a cada 1h.'
  },
  {
    nome: 'Carlos Souza',
    nomeSocial: '',
    pronomes: 'ele/dele',
    area: 'RH',
    funcao: 'Analista',
    desempenho: 78,
    historico: '5 anos em RH, foco em diversidade.',
    observacoes: 'Nenhuma.'
  },
  {
    nome: 'Maria Oliveira',
    nomeSocial: 'Maju',
    pronomes: 'ela/dela',
    area: 'Marketing',
    funcao: 'Designer',
    desempenho: 85,
    historico: '2 anos em design gráfico, 1 ano em social media.',
    observacoes: 'Deficiência auditiva. Utiliza aparelho.'
  },
  {
    nome: 'João Santos',
    nomeSocial: '',
    pronomes: 'ele/dele',
    area: 'Financeiro',
    funcao: 'Contador',
    desempenho: 88,
    historico: '10 anos em contabilidade, especialista em auditoria.',
    observacoes: 'Nenhuma.'
  },
];

const areas = colaboradores.reduce((acc, c) => {
  acc[c.area] = (acc[c.area] || 0) + 1;
  return acc;
}, {});

const funcoes = colaboradores.reduce((acc, c) => {
  acc[c.funcao] = (acc[c.funcao] || 0) + 1;
  return acc;
}, {});

const desempenhoData = {
  labels: colaboradores.map(c => c.nomeSocial || c.nome),
  datasets: [
    {
      label: 'Desempenho',
      data: colaboradores.map(c => c.desempenho),
      backgroundColor: 'rgba(79,140,255,0.7)',
      borderRadius: 8,
    },
  ],
};

const areaData = {
  labels: Object.keys(areas),
  datasets: [
    {
      label: 'Áreas',
      data: Object.values(areas),
      backgroundColor: [
        '#4f8cff', '#ffe066', '#ff7f50', '#6ee7b7',
      ],
    },
  ],
};

const funcaoData = {
  labels: Object.keys(funcoes),
  datasets: [
    {
      label: 'Funções',
      data: Object.values(funcoes),
      backgroundColor: [
        '#4f8cff', '#ffe066', '#ff7f50', '#6ee7b7',
      ],
    },
  ],
};

const chips = [
  ...Object.keys(areas).map(a => ({ tipo: 'area', valor: a })),
  ...Object.keys(funcoes).map(f => ({ tipo: 'funcao', valor: f })),
];

export default function DashboardVisual() {
  const [filtro, setFiltro] = useState({ area: null, funcao: null });
  const [detalhe, setDetalhe] = useState(null);

  const filtrados = colaboradores.filter(c =>
    (!filtro.area || c.area === filtro.area) &&
    (!filtro.funcao || c.funcao === filtro.funcao)
  );

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Painel Inteligente de Colaboradores</h1>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
        {chips.map((chip, i) => (
          <motion.button
            key={chip.tipo + chip.valor}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: (filtro[chip.tipo] === chip.valor) ? 'var(--primary)' : 'var(--secondary)',
              color: (filtro[chip.tipo] === chip.valor) ? '#fff' : 'var(--primary)',
              border: 'none',
              borderRadius: 20,
              padding: '8px 18px',
              margin: 2,
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 1px 4px rgba(79,140,255,0.10)',
              fontSize: 15,
            }}
            onClick={() => setFiltro(f => ({ ...f, [chip.tipo]: f[chip.tipo] === chip.valor ? null : chip.valor }))}
          >
            {chip.tipo === 'area' ? 'Área: ' : 'Função: '}{chip.valor}
          </motion.button>
        ))}
        {(filtro.area || filtro.funcao) && (
          <motion.button
            whileHover={{ scale: 1.08 }}
            style={{ background: '#eee', color: '#333', border: 'none', borderRadius: 20, padding: '8px 18px', margin: 2, fontWeight: 600, cursor: 'pointer' }}
            onClick={() => setFiltro({ area: null, funcao: null })}
          >
            Limpar filtros
          </motion.button>
        )}
      </div>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        {filtrados.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, boxShadow: '0 4px 24px rgba(79,140,255,0.15)' }}
            style={{
              background: 'var(--card)',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow)',
              padding: 24,
              minWidth: 240,
              maxWidth: 280,
              border: '1px solid var(--border)',
              marginBottom: 16,
              position: 'relative',
            }}
          >
            <h3 style={{ margin: 0 }}>{c.nomeSocial ? `${c.nomeSocial} (${c.nome})` : c.nome}</h3>
            <p style={{ color: '#888', margin: '8px 0 0 0' }}>{c.area} - {c.funcao}</p>
            <span style={{ fontSize: 13, color: '#4f8cff', fontWeight: 500 }}>{c.pronomes}</span>
            <motion.div initial={{ width: 0 }} animate={{ width: `${c.desempenho}%` }} transition={{ duration: 1 }} style={{ background: '#e0e6ed', borderRadius: 8, height: 10, margin: '16px 0' }}>
              <div style={{ background: 'var(--primary)', height: 10, borderRadius: 8, width: `${c.desempenho}%`, transition: 'width 1s' }} />
            </motion.div>
            <span style={{ fontWeight: 600, color: 'var(--primary)' }}>Desempenho: {c.desempenho}%</span>
            <motion.button
              whileHover={{ scale: 1.08 }}
              style={{ position: 'absolute', right: 16, bottom: 16, background: 'var(--accent)', color: '#222', border: 'none', borderRadius: 16, padding: '6px 16px', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}
              onClick={() => setDetalhe(c)}
            >
              Histórico
            </motion.button>
          </motion.div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center', marginTop: 40 }}>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} style={{ background: 'var(--card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', padding: 24, minWidth: 320 }}>
          <h4 style={{ textAlign: 'center' }}>Desempenho dos Colaboradores</h4>
          <Bar data={desempenhoData} options={{
            plugins: { legend: { display: false } },
            scales: { y: { min: 0, max: 100 } },
            animation: { duration: 1200 },
          }} />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} style={{ background: 'var(--card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', padding: 24, minWidth: 320 }}>
          <h4 style={{ textAlign: 'center' }}>Distribuição por Área</h4>
          <Pie data={areaData} options={{
            plugins: { legend: { position: 'bottom' } },
            animation: { duration: 1200 },
          }} />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} style={{ background: 'var(--card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', padding: 24, minWidth: 320 }}>
          <h4 style={{ textAlign: 'center' }}>Distribuição por Função</h4>
          <Pie data={funcaoData} options={{
            plugins: { legend: { position: 'bottom' } },
            animation: { duration: 1200 },
          }} />
        </motion.div>
      </div>
      <AnimatePresence>
        {detalhe && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.25)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => setDetalhe(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              style={{ background: 'var(--card)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', padding: 36, minWidth: 320, maxWidth: 400, position: 'relative' }}
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setDetalhe(null)} style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', fontSize: 22, color: '#888', cursor: 'pointer' }}>&times;</button>
              <h2 style={{ marginTop: 0 }}>{detalhe.nomeSocial ? `${detalhe.nomeSocial} (${detalhe.nome})` : detalhe.nome}</h2>
              <p><strong>Pronomes:</strong> {detalhe.pronomes}</p>
              <p><strong>Área:</strong> {detalhe.area}</p>
              <p><strong>Função:</strong> {detalhe.funcao}</p>
              <p><strong>Histórico:</strong> {detalhe.historico}</p>
              <p><strong>Observações:</strong> {detalhe.observacoes}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
