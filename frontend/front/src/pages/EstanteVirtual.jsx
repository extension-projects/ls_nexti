import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Livro } from "../components/livro";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";
import '../styles/BibliotecaVirtual.css'

import ImgLivro1 from '../assets/img/livro1.svg'
import ImgLivro2 from '../assets/img/livro2.svg'
import ImgLivro3 from '../assets/img/livro3.svg'


function EstanteVirtual () {
    return (
        <>
            <Header />
            <Navigation />
            <TitlePage title={"Estante Virtual"} />

            <div className="content">
                <section className="container-biblioteca">
                    <div className="pesquisa">
                        <input type="text" />

                    </div>

                    <div className="bigPicture">
                        <div className="line">

                            <Livro className="pequeno" capa={ImgLivro1} nome={'The Light Beyond The Garden Wall'} livroId={1}/>

                            <Livro className="pequeno" capa={ImgLivro2} nome={'Soul'} livroId={2}/>

                            <Livro className="pequeno" capa={ImgLivro3} nome={'The Book of Art'} livroId={3}/>
                             
                        </div>

                    </div>

                </section>
            </div>

            <Footer />
        </>
    )
}

export default EstanteVirtual;