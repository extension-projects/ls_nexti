import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

import '../styles/SobreNos.css'

import SobreNósIMG from '../assets/img/sobre-nos.svg'

function SobreNos () {
    return (
        <div className="container-sobrenos">
            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <Header />
            <Navigation />
            <TitlePage title={"Sobre nós"} />
            <section className="sobreNosContent">
                <div  className="textos">
                    <h1>Quem somos</h1>
                    <p>Somos a Learn Skills, uma editora acadêmica dedicada à excelência no desenvolvimento e na disseminação do conhecimento em diversas áreas do saber. Nossa missão é criar e disponibilizar materiais de alta qualidade que não apenas inspirem o aprendizado, mas também contribuam significativamente para o avanço do conhecimento em nossa sociedade.</p>
                    <p>Nos empenhamos em colaborar com autores renomados e respeitáveis instituições de ensino para garantir que nossos recursos educacionais atendam às mais altas expectativas. Oferecemos uma ampla gama de produtos, que vão desde livros impressos até eBooks, cobrindo uma variedade de disciplinas e temas relevantes. Com isso, buscamos facilitar o acesso ao conhecimento e fomentar um ambiente de aprendizado enriquecedor e acessível a todos.</p>
                </div>

                <figure>
                    <img src={SobreNósIMG} alt="Pessoas conversando numa mesa" />
                </figure>
            </section>
            <Footer />
        </div>
    )
}

export default SobreNos;