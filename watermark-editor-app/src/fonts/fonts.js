import { createGlobalStyle } from 'styled-components';

import Montserrat from './Montserrat-SemiBold.ttf';
// import NameOfYourFontWoff2 from './nameOfYourFont.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(${Montserrat}) format('ttf');
        font-style: normal;
        font-size:20px;
    }
`;