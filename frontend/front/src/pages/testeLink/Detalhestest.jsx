import { useParams } from "react-router-dom";

import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Navigation } from "../../components/navigation";
import { TitlePage } from "../../components/title-page";


const livros = [
    { id: 1, titulo: "The Light Beyond The Garden Wall", autor: "Fulano1" },
    { id: 2, titulo: "Soul", autor: "Fulano2" },
    { id: 3, titulo: "The Book of Art", autor: "Fulano" },
];

/*{ id: , titulo: , organizadores: [], DOI: , descricao: , capa: }*/

function Detalhestest() {
    const { id } = useParams();
    const livro = livros.find((liv) => liv.id === parseInt(id));

    if (!livro) {
        return <h2>Livro não encontrado!</h2>;
    }

    return (
        <>
            <Header />
            <Navigation />
            <TitlePage title={"Detalhes"} />

            <div>
                <h1>{livro.titulo}</h1>
                <p>Autor: {livro.autor}</p>
            </div>
             

            <Footer />
        </>
    );
}

export default Detalhestest;
