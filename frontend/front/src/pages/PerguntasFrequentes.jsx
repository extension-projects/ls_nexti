import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

import '../styles/PerguntasFrequentes.css'

import IMGFrequentes1 from '../assets/img/img-perguntas.svg'
import IMGFrequentes2 from '../assets/img/img-perguntas2.svg'

function PerguntasFrequentes () {
    return (
        <div>
            <Header />
            <Navigation />
            <TitlePage title={"Perguntas Frequentes"} />
            <section className="perguntasContent">
                <div>
                    <select name="" id="">
                        <option value="asdsad">Como publicar nessa editora?</option>
                        <option value="asdsad">Como publicar nessa editora?</option>
                    
                        
                    </select>
                    <select name="" id="">
                        <option value="asdsad">Como publicar nessa editora?</option>
                        <option value="asdsad">Como publicar nessa editora?</option>
                    
                    </select>
                    <select name="" id="">
                        <option value="asdsad">Como publicar nessa editora?</option>
                        <option value="asdsad">Como publicar nessa editora?</option>
                    
                    </select>
                    <select name="" id="">
                        <option value="asdsad">Como publicar nessa editora?</option>
                        <option value="asdsad">Como publicar nessa editora?</option>
                    
                    </select>
                </div>
                
                <img src={IMGFrequentes1} alt="" />
            </section>
            
            <section className="perguntasContent">
                <img src={IMGFrequentes2} alt="" />
                <div>
                    <select name="" id="">
                        <option value="asdsad">Como publicar nessa editora?</option>
                        <option value="asdsad">Como publicar nessa editora?</option>
                    
                        
                    </select>
                    <select name="" id="">
                        <option value="asdsad">Como publicar nessa editora?</option>
                        <option value="asdsad">Como publicar nessa editora?</option>
                    
                    </select>
                    <select name="" id="">
                        <option value="asdsad">Como publicar nessa editora?</option>
                        <option value="asdsad">Como publicar nessa editora?</option>
                    
                    </select>
                    <select name="" id="">
                        <option value="asdsad">Como publicar nessa editora?</option>
                        <option value="asdsad">Como publicar nessa editora?</option>
                    
                    </select>
                </div>
                
                
            </section>
            <Footer />
        </div>
    )
}

export default PerguntasFrequentes;