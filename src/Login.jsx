import React from 'react';
import { useState } from 'react';
import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const autenticarComFireBase = async (evento) => {
    evento.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      alert('Logado Com Sucesso!');
    } catch (err) {
      alert('Erro No Processo', err);
    }
  };
  return (
    <div>
      <form onSubmit={autenticarComFireBase}>
        <label for="Email">Email</label>
        <input
          id="email"
          type="e-mail"
          name="email"
          value={email}
          onChange={(evento) => {
            setEmail(evento.target.value);
          }}
        />
        <label for="senha">Senha</label>
        <input
          id="senha"
          type="password"
          name="senha"
          value={senha}
          onChange={(evento) => {
            setSenha(evento.target.value);
          }}
        />
        <button>Acessar</button>
      </form>
    </div>
  );
}
