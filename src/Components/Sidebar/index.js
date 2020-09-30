import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from './style';

function Sidebar (){
  return (
  <Container>
    <Menu>

    <Link to="/Clientes">
        <strong>Clientes</strong>
    </Link>


    <Link to="/ClienteTotalCompra">
        <strong>Desafio - #1</strong>
    </Link>


    <Link to="/bestClient">
        <strong>Desafio - #2</strong>
    </Link>


    <Link to="/ClientesFieis">
        <strong>Desafio - #3</strong>
    </Link>


    <Link to="/recomendarVinho">
        <strong>Desafio - #4</strong>
    </Link>
    
    </Menu>
  </Container>
  );
  };
  
export default Sidebar;