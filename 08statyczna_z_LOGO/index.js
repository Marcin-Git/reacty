// wygląd strony w zwykłej zmiennej o nazwi strona
const strona = (
    <div>
        <img src="./logo.png"></img>
        <h1>Kilka informacji o REACT</h1>
        <ol>
            <li>Pierwszy fakt</li>
            <li>Drugi fakt</li>
            <li>Trzeci fakt</li>
            <li>Czwarty fakt</li>
            <li>Piąty fakt</li>
        </ol>
    </div>
)

// stworzenie obiektu który będzie wyświetlany w id root
const root = ReactDOM.createRoot(document.getElementById("root"));

// wyrenderowanie strony zgodnie z obiektem root w miejscu id root
root.render(strona);

// wygląd strony w zwykłej funkcji o nazwi strona
function Stronica() {
    return (

        <div>
        <img src="./logo.png"></img>
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

// stworzenie obiektu który będzie wyświetlany w id rootek
const rootek = ReactDOM.createRoot(document.getElementById("rootek"));

// wyrenderowanie strony zgodnie z obiektem rootek w miejscu id rootek
rootek.render(Stronica());

// stworzenie obiektu który będzie wyświetlany w id rooton
const rooton = ReactDOM.createRoot(document.getElementById("rooton"));

// wyrenderowanie strony zgodnie z obiektem rooton w miejscu id rooton
rooton.render(<Stronica />);