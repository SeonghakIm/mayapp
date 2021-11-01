import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color:inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family:-apple-system
        font-size:14px;
        background-color:rgba(120,120,120,1);
        color:white;
        padding-top:50px;
    }
`;

export default globalStyles;
