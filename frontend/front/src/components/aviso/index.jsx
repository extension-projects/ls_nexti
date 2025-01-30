import AvisoIcon from '../../assets/img/info.svg'

import './styles.css'

export function Aviso({text}) {
    return (
        <div className="container-aviso">
            <img src={AvisoIcon} alt="" />
            <p>{text}</p>
        </div>
    )
}