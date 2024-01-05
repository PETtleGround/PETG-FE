import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'NanumSquareRound';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
  font-family: 'Inter';
  src: url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@300;400;500&family=Gugi&family=Inter&family=Noto+Sans+KR:wght@100;400;700&display=swap');
  font-weight: 400;
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
