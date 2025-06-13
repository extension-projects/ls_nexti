import LogoFooter from '../../assets/img/logo-footer.svg'
import Instagram from '../../assets/img/ig.svg'
import Facebook from '../../assets/img/fb.svg'
import WhatsApp2 from '../../assets/img/wpp.svg'
import Linkedin from '../../assets/img/linkedin.svg'

import { colors } from '../../colors'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2'

import './style.css'

export function Footer() {

  const reportarErro = async () => {
    // Pergunta o nome
    const { value: nome } = await Swal.fire({
      title: 'Qual seu nome?',
      input: 'text',
      inputPlaceholder: 'Digite seu nome',
      showCancelButton: true,
      confirmButtonText: 'Próximo',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return 'Por favor, informe seu nome!';
        }
      }
    });

    if (!nome) return; // se cancelar, sai

    // Pergunta a descrição do bug
    const { value: descricao } = await Swal.fire({
      title: 'Descreva o problema encontrado:',
      input: 'textarea',
      inputPlaceholder: 'Digite aqui...',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return 'Por favor, descreva o problema!';
        }
      }
    });

    if (!descricao) return;

    // Loading enquanto envia
    let timerInterval;
    Swal.fire({
      title: 'Enviando...',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
    });

    try {
      const response = await fetch("http://localhost:5000/reportar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, descricao })
      });

      Swal.close();

      if (response.ok) {
        Swal.fire(" Enviado!", "Bug reportado com sucesso.", "success");
      } else {
        Swal.fire(" Erro", "Não foi possível enviar o bug.", "error");
      }
    } catch (err) {
      Swal.close();
      Swal.fire(" Erro", "Erro de conexão com o servidor.", "error");
    }
  }

  return (
    <footer style={{ backgroundColor: colors.brand.primary }}>
      <div className='footerContent'>
        <div className='info'>
          <img src={LogoFooter} alt="Logo Footer" className='Logo' />
        </div>

        <div className='navigations'>
          <div>
            <h4>Navegação</h4>
            <ul>
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
          </div>

          <div className='esquerda'>
            <h4>Ajuda</h4>
            <ul>
              <Link onClick={() => Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Essa funcionalidade está indisponível no momento. Estamos trabalhando para resolver isso",
              })}>
                <li>Fale conosco</li>
              </Link>
              <Link onClick={() => Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Essa funcionalidade está indisponível no momento. Estamos trabalhando para resolver isso",
              })}>
                <li>Status da plataforma</li>
              </Link>

              <li
                onClick={reportarErro}
                style={{ cursor: 'pointer', listStyleType: 'none' }}
              >
                Reportar erro
              </li>

            </ul>
          </div>

          <div>
            <h4>Links úteis</h4>
            <ul>
              <Link onClick={() => Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Essa funcionalidade está indisponível no momento. Estamos trabalhando para resolver isso",
              })}>
                <li>Termos de uso</li>
              </Link>
              <Link to={'/estante-virtual'}>
                <li>Estante virtual</li>
              </Link>
              <Link onClick={() => Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Essa funcionalidade está indisponível no momento. Estamos trabalhando para resolver isso",
              })}>
                <li>Termos de consentimento</li>
              </Link>
            </ul>
          </div>

          <div className='esquerda'>
            <h4>Contato</h4>
            <ul>
                <li>(88) 97433-7571</li>
                <li>
                  <figure className='socialmedia'>
                    <img src={Instagram} alt="" />
                    <img src={WhatsApp2} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Facebook} alt="" />
                  </figure>
                </li>
            </ul>
          </div>

        </div>

      </div>



      <hr />

      <p>© 2020-{new Date().getFullYear()} Editora Learn Skills Created by NExTI</p>

    </footer>
  )
}