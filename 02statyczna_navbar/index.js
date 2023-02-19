function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

// moja funckcja wyświetlająca główny tekst pod paskiem nawigacji
function MainContent() {
    return (
        <h1>Gówny wpis do REACT'a w sposób JS czyli jako funkcja wywołująca czynność renderująca się razem z paskiem nawigacyjnym</h1>
    )
}

// div poniżej paska nawigacyjnego, myślałem że wyświetli się ponad paskiem nawigacyjnym
ReactDOM.render(<div>Uczę sie REACT'a</div>, document.getElementById("MainKontent"))
// ten div się nie dubluje tylko wyświetla w tym samym div'ie ponieważ dopisuje do tego samego pola id
ReactDOM.render(<div>Uczę sie REACT'a</div>, document.getElementById("MainKontent"))

// wyświetlenie paska nawigacji w REACT zdefiniowanego powyżej
ReactDOM.render(
    <div>
        {/* kolejność ma znaczenie */}
        <MainContent />
        <Navbar />
        <MainContent />
        <Navbar />
        {/* iler razy wywołamy funkcję tyle razy się ona wyświetli - wykona - świadczy o tym return w funkcji */}
    </div>,
    document.getElementById("root")
)