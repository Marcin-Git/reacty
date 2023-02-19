// model IMPERATIVE w JS wygląda następująco
const h1 = document.createElement("h1");

// zdefiniowanie wartości h1 i zbudowanie z niej obiektu? do wyświetlenia
h1.textContent = "To jest text do wyświetlenia w h1 w id root, tu se można pisać";

// jak zakomentuje tą linijkę poniżej to też strona działą
h1.className = "header";

// dodanie do elementu id root obiektu zbudowanego na nagłówku h1 i automatyczne wyświetlenie go na stronie
document.getElementById("root").append(h1);

//w REACT całą stronę budujemy w JavaScript, żadko używamy w związku z tym html

// ---------------------------------------------------------------------------------------------------------------------------

// model DECLARATIVE

// wyświetlenie elementu id rootek na stronie pod IMPERATIVE
// wyszystkie kody powyżej można zastąpić jedną linijką taką jak ta poniżej
ReactDOM.render(<h1>Cześć REACT lub jak kto woli ReactDOM</h1>, document.getElementById("rootek"));