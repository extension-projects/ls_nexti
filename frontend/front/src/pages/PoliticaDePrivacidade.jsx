import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

function PoliticaDePrivacidade () {
    return (
        <>
            <Header />
            <Navigation />
            <TitlePage title={"Política de Privacidade"} />
            <Footer />
        </>
    )
}

export default PoliticaDePrivacidade;