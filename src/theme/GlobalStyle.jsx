import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'NanumSquareRound';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  :root {
    ${(props) => props.theme}
  }

  * {
	box-sizing: border-box;
  }
  
  body {
    font-family: NanumSquareRound;
  }
`;
