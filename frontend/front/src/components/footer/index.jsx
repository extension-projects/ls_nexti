import LogoFooter from '../../assets/img/logo-footer.svg'
import WhatsAppLogo from '../../assets/img/wpp-icon.svg'
import Instagram from '../../assets/img/ig.svg'
import Facebook from '../../assets/img/fb.svg'
import WhatsApp2 from '../../assets/img/wpp.svg'
import Linkedin from '../../assets/img/linkedin.svg'

import {colors} from '../../colors'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2';


import './style.css'

export function Footer () {

      const mostrarAlerta = () => {
          Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Essa funcionalidade está indisponível no momento. Estamos trabalhando para resolver isso",
        });
      };

    return (

        <footer  style={{backgroundColor: colors.brand.primary}}>
            <div className='footerContent'>
                <div className='info'>
                    <img src={LogoFooter} alt="Logo Footer" className='Logo'/>
                    
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

                    <div>
                        <h4>Ajuda</h4>
                        <ul>
                        <Link onClick={mostrarAlerta}>
                        <li>Fale conosco</li>
                        </Link>
                        <Link onClick={mostrarAlerta}>
                        <li>Status da plataforma</li>
                        </Link>
                        <Link onClick={mostrarAlerta}>
                        <li>Reportar erro</li>
                        </Link>
                        </ul>
                    </div>

                    <div>
                        <h4>Links úteis</h4>
                        <ul>
                        <Link onClick={mostrarAlerta}>
                        <li>Termos de uso</li>
                        </Link>
                        <Link to={'/estante-virtual'}>
                        <li>Estante virtual</li>
                        </Link>
                        <Link onClick={mostrarAlerta}>
                        <li>Termos de consentimento</li>
                        </Link>
                        </ul>
                    </div>

                    <div>
                        <h4>Contato</h4>
                        <ul>
                        <div className='contact'>
                        <img src={WhatsAppLogo} alt="WhatsApp Logo" />
                        <li>(88) 97433-7571</li>
                        </div>
                        </ul>
                    </div>

                </div>

            </div>

            <figure className='socialmedia'>
                        <img src={Instagram} alt="" />
                        <img src={WhatsApp2} alt="" />
                        <img src={Linkedin} alt="" />
                        <img src={Facebook} alt="" />
                    </figure>

            <hr />

            <p>© 2020-2024 Created by Editora Learn Skills</p>

        </footer>
    )
}
