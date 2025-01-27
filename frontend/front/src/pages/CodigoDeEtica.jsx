import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

function CodigoDeEtica () {
    return (
        <>
            <Header />
            <Navigation />
            <TitlePage title={"Código de Ética"} />
            <Footer />
        </>
    )
}

export default CodigoDeEtica;