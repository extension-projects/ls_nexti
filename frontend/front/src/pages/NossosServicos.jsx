import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

function NossosServicos () {
    return (
        <>
            <Header />
            <Navigation />
            <TitlePage title={"Conheça nossos serviços"} />
            <Footer />
        </>
    )
}

export default NossosServicos;