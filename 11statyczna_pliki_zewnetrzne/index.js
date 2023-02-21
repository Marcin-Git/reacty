// import Header from "./Header"

// ###############################################################################################
// 
// import wywala coś i strona się nie wyświetla, nie mogę rozbić tego wszystkiego na pliki       #
// 
// ###############################################################################################

function Header(){
    return (
        <div>
            <header>
                <nav className="nav-element">
                    <img src="./logo.png" className="nav-logo"/>
                    <ul className="nav-item">
                        <li>Praktyka</li>
                        <li>O nas</li>
                        <li>Zadzwoń</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

// komponent Footer
function Footer(){
    return (
        <div>
            <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
        </div>
    )
}

// komponent główna część strony
function Glowna() {
    return (
        <div>
            <h1>Kilka informacji o REACT</h1>
            <ul>
                <li>Pierwszy fakt</li>
                <li>Drugi fakt</li>
                <li>Trzeci fakt</li>
                <li>Czwarty fakt</li>
                <li>Piąty fakt</li>
            </ul>
        </div>
    )
}

// komponent łączący wszystkie komponenty w jeden komponent przekazany do renderowania
function Stronica() {
    return (
        <div>
            <Header />
            <Glowna />
            <Footer />
        </div>
    )
}



// stworzenie obiektu który będzie wyświetlany w id root
const root = ReactDOM.createRoot(document.getElementById("root"));

// wyrenderowanie strony zgodnie z obiektem root w miejscu id root
root.render(<Stronica />);