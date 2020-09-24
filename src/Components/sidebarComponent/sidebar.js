import React from 'react';
import { Container, Menu } from '../sidebarComponent/sidebarStyle';

function Sidebar (){
  return (
  <Container>
    <Menu>

    <a href="/Clientes">
        <strong>Clientes</strong>
    </a>


    <a href="/ClienteTotalCompra">
        <strong>Desafio - #1</strong>
    </a>


    <a href="/bestClient">
        <strong>Desafio - #2</strong>
    </a>


    <a href="/Clientes">
        <strong>Desafio - #3</strong>
    </a>


    <a href="/Clientes">
        <strong>Desafio - #4</strong>
    </a>
    
    </Menu>
  </Container>
  );
  };
  
export default Sidebar;