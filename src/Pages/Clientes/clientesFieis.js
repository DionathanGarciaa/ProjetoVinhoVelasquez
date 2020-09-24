import React, {useState, useEffect} from 'react';
import api from '../../Api/api';
import { Titulo, Container } from '../Styles/StyleTeste';


function Desafio3() {
  const [clientes, setClientes] = useState([]); 
  
  useEffect(() => {
    api.get('/clientsOrderedByPurchase').then((response)=> {
      setClientes(response.data)
    })
  }, [])

  return ( 
    
    <Container>
    <Titulo>Desafio - 1</Titulo>
    <span>
      Liste os clientes ordenados pelo maior valor total.
    </span>

    <table>
      <thead>
        <th>Id |</th>
        <th>Nome |</th>
        <th>CPF |</th>
        <th>Total em Compras</th>
      </thead>
      <tbody>

        {clientes.map((item) => {
          return(
            
          <tr>
          <td>{item.id}</td> 
          <td>{item.nome}</td> 
          <td>{item.cpf}</td> 
          <td>{item.valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td> 
          </tr>)
        })}
      </tbody>
    </table>
    </Container>
  
  );
}

export default Desafio3;
