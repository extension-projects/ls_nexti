import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

function EstanteVirtual () {
    return (
        <>
            <Header />
            <Navigation />
            <TitlePage title={"Estante Virtual"} />
            <Footer />
        </>
    )
}

export default EstanteVirtual;