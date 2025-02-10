import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Livro } from "../components/livro";
import { Navigation } from "../components/navigation";

import '../styles/Home.css'

import ImgCorpoEditorial from '../assets/img/img-editorial.svg'

import ImgLivro1 from '../assets/img/livro1.svg'
import ImgLivro2 from '../assets/img/livro2.svg'
import ImgLivro3 from '../assets/img/livro3.svg'

function Home () {
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

            {/* <section className="container-recomendacoes">
                <h3>QUEM CONHECE RECOMENDA</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>


            </section> */}

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