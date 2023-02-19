// Wyświetlnie nagłówka h1 na stronie za pomocą REACT'a
ReactDOM.render(<h1>Witam wszystkich!!!</h1>, document.getElementById("root"))

// Wyświetlenie paragrafu p na stronie za pomocą REACT'a
ReactDOM.render(<p> Paragraf wyświetlany przez REACT i ReactDOM</p>, document.getElementById("paraf"))

// Wyśeitlenie listy ul i li na stronie za pomocą REACT'a
ReactDOM.render(
    // w pierwszej grupie co ma się wyświetlić
    <ul>
        <li>Pierwszy punkt</li>
        <li>Drugi punkt</li>
        <li>Trzeci punkt</li>
        <li>Czwarty punkt</li>
    </ul>,

    // w drugiej grupie gdzie ma się wyświetlić
    document.getElementById("list")
    )