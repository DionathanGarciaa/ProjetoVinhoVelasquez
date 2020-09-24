import React, {useState, useEffect} from 'react';
import api from '../../Api/api';
import { Container } from '../Styles/StylePages';


function Desafio2() {
  const [clientes, setClientes] = useState([]); 
  
  useEffect(() => {
    api.get('/bestClient').then((response)=> {
      setClientes(response.data)
    })
  }, [])

  return ( 
    
    <div>
    <h1>Desafio - 2</h1>
    <span>
    Mostre o cliente com maior compra única no último ano (2016).
    </span>

    <table>
      <thead>
        <th>Codigo |</th>
        <th>Data |</th>
        <th>Cliente|</th>
        <th>Itens</th>

      </thead>
      <tbody>

        {clientes.map((item) => {
          return(
            
          <tr>
          <td>{item.codigo}</td> 
          <td>{item.data}</td> 
          <td>{item.cliente}</td> 
          <td>{item.itens}</td> 
          </tr>)
        })}
      </tbody>
    </table>
    </div>
  
  );
}

export default Desafio2;
