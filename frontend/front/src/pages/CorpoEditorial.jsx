import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

function CorpoEditorial () {
    return (
        <>
            <Header />
            <Navigation />
            <TitlePage title={"Corpo Editorial"} />
            <Footer />
        </>
    )
}

export default CorpoEditorial;