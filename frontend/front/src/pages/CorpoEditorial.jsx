import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

import '../styles/CorpoEditorial.css'

function CorpoEditorial () {
    return (
        <>
            <Header />
            <Navigation />
            <TitlePage title={"Corpo Editorial"} />
            <section>
                    <div className="top">
                        <h2 className="title">Editores Chefes</h2>
                        <p className="chief-editor"><a href="#">FABRÍCIO CARNEIRO</a></p>
                        <p className="chief-editor"><a href="#">FABRÍCIO CARNEIRO</a></p>
                        <p className="chief-editor">FABRÍCIO CARNEIRO</p>
                        <h2 className="title">Editor de Comunicação</h2>
                        <p className="editor-name">EMMANUEL SOARES</p>
                        <p className="editor-role">Editor de comunicação e divulgação científica</p>
                    </div>

                    <div className="editorial-container">
                        <div className="editorial-section">
                        <h3 className="section-title">Comitê Editorial Executivo</h3>
                        <div className="editorial-list">
                            <p><strong>EMMANUEL SOARES</strong></p>
                            <p className="editor-role">Editor de comunicação e divulgação científica</p>
                            <p><strong>EMMANUEL SOARES</strong></p>
                            <p className="editor-role">Editor de comunicação e divulgação científica</p>
                            <p><strong>EMMANUEL SOARES</strong></p>
                            <p className="editor-role">Editor de comunicação e divulgação científica</p>
                            <p><strong>EMMANUEL SOARES</strong></p>
                            <p className="editor-role">Editor de comunicação e divulgação científica</p>
                            <p><strong>EMMANUEL SOARES</strong></p>
                            <p className="editor-role">Editor de comunicação e divulgação científica</p>
                            <p><strong>EMMANUEL SOARES</strong></p>
                            <p className="editor-role">Editor de comunicação e divulgação científica</p>
                            <p><strong>EMMANUEL SOARES</strong></p>
                            <p className="editor-role">Editor de comunicação e divulgação científica</p>
                        </div>
                        </div>

                        <div className="editorial-section">
                        <h3 className="section-title">Conselho de Política Editorial</h3>
                        <div className="editorial-list">
                            <p><strong>EMMANUEL SOARES</strong></p>
                            <p className="editor-role">Editor de comunicação e divulgação científica</p>
                            <p><strong>EMMANUEL SOARES</strong></p>
                            <p className="editor-role">Editor de comunicação e divulgação científica</p>
                            <p><strong>EMMANUEL SOARES</strong></p>
                            <p className="editor-role">Editor de comunicação e divulgação científica</p>
                            <p><strong>EMMANUEL SOARES</strong></p>
                            <p className="editor-role">Editor de comunicação e divulgação científica</p>
                            <p><strong>EMMANUEL SOARES</strong></p>
                            <p className="editor-role">Editor de comunicação e divulgação científica</p>
                            <p><strong>EMMANUEL SOARES</strong></p>
                            <p className="editor-role">Editor de comunicação e divulgação científica</p>
                            <p><strong>EMMANUEL SOARES</strong></p>
                            <p className="editor-role">Editor de comunicação e divulgação científica</p>
                        </div>
                        </div>
                    </div>
            </section>
            <Footer />
        </>
    )
}

export default CorpoEditorial;