import React from 'react';
import { Container, Header, HeaderCont} from './headerStyle';
import logo from '../imagens/logo.svg';


function PagePrincipal () {
    return (
      <Container>
      <Header>
        <HeaderCont>
        <a href="/">
        <img src={logo} alt="Velasquez" />
        </a>
        </HeaderCont>
      </Header>
    </Container>
    );
  };
export default PagePrincipal;