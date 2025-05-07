import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

import '../styles/NossosServicos.css'

function NossosServicos () {
    return (
        <>
            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <Header />
            <Navigation />
            <TitlePage title={"Conheça nossos serviços"} />

            <section className="container-servicos">
                <h1 className="title">Livros Eletrônicos (eBooks)</h1>
                <p className="intro">
                    Na Editora Learn Skills, oferecemos uma plataforma aberta para a publicação de livros eletrônicos (eBooks), 
                    fornecendo uma oportunidade para autores compartilharem seus conhecimentos com uma audiência global. Nossa 
                    modalidade de publicação de eBooks é projetada para maximizar a acessibilidade e o alcance de suas obras.
                </p>

                <h2 className="subtitle">2.1 eBooks de Acesso Aberto</h2>
                <p className="text">
                    Autores têm a opção de publicar seus eBooks em acesso aberto, onde o conteúdo é disponibilizado gratuitamente para 
                    leitura online. Neste modelo, o autor se assume a taxa de processamento de manutenção para publicação. O autor também 
                    tem a opção de adquirir edições impressas (mínimo de exemplares) para distribuição entre seus colaboradores.
                </p>

                <h2 className="subtitle">2.2 eBooks Comercializados</h2>
                <p className="text">
                    Oferecemos a oportunidade para autores publicarem eBooks comerciais, onde o autor financia a produção do eBook que 
                    será disponibilizado para compra em nossa livraria digital. Esse formato permite que autores alcancem um audiência 
                    mais ampla e também possam ter receita sobre suas obras.
                </p>

                <h3 className="subsection">2.2.1 Projeto Gráfico do eBook</h3>
                <ul className="list">
                    <li>Formato padrão que amplia o acesso a maior diversidade de dispositivos</li>
                    <li>Layout responsivo para garantir uma experiência de leitura otimizada em diferentes dispositivos (eReader, tablets, smartphones)</li>
                    <li>Possibilidade de incluir elementos gráficos que enriqueçam o layout interno, maximizando o apelo visual e a usabilidade do conteúdo</li>
                </ul>

                <h2 className="subtitle">2.3 Processo Editorial</h2>
                <p className="text">
                    Na Editora Learn Skills, nos comprometemos a oferecer um processo editorial transparente e de alta qualidade para 
                    todos os eBooks publicados. 
                </p>

                <ul className="list">
                    <li>Atribuição de ISBN (International Standard Book Number) para identificação oficial do eBook.</li>
                    <li>Revisão ortográfica e gramatical para garantir a qualidade do conteúdo.</li>
                    <li>Criação de capa personalizada, considerando a identidade visual do eBook.</li>
                    <li>Conversão do eBook para formatos compatíveis com diversos dispositivos, garantindo identificação e compatibilidade.</li>
                    <li>Distribuição digital através da nossa plataforma e parceiros de mercado.</li>
                    <li>Opção de impressão sob demanda para versões físicas, facilitando a reprodução e revenda do conteúdo de forma eficaz.</li>
                </ul>

                <p className="text">
                    Envie seu eBook para avaliação através de <a href="#" className="link">[Endereço de e-mail aqui]</a> ou consulte nosso 
                    calendário de submissões e títulos com chamadas abertas no site.
                </p>

            </section>

            <Footer />
        </>
    )
}

export default NossosServicos;