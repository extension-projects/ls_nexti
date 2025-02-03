import './styles.css'

export function Livro ({capa, nome}) {
    return (
        <div className='container-livro'>
            <img src={capa} alt="" />
            <p>{nome}</p>
            <button>Ver mais</button>
        </div>            
    )
}