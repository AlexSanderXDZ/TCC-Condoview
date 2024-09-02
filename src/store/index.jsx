import { createGlobalState } from "react-hooks-global-state";


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
    
  }
);
export { setGlobalState, useGlobalState, getGlobalState };
