import martyna from "../../assets/Martyna.jpg";
import maciek from "../../assets/Maciej.jpg";
import jakub from "../../assets/Jakub.jpg";
import mikolaj from "../../assets/Mikolaj.jpg";

interface Person {
    image: string;
    fullName: String;
    description: String;
}

const DataPerson: Person[] = [
    {
        image: jakub,
        fullName: "Jakub Mazur",
        description: "Szczęśliwy Młody Inżynier Eksploruje Realizacje Dźwięcznej Zmysłowości, Inspirując Mi Siłę, Ukryte Rzeczy Ekscentrycznego Kapłana"
    },
    {
        image: mikolaj,
        fullName: "Mikołaj Lew",
        description: "Projektant części oraz konstruktor teleskopu."
    },
    {
        image: martyna,
        fullName: "Martyna Fus",
        description: "Lider zespołu oraz analityk danych."
    },
    {
        image: maciek,
        fullName: "Maciej Wróbel",
        description: "Administrator strony internetowej."
    }
];

export default DataPerson;
