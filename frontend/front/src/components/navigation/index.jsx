import './style.css'

import { Link } from 'react-router-dom';

export function Navigation () {
  return (
    <nav>
      <ul>
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/sobre-nos'}>
          <li>Institucional</li>
        </Link>
        <Link to={'/biblioteca-virtual'}>
          <li>Estante</li>
        </Link>
        <Link to={'/nossos-servicos'}>
          <li>Serviços</li>
        </Link>
        <Link to={'/corpo-editorial'}>
          <li>Corpo Editorial</li>
        </Link>
        <Link to={'/codigo-de-etica'}>
          <li>Código de ética</li>
        </Link>
        <Link to={'/politica-de-privacidade'}>
          <li>Politica de Privacidade</li>
        </Link>
      </ul>
    </nav>
  );
}

/*
Home🟩
Institucional🟩
Corpo Editorial 🟥
Nossos Serviços 🟩
Estante Virtual🟩
Codigo de Etica 🟥
Politica de Privacidade🟥
Perguntas Frequêntes🟥

Chamadas abertas 🟦 (Está no escopo geral do projeto, mas como na primeira versão do site não haverá essa aba, optamos por remove-la da navegation)
*/