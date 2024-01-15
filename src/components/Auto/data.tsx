// data.ts
import personA from "../../images/personA.jpeg";
import personB from "../../images/personB.jpeg";
import personC from "../../images/personC.jpeg";
import personD from "../../images/personD.jpeg";
import personE from "../../images/personE.jpeg";

interface Chip {
    img: string;
    label: string;
    value: string;
}

const userData: Chip[] = [
    { img: personA, label: 'Marina Augustine', value: 'marina@example.com' },
    { img: personB, label: 'Nick Giannopoulos', value: 'nick@example.com' },
    { img: personC, label: 'Anita Gros', value: 'anita@example.com' },
    { img: personD, label: 'Narayana Gamer', value: 'gamer@example.com' },
    { img: personE, label: 'Mega Smith', value: 'mega@example.com' },
];

export default userData;
