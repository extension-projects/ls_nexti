import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

function SobreNos () {
    return (
        <>
            <Header />
            <Navigation />
            <TitlePage title={"Sobre nós"} />
            <Footer />
        </>
    )
}

export default SobreNos;