import { Aviso } from "../components/aviso";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

import ScrollToTop from "../features/ScrollTop";

import '../styles/CodigoDeEtica.css'

function CodigoDeEtica () {
    return (
        <>
            <ScrollToTop/>
            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <Header />
            <Navigation />
            <TitlePage title={"Código de Ética"} />

            <section className="container-codigo">
                <div className="aviso">
                    <Aviso text='Na Learn Skills, acreditamos no poder transformador da leitura e no valor da palavra escrita como meio de expressão, diálogo e construção de conhecimento. Nosso Código de Ética orienta a conduta de todos os envolvidos em nossa plataforma — autores, colaboradores, leitores e equipe editorial — e garante um ambiente seguro, respeitoso e comprometido com a qualidade literária e ética.' />
                </div>

                <h2>Respeito à Diversidade e à Liberdade de Expressão</h2>
                <p>Valorizamos a pluralidade de ideias, culturas, estilos e vozes, compreendendo que a diversidade é uma fonte essencial de riqueza literária e social. Promovemos a liberdade de expressão como princípio fundamental, desde que exercida com responsabilidade e empatia. Obras que apresentem opiniões críticas ou reflexões desafiadoras são bem-vindas, desde que não promovam discursos de ódio, preconceito, violência ou discriminação de qualquer natureza. Buscamos criar um espaço onde todas as vozes possam ser ouvidas com respeito e dignidade, sem silenciamento ou exclusão.</p>

                <h2>Responsabilidade com o Conteúdo</h2>
                <p>Todo conteúdo submetido à nossa plataforma deve ser original e de autoria própria, ou então acompanhado das devidas autorizações legais para publicação. É estritamente proibido o plágio, bem como o uso indevido de textos, imagens ou ideias de terceiros sem crédito ou permissão. Obras que contenham pornografia explícita, apologia à violência, racismo, misoginia, LGBTfobia, capacitismo ou qualquer outra forma de intolerância serão imediatamente rejeitadas. Prezamos pela integridade editorial, pela honestidade intelectual e pela responsabilidade social de cada material disponibilizado.</p>

                <h2>Processo de Avaliação Ético e Transparente</h2>
                <p>As obras submetidas são avaliadas por colaboradores experientes, com base em critérios técnicos (clareza, coerência, originalidade) e éticos (respeito aos direitos humanos e às diretrizes editoriais). O processo é realizado de forma imparcial e sem favoritismo, respeitando o estilo individual de cada autor. Trabalhamos com empatia e cuidado, oferecendo feedback construtivo sempre que possível. Caso a obra não seja aprovada, o autor receberá uma justificativa clara e, quando apropriado, sugestões para reestruturação ou melhorias.</p>

                <h2>Compromisso com a Privacidade e a Segurança</h2>
                <p>Respeitamos profundamente a privacidade de nossos usuários. Todas as informações pessoais e arquivos enviados são armazenados com segurança e tratados com confidencialidade. Utilizamos práticas de proteção de dados alinhadas às legislações vigentes, como a LGPD, garantindo que nenhuma informação será compartilhada com terceiros sem autorização. O conteúdo submetido será publicado apenas com o consentimento explícito do autor, assegurando seu controle sobre a exposição de sua obra.</p>

                <h2>Conduta dos Usuários</h2>
                <p>Esperamos que todos os usuários mantenham uma conduta respeitosa, ética e colaborativa nas interações dentro da plataforma. Comentários ofensivos, abusivos ou que infrinjam este código serão moderados e poderão resultar em advertência, suspensão temporária ou exclusão da conta. Nosso ambiente virtual deve ser seguro para todos os participantes, estimulando o diálogo saudável, a crítica literária construtiva e a valorização mútua entre autores, leitores e avaliadores. A participação consciente fortalece nossa comunidade e amplia o impacto positivo da literatura.</p>

                <h2>Valorização da Comunidade Literária</h2>
                <p>Acreditamos que a literatura é construída de forma coletiva e que cada contribuição tem valor. Encorajamos a leitura crítica, o apoio entre escritores, o compartilhamento de experiências e o reconhecimento do trabalho alheio. Promovemos ações que visam destacar novos talentos, oferecer visibilidade a autores independentes e criar um ecossistema literário dinâmico, acolhedor e diverso. Nossa estante virtual é mais do que um espaço de exposição — é um lugar de encontro, aprendizado e celebração da escrita.</p>
                <br />


                <div className="aviso">
                    <Aviso text='Ao aderir a este Código de Ética, tanto a Editora Learn Skills quanto seus autores comprometem-se a promover e respeitar esses princípios em todas as suas interações e atividades editoriais.' />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default CodigoDeEtica;

/*
<h2>Editora</h2>
<p> Comprometemo-nos a conduzir todas as operações com integridade e transparência, mantendo altos padrões éticos em todas as interações. Buscamos manter os mais altos padrões de qualidade em todas as publicações, assegurando a precisão, originalidade e relevância de cada obra</p>
<p>Assumimos a responsabilidade social e ambiental, buscando minimizar nosso impacto no meio ambiente e contribuir positivamente para as comunidades em que operamos. Respeitamos a confidencialidade das informações dos autores, assegurando a segurança de seus dados e tratando todos com respeito e dignidade. Evitamos conflitos de interesses e agimos de forma imparcial em todas as nossas decisões e atividades.</p>

<h2>Autores</h2>
<p>Comprometem-se a fornecer trabalhos originais e autênticos, garantindo que todo o conteúdo submetido seja de sua autoria e não viole os direitos autorais de terceiros. Respeitam os padrões éticos e legais na condução da pesquisa, garantindo a veracidade e integridade dos dados apresentados. Garantem a atribuição adequada de crédito a todas as fontes utilizadas e colaboradores envolvidos na criação da obra. Colaboram de forma construtiva com a editora, respondendo prontamente às solicitações e oferecendo feedback para melhorar o processo editorial.</p>
*/