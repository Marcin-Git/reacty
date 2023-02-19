// trzeba REACTA zaimportować ale jeszcze nie wiem jak, trzeba go chyba ściągnąć na dysk i mieć go w zasobach
import React from "react";
import ReactDOM from "React-dom";

// wyświetlenie lini 
ReactDOM.render(<h1>To jest JSX</h1>, document.getElementById("root"));

// -------------------------------------------------------------------------------------------------------------

// wyświetlenie lini w czystym JS
const h1 = document.createElement("h1");
h1.textContent = "Witaj świecie wielki";
h1.className = "header";

document.getElementById("rootek").append(h1);
console.log(h1);

// -------------------------------------------------------------------------------------------------------------

// wyświetlenie linie w JSX czyli REACT?
const element = <h1 className="headery">Nowa odsłona JSX</h1>;
console.log(element);

ReactDOM.render(element, document.getElementById("rooton"));

// -------------------------------------------------------------------------------------------------------------

// innde podejście do wyświetlania kilku elementów w JSX
ReactDOM.render(
    <div>
        <h1 className="glowa">To jest głowa do wyświetlenia w JSX</h1>
        <p>To jest paragraf po głowie do wyświetlenia w JSX</p>
    </div>,
    document.getElementById("glowy")

);

// --------------------------------------------------------------------------------------------------------------

// wyświetlanie inne z użyciem zmiennej i kilka elementów w JSX
const strona = (
    <div>
        <h1 className="glowa">To jest głowa do wyświetlenia w JSX jako zmienna "STRONA"</h1>
        <p>To jest paragraf po głowie do wyświetlenia w JSX jako zmienna "STRONA"</p>        
    </div>
);
console.log(strona);

// wyświetlenie strony jako paramentru strona w nim zawartego
ReactDOM.render(
    strona, 
    document.getElementById("glowacki")
);

// ----------------------------------------------------------------------------------------------------------

// wykorzystanie JSX do stworzenia paska nawigacji
const nawigacja = (
    <nav>
        <h1>Moja ładna stronka z JSX</h1>
        <ul>
            <li>Start</li>
            <li>Dosje</li>
            <li>Opisy</li>
            <li>Kontakty</li>
        </ul>
    </nav>
);

// wykorzystanie wcześneijszych przykładów do wrzucenia nawigacji za pomocą JSX
ReactDOM.render(
    nawigacja,
    document.getElementById("nawi")
);