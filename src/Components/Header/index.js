import React from 'react';
import { Container, Header, HeaderCont} from './style';
import logo from '../../Assets/logo.svg';


function PagePrincipal () {
    return (
      <Container>
      <Header>

        <HeaderCont to = "/"> <img src={logo} alt="Velasquez" /> </HeaderCont>

      </Header>
    </Container>
    );
  };
export default PagePrincipal;