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
            <option value="romance">Romance</option>
            <option value="fantasia">Fantasia</option>
            <option value="ficcao-cientifica">Ficção científica</option>
            <option value="misterio-suspense">Mistério / Suspense</option>
            <option value="terror-horror">Terror / Horror</option>
            <option value="contos">Contos</option>
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