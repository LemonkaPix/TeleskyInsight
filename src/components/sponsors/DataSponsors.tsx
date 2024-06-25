import logoPci from "../../assets/pciLogo.jpg";
import logoEduMars from "../../assets/EduMars.jpg";


export interface Sponsor {
    logoSponsor: string;
    name: string;
}
const DataSponsors: Sponsor[] = [
    {
        logoSponsor: logoPci,
        name: "PCI rzeszów",
    },
    {
        logoSponsor: logoEduMars,
        name: "EduMars",
    },
    // {
    //     logoSponsor: logoPci,
    //     name: "PCI rzeszów",
    // },
    // {
    //     logoSponsor: logoPci,
    //     name: "PCI rzeszów",
    // },
    // {
    //     logoSponsor: logoPci,
    //     name: "PCI rzeszów",
    // },
    // {
    //     logoSponsor: logoPci,
    //     name: "PCI rzeszów",
    // },
    // {
    //     logoSponsor: logoPci,
    //     name: "PCI rzeszów",
    // },
];

export default DataSponsors;