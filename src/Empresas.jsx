import React from 'react';
import EmpresaAvaliacao from './components/EmpresaAvaliacao';
import Header from './components/Header';

export default function Empresas() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', padding: '32px 0' }}>
      <Header bgColor="transparent" />
      <EmpresaAvaliacao />
    </div>
  );
}
