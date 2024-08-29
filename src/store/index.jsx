import { createGlobalState } from "react-hooks-global-state";
import step1 from "../assets/steps/steps2.svg"
import step2 from "../assets/steps/steps1.svg"
import step3 from "../assets/steps/steps4.svg"
import step4 from "../assets/steps/steps3.svg"
import solution1 from "../assets/solution/icon1.svg"
import solution2 from "../assets/solution/icon2.svg"
import solution3 from "../assets/solution/icon3.svg"
import solution4 from "../assets/solution/icon4.svg"
import solution5 from "../assets/solution/icon5.svg"

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState(
  {
    about :[
        {
            id: 1,
            text: "Interface intuitiva",
        },
        {
            id: 2,
            text: "Comunicação clara entre moradores",
        },
        {
            id: 3,
            text: "Projeto em constante aprimoramento",
        },
        {
            id: 4,
            text: "Fácil de usar",
        },
    ],
    benefits :[
        {
            id: 1,
            text: "Variedade de funções",
        },
        {
            id: 2,
            text: "Suporte 24h",
        },
        {
            id: 3,
            text: "Ajuda na resolução de problemas",
        },
        {
            id: 4,
            text: "Navegação Simplificada",
        },
        {
            id: 5,
            text: "Acessibilidades",
        },
        {
            id: 6,
            text: "Alta Confiabilidade",
        },
        {
            id: 7,
            text: "Comunicação eficiente.",
        },
    ],
    steps :[
        {
            id: 1,
            img:step1,
            text: "Merchant enter amount for Goods and services.",
        },
        {
            id: 2,
            img:step2,
            text: "Present your PayScan QR code to customers on counter.",
        },
        {
            id: 3,
            img:step3,
            text: "Customer scans the QR code with PayScan app.",
        },
        {
            id: 4,
            img:step4,
            text: "Customer confirms and authenticates payment with pass code.",
        },
    ],
    solutions :[
        {
            id: 1,
            img:solution1,
            text: "Cashless transit.",
        },
        {
            id: 2,
            img:solution2,
            text: "Convenient payment at supermarkets, convenience stores, drug stores, departmental stores.",
        },
        {
            id: 3,
            img:solution3,
            text: "Hospitals.",
        },
        {
            id: 4,
            img:solution4,
            text: "Restaurant & eatery.",
        },
        {
            id: 5,
            img:solution5,
            text: "Clubs & coffee shops.",
        },
    ],
  }
);
export { setGlobalState, useGlobalState, getGlobalState };
