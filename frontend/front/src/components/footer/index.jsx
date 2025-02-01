import LogoFooter from '../../assets/img/logo-footer.svg'
import WhatsAppLogo from '../../assets/img/wpp-icon.svg'
import Instagram from '../../assets/img/ig.svg'
import Facebook from '../../assets/img/fb.svg'
import WhatsApp2 from '../../assets/img/wpp.svg'
import Linkedin from '../../assets/img/linkedin.svg'

import {colors} from '../../styles/colors'

import './style.css'

export function Footer () {
    return (
        <footer  style={{backgroundColor: colors.brand.primary}}>
            <div className='info'>
                <img src={LogoFooter} alt="Logo Footer" />
                <p>Juazeiro do Norte - CE</p>
                <p>CEP: 63000-0001</p>
                <div className='contact'>
                    <img src={WhatsAppLogo} alt="WhatsApp Logo" />
                    <p>(88) 97433-7571</p>
                </div>
                <figure>
                    <img src={Instagram} alt="" />
                    <img src={WhatsApp2} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Facebook} alt="" />
                </figure>
                
            </div>

            <div className='navigations'>
                <div>
                    <h4>Navegação</h4>
                    <ul>
                        <li>Home</li>
                        <li>Institucional</li>
                        <li>Estante</li>
                        <li>Serviços</li>
                        <li>Chamadas Abertas</li>
                    </ul>
                </div>

                <div>
                    <h4>Navegação</h4>
                    <ul>
                        <li>Home</li>
                        <li>Institucional</li>
                        <li>Estante</li>
                        <li>Serviços</li>
                        <li>Chamadas Abertas</li>
                    </ul>
                </div>

                <div>
                    <h4>Navegação</h4>
                    <ul>
                        <li>Home</li>
                        <li>Institucional</li>
                        <li>Estante</li>
                        <li>Serviços</li>
                        <li>Chamadas Abertas</li>
                    </ul>
                </div>

                <div>
                    <h4>Navegação</h4>
                    <ul>
                        <li>Home</li>
                        <li>Institucional</li>
                        <li>Estante</li>
                        <li>Serviços</li>
                        <li>Chamadas Abertas</li>
                    </ul>
                </div>

            </div>

        </footer>
    )
}