import React, {useState, useEffect} from 'react';
import api from '../../Api/api';
// import { Titulo } from '../Styles/StyleTeste';


function Clientes () {
  const [clientes, setClientes] = useState([]); 
  
  useEffect(() => {
    api.get('/clients').then((response)=> {
      setClientes(response.data)
    })
  }, [])

  return ( 
    <div>
      <h1>Clientes</h1>
      <span>
      Lista de clientes cadastrados:
    </span>


    <table>
      <thead>
        <th>Id |</th>
        <th>Nome |</th>
        <th>CPF |</th>
      </thead>
      <tbody>

        {clientes.map((item) => {
          return(
          <tr>
          <td>{item.id}</td> 
          <td>{item.nome}</td> 
          <td>{item.cpf}</td> 
          </tr>)
        })}
      </tbody>
    </table>
    </div>
 
  );
}

export default Clientes;
