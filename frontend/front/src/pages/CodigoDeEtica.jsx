import { Aviso } from "../components/aviso";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

import '../styles/CodigoDeEtica.css'

function CodigoDeEtica () {
    return (
        <>
            <Header />
            <Navigation />
            <TitlePage title={"Código de Ética"} />

            <section className="container-codigo">
                <div className="aviso">
                    <Aviso text='A Editora Learn Skills e seus autores estão comprometidos com os princípios
                    éticos fundamentais, visando promover a excelência, integridade e responsabilidade em todas as atividades editoriais.' />
                </div>
                <h2>Editora</h2>
                <p> Comprometemo-nos a conduzir todas as operações com integridade e transparência, mantendo altos padrões éticos em todas as interações. Buscamos manter os mais altos padrões de qualidade em todas as publicações, assegurando a precisão, originalidade e relevância de cada obra</p>
                <p>Assumimos a responsabilidade social e ambiental, buscando minimizar nosso impacto no meio ambiente e contribuir positivamente para as comunidades em que operamos. Respeitamos a confidencialidade das informações dos autores, assegurando a segurança de seus dados e tratando todos com respeito e dignidade. Evitamos conflitos de interesses e agimos de forma imparcial em todas as nossas decisões e atividades.</p>

                <h2>Autores</h2>
                <p>Comprometem-se a fornecer trabalhos originais e autênticos, garantindo que todo o conteúdo submetido seja de sua autoria e não viole os direitos autorais de terceiros. Respeitam os padrões éticos e legais na condução da pesquisa, garantindo a veracidade e integridade dos dados apresentados. Garantem a atribuição adequada de crédito a todas as fontes utilizadas e colaboradores envolvidos na criação da obra. Colaboram de forma construtiva com a editora, respondendo prontamente às solicitações e oferecendo feedback para melhorar o processo editorial.</p>

                <div className="aviso">
                    <Aviso text='Ao aderir a este Código de Ética, tanto a Editora Learn Skills quanto seus autores comprometem-se a promover e respeitar esses princípios em todas as suas interações e atividades editoriais.' />
                </div>

            </section>
            <Footer />
        </>
    )
}

export default CodigoDeEtica;