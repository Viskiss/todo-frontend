import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

  background-image: radial-gradient(rgba(217, 217, 217, 0.7) 1px, #ffffff 0.1px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
}
`;

export default GlobalStyle;
