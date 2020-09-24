import React from 'react';
import Header from './Components/headerComponent/header';
import Sidebar from './Components/sidebarComponent/sidebar';
import { Container, SidebarMenu } from './Pages/Styles/StyleApp';
import { BrowserRouter, BrowserRouter as Router} from "react-router-dom";
import GlobalStyle from './Pages/Styles/global';
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

