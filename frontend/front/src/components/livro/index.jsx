import './styles.css'
import { Link } from "react-router-dom";

const livros = [
    { id: 1, titulo: "The Light Beyond The Garden Wall", autor: "Fulano1" },
    { id: 2, titulo: "Soul", autor: "Fulano2" },
    { id: 3, titulo: "The Book of Art", autor: "Fulano3" },
];

export function Livro ({ capa, nome, className, livroId}) {

    const livro = livros.find((liv) => liv.id === livroId);

    if (!livro) {
        return <p>Livro não encontrado.</p>;
    }

    return (
        <div className={`container-livro ${className || ''}`}>
            <img src={capa} alt="" />
            <p>{nome}</p>
            <Link to={`/livro/${livro.id}`}>Saiba Mais</Link>
        </div>            
    );
}