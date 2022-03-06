import styled,{ThemeProvider} from "styled-components"
import { Navbar } from "./components";
import { Home } from "./pages";
import GlobalWrapper from "./styles/global"
import {theme} from "./styles/theme"

const Wrapper = styled.main`
  padding:0;
`

function App() {
  return (
     <ThemeProvider theme={theme}>
       <GlobalWrapper/>
        <Wrapper>
        <Navbar/>
        <Home/>
      </Wrapper>
     </ThemeProvider>
  );
}

export default App;
