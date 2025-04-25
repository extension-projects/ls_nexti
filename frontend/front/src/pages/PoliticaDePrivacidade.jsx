import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";
import { Aviso } from "../components/aviso";

import '../styles/PoliticaDePrivacidade.css'

function PoliticaDePrivacidade () {
    return (
        <>
            <Header />
            <Navigation />
            <TitlePage title={"Política de Privacidade"} />
            <section className="container-politica">
                <div className="aviso">
                    <Aviso text='A Editora Learn Skills valoriza e respeita a privacidade de seus usuários, autores e parceiros. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos as informações pessoais que você fornece quando utiliza nossos serviços ou visita nosso site.' />
                </div>
                <h1 className="title">Editora</h1>

                <section className="section">
                    <h2 className="subtitle">Coleta de Informações:</h2>
                    <div className="content">
                    <p>
                        <strong>Informações fornecidas por você: </strong>
                        Podemos coletar informações pessoais que você nos fornece voluntariamente ao se
                        cadastrar em nosso site, enviar um manuscrito ou entrar em contato conosco.
                    </p>
                    </div>
                    <div className="content">
                    <p>
                        <strong>Informações coletadas automaticamente: </strong>
                        Podemos coletar determinadas informações automaticamente quando você utiliza
                        nossos serviços, incluindo seu endereço IP, tipo de navegador, páginas visitadas
                        e outras informações de análise.
                    </p>
                    </div>
                </section>

                <section className="section">
                    <h2 className="subtitle">Uso de Informações:</h2>
                    <p>
                    Utilizamos as informações coletadas para fornecer e melhorar nossos serviços,
                    responder às suas solicitações, processar transações, comunicar-nos com você e
                    personalizar sua experiência.
                    </p>
                </section>

                <section className="section">
                    <h2 className="subtitle">Compartilhamento de Informações:</h2>
                    <p>
                    Podemos compartilhar suas informações pessoais com terceiros apenas conforme
                    necessário para fornecer nossos serviços ou atender a requisitos legais.
                    </p>
                </section>

                <section className="section">
                    <h2 className="subtitle">Proteção de Informações:</h2>
                    <p>
                    Implementamos medidas de segurança adequadas para proteger as informações pessoais
                    contra acesso não autorizado, alteração, divulgação ou destruição.
                    </p>
                </section>

                <section className="section">
                    <h2 className="subtitle">Cookies:</h2>
                    <p>
                    Utilizamos cookies e tecnologias similares para melhorar a experiência do usuário e
                    analisar tendências de uso. Você pode configurar seu navegador para recusar todos
                    os cookies ou para indicar quando um cookie está sendo enviado.
                    </p>
                </section>
                <div className="aviso">
                    <Aviso text='Ao utilizar nossos serviços ou fornecer informações pessoais, você concorda com os termos descritos nesta Política de Privacidade. Se tiver dúvidas ou preocupações sobre nossa Política de Privacidade, entre em contato conosco.' />
                </div>
            </section>

            <Footer />
        </>
    )
}

export default PoliticaDePrivacidade;