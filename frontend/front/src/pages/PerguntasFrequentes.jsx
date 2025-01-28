import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

function PerguntasFrequentes () {
    return (
        <>
            <Header />
            <Navigation />
            <TitlePage title={"Perguntas Frequentes"} />
            <Footer />
        </>
    )
}

export default PerguntasFrequentes;