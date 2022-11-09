import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import {StackColor} from './colors';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html{
        font-size: 16px;
    }
    *{
        background:${StackColor.white};
        color:${StackColor.black};
    }
    body{
        background: ${StackColor.white};
        overflow: hidden;
        height: 100vh;
        font-family: "Roboto",sans-serif;
    }
    a, p{
        color: ${StackColor.white};
        font-size: 1rem;
        text-decoration: none;
    }
`;