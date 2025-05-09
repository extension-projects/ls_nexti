import Logo from '../../assets/img/logo-ls.svg';
import { Link } from 'react-router-dom';

import Icon from '../../assets/img/icon-profile.svg';
import Search from '../../assets/img/search.svg';

import Swal from 'sweetalert2';

import './style.css';


export function Header () {

  const mostrarAlerta = () => {
      Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Essa funcionalidade está indisponível no momento. Estamos trabalhando para resolver isso",
    });
  };

  const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    setTimeout(() => {
      Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Essa funcionalidade está indisponível no momento. Estamos trabalhando para resolver isso",
      });
    }, 10); 
  }
};

  return (
    <header className='header'>
      <figure>
        <img src={Logo} alt="Logo LS" />
      </figure>

      <div className='inputs'>
        <select name="" id="" defaultValue="">
            <option value="" disabled hidden>Buscar por todas as áreas</option>
            <option value="area1">Área 1</option>
            <option value="area2">Área 2</option>
            <option value="area3">Área 3</option>
        </select>

        <div className="input-search">
            <input type="text" placeholder='Pesquise por...' onKeyDown={handleKeyDown}/>
            <img src={Search} alt="" />
        </div>

      </div>

        

        <div className="profile">
            <img src={Icon} alt="" />
            <p>Bem-vindo visitante, <br />  
                  <Link onClick={mostrarAlerta}>Faça o Login</Link> ou <Link onClick={mostrarAlerta}>Cadastre-se!</Link>
            </p>
        </div>
    </header>
  );
}