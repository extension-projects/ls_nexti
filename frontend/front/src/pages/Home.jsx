import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Livro } from "../components/livro";
import { Navigation } from "../components/navigation";
import { Recomendacao } from "../components/recomendacao";

import '../styles/Home.css'

import ImgCorpoEditorial from '../assets/img/img-editorial.svg'

import ImgLivro1 from '../assets/img/livro1.svg'
import ImgLivro2 from '../assets/img/livro2.svg'
import ImgLivro3 from '../assets/img/livro3.svg'

import ImgPerfil from '../assets/img/perfil-test.svg'
 
function Home () {

    const recomendacoes = [
        {
          nome: "Haruka",
          curso: "Analista de Sistemas",
          texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          foto: ImgPerfil
        },
        {
          nome: "Takashi",
          curso: "Engenharia de Software",
          texto: "Sempre admirei a dedicação da equipe. O aprendizado foi enriquecedor e a experiência prática fez toda a diferença.",
          foto: ImgPerfil
        },
        {
          nome: "Yuki",
          curso: "Ciência da Computação",
          texto: "O curso me ajudou a desenvolver habilidades essenciais para o mercado de trabalho. Recomendo para todos que querem crescer na área!",
          foto: ImgPerfil
        },
        {
          nome: "Souta",
          curso: "Desenvolvimento Web",
          texto: "A didática utilizada foi incrível! Aprendi muito sobre frameworks modernos e como aplicá-los em projetos reais.",
          foto: ImgPerfil
        },
        {
          nome: "Aoi",
          curso: "Banco de Dados",
          texto: "Um curso bem estruturado, com material de qualidade e professores que realmente entendem do assunto.",
          foto: ImgPerfil
        },
        {
          nome: "Ren",
          curso: "Segurança da Informação",
          texto: "Aprendi muito sobre cibersegurança e melhores práticas para proteger sistemas contra ataques.",
          foto: ImgPerfil
        }
      ];

    return (
        <>
            <Header />
            <Navigation />
            <section className="container-livros">
                <h3>VISITE NOSSA ESTANTE VIRTUAL</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <div className="">
                    <Livro capa={ImgLivro1} nome={'The Light Beyond The Garden Wall'}/>
                    <Livro capa={ImgLivro2} nome={'Soul'}/>
                    <Livro capa={ImgLivro3} nome={'The Book of Art'}/>
                </div>

                <button>Encontre outros títulos</button>
            </section>

            <section className="container-recomendacoes">
                <div className="header-recomendacoes">
                    <h3>QUEM CONHECE RECOMENDA</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>

                    <div className="cards-recomendacoes">
                        {recomendacoes.map((rec, index) => (
                        <Recomendacao
                            key={index}
                            nome={rec.nome}
                            curso={rec.curso}
                            texto={rec.texto}
                            foto={rec.foto}
                        />
                        ))}
                    </div>



            </section>

            <section className="container-editorial-section">
                <div>
                    <h3>Conheça nosso corpo editorial</h3>
                    <p>Conheça a equipe por trás das palavras! Nosso corpo editorial é a engrenagem que impulsiona a qualidade e a precisão em cada texto.</p>
                    <button>Saiba mais</button>
                </div>

                <img src={ImgCorpoEditorial} alt="" />
            </section>
            
            <Footer />
        </>
    )
}

export default Home;