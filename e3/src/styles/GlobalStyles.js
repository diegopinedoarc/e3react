import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    

}
:root {
    /* colores */
    --azulado: #4883;
    --gris: #483838;
    --blanco: #D2D79F;
    --verdeoscuro: #42855B;
    --negro: #131415;
}
body {
    background: var(--gris);
    color: var(--azulado);
    display: flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    height: 100vh;
    color: var(--blanco)
}

`;
