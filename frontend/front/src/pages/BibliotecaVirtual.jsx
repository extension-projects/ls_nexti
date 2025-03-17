import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Livro } from "../components/livro";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";
import '../styles/BibliotecaVirtual.css'

import ImgLivro1 from '../assets/img/livro1.svg'


function BibliotecaVirtual () {
    return (
        <>
            <Header />
            <Navigation />
            <TitlePage title={"Estante Virtual"} />

            <div className="content">
                <section className="container-biblioteca">
                    <div className="bigPicture">
                        <div className="line">
                            <Livro className="pequeno" capa={ImgLivro1} nome={'The Light Beyond The Garden Wall'}/>
                        </div>

                    </div>

                </section>
            </div>

            <Footer />
        </>
    )
}

export default BibliotecaVirtual;