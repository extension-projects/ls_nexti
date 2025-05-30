import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

import '../styles/NossosServicos.css'

import ScrollToTop from "../features/ScrollTop";

function NossosServicos () {
    return (
        <>
            <ScrollToTop/>

            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <Header />
            <Navigation />
            <TitlePage title={"Conheça nossos serviços"} />

            <section className="container-servicos">

                <h1 className="title">Serviços de Publicação da Editora Learnskills</h1>
                <p >
                    Na Editora Learnskills, nosso compromisso é oferecer um suporte completo aos autores, desde a concepção até a distribuição de suas obras. Compreendemos que cada projeto é único, e por isso, disponibilizamos uma variedade de formatos e serviços para atender às suas necessidades e objetivos.
                </p>

                <ul className="ulExterno">
                    <li><strong>E-books (Acesso Aberto e Comercializados):</strong></li>
                    <ul className="ulInterno">
                        <li>
                            E-books de Acesso Aberto: Alinhados à filosofia da ciência aberta, disponibilizamos e-books gratuitamente para download em nosso site. Essa modalidade maximiza a visibilidade e o impacto de sua pesquisa, garantindo que o conhecimento alcance o maior número de leitores sem barreiras.
                        </li>
                        <br />
                        <li>
                            E-books Comercializados: Para autores que buscam retorno financeiro e uma distribuição ampliada, oferecemos a publicação de e-books para venda em diversas plataformas online. Cuidamos de toda a gestão de direitos e distribuição, permitindo que sua obra monetizada alcance um público global.
                        </li>
                        <br />
                    </ul>
                    <li><strong>Livros Impressos (Físicos):</strong></li>
                    <ul className="ulInterno">
                        <li>
                            Impressão Sob Demanda (Print on Demand - POD): A Learnskills oferece a opção de publicação de livros físicos através do inovador sistema de impressão sob demanda. . Essa modalidade é ideal para autores que desejam a versão física de suas obras sem os riscos de um grande estoque. Seus livros estarão disponíveis para compra em nosso site e em plataformas de parceiros, sendo impressos e enviados diretamente ao leitor após a confirmação da compra.
                        </li>
                        <br />
                    </ul>
                    <li><strong>Serviços Editoriais Complementares:</strong>
                         Para garantir a excelência e o profissionalismo de cada publicação, a Learnskills oferece, opcionalmente, uma série de serviços editoriais que podem ser contratados pelos autores para aprimorar ainda mais seus materiais:
                    </li>
                    <ul className="ulInterno">
                        <li>
                            Revisão Textual (Ortografia e Gramática): Garantimos que sua obra esteja impecável, livre de erros gramaticais e ortográficos, com total fluidez de leitura
                        </li>
                        <br />
                        <li>
                            Copidesque e Preparação de Texto: Para um aprimoramento mais profundo do conteúdo, coerência e estilo, nossa equipe de copidesque refina o texto, tornando-o mais claro, conciso e impactante.
                        </li>
                        <br />
                        <li>
                            Diagramação e Projeto Gráfico: Criamos layouts profissionais e atraentes para o miolo de sua obra, assegurando uma experiência de leitura agradável tanto em formato digital quanto impresso.
                        </li>
                        <br />
                        <li>
                            Design de Capa Personalizado: Uma capa impactante é essencial para o sucesso de uma obra. Nossos designers desenvolvem capas exclusivas que refletem a essência do seu material e atraem o público-alvo.
                        </li>
                        <br />
                        <li>
                            Registro de ISBN e Ficha Catalográfica: Realizamos o registro internacional da sua obra (ISBN) com ou sem código de barras e a elaboração da ficha catalográfica, itens essenciais para a identificação e catalogação do seu livro em bibliotecas e livrarias.
                        </li>
                        <br />
                        <li>
                            DOI (Digital Object Identifier) para Capítulos/Artigos: Para obras que contenham capítulos ou artigos científicos, oferecemos o registro de DOI individual, aumentando a rastreabilidade e a visibilidade da pesquisa.
                        </li>
                        <br />
                    </ul>
                    <p>
                        Normalização de Referências (ABNT, APA, Vancouver, etc.): Adaptamos as referências e citações da sua obra às normas técnicas exigidas (ABNT, APA, Vancouver, entre outras), garantindo a padronização e o rigor acadêmico.
                    </p>
                </ul>

            </section>

            <Footer />
        </>
    )
}

export default NossosServicos;