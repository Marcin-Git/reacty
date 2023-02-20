import Gora from "./Header";
import Dol from "./Footer";
import Glowna from "./Glowna";




// komponent łączący wszystkie komponenty w jeden komponent przekazany do renderowania
function Stronica() {
    return (
        <div>
            <Gora />
            <Glowna />
            <Dol />
        </div>
    )
}



// stworzenie obiektu który będzie wyświetlany w id root
const root = ReactDOM.createRoot(document.getElementById("root"));

// wyrenderowanie strony zgodnie z obiektem root w miejscu id root
root.render(<Stronica />);