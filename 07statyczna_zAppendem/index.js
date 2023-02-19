// nowy zapis createRoot realizujący nasze wpisy
// const root = ReactDOM.createRoot(document.getElementById("nowy"));
// root.render(nawigacjonen);

const strona = (
    <div>
        <h1>Swietna strona REACT ktorą pisze na kolanie</h1>
        <h3>Dlaczego cos tam jest w punktach</h3>
        <ol>
            <li>Pierwszy punkt</li>
            <li>Drugi punkt</li>
            <li>Trzeci punkt</li>
            <li>Czwarty punkt</li>
            <li>Piąty punkt</li>
        </ol>
    </div>
);
const rootek = ReactDOM.createRoot(document.getElementById("rootek"));
rootek.render(strona);

// to co poniżej jest jakieś dziwne, ale wyświetla na stronie obiekty zapisane w JSON'ie
// document.getElementById("rootek").append(JSON.stringify(strona));