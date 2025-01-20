import Books from '../../assets/img/books.png';

import './styles.css';

export function TitlePage ( { title } ) {
    return (
        <div className='title-page'>
            <figure>
                <img src={Books} alt="" />
            </figure>
            <h1>{title}</h1>
        </div>
    )
}