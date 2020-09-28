import React, {useState, useEffect} from 'react';
import api from '../../Services/Api/index';


function Desafio3() {
  const [clientes, setClientes] = useState([]); 
  
  useEffect(() => {
    api.get('/bestClients').then((response)=> {
      setClientes(response.data)
    })
  }, [])

  return ( 
    
    <div>
    <h1>Desafio - 3</h1>
    <span>
    Liste os clientes mais fiéis.
    </span>
    </div>
  
  );
}

export default Desafio3;
