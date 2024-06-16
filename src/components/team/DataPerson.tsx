import person1 from "../../assets/person1.png";

interface Person {
    image: string;
    fullName: String;
    description: String;
}

const DataPerson: Person[] = [
    {
        image: person1,
        fullName: "Jan Kowalski",
        description: "Jan Kowalski jest doświadczonym programistą JavaScript, specjalizującym się w React i Node.js."
    },
    {
        image: person1,
        fullName: "Anna Nowak",
        description: "Anna Nowak jest projektantką graficzną z ponad 10-letnim doświadczeniem w branży kreatywnej."
    },
    {
        image: person1,
        fullName: "Piotr Zalewski",
        description: "Piotr Zalewski, ekspert ds. marketingu cyfrowego, znany z innowacyjnych strategii marketingowych i głębokiej wiedzy na temat SEO."
    },
    {
        image: person1,
        fullName: "Katarzyna Bąk",
        description: "Katarzyna Bąk to liderka zespołu z doświadczeniem w zarządzaniu projektami IT i skutecznym wdrażaniu rozwiązań technologicznych."
    }
];

export default DataPerson;
