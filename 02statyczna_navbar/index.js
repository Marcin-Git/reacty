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

// moja funckcja wy??wietlaj??ca g????wny tekst pod paskiem nawigacji
function MainContent() {
    return (
        <h1>G??wny wpis do REACT'a w spos??b JS czyli jako funkcja wywo??uj??ca czynno???? renderuj??ca si?? razem z paskiem nawigacyjnym</h1>
    )
}

// div poni??ej paska nawigacyjnego, my??la??em ??e wy??wietli si?? ponad paskiem nawigacyjnym
ReactDOM.render(<div>Ucz?? sie REACT'a</div>, document.getElementById("MainKontent"))
// ten div si?? nie dubluje tylko wy??wietla w tym samym div'ie poniewa?? dopisuje do tego samego pola id
ReactDOM.render(<div>Ucz?? sie REACT'a</div>, document.getElementById("MainKontent"))

// wy??wietlenie paska nawigacji w REACT zdefiniowanego powy??ej
ReactDOM.render(
    <div>
        {/* kolejno???? ma znaczenie */}
        <MainContent />
        <Navbar />
        <MainContent />
        <Navbar />
        {/* iler razy wywo??amy funkcj?? tyle razy si?? ona wy??wietli - wykona - ??wiadczy o tym return w funkcji */}
    </div>,
    document.getElementById("root")
)