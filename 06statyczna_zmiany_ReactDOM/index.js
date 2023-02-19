// wyświetlenie lini 
// Stare
ReactDOM.render(<h1>To jest JSX</h1>, document.getElementById("root"));
// Nowe
ReactDOM.createRoot(document.getElementById("root")).render(<h1>To jest JSX w REACT18</h1>);

// -------------------------------------------------------------------------------------------------------------

// wyświetlenie lini w czystym JS
const h1 = document.createElement("h1");
h1.textContent = "Witaj świecie wielki";
h1.className = "header";

document.getElementById("rootek").append(h1);
console.log(h1);

// -------------------------------------------------------------------------------------------------------------

// wyświetlenie linie w JSX czyli REACT?
const element = <h1 className="headery">Nowa odsłona JSXa</h1>;
console.log(element);

// stare
ReactDOM.render(element, document.getElementById("rooton"));
// nowe
ReactDOM.createRoot(document.getElementById("rooton")).render(element);

// -------------------------------------------------------------------------------------------------------------

// innde podejście do wyświetlania kilku elementów w JSX
// stare
ReactDOM.render(
    <div>
        <h1 className="glowa">To jest głowa do wyświetlenia w JSX</h1>
        <p>To jest paragraf po głowie do wyświetlenia w JSX</p>
    </div>,
    document.getElementById("glowy")

);
// nowe
ReactDOM.createRoot(document.getElementById("glowy"))
    .render(
        <div>
        <h1 className="glowa">To jest głowa do wyświetlenia w JSXa</h1>
        <p>To jest paragraf po głowie do wyświetlenia w JSXa</p>
        </div>
    )
// --------------------------------------------------------------------------------------------------------------

// wyświetlanie inne z użyciem zmiennej i kilka elementów w JSX
const strona = (
    <div>
        <h1 className="glowa">To jest głowa do wyświetlenia w JSX jako zmienna "STRONAa"</h1>
        <p>To jest paragraf po głowie do wyświetlenia w JSX jako zmienna "STRONA"a</p>        
    </div>
);
console.log(strona);

// wyświetlenie strony jako paramentru strona w nim zawartego
// stare
ReactDOM.render(
    strona, 
    document.getElementById("glowacki")
);
// nowe
ReactDOM.createRoot(document.getElementById("glowacki"))
    .render(strona);
// ----------------------------------------------------------------------------------------------------------

// wykorzystanie JSX do stworzenia paska nawigacji
const nawigacja = (
    <nav>
        <h1>Moja ładna stronka z JSXa</h1>
        <ul>
            <li>Start</li>
            <li>Dosje</li>
            <li>Opisy</li>
            <li>Kontakty</li>
        </ul>
    </nav>
);

// wykorzystanie wcześneijszych przykładów do wrzucenia nawigacji za pomocą JSX
// stare
ReactDOM.render(
    nawigacja,
    document.getElementById("nawi")
);
// nowe
ReactDOM.createRoot(document.getElementById("nawi"))
    .render(nawigacja);


// Sprawdzenie jak działa krótszy zapis
const nawigacjonen = (
    <nav>
        <h1>Moja ładna stronka z REACT18</h1>
        <ul>
            <li>Start18</li>
            <li>Dosje19</li>
            <li>Opisy20</li>
            <li>Kontakty21</li>
        </ul>
    </nav>
);
// nowy zapis createRoot realizujący nasze wpisy
const root = ReactDOM.createRoot(document.getElementById("nowy"));
root.render(nawigacjonen);