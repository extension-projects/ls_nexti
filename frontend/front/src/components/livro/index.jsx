import './styles.css'
import { Link } from "react-router-dom";

import { livros } from "../../data/ListaLivros";

export function Livro ({ capa, nome, className, livroId}) {

    const livro = livros.find((liv) => liv.id === livroId);

    if (!livro) {
        return <p>Livro não encontrado.</p>;
    }

    return (
        <div className={`container-livro ${className || ''}`}>
            <img src={capa} alt="" />
            <p>{nome}</p>
            <Link to={`/livro/${livro.id}`} className='ancoragem'>Saiba Mais</Link>
        </div>            
    );
}

