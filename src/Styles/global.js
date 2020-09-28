import { createGlobalStyle } from 'styled-components';
import Vinho from '../Assets/tacasevinho.jpeg';


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: url(${Vinho});
    background-color: black;
    background-repeat: no-repeat;
    background-position: 110% -62%;
    color: #f1f1f1;
    display: block;
    max-width: 100%;
  }

`;


