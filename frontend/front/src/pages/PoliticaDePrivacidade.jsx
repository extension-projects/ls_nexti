import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";
import { Aviso } from "../components/aviso";

import '../styles/PoliticaDePrivacidade.css';

import ScrollToTop from "../features/ScrollTop";

function PoliticaDePrivacidade () {
    return (
        <>
            <ScrollToTop />
            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <TitlePage title="Política de Privacidade" />
            <section className="container-politica">
                <div className="aviso">
                    <Aviso text='A Editora Learn Skills valoriza e respeita a privacidade de seus usuários, autores e parceiros. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos as informações pessoais que você fornece quando utiliza nossos serviços ou visita nosso site.' />
                </div>

                <h1 className="title">Editora Learn Skills</h1>

                <section className="section">
                    <h2 className="subtitle">Coleta de Informações</h2>
                    <div className="content">
                        <p>
                            <strong>Informações fornecidas por você: </strong>
                            Coletamos informações pessoais que você nos fornece de forma voluntária ao criar uma conta, preencher formulários, submeter manuscritos, participar de eventos ou entrar em contato com nossa equipe.
                        </p>
                    </div>
                    <div className="content">
                        <p>
                            <strong>Informações coletadas automaticamente: </strong>
                            Ao acessar nosso site ou utilizar nossos serviços, podemos coletar dados técnicos automaticamente, como endereço IP, tipo de navegador, idioma, páginas acessadas, data e hora de acesso, além de informações sobre o dispositivo utilizado.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <h2 className="subtitle">Uso das Informações</h2>
                    <p>
                        As informações coletadas são utilizadas para oferecer, manter e aprimorar nossos serviços. Isso inclui o processamento de envios de obras, a comunicação com os usuários, a personalização de conteúdos, o suporte técnico, a realização de análises internas e o cumprimento de obrigações legais. Também podemos utilizá-las para envio de atualizações relevantes, desde que autorizado.
                    </p>
                </section>

                <section className="section">
                    <h2 className="subtitle">Compartilhamento de Informações</h2>
                    <p>
                        Não vendemos nem alugamos informações pessoais. Compartilhamos dados apenas com terceiros confiáveis quando necessário para operar a plataforma, como serviços de hospedagem, envio de e-mails ou processamento de pagamentos, sempre com contratos que garantem a segurança das informações.
                    </p>
                </section>

                <section className="section">
                    <h2 className="subtitle">Proteção de Informações</h2>
                    <p>
                        Adotamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, perda, uso indevido, alteração ou divulgação. Os dados são armazenados em servidores seguros com acesso restrito. Recomendamos que os usuários também tomem precauções, como o uso de senhas fortes.
                    </p>
                </section>

                <section className="section">
                    <h2 className="subtitle">Cookies e Tecnologias de Rastreamento</h2>
                    <p>
                        Utilizamos cookies e tecnologias semelhantes para melhorar o desempenho do site, entender o comportamento dos visitantes e personalizar a experiência do usuário. Você pode gerenciar suas preferências nas configurações do navegador, podendo aceitar, recusar ou ser notificado sobre cookies.
                    </p>
                </section>

                <section className="section">
                    <h2 className="subtitle">Seus Direitos</h2>
                    <p>
                        Você tem o direito de acessar, corrigir, atualizar ou excluir suas informações pessoais. Também pode solicitar uma cópia dos dados armazenados ou revogar consentimentos dados anteriormente. Para exercer esses direitos, entre em contato conosco pelos canais abaixo.
                    </p>
                </section>

                <section className="section">
                    <h2 className="subtitle">Alterações na Política</h2>
                    <p>
                        Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças legais, técnicas ou operacionais. Caso haja alterações relevantes, informaremos pelos canais adequados. Recomendamos a revisão regular deste documento.
                    </p>
                </section>

                <section className="section">
                    <h2 className="subtitle">Contato</h2>
                    <p>
                        Em caso de dúvidas ou solicitações relacionadas à privacidade, entre em contato conosco pelo e-mail: <strong>contato@learnskillseditora.com</strong> ou através da nossa página de suporte.
                    </p>
                </section>

                <div className="aviso">
                    <Aviso text='Ao utilizar nossos serviços ou fornecer informações pessoais, você concorda com os termos descritos nesta Política de Privacidade. Se tiver dúvidas ou preocupações sobre nossa Política de Privacidade, entre em contato conosco.' />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default PoliticaDePrivacidade;