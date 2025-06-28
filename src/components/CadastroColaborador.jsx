import React, { useState } from 'react';

const initialState = {
  nome: '',
  nomeSocial: '',
  pronomes: '',
  area: '',
  funcao: '',
  historico: '',
  observacoes: '',
};

export default function CadastroColaborador({ onSubmit }) {
  const [form, setForm] = useState(initialState);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Colaborador</h2>
      <label>
        Nome completo
        <input name="nome" value={form.nome} onChange={handleChange} required />
      </label>
      <label>
        Nome social
        <input name="nomeSocial" value={form.nomeSocial} onChange={handleChange} />
      </label>
      <label>
        Pronomes (ex: ele/dele, ela/dela)
        <input name="pronomes" value={form.pronomes} onChange={handleChange} />
      </label>
      <label>
        Área de atuação
        <input name="area" value={form.area} onChange={handleChange} required />
      </label>
      <label>
        Função
        <input name="funcao" value={form.funcao} onChange={handleChange} required />
      </label>
      <label>
        Histórico profissional (resumo)
        <textarea name="historico" value={form.historico} onChange={handleChange} />
      </label>
      <label>
        Observações (necessidades especiais, deficiências, condições clínicas, orientações, protocolos)
        <textarea name="observacoes" value={form.observacoes} onChange={handleChange} />
      </label>
      <button type="submit">Salvar colaborador</button>
    </form>
  );
}
