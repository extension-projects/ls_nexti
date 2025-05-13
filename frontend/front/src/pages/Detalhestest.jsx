import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import { Footer } from "../../src/components/footer/index";
import { Header } from "../../src/components/header/index";
import { Navigation } from "../../src/components/navigation/index";
import { TitlePage } from "../../src/components/title-page/index";


import ImgLivro1 from "../assets/img/capasLivros/algoritmos_dados.jpg"
import ImgLivro2 from "../assets/img/capasLivros/logicaProgramacao.png"
import ImgLivro3 from "../assets/img/capasLivros/Paradigmas_programacao.png"

import { Livro } from "../components/livro";

import { livros } from "../data/ListaLivros";

import "../styles/DetalhesLivro.css"

import ScrollToTop from "../features/ScrollTop";


/*{ id: , titulo: , organizadores: [], DOI: , descricao: , capa: }*/

function Detalhestest() {
    const { id } = useParams();
    const livro = livros.find((liv) => liv.id === parseInt(id));

    if (!livro) {
        return <h2>Livro não encontrado!</h2>;
    }

    return (
        <div className="container-DetalhesLivro">
            <ScrollToTop />
            <div className="topo">
                <Header />
                <Navigation />
            </div>
            <Header />
            <Navigation />
            <TitlePage title={"Estante Virtual"} />

            <div className="detalhesLivroContent">
                <div className="visaoGeral">
                    <figure>
                        <img src={livro.capa} alt="" />
                    </figure>

                    <div className="dados">
                        <h1>{livro.titulo}</h1>
                        <p>Autor: {livro.autor}</p>
                        <p>DOI: {livro.doi}</p>
                        <h2>Descrição</h2>
                        <p>{livro.descricao}</p>


                        
                        <Link to={`/ler-online/${livro.id}`} >
                            <button>Saiba Mais</button>
                        </Link>
                        

                    </div>

                </div>

                <hr />

                <section className="container-livros">
                    <h3 className="visite-title">VISITE NOSSA <span style={{ color: "#213E60" }}>ESTANTE VIRTUAL</span></h3>
                    <p className="visite-paragraph">Descubra uma seleção especial de livros e materiais gratuitos para impulsionar seus estudos em tecnologia e programação. Explore conteúdos feitos por especialistas e desenvolva seu aprendizado no seu ritmo.</p>
                    <div className="livros">
                        <Livro capa={ImgLivro1} nome={'Algoritmos e Estrutura de Dados 1'} livroId={1}/>
                        <Livro capa={ImgLivro2} nome={'Lógica de Programação para Iniciantes'} livroId={2}/>
                        <Livro capa={ImgLivro3} nome={'Paradigmas de programação: Uma introdução'} livroId={3}/>
                    </div>
    
                    <Link to={"/estante-virtual"}><button>Encontre outros títulos</button></Link>
                </section>

            </div>
             

            <Footer />
        </div>
    );
}

export default Detalhestest;