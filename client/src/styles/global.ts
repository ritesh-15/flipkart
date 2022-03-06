import {createGlobalStyle} from "styled-components"
import { Theme } from "./theme"

const GlobalWrapper = createGlobalStyle`


    *{
        margin:0 ;
        padding:0;
        box-sizing:border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
    }

    h1,h2 ,h3 , h4 , h5 ,h6{
        font-size:1rem ;
        font-weight:400 ;
    }

    img{
        width:100%;
        height:auto ;
    }

    a{
        text-decoration:none;
    }

    input , textarea, button{
        font-size: 1rem;
        font-family: inherit;
    }


`
export default GlobalWrapper