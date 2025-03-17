import './styles.css'

export function Livro ({ capa, nome, className }) {
    return (
        <div className={`container-livro ${className || ''}`}>
            <img src={capa} alt="" />
            <p>{nome}</p>
            <a href="#">Ver Mais</a>
        </div>            
    );
}