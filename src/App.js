import React from 'react';
import Header from './Components/Header/index';
import Sidebar from './Components/Sidebar/index';
import { Container, SidebarMenu } from './Styles/StyleApp';
import { BrowserRouter} from "react-router-dom";
import GlobalStyle from './Styles/global';
import Rotas from './Routes/routes';


function App() {
  return (

    <BrowserRouter>
    <Container>
    <Header />
      <SidebarMenu>
        <Sidebar /> 
          <Rotas />
        </SidebarMenu>
      </Container>
      <GlobalStyle />
      </BrowserRouter>
  );
};

export default App;

